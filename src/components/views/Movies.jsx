import MoviesList from 'components/MoviesList';
import SearchMovies from 'components/Search';
import { useState } from 'react';

const Movies = () => {
  const [films, setFilms] = useState([]);

  return (
    <>
      <SearchMovies filmsArr={setFilms} />
      <MoviesList filmsArr={films} />
    </>
  );
};

export default Movies;
