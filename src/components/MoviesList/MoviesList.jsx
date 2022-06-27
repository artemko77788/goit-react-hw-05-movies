import ListItem from 'components/ListItem';
import PropTypes from 'prop-types';
import s from './MoviesList.module.css';
function MoviesList({ filmsArr }) {
  return (
    <ul className={s.list}>
      {filmsArr &&
        filmsArr.map(film => {
          return <ListItem key={film.id} film={film} />;
        })}
    </ul>
  );
}
MoviesList.propTypes = {
  filmsArr: PropTypes.array.isRequired,
};

export default MoviesList;
