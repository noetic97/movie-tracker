import React, { Component } from 'react';
import MovieCardContainer from '../../containers/MovieCardContainer'

class FavoriteList extends Component {
  constructor() {
    super()
  }

  render() {
    const favMovieCardArray = this.props.favMovies.map((movie) => {
      return <MovieCardContainer movieData={ movie }
                        key={movie.id} />
    })

    return (
      <section className="movie-list">
        {favMovieCardArray}
      </section>
    )
  }
}

export default FavoriteList;
