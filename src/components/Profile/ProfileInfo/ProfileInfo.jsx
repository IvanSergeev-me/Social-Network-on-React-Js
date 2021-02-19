import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) =>{
    const default_image = "https://www.tvcnews.tv/wp-content/uploads/2020/10/g-logo.png";
    if (!props.profile){
      return(<Preloader/>)
    }
    return(
            <div className={s.personal_info}>
                <div className={s.avatar_box}>
                  <img src={!props.profile.photos.large?default_image:props.profile.photos.large} className={s.avatar}></img>
                </div>
                <div className={s.info_box}>
                    <h2 className="title_second">
                      {props.profile.fullName}
                    </h2>
                    <p className={s.description_personal}>
                      {props.profile.aboutMe}
                      
                    </p>
                </div>
            </div>  
    );
};
export default ProfileInfo;

/*
  Сергеев Иван Николаевич, первоклассный 
                      Front-end разработчик, который на высочайшем уровне знает 
                      React и Redux.
                      Место обучения: Московский Политехнический Университет. 
*/