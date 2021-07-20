import React from 'react';
import s from './Posts.module.css';
import Post from './Post/Post.jsx';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../../common/forms/textarea';
import { maxLength, requiredField } from '../../../assets/utils/validators/validator';

//let getPostContent = React.createRef();

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
        //console.log(getPostContent.current);
        //getPostContent.current.style.height = "auto";
        //event.preventDefault();
        
    };
    /*let onNewPostChange = () =>{
        if(getPostContent.current.scrollTop > 0){
            getPostContent.current.style.height = getPostContent.current.scrollHeight + "px";
        }
        else{
            getPostContent.current.style.height = "auto";
        };
        let postContent = getPostContent.current.value;
        props.onNewPostChange(postContent);
    };*/
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