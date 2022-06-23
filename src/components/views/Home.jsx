import HomePage from 'components/HomePage';
import { useEffect, useState } from 'react';
import { fetchMoviesTrend } from 'service/api';

const Home = () => {
  const [films, setfilms] = useState(null);

  useEffect(() => {
    fetchMoviesTrend().then(setfilms);
  }, []);

  return <HomePage films={films} />;
};

export default Home;
