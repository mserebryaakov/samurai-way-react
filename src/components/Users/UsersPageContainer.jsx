import { follow, unfollow, toggleIsFollowingProgress, getUsersThunkCreator, switchPageGetUsersThunkCreator, followThunkCreator, unfollowThunkCreator } from '../../redux/users-reducer'
import UsersPage from './UsersPage';
import { connect } from 'react-redux';
import React from 'react';
import UserProfile from './UserProfile/UserProfile';
import {withAuthRedirect} from '../hoc/withAuthRedirect'
import { compose } from 'redux';
import {getAllUsersProfilesSelector, getPageSizeSelector, getTotalUserCountSelector, getCurrentPageSelector, getIsFetchingSelector, getIsFollowingProgressSelector} from '../../selectors/userPageSelector'

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
        allUsersProfiles: getAllUsersProfilesSelector(state),
        pageSize: getPageSizeSelector(state),
        totalUserCount: getTotalUserCountSelector(state),
        currentPage: getCurrentPageSelector(state),
        isFetching: getIsFetchingSelector(state),
        isFollowingProgress: getIsFollowingProgressSelector(state)
    }
}

export default compose(
    connect(mapStateToProps, {unfollow,follow,toggleIsFollowingProgress,getUsersThunkCreator,
        switchPageGetUsersThunkCreator,followThunkCreator,unfollowThunkCreator}),
    withAuthRedirect
)(UsersPageAPIContainer)