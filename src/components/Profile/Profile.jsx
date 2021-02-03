import React from 'react';
import s from './Profile.module.css';
import Posts from './Posts/Posts.jsx';

const Profile = () =>{
    return(
        <section className={s.main_content}>
              <div className={s.personal_info}>
                <div className={s.avatar_box}>
                  <img src="https://www.tvcnews.tv/wp-content/uploads/2020/10/g-logo.png" className={s.avatar}></img>
                </div>
                <div className={s.info_box}>
                    <h2 class="title_second">
                      Иван Сергеев
                    </h2>
                    <p className={s.description_personal}>
                      Сергеев Иван Николаевич, первоклассный 
                      Front-end разработчик, который на высочайшем уровне знает 
                      React и Redux.
                      Место обучения: Московский Политехнический Университет. 
                    </p>
                </div>
              </div>
              <Posts/>
        </section>
        
    );
};

export default Profile;