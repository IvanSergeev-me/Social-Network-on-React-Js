import React from 'react';
import s from './Login.module.css';
import home from '../../assets/images/home.svg';
import { Field, reduxForm } from 'redux-form';
const Login = (props) =>{
    
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
                        <LoginReduxForm/>
                    </div>
                </div>
                
            </div>
        </section>
    );
};
const LoginForm = (props) =>{
    return(
        <form className={s.login_form}>
            <Field name="Login" placeholder={"Введите ваш логин"} className={s.login_form__input} type="text" component={"input"}/>
            <Field name="Password" placeholder={"Пароль"} className={s.login_form__input} type="password" component={"input"}/>
            <div className={s.login_form__checkbox_container}>
                <Field name="rememberMe" component={"input"} className={s.login_form__checkbox_container_checkbox} id="checkbox_rememberme" name="checkbox_rememberme" type="checkbox"/> 
                <label htmlFor="checkbox_rememberme" className={s.login_form__checkbox_container_text}>Запомнить меня</label>
            </div>
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