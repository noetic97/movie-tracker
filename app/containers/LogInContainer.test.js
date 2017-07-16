// import React from 'react';
// // import { mount  } from 'enzyme';
// import { Provider } from 'react-redux';
// import configureMockStore from 'redux-mock-store';
// import LoginContainer from './LoginContainer';
// import Login from '../Login/Login';
// import thunk from 'redux-thunk';
// import rootReducer from './reducers/rootReducer';
// import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
// import { createStore, combineReducers, applyMiddleware } from 'redux';
// import createHistory from 'history/createBrowserHistory'
//
//
// const history = createHistory();
// const middleWare = [routerMiddleware(history), thunk];
// const store = createStore(
//   rootReducer,
//   devTools,
//   applyMiddleware(...middleWare)
// )
//
//
// // const mockStore = configureMockStore()({
// //   userCreds: {
// //     email: '',
// //     password: ''
// //   }
// // });
//
// // const setup = () => {
// //   const Container = mount(<Provider store={store}><LoginContainer /></Provider>);
// //
// //   const Component = Container.find(Login);
// //
// //   return {
// //     Container,
// //     Component
// //   }
// // }
//
// describe('LoginContainer', () => {
//   const { Container, Component } = setup();
//
//   it.skip('should pass the appropriate props from state', () => {
//     expect(Component.props().items).toEqual({
//       email: '',
//       password: ''
//     });
//   });
//
//   // Verify the container correctly bound our action creators as props
//   it.skip('should pass down the correct action creators', () => {
//     expect(Object.keys(Component.props())).toContain('submitCreds');
//   });
// })
