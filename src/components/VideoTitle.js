import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" pt-56 px-12 flex-col gap-3 ">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="text-xl w-2/6 py-5">{overview}</p>
      <div>
        <button className="p-4 w-40 bg-red-700 text-white rounded-md font-bold text-xl shadow-lg hover:bg-red-800">
          ▶️ Play More
        </button>

        <button className="p-4 w-40 mx-3 bg-red-700 text-white rounded-md font-bold text-xl shadow-lg hover:bg-red-800">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
