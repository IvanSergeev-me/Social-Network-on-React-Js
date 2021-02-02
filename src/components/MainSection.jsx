import React from 'react';
import Aside from './Aside';
import Profile from './Profile';

const MainSection = () =>{
    return(
        <main className="wrapper section_main">
            <Aside/>
            <Profile/>
          </main>
    );
}


export default MainSection;