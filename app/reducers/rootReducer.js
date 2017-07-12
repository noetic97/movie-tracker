import { combineReducers } from 'redux';
import movieData from './movieData-reducer'
import testData from './test-reducer'

const rootReducer = combineReducers({
  movieData,
  testData
})

export default rootReducer
