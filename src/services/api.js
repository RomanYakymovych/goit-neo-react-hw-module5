import axios from "axios";

const READ_ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMzc2MzdjOTJkYmIyYzVkZjgzODZiYmE5Mzc2ZDE4YSIsIm5iZiI6MTcyODMzMjE3MS42NDU0MTEsInN1YiI6IjYxMmE1YTlhMmM2YjdiMDA2MjZlYmEyNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JLkgbKDMMjppV1xUKJ3NvfndgeLO7NNfejQNqTc1wMA";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

const options = {
  headers: {
    Authorization: `Bearer ${READ_ACCESS_TOKEN}`,
  },
};

export async function getTrendingMovies() {
  try {
    const { data } = await axios.get("/trending/movie/day", options);
    return data.results;
  } catch (error) {
    console.error("Error fetching trending movies:", error);
  }
}

export async function getMovieDetails(movieId) {
  try {
    const { data } = await axios.get(`/movie/${movieId}`, options);
    return data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
  }
}

export async function getMovieCast(movieId) {
  try {
    const { data } = await axios.get(`/movie/${movieId}/credits`, options);
    return data.cast;
  } catch (error) {
    console.error("Error fetching movie cast:", error);
  }
}

export async function getMovieReviews(movieId) {
  try {
    const { data } = await axios.get(`/movie/${movieId}/reviews`, options);
    return data.results;
  } catch (error) {
    console.error("Error fetching movie reviews:", error);
  }
}

export async function searchMovies(query) {
  try {
    const { data } = await axios.get(`/search/movie?query=${query}`, options);
    return data.results;
  } catch (error) {
    console.error("Error searching for movies:", error);
  }
}