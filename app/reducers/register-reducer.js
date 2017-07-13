export const userReg = (state = {}, action) => {
    switch (action.type) {
        case 'CREATE_USER':
        console.log('hello');
            return action.userCreds;

        default:
            return state;
    }
}
