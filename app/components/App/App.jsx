import React, { Component } from 'react';
import MovieListContainer from '../../containers/MovieListContainer'
import About from '../About'
import { Route } from 'react-router'
import Header from '../Header/Header'
import Login from '../Login/Login'

export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Header />
        <Route path='/' exact component={MovieListContainer} />
        <Route path='/login' components={MovieListContainer, Login} />
        <Route path='/about' exact component={About} />
      </div>
    )
  }
}
