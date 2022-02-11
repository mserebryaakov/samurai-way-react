import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import MessagePageContainer from './components/MessagePage/MessagePageContainer';
import { Routes, Route } from "react-router-dom";
import MainPageContainer from './components/MainPage/MainPageContainer';

function App() {
  return (
      <div className="app-wrapper">

        <Header />

        <Navbar />

        <div className="app-wrapper-content">
          <Routes>
            <Route path="/profile" element={<MainPageContainer />} />
            <Route path="/message/*" element={<MessagePageContainer />} />
          </Routes>
        </div>

      </div>
  );
}

export default App;
