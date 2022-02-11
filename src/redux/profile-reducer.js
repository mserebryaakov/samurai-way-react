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
            debugger;
            let newPost = {
                id: 5,
                textPost: state.currentTextPost
            };
            let stateCopy = {...state};
            stateCopy.postData = [...state.postData];
            stateCopy.postData.push(newPost);
            stateCopy.currentTextPost = "";
            return stateCopy;
        }
        case UPDATE_CURRENT_TEXT_POST: {
            let stateCopy = {...state};
            stateCopy.currentTextPost = action.message;
            return stateCopy;
        }
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