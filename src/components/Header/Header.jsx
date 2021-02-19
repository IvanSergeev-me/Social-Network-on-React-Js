import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) =>{
    return(
      
        <header  className={s.fixed_head}> 
        <div className={s.header_left}>
          <img src="https://www.tvcnews.tv/wp-content/uploads/2020/10/g-logo.png" className={s.logo}></img>
          
            {props.auth.isAuth?<div className={s.authorisation}>Выйти</div>:<NavLink className={s.authorisation} to={'/Login'}>Войти</NavLink>}
        </div>
        <h1  className={s.headTitle}>social network</h1>
      </header >
    );
};
export default Header;