import React from 'react';
import s from './ActiveDialog.module.css';
import {NavLink} from "react-router-dom";

const ActiveDialog = (props) =>{
    let link_dialog = "/Dialogs/" + props.user_id;
    return(
        <NavLink className={s.NavLink_activeDialog} to={link_dialog}>
            <div className={s.activeDialog}>
                {props.name}
            </div>
        </NavLink>
            
    );
};

export default ActiveDialog;