import React from "react";
import s from '../ProfileInfo.module.css';
import Contacts from "./Contacts/Contacts";

const ProfileData = ({profile, isOwner, activateEditMode}) =>{
    return(
        <div>
            <div><span>О себе:</span><span>{profile.aboutMe?profile.aboutMe:null}</span></div>
            <div><span>Статус поиска работы:</span><span>{profile.lookingForAJob?"Ищу работу":"Работу не ищу"}</span></div>
            <div><span>Описание искомой вакансии:</span><span>{profile.lookingForAJobDescription?profile.lookingForAJobDescription:null}</span></div>
            <Contacts contacts={profile.contacts}/>
            {isOwner?<div>
                <button onClick={activateEditMode}>Редактировать профиль</button>
            </div>:null}
        </div>
    )
}
export default ProfileData;