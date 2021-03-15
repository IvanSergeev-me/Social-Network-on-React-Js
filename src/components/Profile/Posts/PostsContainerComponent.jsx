import React from 'react';
import {addPostActionCreator , onNewPostChangeActionCreator} from '../../../redux/profile-reducer.js';
import Posts from './Posts.jsx';
import { connect } from 'react-redux';

/*
Код контейнерной компоненты без библиотеки react-redux
const PostsContainerComponent = (props) =>{
    let state = props.store.getState();
    let addPost = () =>{
        props.store.dispatch(addPostActionCreator());   
    };
    let onNewPostChange = (postContent) =>{
        props.store.dispatch(onNewPostChangeActionCreator(postContent));
    };
    return(
        <Posts onNewPostChange={onNewPostChange} addPost={addPost} newPostContent={state.profilePage.newPostContent} postContent={state.profilePage.postContent}/>
    );
};*/
let mapStateToProps = (state) =>{
    return {
        newPostContent: state.profilePage.newPostContent,
        postContent: state.profilePage.postContent
    };
};
let mapDispatchToProps = (dispatch) =>{
    return {
       
        addPost: (newPostContent) =>{
            
            dispatch(addPostActionCreator(newPostContent));
        }
    };
};
const PostsContainerComponent = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainerComponent;