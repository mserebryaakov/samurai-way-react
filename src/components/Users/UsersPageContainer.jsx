import { followActionCreater, setUsersActionCreater, setCurrentPageActionCreater, setUsersTotalCountActionCreater } from '../../redux/users-reducer'
import UsersPage from './UsersPage'
import { connect } from 'react-redux';

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

const UsersPageContainer = connect(mapStateToProps, mapDispatchToProps)(UsersPage);


export default UsersPageContainer;