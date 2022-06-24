import { IMG_MOVIE, PATH } from 'helpers/helpers';

import { useNavigate } from 'react-router-dom';
import s from './MovieCard.module.css';

const MovieCard = ({ movie, children }) => {
  const {
    poster_path,
    original_title,
    release_date,
    vote_average,
    overview,
    genres,
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
            src={poster_path ? PATH + poster_path : IMG_MOVIE}
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
      {children}
    </>
  );
};

export default MovieCard;
