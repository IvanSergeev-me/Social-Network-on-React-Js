import { connect } from 'react-redux';
import React from 'react';
import { toggleFollowing,getUsersThunk,getMoreUsersThunk ,followThunk,unfollowThunk} from '../../redux/people-reducer.js';
import People from './People.jsx';
import Preloader from '../common/Preloader/Preloader.jsx';
import { compose } from 'redux';
class PeopleClass extends React.Component {
    constructor(props) {
        super(props);

    };
    getMoreUsers = (event, thispage) => {
        this.props.getMoreUsersThunk(thispage, this.props.pageSize);
        event.preventDefault();
    };
    follow = (id) =>{
        this.props.followThunk(id);
           
    };
    unfollow =(id) =>{
        this.props.unfollowThunk(id);
    };
    componentDidMount() {
        this.props.getUsersThunk(this.props.currentPage, this.props.pageSize);
    };
    render() {

        return (
            <>
                {this.props.isFetching ? <Preloader /> : null}
                <People 
                    users={this.props.users} 
                    getMoreUsers={this.getMoreUsers} 
                    currentPage={this.props.currentPage} 
                    follow={this.follow} 
                    unfollow={this.unfollow} 
                    isFollowing={this.isFollowing} 
                    toggleFollowing={this.props.toggleFollowing}/>
            </>
        );
    };

};

let mapStateToProps = (state) =>{
    return {
        users:state.peoplePage.users,
        totalUsersCount:state.peoplePage.totalUsersCount,
        currentPage:state.peoplePage.currentPage,
        pageSize:state.peoplePage.pageSize,
        isFetching:state.peoplePage.isFetching,
        isFollowing:state.peoplePage.isFollowing
    };
};


export default compose(connect(mapStateToProps, { toggleFollowing, getUsersThunk,getMoreUsersThunk ,followThunk,unfollowThunk}))(PeopleClass);