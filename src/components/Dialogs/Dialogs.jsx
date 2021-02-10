import React from 'react';
import s from './Dialogs.module.css';
import ActiveDialog from './ActiveDialog/ActiveDialog.jsx'
import MessagesContainerComponent from './Messages/MessagesContainerComponent.jsx'


const Dialogs = (props) =>{
    let dialogData = props.store.getState().messagesPage.dialogData;
    let dialogs_arr = 
        dialogData.map( dialog => 
            <ActiveDialog 
                name={dialog.name}  
                user_id={dialog.user_id}/>);
        
      
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