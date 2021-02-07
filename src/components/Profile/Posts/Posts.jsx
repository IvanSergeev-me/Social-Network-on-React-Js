import React from 'react';
import s from './Posts.module.css';
import Post from './Post/Post.jsx';

const Posts = (props) =>{
    let postContent = props.postContent;
    let posts_arr = postContent.map(
        post_object =>  <Post name={post_object.name} time={post_object.time} avatar={post_object.avatar} picture={post_object.picture} content={post_object.content}/>
    );
    let getPostContent = React.createRef();
    let addPost = (event) =>{
        let postContent = getPostContent.current.value;
        props.addPost(postContent);
        event.preventDefault();
    };
    return(
        <div>
            <div className={s.form_container}>
                <form className={s.form} action="#">
                    <textarea ref={getPostContent} placeholder="Напишите о чем-нибудь, что вас волнует..." className={s.textarea} ></textarea>
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