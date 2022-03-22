import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {setUserProfileThunk, getUserStatusThunk, updateUserStatusThunk, loadPictureThunk} from '../../redux/profile-reducer'
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import Preloader from '../common/Preloader/Preloader';

//Use password - I_v_anSergeev!1337
class ProfileContainerComponent extends React.PureComponent {
    constructor(props) {
        super(props);
    };
    refreshProfile(){
        let userId = this.props.match.params.userID;
        if (!userId)
            userId = this.props.authorisedUserId;    
        this.props.getUserStatusThunk(userId);
        this.props.setUserProfileThunk(userId);
    }
    componentDidUpdate(prevProps){
        if(this.props.match.params.userID !== prevProps.match.params.userID)
            this.refreshProfile();    
    };
    componentDidMount(){
        this.refreshProfile();
    };
    render(){
        
        if (!this.props.profile){
            return(<Preloader/>)
        }
        //Не работает без приведения типов - странно
        let isOwner = (this.props.authorisedUserId == this.props.profile.userId);
        return(
            <Profile authorisedUserId={this.props.authorisedUserId} profile={this.props.profile} 
            updateUserStatusThunk={this.props.updateUserStatusThunk} status={this.props.status}
            loadPicture={this.props.loadPictureThunk} isOwner={isOwner}
            />
        );      
    };
};
let mapStateToProps = (state) => ({
    profile:state.profilePage.profile,
    authorisedUserId:state.auth.data.id,
    status:state.profilePage.status
    
});
export default compose(connect(mapStateToProps, {setUserProfileThunk,getUserStatusThunk,updateUserStatusThunk, loadPictureThunk})
,withRouter
)(ProfileContainerComponent);
