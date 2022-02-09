const ADD_POST = "ADD-POST";

let store = {
    _state: {
        mainPage : {
            postData : [
    
            ],
    
            profileData : {id: 1, name: "User 1", subscribers: 1234, subscription: 123}
        },
    
        messagePage : {
            messageData : [
                {id: 1, message: "Привет"},
                {id: 2, message: "Как дела?"}
            ],
        
            dialogData : [
                {id: 1, name: "Пользователь 1"},
                {id: 2, name: "Пользователь 2"},
                {id: 3, name: "Пользователь 3"}
            ]
        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {},
    subscribe(observer) {
        this._callSubscriber=observer;
    },
    // addPost(postMessage) {
    //     let newPost = {
    //         id: 5,
    //         textPost: postMessage
    //     };
    
    //     this._state.mainPage.postData.push(newPost)
    //     this._callSubscriber(this._state);
    // },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                textPost: action.message
            };
        
            this._state.mainPage.postData.push(newPost)
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreater = (text) => {
    return {
        type: ADD_POST,
        message: text
    }
}

export default store;