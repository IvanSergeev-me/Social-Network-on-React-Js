import React from 'react';
import s from './Profile.module.css';
import Posts from './Posts/Posts.jsx';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';
import PostsContainerComponent from './Posts/PostsContainerComponent';

const Profile = (props) =>{
    return(
        <section className={s.main_content}>
            <ProfileInfo profile={props.profile}  status={props.status} updateUserStatusThunk={props.updateUserStatusThunk}/>
            <PostsContainerComponent store={props.store}/>
        </section>
        
    );
};

export default Profile;