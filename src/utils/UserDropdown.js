import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebase.js";

const UserDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="w-10 h-10  rounded-full overflow-hidden"
          onClick={toggleDropdown}
        >
          <img src={user.photoURL} alt={user.displayName} />
        </button>
      </div>

      {isOpen && (
        <div
          className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex="-1"
        >
          <div className="py-1" role="none">
            <Link
              to="#"
              className="text-gray-700 block px-4 py-2 text-sm"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-2"
            >
              Account Settings
            </Link>
            <Link
              to="#"
              className="text-gray-700 block px-4 py-2 text-sm"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-3"
            >
              About
            </Link>
          </div>
          <div className="py-1" role="none">
            <button
              to="#"
              className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 w-full text-left"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-6"
              onClick={handleSignOut}
            >
              SignOut
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
