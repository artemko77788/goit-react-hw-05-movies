import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import Home from 'views/Home';
import Movies from 'views/Movies';
import NoSuchPage from 'views/NoSuchPage';

export const App = () => {
  return (
    <>
      <ul>
        <NavLink to="/"> Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </ul>

      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="*" element={<NoSuchPage />} />
      </Routes>
    </>
  );
};

// <div
//   style={{
//     height: '100vh',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     fontSize: 40,
//     color: '#010101',
//   }}
// >

// </div>
