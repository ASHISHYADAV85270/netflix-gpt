import { useEffect } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import UserDropdown from "../utils/UserDropdown";
import { useNavigate } from "react-router-dom";
import { LOGO } from "../utils/constants";

const Header = () => {
  const userdata = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
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
    // unsubscribe will be called when component unmounts
    return () => unsubscribe();
  }, []);
  return (
    <div className="absolute w-screen top-0 left-0 px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between items-center">
      <img src={LOGO} alt="logo" className="w-44" />
      {userdata && <UserDropdown />}
    </div>
  );
};

export default Header;
