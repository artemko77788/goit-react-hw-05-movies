import Cast from 'components/MovieDetails/Cast';
import Reviews from 'components/MovieDetails/Reviews';
import { PATH } from 'helpers/helpers';
import { NavLink, Route, Routes, useNavigate } from 'react-router-dom';
import s from './MovieCard.module.css';

const MovieCard = ({ movie }) => {
  const {
    poster_path,
    original_title,
    release_date,
    vote_average,
    overview,
    genres,
    id,
  } = movie;

  function getGenres(g) {
    if (g) {
      return g.map(genre => genre.name).join(', ');
    }
    return '';
  }

  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <>
      <div className={s.container}>
        <button onClick={goBack} className={s.button}>
          Go back
        </button>

        <div className={s.wrap}>
          <img
            src={PATH + poster_path}
            alt={original_title}
            className={s.img}
          />
          <div>
            <div className={s.wraper}>
              <p className={s.text}>
                {original_title} {`(${release_date.substr(0, 4)})`}
              </p>
            </div>
            <div className={s.wraper}>
              <p className={s.text}>User score: {vote_average * 10}%</p>
            </div>
            <div className={s.overview}>
              <p className={s.text}>Overview</p>
              <p className={s.text}>{overview}</p>
            </div>
            <div className={s.overview}>
              <p className={s.text}>Genres</p>
              <p className={s.text}>{getGenres(genres)}</p>
            </div>
          </div>
        </div>
      </div>
      <div className={s.container}>
        <p className={s.textInf}>Aditional Information</p>
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

      <Routes>
        <Route path="cast" element={<Cast id={id} />} />
        <Route path="reviews" element={<Reviews />} />
      </Routes>
    </>
  );
};

export default MovieCard;
