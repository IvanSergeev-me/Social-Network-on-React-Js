import React from 'react';
import s from './Profile.module.css';
import Posts from './Posts/Posts.jsx';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';

const Profile = (props) =>{
    return(
        <section className={s.main_content}>
            <ProfileInfo/>
            <Posts postContent={props.profilePage.postContent}/>
        </section>
        
    );
};

export default Profile;