import { followActionCreater, setUsersActionCreater } from '../../redux/users-reducer'
import UsersPage from './UsersPage'
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        allUsersProfiles: state.usersPage.allUsersProfiles
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userID) => {
            dispatch(followActionCreater(userID));
        },
        setUser: (allUsersProfiles) => {
            dispatch(setUsersActionCreater(allUsersProfiles));
        }
    }
}

const UsersPageContainer = connect(mapStateToProps, mapDispatchToProps)(UsersPage);


export default UsersPageContainer;