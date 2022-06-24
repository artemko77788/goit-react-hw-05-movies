import ListItem from '../ListItem';
import s from './HomePage.module.css';
import PropTypes from 'prop-types';
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
HomePage.propType = {
  films: PropTypes.array.isRequired,
};

export default HomePage;
