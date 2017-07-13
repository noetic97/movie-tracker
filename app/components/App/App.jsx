import React, { Component } from 'react';
import MovieListContainer from '../../containers/MovieListContainer'
import About from '../About'
import { Route } from 'react-router'
import Header from '../Header/Header'
import LoginContainer from '../../containers/LoginContainer'
import RegisterContainer from '../../containers/RegisterContainer'

export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Header />
        <Route path='/login' component={LoginContainer} />
        <Route path='/create-user' component={RegisterContainer} />
        <Route path='/about' component={About} />
        <Route path='/' exact component={MovieListContainer} />
      </div>
    )
  }
}
