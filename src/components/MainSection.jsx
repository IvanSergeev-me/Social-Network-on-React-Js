import React from 'react';
import Aside from './Aside/Aside.jsx';
import {Route} from "react-router-dom";

import DialogsContainerComponent from './Dialogs/DialogsContainerComponent.jsx';
import PeopleContainerComponent from './People/PeopleContainerComponent.jsx';
import ProfileContainerComponent from './Profile/ProfileContainerComponent.jsx';
import LoginContainerComponent from './Login/LoginContainerComponent.jsx';
import NewsContainerComponent from './News/NewsContainerComponent.jsx';
import SettingsContainerComponent from './Settings/SettingsContainerComponent.jsx';
import FriendsContainerComponent from './Friends/FriendsContainerComponent.jsx';

const MainSection = (props) =>{
    return(
        
        <main className="wrapper section_main">
            <Aside />
            <Route path="/Profile/:userID?" render={()=><ProfileContainerComponent />}/>
            <Route path="/Dialogs" render={()=><DialogsContainerComponent />} />
            <Route path="/Friends" render={()=> <FriendsContainerComponent />}/>
            <Route path="/People" render={()=> <PeopleContainerComponent />}/>
            <Route path="/News" render={()=> <NewsContainerComponent />}/>
            <Route path="/Settings" render={()=> <SettingsContainerComponent />}/>
            <Route path="/Login" render={()=> <LoginContainerComponent />}/>
        </main>
        
    );
}


export default MainSection;