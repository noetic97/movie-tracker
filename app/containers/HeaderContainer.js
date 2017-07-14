import { connect } from 'react-redux';
import Header from '../components/Header/Header';
import { logOutUser } from '../actions'


const mapStateToProps = (state) => {
  return {
    loggedIn: state.loggedIn,
    userData: state.userCreds
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logUserOut: () => {
      dispatch(logOutUser())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
