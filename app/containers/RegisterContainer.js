import { connect } from 'react-redux';
import { createUser } from '../actions';
import Register from '../components/Register/Register';


const mapStateToProps = (state) => {
  return {
    username: state.username,
    password: state.password
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    regCreds: (userCreds) => {
      dispatch(createUser(userCreds))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)
