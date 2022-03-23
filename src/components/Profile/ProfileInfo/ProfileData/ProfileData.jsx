import React from "react";
import s from '../ProfileInfo.module.css';
import Contacts from "./Contacts/Contacts";

const ProfileData = ({profile, isOwner, activateEditMode}) =>{
    return(
        <div>
            <div className={s.dataContainer__top}>
                <div className={s.dataForm__info}><span className={`${s.info__title} ${s.title_bold}` }>О себе:</span><span>{profile.aboutMe?profile.aboutMe:null}</span></div>
                <div className={s.dataForm__info}><span className={`${s.info__title} ${s.title_bold}`}>Статус поиска работы:</span><span>{profile.lookingForAJob?"Ищу работу":"Работу не ищу"}</span></div>
                <div className={s.dataForm__info}><span className={`${s.info__title} ${s.title_bold}`}>Описание искомой вакансии:</span><span>{profile.lookingForAJobDescription?profile.lookingForAJobDescription:null}</span></div>
            </div>
            <div className={s.dataContainer__bottom}>
                <span className={`${s.info__title} ${s.title_bold}` }>Контакты:</span>
                <Contacts contacts={profile.contacts}/>
            </div>
            {isOwner?<div className={s.dataForm__buttons_container}>
                <button className={s.buttons_container__button} onClick={activateEditMode}>Редактировать профиль</button>
            </div>:null}
        </div>
    )
}
export default ProfileData;