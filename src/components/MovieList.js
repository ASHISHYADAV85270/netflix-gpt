import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-3 ">
      <h1 className=" text-2xl sm:text-3xl mb-2 text-white ">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex gap-3">
          {movies.map((curr_movie) => {
            return (
              <MovieCard
                key={curr_movie.id}
                posterPath={curr_movie.poster_path}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
