import { combineReducers } from 'redux';
import { movies, fetchHasErrored, fetchIsLoading } from './movieData-reducer.js';

export default combineReducers({
    movies,
    fetchHasErrored,
    fetchIsLoading
});
