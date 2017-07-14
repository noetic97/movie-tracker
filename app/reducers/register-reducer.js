export const userReg = (state = {}, action) => {
  switch (action.type) {
    case 'CREATE_USER':
      return action.userCreds;

  default:
      return state;
  }
}
