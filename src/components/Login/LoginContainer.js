import LoginPage from './LoginPage'
import { connect } from 'react-redux';
import React from 'react';
import {loginThunkCreator} from '../../redux/auth-reducer'
import { compose } from 'redux';

class LoginPageAPIContainer extends React.Component {
    render() {
        return (
            <LoginPage auth={this.props.auth} loginThunkCreator={this.props.loginThunkCreator}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {auth: state.auth.isAuth};
}

export default compose(
    connect(mapStateToProps, { loginThunkCreator })
)(LoginPageAPIContainer)