import { usersAPI } from '../api/api'

const FOLLOW = "users/FOLLOW";
const UNFOLLOW = "users/UNFOLLOW";
const SET_USERS = "users/SET-USERS";
const CURRENT_PAGE = "users/CURRENT-PAGE";
const TOTAL_COUNT_PAGE = "users/TOTAL-COUNT-PAGE"
const TOGGLE_IS_FETCHING = "users/TOGGLE-IS-FETCHING"
const TOGGLE_IS_FOLOWING_PROGRESS = "users/TOGGLE-IS-FOLOWING-PROGRESS"

let initialState = {
    allUsersProfiles: [],
    pageSize: 5,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: false,
    isFollowingProgress: []
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                allUsersProfiles: state.allUsersProfiles.map(e => {
                    if (e.id === action.userID) {
                        return { ...e, followed: true }
                    }
                    return e;
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                allUsersProfiles: state.allUsersProfiles.map(e => {
                    if (e.id === action.userID) {
                        return { ...e, followed: false }
                    }
                    return e;
                })
            }
        }
        case SET_USERS: {
            return { ...state, allUsersProfiles: action.allUsersProfiles }
        }
        case CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage }
        }
        case TOTAL_COUNT_PAGE: {
            return { ...state, totalUserCount: action.totalCount }
        }
        case TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching }
        }
        case TOGGLE_IS_FOLOWING_PROGRESS: {
            return {
                ...state,
                isFollowingProgress: action.isFetching
                    ? [...state.isFollowingProgress, action.userId]
                    : state.isFollowingProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state;
    }
}


//ACTION
export const unfollow = (userID) => {
    return {
        type: UNFOLLOW,
        userID: userID
    }
}

export const follow = (userID) => {
    return {
        type: FOLLOW,
        userID: userID
    }
}

export const setUsers = (allUsersProfiles) => {
    return {
        type: SET_USERS,
        allUsersProfiles: allUsersProfiles
    }
}

export const setCurrentPage = (currentPage) => {
    return {
        type: CURRENT_PAGE,
        currentPage: currentPage
    }
}

export const setUsersTotalCount = (totalCount) => {
    return {
        type: TOTAL_COUNT_PAGE,
        totalCount: totalCount
    }
}

export const toggleIsFetching = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching: isFetching
    }
}

export const toggleIsFollowingProgress = (isFetching, userId) => {
    return {
        type: TOGGLE_IS_FOLOWING_PROGRESS,
        isFetching: isFetching,
        userId: userId
    }
}

//THUNK
export const getUsersThunkCreator = (currentPage, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    let response = await usersAPI.setUsersRequest(currentPage, pageSize);
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(response.data.items));
    dispatch(setUsersTotalCount(response.data.totalCount));
}

export const switchPageGetUsersThunkCreator = (pageNumber, pageSize) => async (dispatch) => {
    dispatch(setCurrentPage(pageNumber));
    dispatch(toggleIsFetching(true));
    let response = await usersAPI.currentPageRequest(pageNumber, pageSize)
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(response.data.items));
}

export const followThunkCreator = (userID) => async (dispatch) => {
    dispatch(toggleIsFollowingProgress(true, userID));
    let response = await usersAPI.onFollowRequest(userID);
    if (response.data.resultCode === 0) {
        dispatch(follow(userID));
        dispatch(toggleIsFollowingProgress(false, userID));
    }
}

export const unfollowThunkCreator = (userID) => async (dispatch) => {
    dispatch(toggleIsFollowingProgress(true, userID));
    let response = await usersAPI.onUnfollowRequest(userID)
    if (response.data.resultCode === 0) {
        dispatch(unfollow(userID));
        dispatch(toggleIsFollowingProgress(false, userID));
    }
}

export default usersReducer;