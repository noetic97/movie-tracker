export const getMovieData = (url) => {
  return {
    type: 'GET_MOVIE_DATA',
    url
  }
}

export const logBang = (text) => {
  return {
    type: 'LOG_BANG',
    text
  }
}
