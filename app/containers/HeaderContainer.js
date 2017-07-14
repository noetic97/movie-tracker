import { connect } from 'react-redux';
import Header from '../components/Header/Header';


const mapStateToProps = (state) => {
  return {
    loggedIn: state.loggedIn,
    userData: state.userCreds
  }
}

export default connect(mapStateToProps, null)(Header)
