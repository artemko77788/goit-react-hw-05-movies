import Loader from 'components/Loader';
import MovieCard from 'components/MovieDetails/MovieCard';
import { Status } from 'helpers/helpers';
import { lazy, Suspense, useEffect, useState } from 'react';
import { NavLink, Route, Routes, useParams } from 'react-router-dom';
import { fetchByIdMovie } from 'service/api';
import s from './MovieDetails.module.css';

const Cast = lazy(() => import('./Cast'));
const Reviews = lazy(() => import('./Reviews'));

const MovieDetails = () => {
  const [err, setErr] = useState(null);
  const [movie, setMovie] = useState(null);
  const { id } = useParams();
  const [state, setState] = useState(Status.IDLE);

  useEffect(() => {
    setState(Status.PENDING);
    fetchByIdMovie(id)
      .then(setMovie)
      .catch(err => setErr(err), setState(Status.REJECTED));
    setState(Status.RESOLVED);
  }, [id]);

  return (
    <>
      {state === Status.PENDING && <Loader />}
      {state === Status.REJECTED && <p>`${err}`</p>}
      {movie === null && <p> No information</p>}
      {movie && state === Status.RESOLVED && (
        <MovieCard movie={movie}>
          {' '}
          <div className={s.container}>
            <h3 className={s.textInf}>Aditional Information</h3>
            <ul className={s.list}>
              <li className={s.item}>
                <NavLink to="cast" className={s.link}>
                  Cast
                </NavLink>
              </li>
              <li className={s.item}>
                <NavLink to="reviews" className={s.link}>
                  Reviews
                </NavLink>
              </li>
            </ul>
          </div>
          <Suspense fallback={<p>Loading...</p>}>
            <Routes>
              <Route path="cast" element={<Cast id={id} />} />
              <Route path="reviews" element={<Reviews id={id} />} />
            </Routes>
          </Suspense>
        </MovieCard>
      )}
    </>
  );
};

export default MovieDetails;
