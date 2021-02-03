import React from 'react';
import s from './Profile.module.css';
import Posts from './Posts/Posts.jsx';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';

const Profile = () =>{
    return(
        <section className={s.main_content}>
            <ProfileInfo/>
            <Posts/>
        </section>
        
    );
};

export default Profile;