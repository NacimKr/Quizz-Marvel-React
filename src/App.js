import './App.css';
import Header from './components/header/Header';
import Welcome from './components/welcome/Welcome';
import Connect from './components/isConnect/Connect';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from './components/errorPage/ErrorPage';
import { IconContext } from "react-icons";

function App() {
  return (
    <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/connect" element={<Connect />} />
        <Route path="/*" element={<ErrorPage />} />
        {/*<Route path="/error-page" element={<ErrorPage />} /> */}
      </Routes>
      
    </BrowserRouter>
    </IconContext.Provider>
  );
}

export default App;
