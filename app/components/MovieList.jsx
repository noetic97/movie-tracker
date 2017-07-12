import React, { Component } from 'react';
import apiKey from '../APIkey'

class MovieList extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    this.props.getMovieData(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`);
  }

  render() {
    return (
      <section>
        THIS IS THE MovieList COMPONENT
      </section>
    )
  }
}

export default MovieList;
