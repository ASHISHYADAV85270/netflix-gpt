import Header from "./Header";
import { useState } from "react";
const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm);
  };

  return (
    <div className="relative flex flex-col items-center justify-center">
      <Header />
      <div className="bg-red-900">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9f46b569-aff7-4975-9b8e-3212e4637f16/453ba2a1-6138-4e3c-9a06-b66f9a2832e4/IN-en-20240415-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="body"
        />
      </div>
      <form className="w-3/12 absolute flex-col bg-black bg-opacity-80 p-12 text-white rounded-md">
        <h1 className="font-bold text-3xl">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-800 placeholder:text-gray-500 rounded-md"
          />
        )}
        <input
          type="email"
          placeholder="Email Id"
          className="p-4 my-4 w-full bg-gray-800  placeholder:text-gray-500 rounded-md"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-800 placeholder:text-gray-500 rounded-md"
        />
        {!isSignInForm && (
          <input
            type="password"
            placeholder="Confirm Password"
            className="p-4 my-4 w-full bg-gray-800 placeholder:text-gray-500 rounded-md"
          />
        )}

        <button className="p-4 my-2 bg-red-700 w-full rounded-md ">
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
    </div>
  );
};
export default Login;
