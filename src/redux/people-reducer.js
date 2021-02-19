import {getUsersAPI, getMoreUsersAPI, followAPI, unfollowAPI} from '../API/API.js';

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_PAGE = "SET_PAGE";
const GET_MORE_USERS = "GET_MORE_USERS";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const TOGGLE_FETCHING = "SET_FETCHING";
const TOGGLE_FOLLOWING = "SET_FOLLOWING";

let initialState = {
    users: [
        
    ],
    totalUsersCount: 0,
    currentPage: 1,
    pageSize:9,
    isFetching: false,
    isFollowing:false
};
const peopleReducer = (state = initialState, action ) =>{
    switch (action.type){
        case FOLLOW:    
                return{
                    ...state,
                    users:state.users.map(u=>{
                        if (u.id === action.user_id){
                            return {...u, followed:true};
                        }
                        return u;
                    })
                };  
            
        case UNFOLLOW:
            return{
                ...state,
                users:state.users.map(u=>{
                    if (u.id === action.user_id){
                        return {...u, followed:false};
                    }
                    return u;
                })
            };  
        case SET_USERS:
            return{
                ...state, 
                users: [...state.users, ...action.users]
            };
        case SET_PAGE:
            return{
                ...state,
                currentPage:action.currentPage
            };
        case SET_TOTAL_COUNT:
            return{
                ...state,
                totalUsersCount: action.totalCount
            };
        case TOGGLE_FETCHING:{
            return(state.isFetching)?{...state, isFetching: false}:{...state, isFetching:true};
        } 
        case TOGGLE_FOLLOWING:{
            return(state.isFollowing)?{...state, isFollowing: false}:{...state, isFollowing:true};
        } 
        default: return state; 
        
    };
    
};
export const follow = (user_id) =>({type:FOLLOW, user_id:user_id});
export const unfollow = (user_id) =>({type:UNFOLLOW, user_id:user_id});
export const setUsers = (users) =>({type:SET_USERS, users:users});
export const setPage = (currentPage) =>({type:SET_PAGE, currentPage:currentPage});
export const getMoreUsers = () =>({type:GET_MORE_USERS});
export const setTotalCount = (totalCount) => ({type:SET_TOTAL_COUNT, totalCount:totalCount});
export const toggleFetching = () => ({type:TOGGLE_FETCHING});
export const toggleFollowing = () => ({type:TOGGLE_FOLLOWING});

//thunk
//Получает начальных пользователей - первую страницу
export const getUsersThunk = (currentPage, pageSize) =>{
    return (dispatch) =>{
        dispatch(toggleFetching());
        getUsersAPI(currentPage, pageSize)
        .then(response => {
            dispatch(setUsers(response.data.items));
            dispatch(toggleFetching());
            dispatch(setTotalCount(response.data.totalCount));
        });
        
    };
};
//Подгружает последующие страницы пользователей
export const getMoreUsersThunk = (thispage, pageSize) =>{
    return(dispatch) =>{
        dispatch(toggleFetching());
            thispage++;
            dispatch(setPage(thispage));
            getMoreUsersAPI(thispage,pageSize)
            .then(response => {
                dispatch(setUsers(response.data.items));
                dispatch(toggleFetching());
            });

        };
};
export const followThunk = (id) =>{
    return(dispatch) =>{
        dispatch(toggleFollowing());
        followAPI(id)
        .then(response => {
           if (response.data.resultCode === 0){
                dispatch(follow(id));
                dispatch(toggleFollowing());
           };
        });
    };
};
export const unfollowThunk = (id) =>{
    return(dispatch) =>{
        dispatch(toggleFollowing());
        unfollowAPI(id)
        .then(response => {
            if (response.data.resultCode === 0){
                dispatch(unfollow(id));
                dispatch(toggleFollowing());
            };
         });
    };
};
export default peopleReducer;