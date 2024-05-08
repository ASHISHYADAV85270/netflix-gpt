import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies.nowPlayingMovies);
  console.log(movies);
  if (!movies) {
    return;
  }
  return (
    <div className="flex flex-col gap-6 bg-black">
      <MovieList title={"Now Playing"} movies={movies} />
      <MovieList title={"Trending"} movies={movies} />
      <MovieList title={"Upcoming"} movies={movies} />
      <MovieList title={"Horror Movies"} movies={movies} />
      <MovieList title={"Family Playing"} movies={movies} />
    </div>
  );
};

export default SecondaryContainer;
