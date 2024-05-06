import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" pt-56 px-40 flex-col gap-3  absolute text-white w-screen h-screen aspect-auto ">
      <h1 className="text-7xl font-bold">{title}</h1>
      <p className="text-xl w-2/5 py-5">{overview}</p>
      <div>
        <button className="p-4 w-40 bg-gray-50 text-black rounded-md font-bold text-xl shadow-lg hover:bg-gray-100">
          ▶️ Play
        </button>

        <button className="p-4 w-40 mx-3 bg-gray-400 text-white rounded-md font-bold text-xl shadow-lg hover:bg-gray-500">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
