import React, { Component } from 'react';
import MovieListContainer from '../containers/MovieListContainer'

export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>Movie Watcher</h1>
        <MovieListContainer />
      </div>
    )
  }
}
