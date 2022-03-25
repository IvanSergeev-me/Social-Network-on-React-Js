import React from 'react';
import s from './Login.module.css';
import home from '../../assets/images/home.svg';
import { Field, reduxForm } from 'redux-form';
import {requiredField, maxLength} from '../../assets/utils/validators/validator.js';
import { createField, Input } from '../common/forms/FormControls';

const Login = (props) =>{
    const onSubmit = (data) =>{ 
        props.loginThunk(data);
    }
    return(
        <section className={s.login_section}>
            <div className={s.login_wrapper}>
                <div className={s.login_left_part}>
                    <h1 className={s.title_login_section}>
                        С возвращением!
                    </h1>
                    <div className={s.login_section_description}>
                        <span>Войдите, используя ваш существующий логин или пароль.</span>        
                        <span>Или же зарегистрируйтесь!</span> 
                    </div>
                    <div className={s.login_absolute_decorative}>
                        <img className={s.login_absolute_decorative__image} src={home} alt="home"/>
                    </div>
                </div>
                <div className={s.login_right_part}>
                    <div className={s.login_right_part_container}>
                        <h2 className={s.title_login_above_form}>
                            Авторизация
                        </h2>
                        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>   
                    </div>
                </div>
                
            </div>
        </section>
    );
};
const LoginForm = (props) =>{
    return(
        <form className={s.login_form} onSubmit={props.handleSubmit}>
            {props.error?<div className={s.form_login_password_error}>{props.error}</div>:null}
            {createField("Введите вашу почту", "Email", [requiredField,maxLength] , Input)}
            {createField("Пароль", "Password", [requiredField,maxLength] , Input, {type:"password"})}
            <div className={s.login_form__checkbox_container}>
                <Field name="rememberMe" component={"input"} className={s.login_form__checkbox_container_checkbox} id="checkbox_rememberme" type="checkbox"/> 
                <label htmlFor="checkbox_rememberme" className={s.login_form__checkbox_container_text}>Запомнить меня</label>
            </div>
            {props.captchaUrl?<div className={s.captchaForm}>
                    <img src={props.captchaUrl} alt="captcha" />
                    {createField("Введите капчу", "captcha", [requiredField] , Input)}
                </div>:null}
            <div className={s.login_form__buttons}>
                <button className={s.login_form__button}>
                    Войти
                </button>
                <button className={s.login_form__button}>
                    Зарегистрироваться
                </button>
            </div>

        </form>
    );
};
const LoginReduxForm = reduxForm({
    form:"loginForm"
})(LoginForm);

export default Login;