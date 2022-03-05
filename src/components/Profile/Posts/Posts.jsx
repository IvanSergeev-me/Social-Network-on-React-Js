import React from 'react';
import s from './Posts.module.css';
import Post from './Post/Post.jsx';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../../common/forms/textarea';
import { maxLength } from '../../../assets/utils/validators/validator';


const Posts = (props) =>{
    let postContent = props.postContent;
    let posts_arr = postContent.map(
        post_object =>  <Post
            key={post_object.id} 
            name={post_object.name} 
            time={post_object.time} 
            avatar={post_object.avatar} 
            picture={post_object.picture} 
            content={post_object.content}/>
    );
        
    let addPost = (values) =>{
        props.addPost(values.newPostContent);
        
    };
    return(
        <div>
            <div className={s.form_container}>
                <AddPostsForm onSubmit={addPost}/>
            </div>
            <div className={s.posts_lists}>
                {posts_arr}
            </div>
        </div>
    );
};
const PostsForm = (props) =>{
    return(
        <form onSubmit={props.handleSubmit} className={s.form} >
            <Field  validate={[maxLength]} component={Textarea} name={"newPostContent"} placeholder="Напишите о чем-нибудь, что вас волнует..." />
            <button className={s.send}>Отправить</button>
        </form>
    );
};
const AddPostsForm = reduxForm({
    form:"addPostsForm"
})(PostsForm);
export default Posts;