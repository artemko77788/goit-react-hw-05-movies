import Navigation from '../Navigation';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from 'components/views/Home';
import Movies from 'components/views/Movies';
import NoSuchPage from 'components/views/NoSuchPage';
import { ToastContainer } from 'react-toastify';
import s from './App.module.css';
import MovieDetails from 'components/MovieDetails';

export const App = () => {
  return (
    <div className={s.app}>
      <ToastContainer autoClose={1500} />

      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index exact element={<Home />} />

          <Route path="movies/" element={<Movies />}>
            <Route path="movies/:id/*" element={<MovieDetails />} />
          </Route>

          <Route path="*" element={<NoSuchPage />} />
        </Route>
      </Routes>
    </div>
  );
};
