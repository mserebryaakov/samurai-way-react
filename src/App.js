import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import MessagePageContainer from './components/MessagePage/MessagePageContainer';
import { Route } from "react-router-dom";
import MainPageContainer from './components/MainPage/MainPageContainer';
import UsersPageContainer from './components/Users/UsersPageContainer';
import LoginPageContainer from './components/Login/LoginContainer';
import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {initializedAppThunkCreator} from './redux/app-reducer';
import Preloader from './components/Preloader/Preloader';

class App extends React.Component {

  componentDidMount() {
    this.props.initializedAppThunkCreator();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
      <div className="app-wrapper">

        <HeaderContainer />

        <Navbar />

        <div className="app-wrapper-content">
          <Route path="/profile/:userID?" render={() => <MainPageContainer />} />
          <Route path="/message" render={() => <MessagePageContainer />} />
          <Route path="/users" render={() => <UsersPageContainer />} />
          <Route path="/login" render={() => <LoginPageContainer />} />
        </div>

      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return { 
    initialized: state.app.initialized
  };
}

export default compose(
  connect(mapStateToProps, { initializedAppThunkCreator })
)(App)
