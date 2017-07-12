import { connect } from 'react-redux';
import { fetchMovieData } from '../actions';
import MovieList from '../components/MovieList';

// const mapStateToProps = (state) => {
//   return {
//
//   }
// }

const mapDispatchToProps = (dispatch) => {
  return {
    getMovieData: (url) => {
      dispatch(fetchMovieData(url))
    }
  }
}

export default connect(null, mapDispatchToProps)(MovieList)
