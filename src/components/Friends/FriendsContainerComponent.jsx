import React from 'react';
import Friends from './Friends.jsx';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {withAuthRedirectComponent} from '../../HOC/AuthRedirect.js';

class FriendsContainerComponent extends React.Component {
    constructor(props) {
        super(props);


    };
    componentDidUpdate(){
        
    };
    componentDidMount(){
        
    };
    render(){
        
        return(
            <Friends  />
        );
        
    };
};

let mapStateToProps = (state) => ({
 
    
});




export default compose(connect(mapStateToProps) ,withAuthRedirectComponent)(FriendsContainerComponent);