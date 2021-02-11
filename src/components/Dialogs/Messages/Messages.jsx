import React from 'react';
import s from './Messages.module.css';
import Message from './Message/Message.jsx';
import {onNewMessageChangeActionCreator,addMessageActionCreator} from '../../../redux/messages-reducer.js';

const Messages = (props) =>{
    
    let messageData = props.messageData;
    let messages_arr = 
        messageData.map(message_object => 
            <Message 
                key={message_object.id}
                id={message_object.id}
                sender_name={message_object.sender_name}
                send_time={message_object.send_time} 
                text={message_object.text} 
                sender_id={message_object.sender_id} 
                sender_avatar={message_object.sender_avatar}/>);
    let getMessageContent = React.createRef();
    let onNewMessageChange = () =>{
        if(getMessageContent.current.scrollTop > 0){
            getMessageContent.current.style.height = getMessageContent.current.scrollHeight + "px";
        }
        else{
            getMessageContent.current.style.height = "auto";
        };
        let messageContent = getMessageContent.current.value;
        props.onNewMessageChange(messageContent);
    };
    let addMessage = (event) =>{
        props.addMessage();
        getMessageContent.current.style.height = "auto";
        event.preventDefault();
    };
    return(
            <div className={s.messages}>
                <div className={s.messages_array}>
                    {messages_arr}  
                </div>
                <div className={s.form_container}>
                    <form className={s.form} action="#">
                        <textarea  placeholder="Напишите сообщение..." className={s.textarea} ref={getMessageContent}  value={props.newMessageContent} onChange={onNewMessageChange}/>
                        <button onClick={addMessage} className={s.send}>Отправить</button>
                    </form>
                 </div>
            </div>
    );
};

export default Messages;