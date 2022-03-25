import axios from 'axios';

const instance = axios.create({
    withCredentials:true,
    headers:{"API-KEY":"9bfe0302-3819-4ebf-8b85-d5ed5fcf098a"},
    baseURL:"https://social-network.samuraijs.com/api/1.0/"
});
export const UsersAPI = {
    getUsers(currentPage,pageSize){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    },
    getMoreUsers(thispage,pageSize){
        return instance.get(`users?page=${thispage}&count=${pageSize}`)
    },
    follow(id){
        return instance.post(`follow/${id}`)
    },
    unfollow(id){
        return instance.delete(`follow/${id}`)
    }
};
export const ProfileAPI = {
    getProfile(userId){
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId){
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status){
        return instance.put(`profile/status`, {status:status})
    },
    loadPicture(file){
        const formData = new FormData();
        formData.append("image", file);
        return instance.put(`profile/photo`, formData, {
            headers:{'Content-Type': 'multipart/form-data'}
        })
    },
    saveProfile(profileData){
        return instance.put(`profile`, profileData)
    }
};
export const LoginApi = {
    loginMe(email, password, rememberMe=false, captcha=null){
        return instance.post(`auth/login`, {email, password, rememberMe,captcha});
    },
    logoutMe(){
        return instance.delete(`auth/login`);
    },
    getCaptcha(){
        return instance.get(`security/get-captcha-url`);
    }
}
export const getAuthorisedAPI = () =>{
    return instance.get(`auth/me`)
};



