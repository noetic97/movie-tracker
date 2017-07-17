import { combineReducers } from 'redux';
import { movies, fetchHasErrored, fetchIsLoading, userFavorites } from './movieData-reducer';
import { userCreds } from './login-reducer';
import { userReg } from './register-reducer';
import { loggedIn } from './loggedIn-reducer';

export default combineReducers({
  movies,
  fetchHasErrored,
  fetchIsLoading,
  userCreds,
  userReg,
  loggedIn,
  userFavorites
});
