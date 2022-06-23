import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import s from './ListItem.module.css';

function ListItem({ film }) {
  return (
    <li className={s.item}>
      <Link to={`/movies/${film.id}`}> {film.original_title || film.name}</Link>
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
