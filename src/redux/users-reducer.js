const FOLLOW = "FOLLOW";
const SET_USERS = "SET-USERS";
const CURRENT_PAGE = "CURRENT-PAGE";
const TOTAL_COUNT_PAGE = "TOTAL-COUNT-PAGE"

let initialState = {
    allUsersProfiles: [],
    pageSize: 5,
    totalUserCount: 0,
    currentPage: 1
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                allUsersProfiles: state.allUsersProfiles.map(e => {
                    if (e.id === action.userID) {
                        return { ...e, followed: !e.followed }
                    }
                    return e;
                })
            }
        }
        case SET_USERS: {
            return { ...state, allUsersProfiles: action.allUsersProfiles }
        }
        case CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage}
        }
        case TOTAL_COUNT_PAGE: {
            return {...state, totalUserCount:action.totalCount}
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

export const setCurrentPageActionCreater = (currentPage) => {
    return {
        type: CURRENT_PAGE,
        currentPage: currentPage
    }
}

export const setUsersTotalCountActionCreater = (totalCount) => {
    return {
        type: TOTAL_COUNT_PAGE,
        totalCount: totalCount
    }
}

export default usersReducer;