const ADD_POST = "ADD-POST";

let initialState = {
    postData : [

    ],

    profileData : {id: 1, name: "User 1", subscribers: 1234, subscription: 123}
};

const profileReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_POST:
            if (action.type === ADD_POST) {
                let newPost = {
                    id: 5,
                    textPost: action.message
                };
        
                state.postData.push(newPost)
            }
            return state;
        default:
            return state;
    }
}

export const addPostActionCreater = (text) => {
    return {
        type: ADD_POST,
        message: text
    }
}

export default profileReducer;