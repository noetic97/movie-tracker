import React from 'react';
import { mount  } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import RegisterContainer from './RegisterContainer';
import Register from '../components/Register/Register';
import thunk from 'redux-thunk';

const mockStore = configureMockStore()({
  userReg: {
    name: '',
    email: '',
    password: ''
  }
});

const setup = () => {
  const Container = mount(<Provider store={mockStore}><RegisterContainer /></Provider>);

  const Component = Container.find(Register);

  return {
    Container,
    Component
  };
};

describe('RegisterContainer', () => {
  const { Container, Component } = setup();
  it('should pass the appropriate props from state', () => {
    expect(Object.keys(Component.props())).toContain('successMsg', 'fetchErr');
  });

  it('should pass down the correct action creators', () => {
    expect(Object.keys(Component.props())).toContain('regCreds');
  });
});
