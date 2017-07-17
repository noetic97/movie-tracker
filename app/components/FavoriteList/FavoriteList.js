import React, { Component } from 'react';
import MovieCardContainer from '../../containers/MovieCardContainer';

class FavoriteList extends Component {
  constructor() {
    super();
  }

  render() {
    const favMovieCardArray = this.props.favMovies.map((movie) => {
      return <MovieCardContainer movieData={ movie }
                                 key={movie.id} />;
    });
    return (
      <section className='favorite-list-component'>
        <h2>Favorites</h2>
        {!this.props.loggedIn ?
          <p className='must-login-msg'>Must Login to view favorites</p> :
        null}
        <div className='favorite-list'>
          {this.props.loggedIn ?
          favMovieCardArray : null}
        </div>
      </section>
    );
  }
}

export default FavoriteList;
