import React from 'react';
import Aside from './Aside/Aside';
import Profile from './Profile/Profile';
import Dialogs from './Dialogs/Dialogs.jsx';
import Friends from './Friends/Friends.jsx';
import News from './News/News.jsx';
import Settings from './Settings/Settings.jsx';
import {Route} from "react-router-dom";

const MainSection = () =>{
    return(
        
        <main className="wrapper section_main">
            <Aside/>
            <Route path="/Profile" component={Profile}/>
            <Route path="/Dialogs" component={Dialogs}/>
            <Route path="/Friends" component={Friends}/>
            <Route path="/News" component={News}/>
            <Route path="/Settings" component={Settings}/>
        </main>
        
    );
}


export default MainSection;