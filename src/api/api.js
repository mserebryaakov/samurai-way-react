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
        return instance.post(`auth/login`, { email, password, rememberMe });
    },
    setUserRequest() {
        return instance.get(`auth/me`, { withCredentials: true });
    },
    logoutRequest() {
        return instance.delete('auth/login');
    }
}

export const profileAPI = {
    getUserStatusRequest(userId) {
        return instance.get(`profile/status/${userId}`);
    }
}

export const usersAPI = {
    setUsersRequest(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`);
    },
    currentPageRequest(pageNumber, pageSize) {
        return instance.get(`users?page=${pageNumber}&count=${pageSize}`);
    },
    onUnfollowRequest(userID) {
        return instanceHeaders.delete(`follow/${userID}`);
    },
    onFollowRequest(userID) {
        return instanceHeaders.post(`follow/${userID}`, {});
    }
}

export const mainPageAPI = {
    setUserProfileRequest(userId) {
        return instance.get(`profile/${userId}`);
    },
    changeStatusRequest(status) {
        return instanceHeaders.put(`profile/status/`, { status: status });
    }
}