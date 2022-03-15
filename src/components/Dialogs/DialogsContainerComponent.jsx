import React from 'react';
import Dialogs from './Dialogs.jsx';
import { connect } from 'react-redux';
import {withAuthRedirectComponent} from '../../HOC/withAuthRedirect.js';
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

export default compose(connect(mapStateToProps, mapDispatchToProps) ,withAuthRedirectComponent)(Dialogs);