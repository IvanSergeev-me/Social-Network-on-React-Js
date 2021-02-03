import React from 'react';
import s from './Post.module.css';

const Post = (props) =>{
    return(
        <div className={s.post_element}>
            <div className={s.post_header}>
                <div className={s.header_left}>
                    <img className={s.post_owner_pic} src={props.avatar}/>
                    <div className={s.post_added}>
                        <a href="#" className={s.post_owner_name}>{props.name}</a>
                        <p className={s.post_time}>{props.time}</p>
                    </div>
                </div>
                <div className={s.post_options}>
                    X
                </div>
            </div>
            <div className={s.post_pictures}>
                <img className={s.post_picture_content} src={props.picture} />
            
            </div>
            <div className={s.post_content}>
                {props.content}
            </div>
        </div>
    );
};

export default Post;