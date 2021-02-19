import { connect } from 'react-redux';
import React from 'react';
import {getAuthorisedThunk} from '../../redux/auth-reducer';
import Header from './Header';
import { getAuthorisedAPI } from '../../API/API';
class HeaderClass extends React.Component{
    constructor(props) {
        super(props);


    };
    componentDidMount() {
        this.props.getAuthorisedThunk();
    };
    render() {
        return (
          
           <Header auth={this.props.auth}/>
        );
    };

};
let mapStateToProps = (state) =>{
    
    return {
        auth: state.auth
    };
};
const HeaderContainerComponent = connect(mapStateToProps, {getAuthorisedThunk})(HeaderClass);

export default HeaderContainerComponent;