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