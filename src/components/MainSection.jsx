import React, { Suspense } from 'react';
import Aside from './Aside/Aside.jsx';
import {Route} from "react-router-dom";
import DialogsContainerComponent from './Dialogs/DialogsContainerComponent.jsx';
import PeopleContainerComponent from './People/PeopleContainerComponent.jsx';
import ProfileContainerComponent from './Profile/ProfileContainerComponent.jsx';
import Preloader from './common/Preloader/Preloader.jsx';
import { withSuspense } from '../HOC/withSuspense.js';

const LoginContainerComponent = React.lazy(()=> import('./Login/LoginContainerComponent.jsx'));
const NewsContainerComponent = React.lazy(()=> import('./News/NewsContainerComponent.jsx'));
const SettingsContainerComponent = React.lazy(()=> import('./Settings/SettingsContainerComponent.jsx'));
const FriendsContainerComponent = React.lazy(()=> import('./Friends/FriendsContainerComponent.jsx'));

const MainSection = (props) =>{
    return(
        
        <main className="wrapper section_main">
            <Aside />
            <Route path="/Profile/:userID?" render={()=><ProfileContainerComponent />}/>
            <Route path="/Dialogs" render={()=><DialogsContainerComponent />} />
            <Route path="/People" render={()=> <PeopleContainerComponent />}/>
            <Route path="/Friends" render={ withSuspense(FriendsContainerComponent)}/>
            <Route path="/News" render={ withSuspense(NewsContainerComponent)}/>
            <Route path="/Settings" render={withSuspense(SettingsContainerComponent)}/>
            <Route path="/Login" render={ withSuspense(LoginContainerComponent)}/>
        </main>
        
    );
}


export default MainSection;