import React from "react";
import { reduxForm , Field} from "redux-form";
import { createField , Input, Textarea} from "../../../common/forms/FormControls.js";
import s from '../ProfileInfo.module.css';
import Contacts from "./Contacts/Contacts";

const ProfileDataForm = ({profile}) =>{
    return(
            <form className={s.dataForm}>
                <div className={s.dataForm__info}><span className={s.info__title}>Имя профиля:</span>{createField("Введите имя", "fullName", [], Input)}</div>
                <div className={s.dataForm__info}><span className={s.info__title}>О себе:</span>{createField("Расскажите о вас", "aboutMe", [], Textarea)}</div>
                <div className={s.dataForm__info}><span className={s.info__title}>Статус поиска работы:</span>
                    <div className={s.dataForm__checkboxLooking}>
                        <Field name="lookingForAJob" component={"input"} className={s.checkboxLooking__checkbox} id="checkboxLooking" type="checkbox"/> 
                        <label htmlFor="checkboxLooking" className={s.checkboxLooking__label}></label>
                    </div>
                </div>
                <div className={s.dataForm__info}>
                    <span className={s.info__title}>Описание искомой вакансии:</span>
                    {createField("Расскажите о искомой вакансии", "lookingForAJobDescription", [], Textarea)}
                </div>
                <Contacts contacts={profile.contacts}/>
                <div className={s.dataForm__buttons_container}>
                    <button className={s.buttons_container__button}>Сохранить изменения</button>
                </div>
            </form>
    )
}
const ProfileReduxForm = reduxForm({form:"edit-profile"})(ProfileDataForm)
export default ProfileReduxForm;