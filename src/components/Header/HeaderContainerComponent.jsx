import { connect } from 'react-redux';
import React from 'react';
import {getAuthorisedThunk,logoutThunk} from '../../redux/auth-reducer';
import Header from './Header';
class HeaderClass extends React.Component{
    constructor(props) {
        super(props);
    };
    render() {
        return (    
           <Header auth={this.props.auth} logoutThunk={this.props.logoutThunk}/>
        );
    };

};
let mapStateToProps = (state) =>{
    
    return {
        auth: state.auth,
        authorisedUserId:state.auth.data.id,
    };
};
const HeaderContainerComponent = connect(mapStateToProps, {getAuthorisedThunk,logoutThunk})(HeaderClass);

export default HeaderContainerComponent;