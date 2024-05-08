import React from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  // this is known as early return
  if (!movies) {
    return null;
  }
  const randomIndex = Math.floor(Math.random() * movies.length);
  const mainMovie = movies[randomIndex];
  const { original_title, overview, id } = mainMovie;
  return (
    <div className="h-full ">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} title={original_title} />
    </div>
  );
};

export default MainContainer;
