import React from 'react';
import Dialogs from './Dialogs.jsx';
import { connect } from 'react-redux';
import {withAuthRedirectComponent} from '../../HOC/AuthRedirect.js';
import { compose } from 'redux';

let mapStateToProps = (state) =>{
    return {
        messagesPage: state.messagesPage
        
    };
};
let mapDispatchToProps = (dispatch) =>{
    return {
        
    };
};
compose(connect(mapStateToProps, mapDispatchToProps) ,withAuthRedirectComponent)(Dialogs);

/*
Функция compose позволяет избежать многократного оборачивания элементов и сократить код.

let AuthRedirectComponent = withAuthRedirectComponent(Dialogs);

const DialogsContainerComponent = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);*/

export default compose(connect(mapStateToProps, mapDispatchToProps) ,withAuthRedirectComponent)(Dialogs);