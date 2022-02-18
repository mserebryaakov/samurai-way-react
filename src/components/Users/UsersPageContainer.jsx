import { follow, setUsers, setCurrentPage, setUsersTotalCount,toggleIsFetching, unfollow} from '../../redux/users-reducer'
import UsersPage from './UsersPage';
import { connect } from 'react-redux';
import React from 'react';
import UserProfile from './UserProfile/UserProfile';
import {usersAPI} from '../../api/api'

class UsersPageAPIContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        usersAPI.setUsersRequest(this.props.currentPage,this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
            this.props.setUsersTotalCount(data.totalCount);
        });
    }

    createUsersElements = () => {
        return (
            this.props.allUsersProfiles
                .map(element => <UserProfile state={element} follow={this.props.follow} unfollow={this.props.unfollow} key={element.id} />)
        )
    }

    updateCurrentPage = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true);
        usersAPI.currentPageRequest(pageNumber,this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items)
        });
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
        isFetching: state.usersPage.isFetching
    }
}

const UsersPageContainer = connect(mapStateToProps, {
    unfollow,
    follow,
    setUsers,
    setCurrentPage,
    setUsersTotalCount,
    toggleIsFetching
})(UsersPageAPIContainer);


export default UsersPageContainer;