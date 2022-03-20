import React, { useState } from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import Status from './Status/StatusHooks.jsx';

const ProfileInfo = (props) =>{
    const default_image = "https://www.tvcnews.tv/wp-content/uploads/2020/10/g-logo.png";
    let [isActivePictureOptions, setPictureOptions] = useState(false);
    if (!props.profile){
      return(<Preloader/>)
    }
    
    const togglePictureOptions = () =>{
      //Не работает без приведения типов - странно
      if(props.authorisedUserId == props.profile.userId){
        if(!isActivePictureOptions){
          setPictureOptions(true);
        }
        else{
          setPictureOptions(false);
        }
      }
    }
    return(
            <div className={s.personal_info}>
                <div className={s.avatar_box}>
                  <img onMouseEnter={togglePictureOptions}  src={!props.profile.photos.large?default_image:props.profile.photos.large} className={s.avatar} alt="user avatar"></img>
                  {isActivePictureOptions?<PictureOptions loadPicture={props.loadPicture} togglePictureOptions={togglePictureOptions}/>:null}
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
const PictureOptions = (props) =>{
  const onLoadPicture = (e) =>{
    if(e.target.files.length){
      props.loadPicture(e.target.files[0]);
    }
    e.preventDefault();
  }
  return(
    <div onMouseLeave={props.togglePictureOptions} className={s.avatar__pictureOptions}>
        <label htmlFor="fileUpload" className={s.pictureOptions__label}>
        Загрузить аватар
        </label>
        <input id="fileUpload" type="file" className={s.pictureOptions__load} onChange={onLoadPicture}/>
    </div>
  )
}
export default ProfileInfo;
