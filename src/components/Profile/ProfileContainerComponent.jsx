import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {setUserProfileThunk} from '../../redux/profile-reducer'
import { withRouter } from 'react-router-dom';
class ProfileContainerComponent extends React.Component {
    constructor(props) {
        super(props);


    };
    componentDidUpdate(){
        let userId = this.props.match.params.userID;
        if (!userId) {
            userId = this.props.authorisedUserId;
        };
        this.props.setUserProfileThunk(userId);
    };
    componentDidMount(){
        let userId = this.props.match.params.userID;
        if (!userId) {
            userId = this.props.authorisedUserId;
        };
        this.props.setUserProfileThunk(userId);
    };
    render(){
        return(
            <Profile store={this.props.store} profile={this.props.profile}/>
        );
        
    };
};

let mapStateToProps = (state) => ({
    profile:state.profilePage.profile,
    authorisedUserId:state.auth.data.id
});

export default connect(mapStateToProps, {setUserProfileThunk})(withRouter(ProfileContainerComponent)) ;