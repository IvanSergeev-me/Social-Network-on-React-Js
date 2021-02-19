import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './User.module.css';
import { unfollowAPI, followAPI } from '../../../API/API';

class User extends React.Component{
    constructor(props) {
        super(props);
    };
    follow = (event) =>{
        this.props.follow(this.props.id);
        event.preventDefault();
    };
    unfollow = (event) =>{
        this.props.unfollow(this.props.id);
        event.preventDefault();
    };
    user_avatar = "https://i.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png";
    render(){
        return(
            <div className={s.user_body}>
                <NavLink to={`/Profile/${this.props.id}`} className={s.user_avatar_container}>
                   <img src={ this.props.photos.small === null?this.user_avatar:this.props.photos.small} alt="user_avatar"/>
                </NavLink >
                <div className={s.personalInfo}>
                     <div className={s.full_name}>
                         <h3 className={s.name}>{this.props.name}</h3>
                         
                     </div>
                     
                     <div className={s.status}>
                         {this.props.status}
                     </div>
                     <div className={s.followers}>
                         {this.props.followed?<button disabled={this.props.isFollowing} onClick={this.unfollow} className={s.unfollow_button}>Отписаться</button>:<button disabled={this.props.isFollowing} onClick={this.follow} className={s.follow_button}>Подписаться</button>}
                     </div>
                </div>
            </div>
         );
    };

};
export default User;