import Loader from 'components/Loader';
import MoviesList from 'components/MoviesList';
import SearchMovies from 'components/Search';

import { useEffect } from 'react';
import { useState } from 'react';
import { fetchSeachMovie } from 'service/api';

const Movies = () => {
  const [films, setFilms] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');
  const [searchWord, setsearchWord] = useState();

  const handleSummite = searchWord => {
    setsearchWord(searchWord);
  };

  useEffect(() => {
    setStatus('pending');
    fetchSeachMovie(searchWord)
      .then(setFilms)
      .catch(err => setError(err), setStatus('rejected'));
    setStatus('resolved');
  }, [searchWord]);

  return (
    <>
      <SearchMovies submite={handleSummite} />
      {status === 'rejected' && <p>`${error}` </p>}
      {status === 'pending' && <Loader />}
      {(status === 'resolved' || films.length !== 0) && (
        <MoviesList filmsArr={films} />
      )}
    </>
  );
};

export default Movies;
