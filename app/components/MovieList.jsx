import React, { Component } from 'react';
// import APIkey from '../../APIkey.js'

class MovieList extends Component {
  constructor() {
    super()
  }

  fetchMovies() {
    this.props.getMovieData('https://api.themoviedb.org/3/movie/now_playing?api_key=dc2d6d8f7f48da44d3c744ca27911bd0&language=en-US&page=1');
  }

  render() {
    return (
      <section>
        THIS IS THE MovieList COMPONENT
        <button
          className="sampleBtn"
          onClick={this.fetchMovies.bind(this)}
        >CLICK ME!</button>
      </section>
    )
  }
}

export default MovieList;
