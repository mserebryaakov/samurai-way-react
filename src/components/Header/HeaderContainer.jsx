import { setUserData } from '../../redux/auth-reducer'
import { connect } from 'react-redux';
import React from 'react';
import * as axios from 'axios';
import Header from './Header'

class HeaderAPIContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, { withCredentials: true }).then(response => {
            if (response.data.resultCode === 0) {
                let { id, login, email } = response.data.data;
                this.props.setUserData(id, email, login);
            }
        });
    }

    render() {
        return (
            <Header login={this.props.login}
                isAuth={this.props.isAuth} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth
    }
}

const HeaderContainer = connect(mapStateToProps, { setUserData })(HeaderAPIContainer);


export default HeaderContainer;