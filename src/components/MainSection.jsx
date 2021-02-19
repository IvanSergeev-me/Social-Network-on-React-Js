import React from 'react';
import Aside from './Aside/Aside';
import Profile from './Profile/Profile';
import Friends from './Friends/Friends.jsx';
import News from './News/News.jsx';
import Settings from './Settings/Settings.jsx';
import {Route} from "react-router-dom";
import DialogsContainerComponent from './Dialogs/DialogsContainerComponent.jsx';
import PeopleContainerComponent from './People/PeopleContainerComponent.jsx';
import ProfileContainerComponent from './Profile/ProfileContainerComponent.jsx';
import LoginContainerComponent from './Login/LoginContainerComponent.jsx';

const MainSection = (props) =>{
    return(
        
        <main className="wrapper section_main">
            <Aside/>
            <Route path="/Profile/:userID?" render={()=><ProfileContainerComponent store={props.store}/>}/>
            <Route path="/Dialogs" render={()=><DialogsContainerComponent store={props.store}/>} />
            <Route path="/Friends" render={Friends}/>
            <Route path="/People" render={()=> <PeopleContainerComponent store={props.store}/>}/>
            <Route path="/News" render={News}/>
            <Route path="/Settings" render={Settings}/>
            <Route path="/Login" render={()=> <LoginContainerComponent store={props.store}/>}/>
        </main>
        
    );
}


export default MainSection;