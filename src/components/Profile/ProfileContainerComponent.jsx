import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {setUserProfileThunk, getUserStatusThunk, updateUserStatusThunk} from '../../redux/profile-reducer'
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

//Use password - I_v_anSergeev!1337
class ProfileContainerComponent extends React.PureComponent {
    constructor(props) {
        super(props);
    };
    isProfileSetted = false;
    componentDidUpdate(){
            let userId = this.props.match.params.userID;
            if (!userId) {
                userId = this.props.authorisedUserId;
                if(!this.isProfileSetted){
                    this.props.getUserStatusThunk(userId);
                    this.props.setUserProfileThunk(userId);
                    this.isProfileSetted = true;
                }     
            };     
        
    };
    componentDidMount(){
        this.isProfileSetted = false;
        setTimeout(()=>{
            let userId = this.props.match.params.userID;
            if (!userId) {
                userId = this.props.authorisedUserId;
                
            };
            this.props.getUserStatusThunk(userId);
            this.props.setUserProfileThunk(userId);

        },100);
    };
    render(){
        return(
            <Profile profile={this.props.profile} updateUserStatusThunk={this.props.updateUserStatusThunk} status={this.props.status}/>
        );      
    };
};
let mapStateToProps = (state) => ({
    profile:state.profilePage.profile,
    authorisedUserId:state.auth.data.id,
    status:state.profilePage.status
    
});
export default compose(connect(mapStateToProps, {setUserProfileThunk,getUserStatusThunk,updateUserStatusThunk})
,withRouter
)(ProfileContainerComponent);
