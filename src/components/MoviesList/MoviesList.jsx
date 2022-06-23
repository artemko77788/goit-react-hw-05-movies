import ListItem from 'components/ListItem';

function MoviesList({ filmsArr }) {
  return (
    <ul>
      {filmsArr.length === 0
        ? 'No any film, input correct name...'
        : filmsArr.map(film => {
            return <ListItem key={film.id} film={film} />;
          })}
    </ul>
  );
}

export default MoviesList;
