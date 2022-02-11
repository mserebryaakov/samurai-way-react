const ADD_MESSSAGE = "ADD-MESSAGE";
const UPDATE_CURRENT_TEXT_MESSAGE = "UPDATE-CURRENT-TEXT-MESSAGE";

let initialState = {
    messageData : [
        {id: 1, message: "Привет"},
        {id: 2, message: "Как дела?"}
    ],
    currentTextMessage : "",
    dialogData : [
        {id: 1, name: "Пользователь 1"},
        {id: 2, name: "Пользователь 2"},
        {id: 3, name: "Пользователь 3"}
    ]
};

const dialogsReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_MESSSAGE:
            let newMessage = {
                id: 3,
                message: state.currentTextMessage
            };
            return {
                ...state,
                messageData: [...state.messageData, newMessage],
                currentTextMessage: ""
            }
        case UPDATE_CURRENT_TEXT_MESSAGE:
            return {
                ...state,
                currentTextMessage: action.message
            }
        default:
            return state;
    }
}

export const addMessageActionCreater = () => {
    return {
        type: ADD_MESSSAGE
    }
}

export const updateMessageActionCreater = (text) => {
    return {
        type: UPDATE_CURRENT_TEXT_MESSAGE,
        message: text
    }
}

export default dialogsReducer;