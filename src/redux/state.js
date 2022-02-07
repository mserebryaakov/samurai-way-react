let state = {
    mainPage : {
        postData : [
            {id: 1, textPost: "Привет"},
            {id: 2, textPost: "Как дела?"}
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
}

export default state;