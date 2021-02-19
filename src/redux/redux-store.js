import { applyMiddleware, combineReducers, createStore } from "redux";
import profileReducer from './profile-reducer';
import messagesReducer from './messages-reducer';
import sidebarReducer from './sidebar-reducer';
import peopleReducer from "./people-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
    profilePage:  profileReducer,
    messagesPage: messagesReducer,
    sidebarPage: sidebarReducer,
    peoplePage: peopleReducer,
    auth: authReducer

});
let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;