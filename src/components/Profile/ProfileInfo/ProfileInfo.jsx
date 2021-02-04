import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () =>{
    return(
            <div className={s.personal_info}>
                <div className={s.avatar_box}>
                  <img src="https://www.tvcnews.tv/wp-content/uploads/2020/10/g-logo.png" className={s.avatar}></img>
                </div>
                <div className={s.info_box}>
                    <h2 className="title_second">
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
    );
};
export default ProfileInfo;