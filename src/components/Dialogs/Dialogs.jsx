import React from 'react';
import s from './Dialogs.module.css';
import ActiveDialog from './ActiveDialog/ActiveDialog.jsx'
import MessagesContainerComponent from './Messages/MessagesContainerComponent.jsx'
import { Redirect } from 'react-router-dom';


const Dialogs = (props) =>{
    let dialogData = props.messagesPage.dialogData;
    let dialogs_arr = 
        dialogData.map( dialog => 
            <ActiveDialog 
                key={dialog.user_id}
                name={dialog.name}  
                user_id={dialog.user_id}/>);
    if (!props.isAuth){
        return <Redirect to="/Login"/>
    };
      
    return(
        <section className={s.main_content}>
            <div className={s.dialogs_list}>
                <h2 className="title_second">Диалоги</h2>
                <div className={s.active_dialogs}>
                    {dialogs_arr}
                </div>
            </div>
            <MessagesContainerComponent store={props.store}/>
        </section>
    );
};

export default Dialogs;