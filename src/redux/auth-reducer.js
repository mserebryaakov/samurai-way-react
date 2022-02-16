const SET_USER_LOGIN = "SET-USER-LOGIN"

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {

    switch(action.type) {
        case SET_USER_LOGIN: {
            return {
                ...state,
                userId: action.userId,
                email: action.email,
                login: action.login,
                isAuth: true
            }
        }
        default:
            return state;
    }
}

export const setUserData = (userId,email,login) => {
    return {
        type: SET_USER_LOGIN,
        userId: userId,
        email: email,
        login: login
    }
}

export default authReducer;