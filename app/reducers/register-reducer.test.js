import { userReg } from './register-reducer';

describe('register reducer', () => {
  it('Should return an initial state', () => {
    expect(userReg(undefined, {})).toEqual({})
  })

  it.skip('Should return an updated state if given an action', () => {
    const userCreated = userReg(undefined, {type: 'CREATE_USER',
    email: 'tman2272@aol.com'})
    const userLoggedIn = userReg(undefined, {type: 'LOGGED_OUT_USER'})
    const userLoggedout = userReg(undefined, {type: 'LOGIN_USER'})

    // console.log(userCreated);

    expect(userLoggedIn).toEqual({})
    expect(userLoggedout).toEqual({})
  })
})
