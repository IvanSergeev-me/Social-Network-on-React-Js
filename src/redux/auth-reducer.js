import { stopSubmit } from 'redux-form';
import {getAuthorisedAPI, LoginApi} from '../API/API.js';

const SET_USER_DATA = "auth-reducer/SET_USER_DATA";

let initialState = {
    resultCode: null,
    messages: [],
    data: {
        id: null,
        email: null,
        login: null
    },
    isFetching: false,
    isAuth:false
};
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:            
            return {
                ...state,
                data: action.userData.data,
                isAuth:action.isAuth
            };
        default: return state;
    };
};

export const setUserData = (userData, isAuth) => ({type:SET_USER_DATA, userData:userData, isAuth:isAuth});
export const  getAuthorisedThunk = () => async (dispatch) =>{
        let response = await getAuthorisedAPI();
           if(response.data.resultCode === 0){
            dispatch(setUserData(response.data, true));
           }; 
    };
export const loginThunk = (data) => async (dispatch) =>{
        let response = await LoginApi.loginMe(data.Email, data.Password, data.rememberMe);
        if(response.data.resultCode === 0){
                dispatch(getAuthorisedThunk());
           }
        else{
               let message = response.messages;
                dispatch(stopSubmit("loginForm", {_error:message}));
        };
    };
export const logoutThunk = () => async (dispatch) =>{
        let response = await LoginApi.logoutMe();
           if(response.data.resultCode === 0){
            dispatch(setUserData({resultCode: null,
                messages: [],
                data: {
                    id: null,
                    email: null,
                    login: null
                },
                isFetching: false}, false));
           };
    };


export default authReducer;
