import ListItem from '../ListItem';
import s from './HomePage.module.css';
function HomePage({ films }) {
  return (
    <>
      <h2 className={s.title}>Trending today</h2>
      <ul>
        {films &&
          films.map(film => {
            return <ListItem key={film.id} film={film} />;
          })}
      </ul>
    </>
  );
}

export default HomePage;
