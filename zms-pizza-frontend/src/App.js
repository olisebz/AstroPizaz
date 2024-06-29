import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/homePage/Home.js';
import Admin from './pages/adminPage/Admin.js';
import PayPage from './pages/payPage/PayPage.js';
import ErrorPage from './pages/errorPage/Error.js';
import './App.css';

import Navbar from './components/Navbar.js';


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/pay" element={<PayPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
