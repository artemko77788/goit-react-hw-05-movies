import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import s from './ListItem.module.css';

function ListItem({ film }) {
  const location = useLocation();

  return (
    <li className={s.item}>
      <Link to={`/movies/${film.id}/`} state={{ from: location }}>
        {film.original_title || film.name}
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
