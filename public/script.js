// TMDB API key used to authenticate every request
const tmdbKey = 'Put Free API Key Here from themoviedb.org and it will run';
// Base URL for TMDB API v3; endpoints get added to the end
const tmdbBaseUrl = 'https://api.themoviedb.org/3';
const playBtn = document.getElementById('playBtn');

// Fetches the list of movie genres from TMDB
const getGenres = async () => {
  const genreRequestEndpoint = '/genre/movie/list';
  const requestParams = `?api_key=${tmdbKey}`;
  const urlToFetch = `${tmdbBaseUrl}${genreRequestEndpoint}${requestParams}`;

  // Request genres and handle any errors
  try {
    const response = await fetch(urlToFetch);
    // Only use the data if the request succeeded
    if (response.ok) {
      const jsonResponse = await response.json();
      // Pull out just the genres array
      const genres = jsonResponse.genres;
      return genres;
    }
  } catch (error) {
    console.log(error);
  }
};

// Fetches a list of movies that match the selected genre
const getMovies = async () => {
  const selectedGenre = getSelectedGenre();
  const discoverMovieEndpoint = '/discover/movie';
  const requestParams = `?api_key=${tmdbKey}&with_genres=${selectedGenre}`;
  const urlToFetch = `${tmdbBaseUrl}${discoverMovieEndpoint}${requestParams}`;

  // Request movies and handle any errors
  try {
    const response = await fetch(urlToFetch);
    // Only use the data if the request succeeded
    if (response.ok) {
      const jsonResponse = await response.json();
      // Pull out just the movies array
      const movies = jsonResponse.results;
      return movies;
    }
  } catch (error) {
    console.log(error);
  }
};

// Fetches the full details for one movie
const getMovieInfo = async (movie) => {
  const movieId = movie.id;
  const movieEndpoint = `/movie/${movieId}`;
  const requestParams = `?api_key=${tmdbKey}`;
  const urlToFetch = `${tmdbBaseUrl}${movieEndpoint}${requestParams}`;

  // Request movie details and handle any errors
  try {
    const response = await fetch(urlToFetch);
    // Only use the data if the request succeeded
    if (response.ok) {
      const movieInfo = await response.json();
      return movieInfo;
    }
  } catch (error) {
    console.log(error);
  }
};

// Gets a list of movies and ultimately displays the info of a random movie from the list
const showRandomMovie = async () => {
  const movieInfo = document.getElementById('movieInfo');
  if (movieInfo.childNodes.length > 0) {
    clearCurrentMovie();
  };
  const movies = await getMovies();
  const randomMovie = getRandomMovie(movies);
  const info = await getMovieInfo(randomMovie);
  displayMovie(info);
};

getGenres().then(populateGenreDropdown);
playBtn.onclick = showRandomMovie;
