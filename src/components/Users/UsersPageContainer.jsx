import { followActionCreater, setUsersActionCreater, setCurrentPageActionCreater, setUsersTotalCountActionCreater } from '../../redux/users-reducer'
import UsersPage from './UsersPage';
import { connect } from 'react-redux';
import React from 'react';
import UserProfile from './UserProfile/UserProfile';
import * as axios from 'axios';

class UsersPageAPIContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setUsersTotalCount(response.data.totalCount);
        });
    }

    createUsersElements = () => {
        return (
            this.props.allUsersProfiles
                .map(element => <UserProfile state={element} follow={this.props.follow} key={element.id} />)
        )
    }

    updateCurrentPage = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        });
    }

    render() {
        return (
            <UsersPage totalUserCount={this.props.totalUserCount}
            pageSize={this.props.pageSize} 
            updateCurrentPage={this.updateCurrentPage}
            currentPage={this.props.currentPage}
            createUsersElements={this.createUsersElements}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        allUsersProfiles: state.usersPage.allUsersProfiles,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userID) => {
            dispatch(followActionCreater(userID));
        },
        setUsers: (allUsersProfiles) => {
            dispatch(setUsersActionCreater(allUsersProfiles));
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageActionCreater(currentPage));
        },
        setUsersTotalCount: (totalCount) => {
            dispatch(setUsersTotalCountActionCreater(totalCount))
        }
    }
}

const UsersPageContainer = connect(mapStateToProps, mapDispatchToProps)(UsersPageAPIContainer);


export default UsersPageContainer;