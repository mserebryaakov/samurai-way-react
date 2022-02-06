import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import MainPage from './components/MainPage/MainPage';
import MessagePage from './components/MessagePage/MessagePage';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">

        <Header />

        <Navbar />

        <div className="app-wrapper-content">
          <Routes>
            <Route path="/profile" element={<MainPage />} />
            <Route path="/message" element={<MessagePage />} />
          </Routes>
        </div>

        {/*<MainPage />*/}
        {/*<MessagePage />*/}
      </div>
    </BrowserRouter>
  );
}

export default App;
