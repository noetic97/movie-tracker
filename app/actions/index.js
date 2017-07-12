export const getMovieData = (url) => {
  return {
    type: 'GET_MOVIE_DATA',
    url
  }
}

export const logBang = (text) => {
  console.log('action fired!');
  return {
    type: 'LOG_BANG',
    text
  }
}
