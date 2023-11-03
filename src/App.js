// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { Provider } from 'react-redux';
import { Store } from './config/store';
import Berita from './pages/Artikel';
import Artikel from './pages/Artikel';
import Vision from './pages/Vision';



function App() {
  return (
    <>
    <Provider store={Store}>    
      <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/artikel" element={<Artikel />}/>
        <Route path="/Berita" element={<Berita />}/>
        <Route path="/vision" element={<Vision />}/>
      </Routes>
    </Router>
    </Provider>
    </>
  );
}

export default App;
