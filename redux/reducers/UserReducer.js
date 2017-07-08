
export default function userReducer(user = {}, action) {

    switch (action.type) {

        case 'CREATE_NEW_USER_ID':
            return {
                username: user.username,
                id: action.id
            };


        default:
            return user;
    }
}