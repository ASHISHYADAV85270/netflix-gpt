import React from "react";
import { IMG_CDN_URL } from "../utils/constants";
const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-44 h-56 bg-red-300">
      <img
        src={IMG_CDN_URL + posterPath}
        alt="logo"
        className="object-cover w-full h-full"
      />
    </div>
  );
};

export default MovieCard;
