import React from 'react';

const Aside = () =>{
    return(
        <aside className="aside_panel">
              <nav className="nav_left_panel">
                  <a href="#" className="nav_link">Профиль</a>
                  <a href="#" className="nav_link">Сообщения</a>
                  <a href="#" className="nav_link">Друзья</a>
                  <a href="#" className="nav_link">Лента</a>
                  <a href="#" className="nav_link">Настройки</a>
              </nav>
        </aside>
    );
};

export default Aside;