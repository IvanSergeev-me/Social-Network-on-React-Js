import React from 'react';
import s from './Posts.module.css';
import Post from './Post/Post.jsx';
import {addPostActionCreator , onNewPostChangeActionCreator} from '../../../redux/profile-reducer.js'

const Posts = (props) =>{
    let postContent = props.postContent;
    let posts_arr = postContent.map(
        post_object =>  <Post name={post_object.name} time={post_object.time} avatar={post_object.avatar} picture={post_object.picture} content={post_object.content}/>
    );
    let getPostContent = React.createRef();
    let addPost = (event) =>{
        props.dispatch(addPostActionCreator());
        getPostContent.current.style.height = "auto";
        event.preventDefault();
    };
    let onNewPostChange = () =>{
        if(getPostContent.current.scrollTop > 0){
            getPostContent.current.style.height = getPostContent.current.scrollHeight + "px";
        }
        else{
            getPostContent.current.style.height = "auto";
        };
        let postContent = getPostContent.current.value;
        props.dispatch(onNewPostChangeActionCreator(postContent));
    };
    return(
        <div>
            <div className={s.form_container}>
                <form className={s.form} action="#">
                    <textarea onChange={onNewPostChange} ref={getPostContent} value={props.newPostContent} placeholder="Напишите о чем-нибудь, что вас волнует..." className={s.textarea}/>
                    <button onClick={addPost} className={s.send}>Отправить</button>
                </form>
            </div>
            <div className={s.posts_lists}>
                {posts_arr}
            </div>
        </div>
    );
};

export default Posts;