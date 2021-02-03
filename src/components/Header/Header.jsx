import React from 'react';
import s from './Header.module.css';

const Header = () =>{
    return(
        <header  className={s.fixed_head}> 
        <img src="https://www.tvcnews.tv/wp-content/uploads/2020/10/g-logo.png" className={s.logo}></img>
        <h1  className={s.headTitle}>social network</h1>
      </header >
    );
};
export default Header;