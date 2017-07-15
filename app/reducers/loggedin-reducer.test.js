import loggedIn from './loggedin-reducer';

describe('loggedin reducer', () => {
  it.skip('Should return an initial state', () => {
    expect(loggedIn(undefined, {})).toBe(false)
  })

  it('Should return an updated state if given stuff', () => {
    const expectedState = loggedIn(true,
                         {type: 'LOGIN_USER'})


    expect(expectedState[1]).toEqual(true)
  })
})
