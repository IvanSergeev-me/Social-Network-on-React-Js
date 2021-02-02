import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header  className="fixed-head"> 
        <img src="https://www.tvcnews.tv/wp-content/uploads/2020/10/g-logo.png" className="logo"></img>
        <h1  className="headTitle">social network</h1>
      </header >
      <main className="wrapper section_main">
        <aside className="aside_panel">
          <nav className="nav_left_panel">
              <a href="#" className="nav_link">Профиль</a>
              <a href="#" className="nav_link">Сообщения</a>
              <a href="#" className="nav_link">Друзья</a>
              <a href="#" className="nav_link">Лента</a>
              <a href="#" className="nav_link">Настройки</a>
          </nav>
        </aside>
        <section className="main_content">
          <div className="personal_info">
            <div className="avatar_box">
              <img src="https://www.tvcnews.tv/wp-content/uploads/2020/10/g-logo.png" className="avatar"></img>
            </div>
            <div className="info_box">
                <h2 class="title_second">
                  Иван Сергеев
                </h2>
                <p className="description_personal">
                  Сергеев Иван Николаевич, первоклассный 
                  Front-end разработчик, который на высочайшем уровне знает 
                  React и Redux.
                  Место обучения: Московский Политехнический Университет. 
                </p>
            </div>
          </div>
          
        </section>
      </main>
    </div>
  );
}

export default App;
