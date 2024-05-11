import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import useGetUpcomingMovies from "../hooks/useGetUpcomingMovies";
import useGetTrendingMovies from "../hooks/useGetTrendingMovies";
import useGetTopRatedMovies from "../hooks/useGetTopRatedMovies";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useGetUpcomingMovies();
  useGetTrendingMovies();
  useGetTopRatedMovies();

  return (
    <div className="box-border h-full ">
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
