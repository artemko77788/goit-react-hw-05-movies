import { IMG_MOVIE, PATH } from 'helpers/helpers';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
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
  const location = useLocation();
  console.log(location);
  console.log(location?.state?.from);
  return (
    <>
      <div className={s.container}>
        <Link to={location?.state?.from ?? '/'}>
          <button type="button" className={s.button}>
            Go back
          </button>
        </Link>

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
MovieCard.propTypes = {
  movie: PropTypes.shape({
    movie: PropTypes.shape({
      poster_path: PropTypes.string,
      original_title: PropTypes.string.isRequired,
      genres: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          name: PropTypes.string.isRequired,
        })
      ),
      overview: PropTypes.string.isRequired,
      vote_average: PropTypes.number.isRequired,
    }),
    children: PropTypes.arrayOf(
      PropTypes.shape({
        child: PropTypes.element,
      })
    ),
  }),
};
export default MovieCard;
