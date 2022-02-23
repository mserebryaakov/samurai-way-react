import { connect } from 'react-redux';
import React from 'react';
import {logoutThunkCreator} from '../../redux/auth-reducer';
import Header from './Header'

class HeaderAPIContainer extends React.Component {
    render() {
        return (
            <Header login={this.props.login}
                isAuth={this.props.isAuth}
                logoutThunkCreator={this.props.logoutThunkCreator} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth
    }
}

const HeaderContainer = connect(mapStateToProps, { logoutThunkCreator })(HeaderAPIContainer);


export default HeaderContainer;