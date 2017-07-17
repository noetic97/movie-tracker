import { connect } from 'react-redux';
import { loginUser, fetchLoginUser, loggedIn } from '../actions';
import Login from '../components/Login/Login';

const mapStateToProps = (state) => {
  return {
    successMsg: state.userCreds.status,
    fetchErr: state.fetchHasErrored
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitCreds: (userCreds) => {
      dispatch(fetchLoginUser(userCreds));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
