import { connect } from 'react-redux';
import { logBang } from '../actions';
import TestComponent from '../components/TestComponent';

const mapDispatchToProps = (dispatch) => {
  return {
    logBang: (text) => {
      console.log(text);
      dispatch(logBang(text))
    }
  }
}

export default connect(null, mapDispatchToProps)(TestComponent)
