export const userCreds = (state = {}, action) => {
  switch (action.type) {
  case 'LOGIN_USER':
    return action.userCreds;
  case 'CHECK_LOCAL_USER':
    action.userCreds = JSON.parse(localStorage.getItem('userCreds'));
  // console.log(JSON.parse(localStorage.getItem('userCreds')));
  console.log(action.userCreds);
    return action.userCreds || {};
  case 'LOGGED_OUT_USER':
    return {};
  default:
    return state;
  }
};
