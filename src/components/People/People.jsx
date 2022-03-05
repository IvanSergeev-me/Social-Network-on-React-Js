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