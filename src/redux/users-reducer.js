const FOLLOW = "FOLLOW";
const SET_USERS = "SET-USERS";

let initialState = {
    allUsersProfiles : [
        {id: 1, name: "User 1", subscribers: 1111, subscription: 111, followed: false, avatar: "https://avatars.githubusercontent.com/u/82521656?v=4"},
        {id: 2, name: "User 2", subscribers: 2222, subscription: 222, followed: false, avatar: "https://avatars.githubusercontent.com/u/82521656?v=4"},
        {id: 3, name: "User 3", subscribers: 3333, subscription: 333, followed: true, avatar: "https://avatars.githubusercontent.com/u/82521656?v=4"}
    ]
};

const usersReducer = (state = initialState, action) => {

    switch(action.type) {
        case FOLLOW: {
            return {
                ...state,
                allUsersProfiles: state.allUsersProfiles.map( e => {
                    if (e.id === action.userID) {
                        return { ...e, followed: !e.followed}
                    }
                    return e;
                })
            }
        }
        case SET_USERS: {
            return { ...state, allUsersProfiles: {...state.allUsersProfiles, ...action.allUsersProfiles}}
        }
        default:
            return state;
    }
}

export const followActionCreater = (userID) => {
    return {
        type: FOLLOW,
        userID: userID
    }
}

export const setUsersActionCreater = (allUsersProfiles) => {
    return {
        type: SET_USERS,
        allUsersProfiles: allUsersProfiles
    }
}

export default usersReducer;