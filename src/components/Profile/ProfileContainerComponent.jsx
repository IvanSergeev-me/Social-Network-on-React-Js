import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {setUserProfileThunk, getUserStatusThunk, updateUserStatusThunk} from '../../redux/profile-reducer'
import { withRouter } from 'react-router-dom';
import {Redirect} from 'react-router-dom';
import {withAuthRedirectComponent} from '../../HOC/AuthRedirect.js';
import { compose } from 'redux';

class ProfileContainerComponent extends React.Component {
    constructor(props) {
        super(props);


    };
    componentDidUpdate(){
        console.log("profupd")
        let userId = this.props.match.params.userID;
        if (!userId) {
            userId = this.props.authorisedUserId;
        };
        this.props.setUserProfileThunk(userId);
        this.props.getUserStatusThunk(userId);
        
    };
    componentDidMount(){
        console.log("profmounted")
        setTimeout(()=>{
            let userId = this.props.match.params.userID;
            if (!userId) {
                userId = this.props.authorisedUserId;
            };
            this.props.setUserProfileThunk(userId);
            this.props.getUserStatusThunk(userId);
        },1000);
    };
    render(){
        return(
            <Profile store={this.props.store} profile={this.props.profile} updateUserStatusThunk={this.props.updateUserStatusThunk} status={this.props.status}/>
        );
        
    };
};

let mapStateToProps = (state) => ({
    profile:state.profilePage.profile,
    authorisedUserId:state.auth.data.id,
    status:state.profilePage.status
    
});


/*
Функция compose позволяет избежать многократного оборачивания элементов и сократить код.

let AuthRedirectComponent = withAuthRedirectComponent(ProfileContainerComponent);
connect(mapStateToProps, {setUserProfileThunk})(withRouter(AuthRedirectComponent)) ;
*/

export default compose(connect(mapStateToProps, {setUserProfileThunk,getUserStatusThunk,updateUserStatusThunk})
,withRouter,
//withAuthRedirectComponent
)(ProfileContainerComponent);
