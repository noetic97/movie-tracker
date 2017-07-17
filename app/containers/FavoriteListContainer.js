import { connect } from 'react-redux';
import { getLocalUser, fetchLoginUser } from '../actions';
import FavoriteList from '../components/FavoriteList/FavoriteList';

const mapStateToProps = (state) => {
  const favMovies = state.loggedIn ? state.userFavorites.data : [];

  return {
    favMovies,
    loggedIn: state.loggedIn,
    userCreds: state.userCreds.data
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitCreds: (userCreds) => {
      dispatch(fetchLoginUser(userCreds));
    },
    getLocalUser: () => {
      dispatch(getLocalUser());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteList);
