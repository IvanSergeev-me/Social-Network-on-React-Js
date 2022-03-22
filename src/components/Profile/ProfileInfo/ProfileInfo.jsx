import React, { useState } from 'react';
import s from './ProfileInfo.module.css';
import Status from './Status/StatusHooks.jsx';
import PictureOptions from './PictureOptions/PictureOptions.jsx';
import ProfileData from './ProfileData/ProfileData';
import ProfileDataForm from './ProfileData/ProfileDataForm';

const ProfileInfo = (props) =>{
    const default_image = "https://www.tvcnews.tv/wp-content/uploads/2020/10/g-logo.png";
    let [isActivePictureOptions, setPictureOptions] = useState(false);
    let [isEditMode, setEditMode] = useState(false);
    let profile = props.profile;
    let isOwner = props.isOwner;
    const togglePictureOptions = () =>{ 
      if(isOwner){
        if(!isActivePictureOptions){
          setPictureOptions(true);
        }
        else{
          setPictureOptions(false);
        }
      }
    }
    const activateEditMode = (e) =>{
      setEditMode(true);
      e.preventDefault();
    }
    return(
            <div className={s.personal_info}>
                <div className={s.avatar_box} onMouseEnter={togglePictureOptions} onMouseLeave={togglePictureOptions}>
                  <img src={!profile.photos.large?default_image:profile.photos.large} className={s.avatar} alt="user avatar"></img>
                  {isActivePictureOptions?<PictureOptions loadPicture={props.loadPicture} />:null}
                </div>
                <div className={s.info_box}>
                    <h2 className="title_second">
                      {profile.fullName}
                    </h2>
                    <div className={s.description_personal}>
                      <Status updateUserStatusThunk={props.updateUserStatusThunk} status={props.status}/> 
                    </div>
                </div>
                <div className={s.additional_info}>
                   {isEditMode?<ProfileDataForm profile={profile}/>:<ProfileData profile={profile} isOwner={isOwner} activateEditMode={activateEditMode}/>}
                </div>
            </div>  
    );
};

export default ProfileInfo;
