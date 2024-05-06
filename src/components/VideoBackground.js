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
    <div className="w-screen h-screen">
      <iframe
        src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=1&controls=0&modestbranding=1&showinfo=0&enablejsapi=1&rel=0`}
        title={title}
        className=" inset-0 w-full h-full aspect-video pointer-events-none"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
