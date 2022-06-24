import ListItem from 'components/ListItem';

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

export default MoviesList;
