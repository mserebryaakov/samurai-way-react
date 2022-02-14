import s from './UsersPage.module.css'
import React from 'react'

let UsersPage = (props) => {
    let pageCount = Math.ceil(props.totalUserCount / props.pageSize);

    return (
        <div className={s.content}>
            <div>
                <span onClick={() => { props.updateCurrentPage(props.currentPage - 1) }}>Назад </span>
                <span>{props.currentPage}</span>
                <span>...</span>
                <span>{pageCount - 1}</span>
                <span onClick={() => { props.updateCurrentPage(props.currentPage + 1) }}> Вперед</span>
            </div>
            {props.createUsersElements()}
        </div>
    );
}

export default UsersPage;