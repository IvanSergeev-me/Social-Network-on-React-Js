import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import Status from './Status/StatusHooks.jsx';

const ProfileInfo = (props) =>{
    const default_image = "https://www.tvcnews.tv/wp-content/uploads/2020/10/g-logo.png";
    if (!props.profile){
      return(<Preloader/>)
    }
    return(
            <div className={s.personal_info}>
                <div className={s.avatar_box}>
                  <img src={!props.profile.photos.large?default_image:props.profile.photos.large} className={s.avatar} alt="user avatar"></img>
                </div>
                <div className={s.info_box}>
                    <h2 className="title_second">
                      {props.profile.fullName}
                    </h2>
                    <div className={s.description_personal}>
                      
                      <Status updateUserStatusThunk={props.updateUserStatusThunk} status={props.status}/>
                      
                    </div>
                </div>
            </div>  
    );
};
export default ProfileInfo;
