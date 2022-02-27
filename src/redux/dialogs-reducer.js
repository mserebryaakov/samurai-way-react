const ADD_MESSSAGE = "dialogs/ADD-MESSAGE";
const UPDATE_CURRENT_TEXT_MESSAGE = "dialogs/UPDATE-CURRENT-TEXT-MESSAGE";
const SET_DIALOGS = "dialogs/SET-DIALOGS";

let initialState = {
    messageData: [
        {id: 1, message: "Привет"},
        {id: 2, message: "Как дела?"}
    ],
    currentTextMessage: "",
    dialogData: [
        {id: 1, name: "Пользователь 1"},
        {id: 2, name: "Пользователь 2"},
        {id: 3, name: "Пользователь 3"}
    ]
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
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
        case SET_DIALOGS: {
            return { ...state, 
                messageData: [...state.messageData, ...action.messageData],
                currentTextMessage: action.currentTextMessage,
                dialogData: [...state.dialogData, ...action.dialogData]}
        }
        default:
            return state;
    }
}

export const addMessage = () => {
    return {
        type: ADD_MESSSAGE
    }
}

export const updateMessage = (text) => {
    return {
        type: UPDATE_CURRENT_TEXT_MESSAGE,
        message: text
    }
}

export const setDialogs = (messageData,currentTextMessage,dialogData) => {
    return {
        type: SET_DIALOGS,
        messageData: messageData,
        currentTextMessage: currentTextMessage,
        dialogData: dialogData
    }
}

export default dialogsReducer;