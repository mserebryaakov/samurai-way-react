import { follow, unfollow, toggleIsFollowingProgress, getUsersThunkCreator, switchPageGetUsersThunkCreator, followThunkCreator, unfollowThunkCreator } from '../../redux/users-reducer'
import UsersPage from './UsersPage';
import { connect } from 'react-redux';
import React from 'react';
import UserProfile from './UserProfile/UserProfile';
import {withAuthRedirect} from '../hoc/withAuthRedirect'
import { compose } from 'redux';

class UsersPageAPIContainer extends React.Component {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
    }

    createUsersElements = () => {
        return (
            this.props.allUsersProfiles
                .map(element => <UserProfile
                    state={element}
                    unfollowThunkCreator={this.props.unfollowThunkCreator}
                    key={element.id}
                    isFollowingProgress={this.props.isFollowingProgress}
                    followThunkCreator={this.props.followThunkCreator} />)
        )
    }

    updateCurrentPage = (pageNumber) => {
        this.props.switchPageGetUsersThunkCreator(pageNumber, this.props.pageSize);
    }

    render() {
        return (<>
            <UsersPage totalUserCount={this.props.totalUserCount}
                pageSize={this.props.pageSize}
                updateCurrentPage={this.updateCurrentPage}
                currentPage={this.props.currentPage}
                createUsersElements={this.createUsersElements}
                isFetching={this.props.isFetching} />
        </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        allUsersProfiles: state.usersPage.allUsersProfiles,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        isFollowingProgress: state.usersPage.isFollowingProgress
    }
}

export default compose(
    connect(mapStateToProps, {unfollow,follow,toggleIsFollowingProgress,getUsersThunkCreator,
        switchPageGetUsersThunkCreator,followThunkCreator,unfollowThunkCreator}),
    withAuthRedirect
)(UsersPageAPIContainer)

// const UsersPageContainer = connect(mapStateToProps, {
//     unfollow,
//     follow,
//     toggleIsFollowingProgress,
//     getUsersThunkCreator,
//     switchPageGetUsersThunkCreator,
//     followThunkCreator,
//     unfollowThunkCreator
// })(UsersPageAPIContainer);


// export default UsersPageContainer;