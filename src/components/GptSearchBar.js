import React from "react";
import { lang } from "../utils/languages";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const curr_lang = useSelector((store) => store.config.lang);
  return (
    <div className="h-screen  py-[10%] px-3 flex  flex-col   ">
      <form className=" grid grid-cols-12 w-full items-center gap-x-2 ">
        <input
          type="text"
          className="col-span-10 py-4 px-2 rounded-md"
          placeholder={lang[curr_lang].searchInputPlaceholder}
        />
        <button
          className="py-4 my-2 bg-red-700 w-full rounded-md hover:bg-red-800 text-white font-bold col-span-2"
          type="submit"
        >
          {lang[curr_lang].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
