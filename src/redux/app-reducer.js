import {setUserThunkCreator} from './auth-reducer'

const APP_IS_INITIALIZED = "app/APP-IS-INITIALIZED"

let initialState = {
    initialized: false
};

const appReducer = (state = initialState, action) => {

    switch(action.type) {
        case APP_IS_INITIALIZED: {
            return {
                ...state,
                initialized: true
            }
        }
        default:
            return state;
    }
}

export const initializedAppSuccess = () => {
    return {
        type: APP_IS_INITIALIZED
    }
}

export const initializedAppThunkCreator = () => {
    return (dispatch) => {
        let promise = dispatch(setUserThunkCreator());

        Promise.all([promise]).then(() => {
            dispatch(initializedAppSuccess());
        });
    }
}

export default appReducer;