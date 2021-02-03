import React from 'react';
import s from './Messages.module.css';
import Message from './Message/Message.jsx'

const Messages = (props) =>{
    return(
            <div className={s.messages}>
                <Message text="Я гуль"/>
                <Message text="Ghowahdoawodoawij"/>
                <Message text="РЕАКТ ЖЫ ЭС"/>
                <Message text="Я гуль"/>
                <Message text="Я гуль"/>
                <Message text="Я гуль"/>
                <Message text="Я гуль"/>

            </div>
    );
};

export default Messages;