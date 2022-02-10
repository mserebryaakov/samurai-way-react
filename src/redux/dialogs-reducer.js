const ADD_MESSSAGE = "ADD-MESSAGE";

let initialState = {
    messageData : [
        {id: 1, message: "Привет"},
        {id: 2, message: "Как дела?"}
    ],

    dialogData : [
        {id: 1, name: "Пользователь 1"},
        {id: 2, name: "Пользователь 2"},
        {id: 3, name: "Пользователь 3"}
    ]
};

const dialogsReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_MESSSAGE:
            if (action.type === ADD_MESSSAGE) {
                let newMessage = {
                    id: 3,
                    message: action.message
                };
        
                state.messageData.push(newMessage)
            }
        
            return state;
        default:
            return state;
    }
}

export const addMessageActionCreater = (text) => {
    return {
        type: ADD_MESSSAGE,
        message: text
    }
}

export default dialogsReducer;