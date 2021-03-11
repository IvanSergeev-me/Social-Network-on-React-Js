import React from 'react';
import Login from './Login.jsx';
import { connect } from 'react-redux';

class LoginContainerComponent extends React.Component {
    constructor(props) {
        super(props);


    };
    componentDidMount(){
        
    };
    render(){
        return(
           // {this.props.isAuth?:}
            <Login store={this.props.store}/>
        );
        
    };
};

let mapStateToProps = (state) => ({
    
});


export default connect(mapStateToProps, {})(LoginContainerComponent) ;