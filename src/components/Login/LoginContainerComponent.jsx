import React from 'react';
import Login from './Login.jsx';
import { connect } from 'react-redux';
import {loginThunk} from '../../redux/auth-reducer.js';
import { Redirect } from 'react-router';

class LoginContainerComponent extends React.Component {
    constructor(props) {
        super(props);


    };
    componentDidMount(){
        
    };
    render(){
        if(this.props.isAuth)return<Redirect to="/Profile"/>;
        return(
           
            <Login loginThunk={this.props.loginThunk}/>
        );
        
    };
};

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});


export default connect(mapStateToProps, {loginThunk})(LoginContainerComponent) ;