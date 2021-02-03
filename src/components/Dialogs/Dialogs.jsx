import React from 'react';
import s from './Dialogs.module.css';
import ActiveDialog from './ActiveDialog/ActiveDialog.jsx'
import Messages from './Messages/Messages.jsx'


const Dialogs = (props) =>{
    return(
        <section className={s.main_content}>
            <div className={s.dialogs_list}>
                <h2 className="title_second">Диалоги</h2>
                <div className={s.active_dialogs}>
                    <ActiveDialog name="Макс"  user_id="1"/>
                    <ActiveDialog name="Кирилл"  user_id="2"/>
                    <ActiveDialog name="Саня"  user_id="3"/>
                    <ActiveDialog name="Володя"  user_id="4"/>
                </div>
            </div>
            <Messages/>
        </section>
    );
};

export default Dialogs;