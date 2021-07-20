import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {setUserProfileThunk, getUserStatusThunk, updateUserStatusThunk} from '../../redux/profile-reducer'
import { withRouter } from 'react-router-dom';
import {Redirect} from 'react-router-dom';
import {withAuthRedirectComponent} from '../../HOC/AuthRedirect.js';
import { compose } from 'redux';

class ProfileContainerComponent extends React.PureComponent {
    constructor(props) {
        super(props);


    };
    isProfileSetted = false;
    //I_v_anSergeev!1337
    componentDidUpdate(){
        console.log("profupd")
       
        
            let userId = this.props.match.params.userID;
            if (!userId) {
                userId = this.props.authorisedUserId;
                if(!this.isProfileSetted){
                    console.log("profupd if")
                    this.props.getUserStatusThunk(userId);
                    this.props.setUserProfileThunk(userId);
                    this.isProfileSetted = true;
                }
                
                
            };
            
        
    };
    componentDidMount(){
        console.log("profmounted")
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


/*
Функция compose позволяет избежать многократного оборачивания элементов и сократить код.

let AuthRedirectComponent = withAuthRedirectComponent(ProfileContainerComponent);
connect(mapStateToProps, {setUserProfileThunk})(withRouter(AuthRedirectComponent)) ;
*/

export default compose(connect(mapStateToProps, {setUserProfileThunk,getUserStatusThunk,updateUserStatusThunk})
,withRouter,
//withAuthRedirectComponent
)(ProfileContainerComponent);
