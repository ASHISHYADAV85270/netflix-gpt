import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_CDN_URL } from "../utils/constants";

const GptSearch = () => {
  return (
    <div>
      <img src={BG_CDN_URL} alt="body" className="h-full w-full absolute -z-10" />
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;
