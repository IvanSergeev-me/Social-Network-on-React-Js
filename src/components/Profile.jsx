import React from 'react';

const Profile = () =>{
    return(
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
    );
};

export default Profile;