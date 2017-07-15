import { loggedIn } from './loggedin-reducer';

describe('loggedin reducer', () => {
  it('Should return an initial state', () => {
    expect(loggedIn(undefined, {})).toBe(false)
  })

  it('Should return an updated state if given an action', () => {
    const loggedInState = loggedIn(undefined, {type: 'LOGIN_USER'})
    const loggedOutState = loggedIn(true, {type: 'LOGGED_OUT_USER'})

    expect(loggedInState).toEqual(true)
    expect(loggedOutState).toEqual(false)
  })
})
