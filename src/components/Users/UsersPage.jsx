import s from './UsersPage.module.css'
import React from 'react'
import Preloader from '../Preloader/Preloader'
import Paginator from '../Paginator/Paginator'

let UsersPage = (props) => {
    return (
        <div className={s.content}>
            <Preloader isFetching={props.isFetching} />
            <Paginator totalUserCount={props.totalUserCount}
                pageSize={props.pageSize}
                updateCurrentPage={props.updateCurrentPage}
                currentPage={props.currentPage} />
            {props.createUsersElements()}
        </div>
    );
}

export default UsersPage;