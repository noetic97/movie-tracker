import * as actions from '../actions';

describe('actions', () => {
  it.skip('fetchHasErrored should return a boolean', () => {
    const fetchError = true;
    const expectedState =  {
      type: 'FETCH_HAS_ERRORED',
      hasErrored: true
    };

    expect(actions.fetchHasErrored(fetchError)).toEqual(expectedState)
  })

  it.skip('fetchIsLoading should return a boolean', () => {
    const fetchLoading = true;
    const expectedState =  {
      type: 'FETCH_IS_LOADING',
      isLoading: true
    };

    expect(actions.fetchIsLoading(fetchLoading)).toEqual(expectedState)
  })

  it.skip('moviesFetchDataSuccess should return an object', () => {
    const movieObject = {};
    const expectedState =  {
      type: 'MOVIES_FETCH_DATA_SUCCESS',
      movies: {}
    };

    expect(actions.moviesFetchDataSuccess(movieObject)).toEqual(expectedState)
  })

  it.skip('createUser should return an object', () => {
    const createUserCreds = {
      name: 'joe',
      email: 'joe@joe.joe',
      password: 'joeeojjoeeoj'
    };

    const expectedState =  {
      type: 'CREATE_USER',
      userCreds: createUserCreds
    };

    expect(actions.createUser(createUserCreds)).toEqual(expectedState)
  })

  it.skip('loginUser should return an object', () => {
    const logInCreds = {
      email: 'suhdude@itslit.com',
      password: 'whytho'
    };
    const expectedState =  {
      type: 'LOGIN_USER',
      userCreds: logInCreds
    };

    expect(actions.loginUser(logInCreds)).toEqual(expectedState)
  })

  it.skip('logOutUser should dispatch an action', () => {
    const expectedState =  {
      type: 'LOGGED_OUT_USER',
    };

    expect(actions.logOutUser()).toEqual(expectedState)
  })
})
