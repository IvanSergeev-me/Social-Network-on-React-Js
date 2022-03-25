import { stopSubmit } from 'redux-form';
import {getAuthorisedAPI, LoginApi} from '../API/API.js';

const SET_USER_DATA = "auth-reducer/SET_USER_DATA";
const GET_CAPTCHA_URL_SUCCESS = "auth-reducer/GET_CAPTCHA_URL_SUCCESS";

let initialState = {
    resultCode: null,
    messages: [],
    data: {
        id: null,
        email: null,
        login: null
    },
    captchaUrl:null,
    isFetching: false,
    isAuth:false
};
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:            
            return {
                ...state,
                data: action.userData.data,
                captchaUrl:null,
                isAuth:action.isAuth
            }
        case GET_CAPTCHA_URL_SUCCESS:
            return{
                ...state,
                captchaUrl:action.url
            }
        default: return state;
    };
};

export const setUserData = (userData, isAuth) => ({type:SET_USER_DATA, userData:userData, isAuth:isAuth});
export const getCaptchaUrlSuccess = (url) => ({type:GET_CAPTCHA_URL_SUCCESS, url});

export const  getAuthorisedThunk = () => async (dispatch) =>{
        let response = await getAuthorisedAPI();
        console.log(response.data)
        if(response.data.resultCode === 0){
            dispatch(setUserData(response.data, true));
        }
    };
export const  getCaptchaUrlThunk = () => async (dispatch) =>{
    let response = await LoginApi.getCaptcha();
    const captchaUrl = response.data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl));
};
export const loginThunk = (data) => async (dispatch) =>{
        let response = await LoginApi.loginMe(data.Email, data.Password, data.rememberMe, data.captcha);
        if(response.data.resultCode === 0){
            dispatch(getAuthorisedThunk());
           }
        else{
            if(response.data.resultCode === 10){
                dispatch(getCaptchaUrlThunk());
            }
            let message = response.data.messages[0];
            dispatch(stopSubmit("loginForm", {_error:message}));
        };
    };
export const logoutThunk = () => async (dispatch) =>{
        let response = await LoginApi.logoutMe();
           if(response.data.resultCode === 0){
            dispatch(setUserData(initialState, false));
           };
    };

export default authReducer;
