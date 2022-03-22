import s from '../ProfileInfo.module.css';
import React from 'react';

const PictureOptions = (props) =>{
    const onLoadPicture = (e) =>{
      if(e.target.files.length){
        props.loadPicture(e.target.files[0]);
      }
      e.preventDefault();
    }
    return(
      <div  className={s.avatar__pictureOptions}>
          <label htmlFor="fileUpload" className={s.pictureOptions__label}>
          Загрузить аватар
          </label>
          <input id="fileUpload" type="file" className={s.pictureOptions__load} onChange={onLoadPicture}/>
      </div>
    )
  }
export default PictureOptions;