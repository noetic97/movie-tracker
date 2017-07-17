import { connect } from 'react-redux';
import { fetchCreateUser } from '../actions';
import Register from '../components/Register/Register';

const mapStateToProps = (state) => {
  return {
    successMsg: state.userReg.status,
    fetchErr: state.fetchHasErrored
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    regCreds: (userCreds) => {
      dispatch(fetchCreateUser(userCreds));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
