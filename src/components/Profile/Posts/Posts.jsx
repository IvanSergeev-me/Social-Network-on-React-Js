import React from 'react';
import s from './Posts.module.css';
import Post from './Post/Post.jsx';

const Posts = () =>{
    return(
        <div>
            <div className={s.form_container}>
                <form className={s.form} action="#">
                    <textarea placeholder="Напишите о чем-нибудь, что вас волнует..." className={s.textarea} ></textarea>
                    <input className={s.send} type="submit"/>
                </form>
            </div>
            <div className={s.posts_lists}>
                <Post name='Канеки Кен' time='20 минут назад' avatar='https://i1.sndcdn.com/avatars-000649708704-q87cpn-t500x500.jpg' picture='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2d03278e-72b5-4979-b3ff-f542a56a6e5f/dn9pzl-e4bb517f-527a-4a4a-8395-ab235fc0c98f.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMmQwMzI3OGUtNzJiNS00OTc5LWIzZmYtZjU0MmE1NmE2ZTVmXC9kbjlwemwtZTRiYjUxN2YtNTI3YS00YTRhLTgzOTUtYWIyMzVmYzBjOThmLmpwZyJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTpmaWxlLmRvd25sb2FkIl19.gSjxDL0ufG_D9nDilby9y2aAc9_TD--u3Zh-4Lf5JKA' content='Я- Гуль'/>
                <Post name='Канеки Кен' time='20 минут назад' avatar='https://i1.sndcdn.com/avatars-000649708704-q87cpn-t500x500.jpg' picture='https://wallpaperstock.net/wallpapers/thumbs1/10395.jpg' content='Лелелелт ми дай'/>
                <Post name='Канеки Кен' time='20 минут назад' avatar='https://i1.sndcdn.com/avatars-000649708704-q87cpn-t500x500.jpg' picture='https://images.freeimages.com/images/small-previews/904/blue-1185044.jpg' content='Айм э пойсон рейн ви вонт вулд сурвайв'/>
            </div>
        </div>
    );
};

export default Posts;