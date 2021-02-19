import { connect } from 'react-redux';
import React from 'react';
import { toggleFollowing,getUsersThunk,getMoreUsersThunk ,followThunk,unfollowThunk} from '../../redux/people-reducer.js';
import People from './People.jsx';
import Preloader from '../common/Preloader/Preloader.jsx';
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
         /*
        Код без thunk
        this.props.toggleFetching();
        getUsersAPI(this.props.currentPage, this.props.pageSize)
        .then(response => {
            this.props.setUsers(
                response.data.items
            );
            this.props.toggleFetching();
            this.props.setTotalCount(
                response.data.totalCount
            );
        });
        */
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
/*let mapDispatchToProps = (dispatch) =>{
    return {
        follow: (user_id) =>{
            dispatch(followAC(user_id));
        },
       unfollow: (user_id) =>{
            dispatch(unfollowAC(user_id));
        },
        setUsers:(users)=>{
            dispatch(setUserAC(users));
        },
        setPage:(currentPage)=>{
            dispatch(setPageAC(currentPage));
        },
        getMoreUsers:()=>{
            dispatch(getMoreUsersAC());
        },
        setTotalCount:(totalCount)=>{
            dispatch(setTotalCountAC(totalCount));
        },
        toggleFetching:()=>{
            dispatch(toggleFetchingAC());
        }
    };
};*/
const PeopleContainerComponent = connect(mapStateToProps, { 
    
      toggleFollowing, getUsersThunk,
      getMoreUsersThunk ,followThunk,unfollowThunk})(PeopleClass);

export default PeopleContainerComponent;