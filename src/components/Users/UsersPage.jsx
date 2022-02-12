import s from './UsersPage.module.css'
import UserProfile from './UserProfile/UserProfile'
import React from 'react'

function UsersPage(props) {

    let profileElements = props.allUsersProfiles
        .map(element => <UserProfile state={element} follow={props.follow} key={element.id}/>)

    return (
        <div className={s.content}>
            {profileElements}
        </div>
    );
}

export default UsersPage;