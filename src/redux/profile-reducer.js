import { mainPageApi } from '../api/api'

const ADD_POST = "ADD-POST";
const UPDATE_CURRENT_TEXT_POST = "UPDATE-CURRENT-TEXT-POST"
const SET_USER_PROFILE = "SET-USER-PROFILE"

let initialState = {
    postData : [

    ],
    currentTextPost : "",
    profileData : null
};

const profileReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                textPost: state.currentTextPost
            };
            return {
                ...state,
                postData: [...state.postData, newPost],
                currentTextPost: ""
            }
        }
        case UPDATE_CURRENT_TEXT_POST: {
            return {
                ...state,
                currentTextPost: action.message
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state, 
                profileData: action.profileData
            }
        }
        default:
            return state;
    }
}

//Action
export const addPost = () => {
    return {
        type: ADD_POST
    }
}

export const updatePostText = (text) => {
    return {
        type: UPDATE_CURRENT_TEXT_POST,
        message: text
    }
}

export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profileData: profile
    }
}

//Thunk
export const setUserProfileThunkCreator = (userId) => {
    return (dispatch) => {
        mainPageApi.setUserProfileRequest(userId).then(data => {
            dispatch(setUserProfile(data));
        });
    }
}

export default profileReducer;