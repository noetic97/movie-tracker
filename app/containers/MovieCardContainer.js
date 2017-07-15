import { connect } from 'react-redux'
import MovieCard from '../components/MovieCard/MovieCard';
import { fetchAddFavorites } from '../actions'

const mapStateToProps = (state) => {
  return {
    userData: state.userCreds
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToFavorites : (movieData, userCreds) => {
      dispatch(fetchAddFavorites(movieData, userCreds))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(MovieCard)
