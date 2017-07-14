export const loggedIn = (state = false, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      return true;
    case 'LOGGED_OUT_USER':
      return false;
    default:
      return state;
  }
}
