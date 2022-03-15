import React from 'react';
import {addPostActionCreator} from '../../../redux/profile-reducer.js';
import Posts from './Posts.jsx';
import { connect } from 'react-redux';

class PostsClass extends React.Component{
    constructor(props){
        super(props);
    }
    addPost = (values) =>{
        this.props.addPost(values);
    }
    render(){      
        return <Posts newPostContent={this.props.newPostContent} postContent={this.props.postContent} addPost={this.addPost}/>
    }
}
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
const PostsContainerComponent = connect(mapStateToProps, mapDispatchToProps)(PostsClass);

export default PostsContainerComponent;