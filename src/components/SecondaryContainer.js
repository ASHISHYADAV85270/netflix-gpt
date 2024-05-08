import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies.nowPlayingMovies);
  if (!movies) {
    return null;
  }
  return (
    <div className="  flex flex-col gap-6 bg-black py-4 ">
      <div className="  lg:mt-[-310px] lg:z-50">
        <MovieList title={"Now Playing"} movies={movies} />
      </div>
      <MovieList title={"Trending"} movies={movies} />
      <MovieList title={"Upcoming"} movies={movies} />
      <MovieList title={"Horror Movies"} movies={movies} />
      <MovieList title={"Family Playing"} movies={movies} />
    </div>
  );
};

export default SecondaryContainer;
