export const userCreds = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      return action.userCreds;
    case 'LOGGED_OUT_USER':
      return {}
    default:
      return state;
  }
}
