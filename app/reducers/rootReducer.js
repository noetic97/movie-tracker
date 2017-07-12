import { combineReducers } from 'redux';
// import movieData from './movieData-reducer'
import { items, itemsHasErrored, itemsIsLoading } from './movieData-reducer.js';


export default combineReducers({
    items,
    itemsHasErrored,
    itemsIsLoading
});


// const rootReducer = combineReducers({movieData})

// export default rootReducer
