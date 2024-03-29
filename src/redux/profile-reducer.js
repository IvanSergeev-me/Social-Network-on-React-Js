import {ProfileAPI} from '../API/API.js'
import {stopSubmit} from 'redux-form';

const ADD_POST = "profile-reducer/ADD-POST";
const SET_USER_PROFILE = "profile-reducer/SET_USER_PROFILE";
const SET_USER_STATUS = "profile-reducer/SET-USER-STATUS";
const LOAD_PICTURE = "profile-reducer/LOAD_PICTURE";
const SET_PROFILE_DATA = "profile-reducer/SET_PROFILE_DATA"

let initialState = {
    postContent:[
        {id: "1", name:"Канеки Кен",time:"20 минут назад", avatar:"https://i1.sndcdn.com/avatars-000649708704-q87cpn-t500x500.jpg", picture:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2d03278e-72b5-4979-b3ff-f542a56a6e5f/dn9pzl-e4bb517f-527a-4a4a-8395-ab235fc0c98f.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMmQwMzI3OGUtNzJiNS00OTc5LWIzZmYtZjU0MmE1NmE2ZTVmXC9kbjlwemwtZTRiYjUxN2YtNTI3YS00YTRhLTgzOTUtYWIyMzVmYzBjOThmLmpwZyJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTpmaWxlLmRvd25sb2FkIl19.gSjxDL0ufG_D9nDilby9y2aAc9_TD--u3Zh-4Lf5JKA",content:"Я- Гуль"},
        {id: "2", name:"Канеки Кен",time:"21 минут назад", avatar:"https://i1.sndcdn.com/avatars-000649708704-q87cpn-t500x500.jpg", picture:"https://wallpaperstock.net/wallpapers/thumbs1/10395.jpg",content:"Лелелелт ми дай"},
        {id: "3", name:"Канеки Кен",time:"22 минут назад", avatar:"https://i1.sndcdn.com/avatars-000649708704-q87cpn-t500x500.jpg", picture:"https://images.freeimages.com/images/small-previews/904/blue-1185044.jpg",content:"Айм э пойсон рейн ви вонт вулд сурвайв"},
    ],
    profile:null,
    status:""
};
const profileReducer = (state = initialState, action ) =>{
    switch (action.type){  
        case ADD_POST:
            if (action.newPostContent){ 
                let newPost = {
                    id: "5",
                    name:"Канеки Кен",
                    time:"20 минут назад",
                    avatar:"https://i1.sndcdn.com/avatars-000649708704-q87cpn-t500x500.jpg",
                    picture:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2d03278e-72b5-4979-b3ff-f542a56a6e5f/dn9pzl-e4bb517f-527a-4a4a-8395-ab235fc0c98f.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMmQwMzI3OGUtNzJiNS00OTc5LWIzZmYtZjU0MmE1NmE2ZTVmXC9kbjlwemwtZTRiYjUxN2YtNTI3YS00YTRhLTgzOTUtYWIyMzVmYzBjOThmLmpwZyJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTpmaWxlLmRvd25sb2FkIl19.gSjxDL0ufG_D9nDilby9y2aAc9_TD--u3Zh-4Lf5JKA",
                    content:action.newPostContent
                };
                return {
                    ...state,
                    postContent:[newPost, ...state.postContent]
                };
            };
        case SET_USER_PROFILE:
            return{
                ...state,
                profile:action.profile
            };
        case SET_USER_STATUS:
            return{
                ...state,
                status:action.status
            };  
        case SET_PROFILE_DATA:
            return{
                ...state,
                profile:{...state.profile}
            }
        case LOAD_PICTURE:
            return{
                ...state,
                profile:{...state.profile, photos:action.photos}
            }  
        default: return state; 
    };
    
};
export const addPostActionCreator = (newPostContent) =>({type:ADD_POST, newPostContent});
export const setUserProfile = (profile) => ({type:SET_USER_PROFILE, profile:profile});
export const setProfileData = (data) =>({type:SET_PROFILE_DATA, data});
export const setUserStatus = (status) => ({type:SET_USER_STATUS, status:status});
export const loadPictureSuccess = (photos) => ({type:LOAD_PICTURE, photos})

export const setUserProfileThunk = (userId) => async (dispatch) => {
    let response = await ProfileAPI.getProfile(userId);
        dispatch(setUserProfile(response.data));
};
export const getUserStatusThunk = (userId) => async (dispatch) =>{
    let response = await ProfileAPI.getStatus(userId);
        dispatch(setUserStatus(response.data));
};
export const updateUserStatusThunk = (status) => async (dispatch) =>{
    let response = await ProfileAPI.updateStatus(status);
        if(response.data.resultCode === 0){
            dispatch(setUserStatus(status));
        };
};
export const loadPictureThunk = (file) => async (dispatch) =>{
    let response = await ProfileAPI.loadPicture(file);
    if(response.data.resultCode === 0){
        dispatch(loadPictureSuccess(response.data.data.photos));
    };
};
export const saveProfileThunk = (profileData) => async (dispatch , getState) => {
    let response = await ProfileAPI.saveProfile(profileData);
    if (response.data.resultCode === 0){
        const userId = getState().auth.data.id;
        dispatch(setUserProfileThunk(userId));
    }
    else{
        let message = response.data.messages[0];
        let errorName = message.split('>')[1].toLowerCase();
        const error = errorName.replace(/[^a-zа-яё]/gi, '').trim();
        let errorObject = {"contacts":{[error]:message}};
        dispatch(stopSubmit("edit-profile", errorObject));
        return(Promise.reject(message));
    }      
};
export default profileReducer;