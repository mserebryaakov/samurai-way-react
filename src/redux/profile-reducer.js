const ADD_POST = "ADD-POST";
const UPDATE_CURRENT_TEXT_POST = "UPDATE-CURRENT-TEXT-POST"

let initialState = {
    postData : [

    ],
    currentTextPost : "",
    profileData : {id: 1, name: "User 1", subscribers: 1234, subscription: 123}
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
        default:
            return state;
    }
}

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

export default profileReducer;