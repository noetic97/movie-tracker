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
      <section className="favorite-list-component">
        <h2>Favorites</h2>
        <div className="favorite-list">
          {favMovieCardArray}
        </div>
      </section>
    )
  }
}

export default FavoriteList;
