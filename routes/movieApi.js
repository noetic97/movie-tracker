const request = require('request');
const key = process.env.MOVIE_API;
const baseUrl = 'https://api.themoviedb.org';
const movieUrl = `${baseUrl}/3/movie/now_playing?api_key=${key}&language=en-US&page=1`

function getMovies (req, res, next) {
  request(movieUrl, function(error, response, body) {
    if(error) {
      return next(error);
    }
    res.status(200).send(body)
  });
}

module.exports = {
  getMovies: getMovies
};
