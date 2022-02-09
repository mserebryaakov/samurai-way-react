import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import MainPage from './components/MainPage/MainPage';
import MessagePage from './components/MessagePage/MessagePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">

        <Header />

        <Navbar />

        <div className="app-wrapper-content">
          <Routes>
            <Route path="/profile" element={<MainPage
              state={props.state.mainPage}
              dispatch={props.dispatch} />} />
            <Route path="/message/*" element={<MessagePage 
              state={props.state.messagePage}
              dispatch={props.dispatch} />} />
          </Routes>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
