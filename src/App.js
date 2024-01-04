// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { Provider } from 'react-redux';
import { Store } from './config/store';
import Berita from './pages/Berita';
import Artikel from './pages/Artikel';
import Vision from './pages/Vision';
import ChatAi from './pages/ChatAi';
import './App.css';
import Subartikel from './pages/content/Subartikel';
import Input from './component/Input';
import DetailArtikel from './pages/DetailArtikel';
import Sentimen from './pages/Sentimen';
import TambahReviewForm from './component/Sentimen/from';
import Ulasan from './pages/Ulasan';

function App() {
  return (
    <Provider store={Store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artikel" element={<Artikel />} />
          <Route path="/Berita" element={<Berita />} />
          <Route path="/input" element={<Input />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/chatbot" element={<ChatAi />} />
          <Route path="/ulasan" element={<Ulasan/> } />
          <Route path="/sentimen" element={<Sentimen />} />
          <Route path="/tambah-review" element={<TambahReviewForm />} />
          {/* <Route path="/artikel/:id" element={<Subartikel/>} /> */}
          <Route path="/artikel/:JudulArtikel" element={<DetailArtikel/>} />
{/* // Tambahkan rute untuk ArtikelByID */}
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
