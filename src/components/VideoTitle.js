import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute z-40 w-full flex flex-col justify-center content-center gap-6 px-4 sm:px-40 text-white aspect-video bg-gradient-to-b from-black">
      <h1 className="mt-8 md:mt-7 w-2/3  text-lg sm:text-3xl md:text-4xl lg:text-5xl font-bold">
        {title}
      </h1>
      <p className="  text-base sm:text-sm md:text-lg lg:text-xl w-2/4 truncate sm:whitespace-normal">
        {overview.slice(0,100)}
      </p>
      <div>
        <button className="p-2 sm:p-4 w-auto  bg-gray-50 text-black rounded-md font-bold  text-sm sm:text-base md:text-lg lg:text-xl shadow-lg hover:bg-gray-100">
          ▶️ Play
        </button>
        <button className="p-2 sm:p-4 w-auto  mx-3 bg-gray-700 opacity-80 text-white rounded-md font-bold text-sm sm:text-base md:text-lg lg:text-xl shadow-lg hover:bg-gray-600">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
