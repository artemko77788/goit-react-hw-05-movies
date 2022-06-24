import Navigation from '../Navigation';
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import NoSuchPage from 'components/views/NoSuchPage';
import { ToastContainer } from 'react-toastify';
import s from './App.module.css';

const Home = lazy(() => import('components/views/Home'));
const Movies = lazy(() => import('components/views/Movies'));
const MovieDetails = lazy(() => import('components/MovieDetails'));

export const App = () => {
  return (
    <div className={s.app}>
      <ToastContainer autoClose={1500} />
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index exact element={<Home />} />
            <Route path="movies/" element={<Movies />} />
            <Route path="movies/:id/*" element={<MovieDetails />} />
            <Route path="*" element={<NoSuchPage />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};
