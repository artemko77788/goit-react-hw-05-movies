import MovieCard from 'components/MovieCard';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchByIdMovie } from 'service/api';

const MovieDetails = () => {
  const [err, setErr] = useState(null);
  const [movie, setMovie] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetchByIdMovie(id).then(setMovie).catch(setErr);
  }, [id]);

  return <>{movie ? <MovieCard movie={movie} /> : `${err}`}</>;
};

export default MovieDetails;
