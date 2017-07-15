import { connect } from 'react-redux';
import { fetchUserFavorites } from '../actions';
import FavoriteList from '../components/FavoriteList/FavoriteList';

const mapStateToProps = (state) => {
  console.log(state);
  const favMovies = state.loggedIn ? state.userFavorites.data : []

  return {
    favMovies
  }
}

export default connect(mapStateToProps, null)(FavoriteList)
