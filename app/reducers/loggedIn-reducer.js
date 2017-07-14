export const loggedIn = (state = false, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      return true;

    default:
      return state;
  }
}
