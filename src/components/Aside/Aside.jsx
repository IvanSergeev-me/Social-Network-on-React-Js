import React from 'react';
import s from './Aside.module.css';
import {NavLink} from "react-router-dom";

const Aside = () =>{
    return(
        <aside className={s.aside_panel}>
              <nav className={s.nav_left_panel}>
                <NavLink to="/Profile" className={s.nav_link}>Профиль</NavLink>
                <NavLink to="/Dialogs" className={s.nav_link}>Сообщения</NavLink>
                <NavLink to="/Friends" className={s.nav_link}>Друзья</NavLink>
                <NavLink to="/News" className={s.nav_link}>Лента</NavLink>
                <NavLink to="/Settings" className={s.nav_link}>Настройки</NavLink>
              </nav>
        </aside>
    );
};

export default Aside;