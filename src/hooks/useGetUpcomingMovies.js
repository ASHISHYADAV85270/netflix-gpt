import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesSlice";
const useGetUpcomingMovies = () => {
  const dispatch = useDispatch();
  const getUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_OPTIONS
    );
    const jsondata = await data.json();
    dispatch(addUpcomingMovies(jsondata.results));
  };

  useEffect(() => {
    getUpcomingMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useGetUpcomingMovies;
