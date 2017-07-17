import { connect } from 'react-redux';
import { fetchUserFavorites } from '../actions';
import FavoriteList from '../components/FavoriteList/FavoriteList';

const mapStateToProps = (state) => {
  const favMovies = state.loggedIn ? state.userFavorites.data : [];

  return {
    favMovies,
    loggedIn: state.loggedIn
  };
};

export default connect(mapStateToProps, null)(FavoriteList);
