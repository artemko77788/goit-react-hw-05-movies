import { IMG_MOVIE, PATH } from 'helpers/helpers';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import s from './ListItem.module.css';

function ListItem({ film }) {
  const location = useLocation();

  return (
    <li className={s.item}>
      <Link
        to={`/movies/${film.id}/`}
        state={{ from: location }}
        style={{ textDecoration: 'none' }}
      >
        <img
          className={s.img}
          src={film.backdrop_path ? PATH + `${film.backdrop_path}` : IMG_MOVIE}
          alt={`${film.original_title}`}
        />
        <div className={s.title}> {film.original_title || film.name}</div>
      </Link>
    </li>
  );
}

ListItem.propTypes = {
  film: PropTypes.shape({
    original_title: PropTypes.string,
    title: PropTypes.string,
  }),
};
export default ListItem;
