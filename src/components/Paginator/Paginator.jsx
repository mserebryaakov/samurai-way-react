import s from './Paginator.module.css'
import React from 'react'

let Paginator = (props) => {
    let pageCount = Math.ceil(props.totalUserCount / props.pageSize);
    return (
        <div className={s.paginator}>
            {((props.currentPage - 1) !== 0) &&
                <span onClick={() => { props.updateCurrentPage(props.currentPage - 1) }}>Назад </span>}
            <span>{props.currentPage}</span>
            <span>...</span>
            <span>{pageCount - 1}</span>
            {((props.currentPage) !== (pageCount)) &&
                <span onClick={() => { props.updateCurrentPage(props.currentPage + 1) }}> Вперед</span>}
        </div>
    );
}

export default Paginator;