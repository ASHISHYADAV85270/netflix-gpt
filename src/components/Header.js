import { useEffect } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import UserDropdown from "../utils/UserDropdown";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const userdata = useSelector((appStore) => appStore.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, photoURL, email } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            photoURL: photoURL,
            displayName: displayName,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);
  return (
    <div className="absolute w-screen top-0 left-0 px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between items-center">
      <img
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
        className="w-44"
      />
      {userdata && <UserDropdown />}
    </div>
  );
};

export default Header;
