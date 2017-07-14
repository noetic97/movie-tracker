import { connect } from 'react-redux';
import { loginUser, fetchLoginUser } from '../actions';
import Login from '../components/Login/Login';

const mapStateToProps = (state) => {
  return {
    fetchError: state.fetchHasErrored
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    submitCreds: (userCreds) => {
      dispatch(fetchLoginUser(userCreds))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
