import s from './UsersPage.module.css'
import UserProfile from './UserProfile/UserProfile'
import React from 'react'
import * as axios from 'axios'

class UsersPage extends React.Component {

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

        let pageCount = Math.ceil(this.props.totalUserCount / this.props.pageSize);

        return (
            <div className={s.content}>
                <div>
                    <span onClick={() => { this.updateCurrentPage(this.props.currentPage - 1) }}>Назад </span>
                    <span>{this.props.currentPage}</span>
                    <span>...</span>
                    <span>{pageCount - 1}</span>
                    <span onClick={() => { this.updateCurrentPage(this.props.currentPage + 1) }}> Вперед</span>
                </div>
                {/* { pages.map ( element => {
                    return <span className={this.props.currentPage === element && s.selectedPage}
                    onClick={ () => { this.updateCurrentPage(element)}}>{element}</span>
                })} */}
                {this.createUsersElements()}
            </div>
        );
    }
}

export default UsersPage;