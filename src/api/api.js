import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

const instanceHeaders = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "d6a230a3-1bba-464d-994d-4808a067d4a3"
    }
})

export const authAPI = {
    loginRequest(email, password, rememberMe) {
        return instance.post(`auth/login`, { email, password, rememberMe })
            .then(response => response.data.resultCode);
    },
    setUserRequest() {
        return instance.get(`auth/me`, { withCredentials: true })
        .then(response => response.data);
    },
    logoutRequest() {
        return instance.delete('auth/login')
            .then(response => response.data.resultCode)
    }
}

export const profileAPI = {
    getUserStatusRequest(userId) {
        return instance.get(`profile/status/${userId}`)
            .then(response => response.data);
    }
}

export const usersAPI = {
    setUsersRequest(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
    currentPageRequest(pageNumber, pageSize) {
        return instance.get(`users?page=${pageNumber}&count=${pageSize}`)
            .then(response => response.data);
    },
    onUnfollowRequest(userID) {
        return instanceHeaders.delete(`follow/${userID}`)
            .then(response => response.data);
    },
    onFollowRequest(userID) {
        return instanceHeaders.post(`follow/${userID}`, {})
            .then(response => response.data);
    }
}

export const mainPageAPI = {
    setUserProfileRequest(userId) {
        return instance.get(`profile/${userId}`)
            .then(response => response.data);
    },
    changeStatusRequest(status) {
        return instanceHeaders.put(`profile/status/`, { status: status })
            .then(response => response.resultCode);
    }
}