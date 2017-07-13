import { connect } from 'react-redux';
import { fetchMovieData } from '../actions';
import MovieList from '../components/MovieList/MovieList';


const mapStateToProps = (state) => {
  return {
    movieData: state.movies
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getMovieData: (url) => {
      dispatch(fetchMovieData(url))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList)
