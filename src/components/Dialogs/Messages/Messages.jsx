import React from 'react';
import s from './Messages.module.css';
import Message from './Message/Message.jsx'

const Messages = (props) =>{
    let messageData = props.messageData;
    let messages_arr = 
        messageData.map(message_object => 
            <Message 
                id={message_object.id}
                sender_name={message_object.sender_name}
                send_time={message_object.send_time} 
                text={message_object.text} 
                sender_id={message_object.sender_id} 
                sender_avatar={message_object.sender_avatar}/>);

    return(
            <div className={s.messages}>
                <div className={s.messages_array}>
                    {messages_arr}  
                </div>
                <div className={s.form_container}>
                    <form className={s.form} action="#">
                        <textarea  placeholder="Напишите сообщение..." className={s.textarea} ></textarea>
                        <button  className={s.send}>Отправить</button>
                    </form>
                 </div>
            </div>
    );
};

export default Messages;