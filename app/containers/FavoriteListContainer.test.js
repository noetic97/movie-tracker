import React from 'react';
import { mount  } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import FavoriteListContainer from './FavoriteListContainer';
import FavoriteList from '../components/FavoriteList/FavoriteList';
import thunk from 'redux-thunk';

const mockStore = configureMockStore()({});

const setup = () => {
  const Container = mount(<Provider store={mockStore}><FavoriteListContainer /></Provider>);

  const Component = Container.find(FavoriteList);

  return {
    Container,
    Component
  }
}

describe('FavoriteListContainer', () => {
  const { Container, Component } = setup();
  it('should pass the appropriate props from state', () => {
    expect(Object.keys(Component.props())).toContain('favMovies', 'loggedIn');
  });

  it('should pass down the correct action creators', () => {
    expect(Object.keys(Component.props())).toContain('dispatch');
  });
})
