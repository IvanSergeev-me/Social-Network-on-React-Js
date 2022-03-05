import React from 'react';
import Messages from './Messages.jsx';
import {onNewMessageChangeActionCreator,addMessageActionCreator} from '../../../redux/messages-reducer.js';
import { connect } from 'react-redux';

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