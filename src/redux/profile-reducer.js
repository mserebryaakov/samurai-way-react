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
        case ADD_POST:
            let newPost = {
                id: 5,
                textPost: state.currentTextPost
            };
            state.currentTextPost = "";
            state.postData.push(newPost)
            return state;
        case UPDATE_CURRENT_TEXT_POST:
            state.currentTextPost = action.message;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreater = () => {
    return {
        type: ADD_POST
    }
}

export const updatePostActionCreater = (text) => {
    return {
        type: UPDATE_CURRENT_TEXT_POST,
        message: text
    }
}

export default profileReducer;