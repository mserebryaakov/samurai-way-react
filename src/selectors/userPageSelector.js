import {createSelector} from 'reselect'

export const getAllUsersProfilesSelector = (state) => {
    return state.usersPage.allUsersProfiles;
}

export const getPageSizeSelector = (state) => {
    return state.usersPage.pageSize;
}

export const getTotalUserCountSelector = (state) => {
    return state.usersPage.totalUserCount;
}

export const getCurrentPageSelector = (state) => {
    return state.usersPage.currentPage;
}

export const getIsFetchingSelector = (state) => {
    return state.usersPage.isFetching;
}

export const getIsFollowingProgressSelector = (state) => {
    return state.usersPage.isFollowingProgress;
}

export const getUsersSuperSelector = createSelector(getAllUsersProfilesSelector, (users) => {
    return users.filter(u => true);
})