export const userCreds = (state = {}, action) => {
    switch (action.type) {
        case 'LOGIN_USER':
        console.log('hello');
            return action.userCreds;

        default:
            return state;
    }
}
