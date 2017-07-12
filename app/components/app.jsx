import React, { Component } from 'react';
import TestContainer from '../containers/TestContainer'
import MovieListContainer from '../containers/MovieListContainer'

export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>Movie Watcher</h1>
        {/* <TestContainer /> */}
        <MovieListContainer />
      </div>
    )
  }
}
