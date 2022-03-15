import React from 'react';
import News from './News.jsx';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {withAuthRedirectComponent} from '../../HOC/withAuthRedirect.js';

class NewsContainerComponent extends React.Component {
    constructor(props) {
        super(props);


    };
    componentDidUpdate(){
        
    };
    componentDidMount(){
        
    };
    render(){
        
        return(
            <News  />
        );
        
    };
};

let mapStateToProps = (state) => ({
 
    
});

export default compose(connect(mapStateToProps) ,withAuthRedirectComponent)(NewsContainerComponent);