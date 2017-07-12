import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import MovieIndex from './components/movieIndex';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

const history = createHistory();
const middleWare = routerMiddleware(history);
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(
  combineReducers({
    rootReducer,
    router: routerReducer
  }),
  applyMiddleware(middleWare),
  devTools
)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App/>
    </ConnectedRouter>
  </Provider>, document.getElementById('main'))
