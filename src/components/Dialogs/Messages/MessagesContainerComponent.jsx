import React from 'react';
import Messages from './Messages.jsx';
import {onNewMessageChangeActionCreator,addMessageActionCreator} from '../../../redux/messages-reducer.js';
import { connect } from 'react-redux';

/*
Код контейнерной компоненты без библиотеки react-redux
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
};*/
let mapStateToProps = (state) =>{
    return {
        newMessageContent: state.messagesPage.newMessageContent,
        messageData: state.messagesPage.messageData
    };
};
let mapDispatchToProps = (dispatch) =>{
    return {
        onNewMessageChange: (messageContent) =>{
            dispatch(onNewMessageChangeActionCreator(messageContent));
        },
        addMessage: () =>{
            dispatch(addMessageActionCreator());
        }
    };
};
const MessagesContainerComponent = connect(mapStateToProps, mapDispatchToProps)(Messages);
export default MessagesContainerComponent;