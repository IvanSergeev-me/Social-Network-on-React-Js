import React from 'react';
import {addPostActionCreator , onNewPostChangeActionCreator} from '../../../redux/profile-reducer.js';
import Posts from './Posts.jsx';

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
};

export default PostsContainerComponent;