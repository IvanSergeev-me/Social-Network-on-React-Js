import {getAuthorisedAPI} from '../API/API.js';

const SET_USER_DATA = "SET_USER_DATA";

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
                isAuth:true
            };
        default: return state;
    };
};

export const setUserData = (userData) => ({type:SET_USER_DATA, userData:userData});
export const getAuthorisedThunk = () =>{
    return(dispatch) =>{
        getAuthorisedAPI()
        .then(response => {
           if(response.data.resultCode === 0){
            dispatch(setUserData(response.data));
           };
        });
    };
};

export default authReducer;
