import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{overview}</p>
      <div>
        <button>PlayMore</button>
        <button>Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
