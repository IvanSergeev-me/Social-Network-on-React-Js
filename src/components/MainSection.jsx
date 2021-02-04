import React from 'react';
import Aside from './Aside/Aside';
import Profile from './Profile/Profile';
import Dialogs from './Dialogs/Dialogs.jsx';
import Friends from './Friends/Friends.jsx';
import News from './News/News.jsx';
import Settings from './Settings/Settings.jsx';
import {Route} from "react-router-dom";

const MainSection = (props) =>{
    return(
        
        <main className="wrapper section_main">
            <Aside/>
            <Route path="/Profile" render={()=><Profile profilePage={props.profilePage}/>}/>
            <Route path="/Dialogs" render={()=><Dialogs messagesPage={props.messagesPage}/>} />
            <Route path="/Friends" render={Friends}/>
            <Route path="/News" render={News}/>
            <Route path="/Settings" render={Settings}/>
        </main>
        
    );
}


export default MainSection;