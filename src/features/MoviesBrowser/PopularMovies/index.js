import { useState } from "react";
import MoviesList from "../../../common/MoviesList";
import { useMoviesData } from "./useMoviesData";

const PopularMovies = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const moviesData = useMoviesData(currentPage);
  console.log("jestem");
  return (
    <MoviesList
      data={moviesData}
      currentPage={currentPage}
      goToPage={setCurrentPage}
    />
  );
};

export default PopularMovies;
