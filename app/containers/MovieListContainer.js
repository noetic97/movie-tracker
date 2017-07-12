import { connect } from 'react-redux';
import { itemsFetchData } from '../actions';
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
      dispatch(itemsFetchData(url))
    }
  }
}

export default connect(null, mapDispatchToProps)(MovieList)
