import React from 'react';
import Aside from './Aside.jsx';
import { compose } from 'redux';
import { connect } from 'react-redux';



class AsideContainerComponent extends React.Component {
    constructor(props) {
        super(props);


    };
    render(){
        
        
        return(
            <Aside />
        );
        
    };
};

let mapStateToProps = (state) => ({
    
    
});




export default compose(connect(mapStateToProps))(AsideContainerComponent);