export const userCreds = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      return action.userCreds;

    default:
      return state;
  }
}
