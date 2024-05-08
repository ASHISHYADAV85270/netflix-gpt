import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "./firebase.js";
import { ToastContainer, toast } from "react-toastify";

const UserDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const user = useSelector((state) => state.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        toast.success("Signout Successfully");
      })
      .catch((error) => {
        toast.error("Some Error");
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
          className=" w-6 h-6 sm:w-10 sm:h-10  overflow-hidden flex items-center justify-center"
          onClick={toggleDropdown}
        >
          <img
            src={user.photoURL}
            alt={user.displayName}
            className="w-full h-full"
          />
        </button>
      </div>

      {isOpen && (
        <div
          className="absolute right-0 z-1 mt-2 w-36 sm:w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none opacity-95"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex="-1"
        >
          <div className="py-1" role="none">
            <Link
              to="#"
              className="text-gray-700 block px-4 py-2  text-xs sm:text-sm"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-2"
            >
              Account Settings
            </Link>
            <Link
              to="#"
              className="text-gray-700 block px-4 py-2  text-xs sm:text-sm"
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
              className="text-gray-700 block px-4 py-2  text-xs sm:text-sm hover:bg-gray-100 w-full text-left"
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
      <ToastContainer />
    </div>
  );
};

export default UserDropdown;
