import { connect } from 'react-redux';
import { logBang } from '../actions';
import MovieList from '../components/MovieList';

const mapDispatchToProps = (dispatch) => {
  return {
    logBang: (text) => {
      console.log('something');
      dispatch(logBang(text))
    }
  }
}

export default connect(null, mapDispatchToProps)(MovieList)
