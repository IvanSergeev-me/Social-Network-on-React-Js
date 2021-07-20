import { applyMiddleware, combineReducers, createStore } from "redux";
import profileReducer from './profile-reducer';
import messagesReducer from './messages-reducer';
import sidebarReducer from './sidebar-reducer';
import peopleReducer from "./people-reducer";
import authReducer from "./auth-reducer";
import appReducer from "./app-reducer";
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

let reducers = combineReducers({
    profilePage:  profileReducer,
    messagesPage: messagesReducer,
    sidebarPage: sidebarReducer,
    peoplePage: peopleReducer,
    auth: authReducer,
    form: formReducer,
    appInit: appReducer

});
let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;