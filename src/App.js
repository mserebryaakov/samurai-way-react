import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import MessagePageContainer from './components/MessagePage/MessagePageContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPageContainer from './components/MainPage/MainPageContainer';

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">

        <Header />

        <Navbar />

        <div className="app-wrapper-content">
          <Routes>
            <Route path="/profile" element={<MainPageContainer store={props.store} />} />
            <Route path="/message/*" element={<MessagePageContainer store={props.store} />} />
          </Routes>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
