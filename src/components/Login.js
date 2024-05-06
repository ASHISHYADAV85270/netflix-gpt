import Header from "./Header";
import { useState } from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { USER_AVATAR } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);
  const dispatch = useDispatch();

  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm);
  };

  /* it will be called if only validate is fine */
  const handleFormSubmit = ({ email, password, fullname }) => {
    if (!isSignInForm) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: fullname,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, displayName, photoURL, email } = auth.currentUser;
              dispatch(addUser({ uid, displayName, photoURL, email }));
              toast.success("New User Created");
              formik.resetForm();
            })
            .catch((error) => {
              const errorMessage = error.message;
              toast.error(errorMessage);
            });
        })
        .catch((error) => {
          toast.error("This Email Id Already Exist");
        });
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const { uid, displayName, photoURL, email } = userCredential.user;
          dispatch(addUser({ uid, displayName, photoURL, email }));
          toast.success(`Welcome back ${displayName}`);
          formik.resetForm();
        })
        .catch((error) => {
          toast.error("Wrong Password or Email Id");
          formik.resetForm();
        });
    }
  };

  /*validate for formik */
  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    if (isSignInForm) {
      return errors;
    }
    if (!values.fullname) {
      errors.fullname = "Required";
    } else if (values.fullname.length > 20) {
      errors.fullname = "Must be 20 characters or less";
    }

    if (values.password !== "" && values.password !== values.confirmpassword) {
      errors.confirmpassword = "Password Should be Same";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmpassword: "",
      fullname: "",
    },
    validate,
    onSubmit: handleFormSubmit,
  });

  return (
    <div className="relative  flex flex-col items-center justify-center">
      <Header />
      <div className="relative h-screen w-screen overflow-hidden">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9f46b569-aff7-4975-9b8e-3212e4637f16/453ba2a1-6138-4e3c-9a06-b66f9a2832e4/IN-en-20240415-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="body"
        />
      </div>
      <form
        className="w-3/12 absolute flex-col bg-black bg-opacity-80 p-12 text-white rounded-md"
        onSubmit={formik.handleSubmit}
      >
        <h1 className="font-bold text-3xl">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            id="fullname"
            name="fullname"
            onChange={formik.handleChange}
            value={formik.values.fullname}
            onBlur={formik.handleBlur}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-800 placeholder:text-gray-500 rounded-md"
          />
        )}
        {!isSignInForm && formik.touched.fullname && formik.errors.fullname ? (
          <p className="text-sm text-red-700">{formik.errors.fullname}</p>
        ) : null}
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          onBlur={formik.handleBlur}
          placeholder="Email Id"
          className="p-4 my-4 w-full bg-gray-800  placeholder:text-gray-500 rounded-md"
        />
        {formik.touched.email && formik.errors.email ? (
          <p className="text-sm text-red-700">{formik.errors.email}</p>
        ) : null}
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          onChange={formik.handleChange}
          value={formik.values.password}
          onBlur={formik.handleBlur}
          className="p-4 my-4 w-full bg-gray-800 placeholder:text-gray-500 rounded-md"
        />
        {formik.touched.password && formik.errors.password ? (
          <p className="text-sm text-red-700">{formik.errors.password}</p>
        ) : null}

        {!isSignInForm && (
          <input
            id="confirmpassword"
            name="confirmpassword"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.confirmpassword}
            onBlur={formik.handleBlur}
            placeholder="Confirm Password"
            autocomplete="current-password"
            className="p-4 my-4 w-full bg-gray-800 placeholder:text-gray-500 rounded-md"
          />
        )}
        {!isSignInForm &&
        formik.touched.confirmpassword &&
        formik.errors.confirmpassword ? (
          <p className="text-sm text-red-700">
            {formik.errors.confirmpassword}
          </p>
        ) : null}
        <button
          className="p-4 my-2 bg-red-700 w-full rounded-md hover:bg-red-800 text-white font-bold"
          type="submit"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p
          className="text-gray-200 py-4 cursor-pointer text-opacity-75 hover:text-opacity-60"
          onClick={toggleSignInForm}
        >
          {isSignInForm
            ? "New to Netflix? Sign up now."
            : "Already Registered ? Sign In now."}
        </p>
      </form>
      <ToastContainer />
    </div>
  );
};
export default Login;
