import movieGenres from '../helpers/genres';

export const fetchHasErrored = (state = false, action) => {
  switch (action.type) {
  case 'FETCH_HAS_ERRORED':
    return action.hasErrored;

  default:
    return state;
  }
};

export const fetchIsLoading = (state = false, action) => {
  switch (action.type) {
  case 'FETCH_IS_LOADING':
    return action.isLoading;

  default:
    return state;
  }
};

export const movies = (state = [], action) => {
  switch (action.type) {
  case 'MOVIES_FETCH_DATA_SUCCESS':
    return action.movies.results
      .map(movie => Object.assign(movie, {poster_path: `https://image.tmdb.org/t/p/w500${movie.poster_path}`}) )
      .map(movie => Object.assign(movie, {genre_ids: movie.genre_ids.map(id => movieGenres[id])}) )
      .map(movie => Object.assign(movie, {movie_id: movie.id}));

  default:
    return state;
  }
};

export const userFavorites = (state = [], action) => {
  switch (action.type) {
  case 'USER_FAVORITES' :
    return action.userFavorites;
  case 'LOGGED_OUT_USER' :
    return [];
  default:
    return state;
  }
};
