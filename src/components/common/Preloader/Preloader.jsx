import React from 'react';
import s from './Preloader.module.css';
import preloader from '../../../assets/images/preloader.svg';
const Preloader = (props) => {
    
    return (
        <img src={preloader} className={s.preloader} />
    );
};

export default Preloader;