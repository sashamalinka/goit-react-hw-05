import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org';
axios.defaults.headers = {
  accept: 'application/json',
  Authorization:
    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YjY1ZmJlM2RjNTgzNWMzOThmZjU1OGUwZGE5MjE3YSIsIm5iZiI6MTc0NzQyMDI0MS4xMTgsInN1YiI6IjY4Mjc4NDUxMGFkNDMyODE1NDMxNWYwNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.P97ZDdbBhcx_KzZ_YT1A5UvvukaF7KQScZqVmDlQq0I',
};

export const getTrendingMovies = async page => {
  const response = await axios.get(`/3/trending/movie/week?page=${page}`);
  return response.data;
};

export const getMovies = async (page, query) => {
  const response = await axios.get(`/3/search/movie?page=${page}&query=${query}`);
  return response.data;
};

export const getMovieDetails = async id => {
  const response = await axios.get(`/3/movie/${id}`);
  return response.data;
};

export const getMovieReviews = async id => {
  const response = await axios.get(`/3/movie/${id}/reviews`);
  return response.data;
};

export const getMovieCast = async id => {
  const response = await axios.get(`/3/movie/${id}/credits`);
  return response.data;
};
