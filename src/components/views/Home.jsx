import HomePage from 'components/HomePage';
import Loader from 'components/Loader';
import { Status } from 'helpers/helpers';
import { useEffect, useState } from 'react';
import { fetchMoviesTrend } from 'service/api';

const Home = () => {
  const [films, setfilms] = useState([]);
  const [error, setError] = useState(false);
  const [status, setStatus] = useState(Status.IDLE);
  useEffect(() => {
    setStatus(Status.PENDING);
    fetchMoviesTrend()
      .then(setfilms)
      .catch(err => setError(err), setStatus(Status.REJECTED));
    setStatus(Status.RESOLVED);
  }, []);

  return (
    <>
      {status === Status.PENDING && <Loader />}
      {status === Status.REJECTED && <p>Something went wrong `${error}`</p>}
      {(status === Status.RESOLVED || films.length !== 0) && (
        <HomePage films={films} />
      )}
    </>
  );
};

export default Home;
