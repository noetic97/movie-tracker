import { combineReducers } from 'redux';
import { movies, fetchHasErrored, fetchIsLoading } from './movieData-reducer';
import { userCreds } from './login-reducer';
import { userReg } from './register-reducer';

export default combineReducers({
    movies,
    fetchHasErrored,
    fetchIsLoading,
    userCreds,
    userReg
});
