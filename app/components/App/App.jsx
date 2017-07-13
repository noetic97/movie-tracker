import React, { Component } from 'react';
import MovieListContainer from '../../containers/MovieListContainer'
import About from '../About'
import { Route } from 'react-router'
import Header from '../Header/Header'

export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Header />
        <Route path='/' exact component={MovieListContainer} />
        <Route path='/about' exact component={About} />
      </div>
    )
  }
}
