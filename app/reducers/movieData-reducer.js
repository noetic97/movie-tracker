const movieData = (state = '', action) => {
  switch (action.type) {
    case 'LOG_BANG':
      console.log('reducer is fired!');
      console.log(action.text);
      return action.text
      break;
    default:
      return state;
  }
}

export default movieData;
