import React from 'react';
import Login from './Login.jsx';
import { connect } from 'react-redux';
import {loginThunk} from '../../redux/auth-reducer.js';
import { Redirect } from 'react-router';

class LoginContainerComponent extends React.Component {
    constructor(props) {
        super(props);
    };

    render(){
        if(this.props.isAuth)return<Redirect to="/Profile"/>;
        return(   
            <Login loginThunk={this.props.loginThunk} captchaUrl={this.props.captchaUrl}/>
        );    
    };
};

let mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
});


export default connect(mapStateToProps, {loginThunk})(LoginContainerComponent) ;