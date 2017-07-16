export const userCreds = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      return action.userCreds;
    case 'CHECK_LOCAL_USER':
      return JSON.parse(localStorage.getItem('userCreds')) || {};
    case 'LOGGED_OUT_USER':
      return {}
    default:
      return state;
  }
}
