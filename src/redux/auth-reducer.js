import { authAPI } from '../api/api'

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
                isAuth: action.isAuth
            }
        }
        default:
            return state;
    }
}

export const setUserData = (userId,email,login, isAuth) => {
    return {
        type: SET_USER_LOGIN,
        userId: userId,
        email: email,
        login: login,
        isAuth: isAuth
    }
}

export const setUserThunkCreator = () => {
    return (dispatch) => {
        return authAPI.setUserRequest().then(data => {
            if (data.resultCode === 0) {
                let { id, login, email } = data.data;
                dispatch(setUserData(id, email, login, true));
            }
        });
    }
}

export const loginThunkCreator = (email, password, rememberMe) => {
    return (dispatch) => {
        authAPI.loginRequest(email, password, rememberMe).then(resultCode => {
            if (resultCode === 0) {
                dispatch(setUserThunkCreator());
            }
        });
    }
}

export const logoutThunkCreator = () => {
    return (dispatch) => {
        authAPI.logoutRequest().then(resultCode => {
            if (resultCode === 0) {
                dispatch(setUserData(null, null, null, false))
            }
        })
    }
}

export default authReducer;