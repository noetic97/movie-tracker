import { connect } from 'react-redux';
import { createUser } from '../actions';
import Register from '../components/Register/Register';

const mapDispatchToProps = (dispatch) => {
  return {
    regCreds: (userCreds) => {
      dispatch(createUser(userCreds))
    }
  }
}

export default connect(null, mapDispatchToProps)(Register)
