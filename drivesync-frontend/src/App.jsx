import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ReactDOM from 'react-dom';
import React from 'react';

import { Sidebar } from './components/Sidebar';
import { Footer } from './components/Footer';


import LoginPage from './pages/LoginPage';
import { Veiculos } from './pages/VeiculosPage';
import { LandingPage } from './pages/LandingPage';
import { Home } from './pages/HomePage';

export default function App() {
  return (
    <div>
      <Sidebar />
      <div style={{ flex: 1, marginTop: '4rem', marginLeft: '16rem' }} >

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/veiculos" element={<Veiculos />} />
        </Routes>

      </div>



      {/*<LandingPage/>*/}

    </div>
  );
}

