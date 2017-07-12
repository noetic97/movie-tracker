import { connect } from 'react-redux';
import { getMovieData } from '../actions';
import MovieList from '../components/MovieList';

// const mapStateToProps = (state) => {
//   return {
//
//   }
// }

const mapDispatchToProps = (dispatch) => {
  return {
    getMovieData: (url) => {
      console.log(url);
      dispatch(getMovieData(url))
    }
  }
}

export default connect(null, mapDispatchToProps)(MovieList)
