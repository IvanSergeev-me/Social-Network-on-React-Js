import React from 'react';
import s from './Posts.module.css';
import Post from './Post/Post.jsx';

const Posts = (props) =>{
    let postContent = props.postContent;
    let posts_arr = postContent.map(
        post_object =>  <Post name={post_object.name} time={post_object.time} avatar={post_object.avatar} picture={post_object.picture} content={post_object.content}/>
    );
    return(
        <div>
            <div className={s.form_container}>
                <form className={s.form} action="#">
                    <textarea placeholder="Напишите о чем-нибудь, что вас волнует..." className={s.textarea} ></textarea>
                    <input className={s.send} type="submit"/>
                </form>
            </div>
            <div className={s.posts_lists}>
                {posts_arr}
            </div>
        </div>
    );
};

export default Posts;