const movieData = (state = [], action) => {
  switch (action.type) {
    case 'GET_MOVIE_DATA':
      return [...state, action.url]
      break;
    default:
      return state;
  }
}

export default movieData;
