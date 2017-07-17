import React, { Component } from 'react';
import MovieListContainer from '../../containers/MovieListContainer'
import { Route } from 'react-router'
import HeaderContainer from '../../containers/HeaderContainer'
import LoginContainer from '../../containers/LoginContainer'
import RegisterContainer from '../../containers/RegisterContainer'
import FavoriteListContainer from '../../containers/FavoriteListContainer'

export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <HeaderContainer />
        <Route path='/login'
               component={LoginContainer} />
        <Route path='/create-user'
               component={RegisterContainer} />
        <Route path='/favorites'
               component={FavoriteListContainer} />
        <Route path='/'
               exact
               component={MovieListContainer} />
      </div>
    )
  }
}
