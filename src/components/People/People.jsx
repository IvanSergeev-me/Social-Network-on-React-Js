import axios from 'axios';
import React from 'react';
import s from './People.module.css';
import User from './User/UserClass.jsx';


const People = (props) => {
    let people_list = props.users.map(u => {
        return <User
            key={u.id}
            photos={u.photos}
            status={u.status}
            name={u.name}
            id={u.id}
            followed={u.followed}
            follow={props.follow}
            unfollow={props.unfollow}
            isFollowing={props.isFollowing}
            toggleFollowing={props.toggleFollowing}
        />
    });
    return (
        
        <section className={s.main_content}>
            <h1 className="title-h1">Познакомься с новыми людьми</h1>
            <div className={s.users}>
                {people_list}
            </div>
            <button onClick={(e)=>{props.getMoreUsers(e, props.currentPage)}} className={s.more_button}>Больше людей!</button>
        </section>
    );
};

export default People;



/*
return <User
            key={u.id}
            personalInfo={u.personalInfo}
            status={u.status}
            location={u.location}
            id={u.id}
            followed={u.followed}
            follow={props.follow}
            unfollow={props.unfollow}
        />


[
                    {
                        id: "1", followed: true, personalInfo: {
                            name: "Иван", lastname: "Сергеев", age: "20",
                            avatar: "https://i1.sndcdn.com/avatars-000649708704-q87cpn-t500x500.jpg", followers: "0"
                        },
                        status: "Ставьте лайки и подписывайтесь на канал", location: { city: "Нью-Йорк", country: "США" }
                    },
                    {
                        id: "2", followed: false, personalInfo: {
                            name: "Канеки", lastname: "Кен", age: "20",
                            avatar: "https://i1.sndcdn.com/avatars-000649708704-q87cpn-t500x500.jpg", followers: "0"
                        },
                        status: "Я-Гуль", location: { city: "Москва", country: "Российская республика" }
                    },
                    {
                        id: "3", followed: false, personalInfo: {
                            name: "Владимир", lastname: "Навальный", age: "20",
                            avatar: "", followers: "0"
                        },
                        status: "20!8", location: { city: "Москва", country: "Российская республика" }
                    },
                ]*/