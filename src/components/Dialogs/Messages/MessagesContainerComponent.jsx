import React from 'react';
import Messages from './Messages.jsx';
import {onNewMessageChangeActionCreator,addMessageActionCreator} from '../../../redux/messages-reducer.js';

const MessagesContainerComponent = (props) =>{
    let state = props.store.getState();
    let onNewMessageChange = (messageContent) =>{
        props.store.dispatch(onNewMessageChangeActionCreator(messageContent));
    };
    let addMessage = () =>{
        props.store.dispatch(addMessageActionCreator());
    };
    return(
            <Messages  onNewMessageChange={onNewMessageChange} addMessage={addMessage} newMessageContent={state.messagesPage.newMessageContent} messageData={state.messagesPage.messageData}/>
    );
};

export default MessagesContainerComponent;