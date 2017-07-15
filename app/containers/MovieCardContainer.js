import { connect } from 'react-redux'
import MovieCard from '../components/MovieCard/MovieCard';
import { fetchAddFavorites, fetchUserFavorites} from '../actions'

const mapStateToProps = (state) => {
  return {
    userData: state.userCreds,
    userFavorites: state.userFavorites.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToFavorites : (movieData, userCreds) => {
      dispatch(fetchAddFavorites(movieData, userCreds))
    },
    retrieveFavorites : (userId) => {
      dispatch(fetchUserFavorites(userId))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(MovieCard)
