import { connect } from 'react-redux';
import { fetchMovieData, getLocalUser, fetchLoginUser } from '../actions';
import MovieList from '../components/MovieList/MovieList';


const mapStateToProps = (state) => {
  return {
    movieData: state.movies,
    userCreds: state.userCreds.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getMovieData: (url) => {
      dispatch(fetchMovieData(url))
    },
    submitCreds: (userCreds) => {
      dispatch(fetchLoginUser(userCreds))
    },
    getLocalUser: () => {
      dispatch(getLocalUser())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList)
