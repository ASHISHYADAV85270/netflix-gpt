import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
const SecondaryContainer = () => {
  const {
    nowPlayingMovies,
    popularMovies,
    upcomingMovies,
    trendingMovies,
    topratedMovies,
  } = useSelector((store) => store.movies);
  if (
    !nowPlayingMovies ||
    !popularMovies ||
    !upcomingMovies ||
    !trendingMovies ||
    !topratedMovies
  ) {
    return null;
  }

  return (
    <div className="  flex flex-col gap-6 bg-black py-4 ">
      <div className="  lg:mt-[-270px] lg:z-50">
        <MovieList title={"Now Playing"} movies={nowPlayingMovies} />
      </div>
      <MovieList title={"Popular"} movies={popularMovies} />
      <MovieList title={"Upcoming"} movies={upcomingMovies} />
      <MovieList title={"Trending"} movies={trendingMovies} />
      <MovieList title={"Top Rated"} movies={topratedMovies} />
    </div>
  );
};

export default SecondaryContainer;
