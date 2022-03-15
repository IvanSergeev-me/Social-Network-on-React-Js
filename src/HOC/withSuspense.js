import React, { Suspense } from 'react';
import Preloader from '../components/common/Preloader/Preloader.jsx';


export let withSuspense = (Component) =>{
    return (props)=> <Suspense fallback={<Preloader/>}><Component {...props}/></Suspense>;
};
