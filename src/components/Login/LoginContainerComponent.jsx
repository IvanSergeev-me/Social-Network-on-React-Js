import React from 'react';
import Login from './Login.jsx';
import { connect } from 'react-redux';
class ProfileContainerComponent extends React.Component {
    constructor(props) {
        super(props);


    };
    componentDidMount(){
        
    };
    render(){
        return(
            <Login/>
        );
        
    };
};

let mapStateToProps = (state) => ({
    
});

export default connect(mapStateToProps, {})(Login) ;