import { useEffect } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import UserDropdown from "../utils/UserDropdown";
import { useNavigate } from "react-router-dom";
import { LOGO, availableLanguages } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const userdata = useSelector((store) => store.user);
  const showGptButton = useSelector((store) => store.gpt.showGptSearch);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleGptToggle = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div className="z-50 absolute w-screen top-0 left-0 px-2 sm:px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between items-center">
      <img src={LOGO} alt="logo" className="w-24 sm:w-44" />
      {userdata && (
        <div className="flex items-center gap-x-7">
          {showGptButton ? (
            <select
              name="language"
              className="bg-gray-700 text-white p-1 font-bold rounded-md opacity-85  "
              onChange={handleLanguageChange}
            >
              {availableLanguages.map((curr_lan) => {
                return (
                  <option key={curr_lan.code} value={curr_lan.code}>
                    {curr_lan.name}
                  </option>
                );
              })}
            </select>
          ) : null}
          <button
            className="px-4 py-3 my-2 bg-red-700 w-full rounded-md hover:bg-red-800 text-white font-bold"
            onClick={handleGptToggle}
          >
            {showGptButton ? "Movieslist" : "GptSearch"}
          </button>
          <UserDropdown />
        </div>
      )}
    </div>
  );
};

export default Header;
