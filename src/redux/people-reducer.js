import {UsersAPI} from '../API/API.js';
import { updateObjectInArray } from '../assets/utils/object-helper.js';

const FOLLOW = "people-reducer/FOLLOW";
const UNFOLLOW = "people-reducer/UNFOLLOW";
const SET_USERS = "people-reducer/SET-USERS";
const SET_PAGE = "people-reducer/SET_PAGE";
const GET_MORE_USERS = "people-reducer/GET_MORE_USERS";
const SET_TOTAL_COUNT = "people-reducer/SET_TOTAL_COUNT";
const TOGGLE_FETCHING = "people-reducer/SET_FETCHING";
const TOGGLE_FOLLOWING = "people-reducer/SET_FOLLOWING";

let initialState = {
    users: [],
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
                    users:updateObjectInArray(state.users, action.user_id, "id", {followed:true})
                };  
            
        case UNFOLLOW:
            return{
                ...state,
                users:updateObjectInArray(state.users, action.user_id, "id", {followed:false})
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
export const getUsersThunk = (currentPage, pageSize) => async (dispatch) =>{
        dispatch(toggleFetching());
        let response = await UsersAPI.getUsers(currentPage, pageSize);
            dispatch(setUsers(response.data.items));
            dispatch(toggleFetching());
            dispatch(setTotalCount(response.data.totalCount));      
    };
//Подгружает последующие страницы пользователей
export const getMoreUsersThunk = (thispage, pageSize) => async (dispatch) =>{
        dispatch(toggleFetching());
        thispage++;
        dispatch(setPage(thispage));
        let response = await UsersAPI.getMoreUsers(thispage,pageSize);
        dispatch(setUsers(response.data.items));
        dispatch(toggleFetching());
};
//объединение логики функций follow/unfollow
const followUnfollowFlow = async (dispatch,apiMethod,id, action) =>{ 
    dispatch(toggleFollowing());
    let response = await apiMethod(id);
    if (response.data.resultCode === 0){
        dispatch(action(id));
        dispatch(toggleFollowing());
    };
}
export const followThunk = (id) => async (dispatch) =>{
        let apiMethod = UsersAPI.follow.bind(UsersAPI);
        let action = follow;
        followUnfollowFlow(dispatch, apiMethod, id, action);
};
export const unfollowThunk = (id) => async (dispatch) =>{
        let apiMethod = UsersAPI.unfollow.bind(UsersAPI);
        let action = unfollow;
        followUnfollowFlow(dispatch, apiMethod, id, action);
};
export default peopleReducer;