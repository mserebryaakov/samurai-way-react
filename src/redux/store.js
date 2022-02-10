import profileReducer from './profile-reducer'
import dialogsReducer from './dialogs-reducer';

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

    dispatch(action) {
        profileReducer(this._state.mainPage, action)
        dialogsReducer(this._state.messagePage, action)

        this._callSubscriber(this._state);
    }
}
 
export default store;