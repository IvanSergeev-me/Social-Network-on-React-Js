import axios from 'axios';

const instance = axios.create({
    withCredentials:true,
    headers:{"API-KEY":"9bfe0302-3819-4ebf-8b85-d5ed5fcf098a"},
    baseURL:"https://social-network.samuraijs.com/api/1.0/"
});

export const getMoreUsersAPI =  (thispage,pageSize) =>{
    return instance.get(`users?page=${thispage}&count=${pageSize}`)
};
export const getUsersAPI = (currentPage,pageSize)=>{
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
};
export const getAuthorisedAPI = () =>{
    return instance.get(`auth/me`)
};
export const getProfileAPI = (userId) =>{
    return instance.get(`profile/${userId}`)
};
export const followAPI = (id) =>{
    return instance.post(`follow/${id}`)
};
export const unfollowAPI = (id) =>{
    return instance.delete(`follow/${id}`)
};

