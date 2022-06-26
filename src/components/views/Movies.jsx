import Loader from 'components/Loader';
import MoviesList from 'components/MoviesList';
import SearchMovies from 'components/Search';

import { useEffect } from 'react';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchSeachMovie } from 'service/api';

const Movies = () => {
  const [films, setFilms] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');

  const [searchParams, setSearchParams] = useSearchParams();

  const seach = searchParams.get('search');
  const handleSummite = searchWord => {
    setSearchParams({ search: searchWord });
  };

  useEffect(() => {
    setStatus('pending');
    fetchSeachMovie(seach)
      .then(setFilms)
      .catch(err => setError(err), setStatus('rejected'));
    setStatus('resolved');
  }, [seach]);

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
