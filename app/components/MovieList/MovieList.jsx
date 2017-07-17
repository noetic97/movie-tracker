import React, { Component } from 'react';
import MovieCardContainer from '../../containers/MovieCardContainer';
import apiKey from '../../APIkey';

class MovieList extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getMovieData(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`);
    this.props.getLocalUser();
    setTimeout(() => {
      this.props.submitCreds(this.props.userCreds);
    }, 100);
  }

  render() {
    const movieCardArray = this.props.movieData.map((movie) => {
      return <MovieCardContainer history={this.props.history}
                                 movieData={ movie }
                                 key={movie.id} />;
    });

    return (
      <section className='movie-list-component'>
        <h2>New Releases</h2>
        <div className='movie-list'>
          {movieCardArray}
        </div>
      </section>
    );
  }
}

export default MovieList;
