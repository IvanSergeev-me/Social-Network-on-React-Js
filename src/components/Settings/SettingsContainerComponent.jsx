import React from 'react';
import Settings from './Settings.jsx';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {withAuthRedirectComponent} from '../../HOC/AuthRedirect.js';

class SettingsContainerComponent extends React.Component {
    constructor(props) {
        super(props);


    };
    componentDidUpdate(){
        console.log("settingsupdated")
    };
    componentDidMount(){
        console.log("settingsmntd")
    };
    render(){
        
        return(
            <Settings />
        );
        
    };
};

let mapStateToProps = (state) => ({
 
    
});




export default compose(connect(mapStateToProps) ,withAuthRedirectComponent)(SettingsContainerComponent);