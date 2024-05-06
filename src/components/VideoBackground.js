import React from "react";
import useGetMoviesVideos from "../hooks/useGetMoviesVideos";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieId, title }) => {
  useGetMoviesVideos(movieId);
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  if (!trailerVideo) {
    return;
  }
  const { key: trailerKey } = trailerVideo;
  return (
    <div className="w-screen">
      <iframe
        width="500"
        height="500"
        src={`https://www.youtube.com/embed/${trailerKey}`}
        title={title}
      ></iframe>
    </div>
  );
};

export default VideoBackground;
