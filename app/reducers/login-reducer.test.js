import { userCreds } from './login-reducer';

describe('login reducer', () => {
  it('Should return an initial state', () => {
    expect(userCreds(undefined, {})).toEqual({})
  })

  it.skip('Should return an updated state if given actions', () => {
    const userCredentials = {
      email: 'tman2272@aol.com',
      password: 'password'
    }

    const expectedState = userCreds(userCredentials, {type: 'LOGIN_USER', userCredentials})

    expect(expectedState).toEqual(userCredentials)
  })
})
