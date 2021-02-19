import React from 'react';
import Dialogs from './Dialogs.jsx';
import { connect } from 'react-redux';

let mapStateToProps = (state) =>{
    return {
        messagesPage: state.messagesPage,
        isAuth: state.auth.isAuth
    };
};
let mapDispatchToProps = (dispatch) =>{
    return {
        
    };
};
const DialogsContainerComponent = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainerComponent;