import React from 'react';
import s from './Messages.module.css';
import Message from './Message/Message.jsx'

const Messages = (props) =>{
    let messageData = props.messageData;
    let messages_arr = 
        messageData.map(message_object => 
            <Message 
                id={message_object.id} 
                text={message_object.text} 
                sender_id={message_object.sender_id} 
                sender_avatar={message_object.sender_avatar}/>);

    return(
            <div className={s.messages}>
                {messages_arr}
            </div>
    );
};

export default Messages;