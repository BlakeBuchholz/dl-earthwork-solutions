import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Services from './pages/Services';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen w-full">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/services" element={<Services />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
