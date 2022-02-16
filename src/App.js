import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import MessagePageContainer from './components/MessagePage/MessagePageContainer';
import { Route } from "react-router-dom";
import MainPageContainer from './components/MainPage/MainPageContainer';
import UsersPageContainer from './components/Users/UsersPageContainer';

function App() {
  return (
    <div className="app-wrapper">

      <HeaderContainer />

      <Navbar />

      <div className="app-wrapper-content">
        <Route path="/profile/:userID?" render={() => <MainPageContainer />} />
        <Route path="/message" render={() => <MessagePageContainer />} />
        <Route path="/users" render={() => <UsersPageContainer />} />
      </div>

    </div>
  );
}

export default App;
