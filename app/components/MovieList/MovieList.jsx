import React, { Component } from 'react';
import MovieCardContainer from '../../containers/MovieCardContainer'
import apiKey from '../../APIkey'

class MovieList extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    this.props.getMovieData(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`);
  }

  render() {
    const movieCardArray = this.props.movieData.map((movie) => {
      return <MovieCardContainer movieData={ movie }
                        key={movie.id} />
    })

    return (
      <section className="movie-list">
        {movieCardArray}
      </section>
    )
  }
}

export default MovieList;
