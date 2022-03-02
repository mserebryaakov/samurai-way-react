import { mainPageAPI, profileAPI } from '../api/api'

const ADD_POST = "profile/ADD-POST";
const UPDATE_CURRENT_TEXT_POST = "profile/UPDATE-CURRENT-TEXT-POST"
const SET_USER_PROFILE = "profile/SET-USER-PROFILE"
const SET_USER_STATUS = "profile/SET-USER-STATUS"
const SET_USER_AVATAR = "profile/SET-USER-AVATAR"

let initialState = {
    postData: [

    ],
    currentTextPost: "",
    profileData: null,
    status: "Нет статуса"
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
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
        case SET_USER_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case SET_USER_AVATAR: {
            return {
                ...state,
                profileData: {...state.profileData, photos: action.photos}
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

export const setUserStatus = (status) => {
    return {
        type: SET_USER_STATUS,
        status: status
    }
}

export const setUserAvatar = (photos) => {
    return {
        type: SET_USER_AVATAR,
        photos: photos
    }
}

//Thunk
export const setUserProfileThunkCreator = (userId) => async (dispatch) => {
    let response = await mainPageAPI.setUserProfileRequest(userId);
    dispatch(setUserProfile(response.data));
}

export const setUserStatusThunkCreator = (userId) => async (dispatch) => {
    let response = await profileAPI.getUserStatusRequest(userId)
    dispatch(setUserStatus(response.data));
}

export const changeUserStatusThunkCreator = (status) => async (dispatch) => {
    let response = await mainPageAPI.changeStatusRequest(status)
    if (response.resultCode === 0) {
        dispatch(setUserStatus(status))
    }
}

export const savePhotoThunkCreator = (photoFile) => async (dispatch) => {
    let response = await profileAPI.setUserAvatar(photoFile)
    if (response.data.resultCode === 0) {
        dispatch(setUserAvatar(response.data.data.photos))
    }
}
export default profileReducer;