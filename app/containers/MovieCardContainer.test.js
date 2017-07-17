import React from 'react';
import { mount  } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import MovieCardContainer from './MovieCardContainer';
import MovieCard from '../components/MovieCard/MovieCard';
import thunk from 'redux-thunk';

const mockStore = configureMockStore()({
  userFavorites: [],
  loggedIn: false,
  userCreds: {},
  movieData: []
  });

const setup = () => {
  const Container = mount(<Provider store={mockStore}><MovieCardContainer /></Provider>);

  const Component = Container.find(MovieCard);

  return {
    Container,
    Component
  }
}

describe('MovieCardContainer', () => {
  const { Container, Component } = setup();
  it('should pass the appropriate props from state', () => {
    expect(Object.keys(Component.props())).toContain('successMsg', 'fetchErr');
  });

  it('should pass down the correct action creators', () => {
    expect(Object.keys(Component.props())).toContain('regCreds');
  });
})
