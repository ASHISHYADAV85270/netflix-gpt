import React from "react";
import { IMG_CDN_URL } from "../utils/constants";
const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-28 sm:w-44">
      <img
        src={IMG_CDN_URL + posterPath}
        alt="logo"
        className="object-cover w-full h-auto cursor-pointer hover:animate-pulse"
      /> 
    </div>
  );
};

export default MovieCard;
