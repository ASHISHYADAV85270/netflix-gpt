import Header from "./Header";
import MainContainer from "./MainContainer";
import GptSearch from "./GptSearch";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import useGetUpcomingMovies from "../hooks/useGetUpcomingMovies";
import useGetTrendingMovies from "../hooks/useGetTrendingMovies";
import useGetTopRatedMovies from "../hooks/useGetTopRatedMovies";
import { useSelector } from "react-redux";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useGetUpcomingMovies();
  useGetTrendingMovies();
  useGetTopRatedMovies();
  const showButton = useSelector((store) => store.gpt.showGptSearch);
  return (
    <div className="box-border h-full ">
      <Header />
      {showButton ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
