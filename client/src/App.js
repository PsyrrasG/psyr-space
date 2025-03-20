// import './App.css';
import './input.css';

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Suggestions from './pages/Suggestions';
import Contact from './pages/Contact';
import SuccessMessage from './pages/SuccessMessage';
import ErrorMessage from './pages/ErrorMessage';

export default function App() {
  return (
    <Router>
      <div className="bg-white bg-cover bg-center bg-no-repeat flex flex-col min-h-screen font-sans">
        <Navbar />
        <Routes >
            <Route path="/" element={<Home />} />
            <Route path="/suggestions" element={<Suggestions />} />
            <Route path="/contact" element={<Contact />} />   
            <Route path="/contact/success" element={<SuccessMessage />} />  
            <Route path="/contact/error" element={<ErrorMessage />} />   
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}