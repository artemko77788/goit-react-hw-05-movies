import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'f7834c478b364ada45f63f10c4befe7b';

export const getMovies = axios.create({
  url: '',
  baseURL: BASE_URL,

  params: {
    api_key: API_KEY,
    language: 'en-US',
    include_adult: false,
  },
});

export const fetchMoviesTrend = async () => {
  try {
    const { data } = await getMovies('/trending/all/day', {});

    return data.results;
  } catch (error) {
    return Promise.reject('There is no information ...');
  }
};

export const fetchSeachMovie = async name => {
  if (name === '') {
    return;
  }
  try {
    const { data } = await getMovies('/search/movie', {
      params: { query: name },
    });

    return data.results;
  } catch (error) {
    return Promise.reject('There is no information t...');
  }
};

export const fetchByIdMovie = async id => {
  if (id === '') {
    return;
  }
  try {
    const { data } = await getMovies(`/movie/${id}`, {});

    return data;
  } catch (error) {
    return Promise.reject('There is no information ...');
  }
};

export const fetchByIdReview = async id => {
  if (id === '') {
    return;
  }
  try {
    const { data } = await getMovies(`/movie/${id}/reviews`, {});

    return data;
  } catch (error) {
    return Promise.reject('There is no information ...');
  }
};

export const fetchByIdCast = async id => {
  if (id === '') {
    return;
  }
  try {
    const { data } = await getMovies(`/movie/${id}/credits`, {});

    return data;
  } catch (error) {
    return Promise.reject('There is no information ...');
  }
};
