import ListItem from 'components/ListItem';
import PropTypes from 'prop-types';

function MoviesList({ filmsArr }) {
  return (
    <ul>
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
