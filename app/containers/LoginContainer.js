import { connect } from 'react-redux';
import { loginUser } from '../actions';
import Login from '../components/Login/Login';


const mapStateToProps = (state) => {
  return {
    username: state.username,
    password: state.password
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    submitCreds: (userCreds) => {
      dispatch(loginUser(userCreds))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
