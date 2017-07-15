export const userReg = (state = {}, action) => {
  switch (action.type) {
    case 'CREATE_USER':
      return action.userCreds;
    case 'LOGGED_OUT_USER':
      return {};
    case 'LOGIN_USER':
      return {};
  default:
      return state;
  }
}
