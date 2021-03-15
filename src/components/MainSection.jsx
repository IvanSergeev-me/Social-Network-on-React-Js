import React from 'react';
import AsideContainerComponent from './Aside/AsideContainerComponent.jsx';
import {Route} from "react-router-dom";

import DialogsContainerComponent from './Dialogs/DialogsContainerComponent.jsx';
import PeopleContainerComponent from './People/PeopleContainerComponent.jsx';
import ProfileContainerComponent from './Profile/ProfileContainerComponent.jsx';
import LoginContainerComponent from './Login/LoginContainerComponent.jsx';
import NewsContainerComponent from './News/NewsContainerComponent.jsx';
import SettingsContainerComponent from './Settings/SettingsContainerComponent.jsx';
import FriendsContainerComponent from './Friends/FriendsContainerComponent.jsx';
import Login from './Login/Login.jsx';

const MainSection = (props) =>{
    return(
        
        <main className="wrapper section_main">
            <AsideContainerComponent store={props.store}/>
            <Route path="/Profile/:userID?" render={()=><ProfileContainerComponent store={props.store}/>}/>
            <Route path="/Dialogs" render={()=><DialogsContainerComponent store={props.store}/>} />
            <Route path="/Friends" render={()=> <FriendsContainerComponent store={props.store}/>}/>
            <Route path="/People" render={()=> <PeopleContainerComponent store={props.store}/>}/>
            <Route path="/News" render={()=> <NewsContainerComponent store={props.store}/>}/>
            <Route path="/Settings" render={()=> <SettingsContainerComponent store={props.store}/>}/>
            <Route path="/Login" render={()=> <LoginContainerComponent store={props.store}/>}/>
        </main>
        
    );
}


export default MainSection;