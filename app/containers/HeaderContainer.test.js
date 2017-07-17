import React from 'react';
import { mount  } from 'enzyme';
import { Provider } from 'react-redux';
import { Route, route } from 'react-router'
import configureMockStore from 'redux-mock-store';
import HeaderContainer from './HeaderContainer';
import Header from '../components/Header/Header';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory'
const history = createHistory();


const mockStore = configureMockStore()({
  userCreds: {
    data: {
      email: 'tman2272@aol.com',
      password: 'password',
      name: 'Taylor'
    }
  }
});

const setup = () => {
  const Container = mount(<Provider store={mockStore} history={history}><HeaderContainer /></Provider>);

  const Component = Container.find(Header);

  return {
    Container,
    Component
  }
}

describe('HeaderContainer', () => {
  // const { Container, Component } = setup();
  it('should pass the appropriate props from state', () => {
//     expect(Object.keys(Component.props())).toContain('userData', 'loggedIn');
  });
//
//   it('should pass down the correct action creators', () => {
//     expect(Object.keys(Component.props())).toContain('logUserOut');
//   });
})
