// import './App.css';
import './input.css';

import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Suggestions from './pages/Suggestions';
import Contact from './pages/Contact';
import SuccessMessage from './pages/SuccessMessage';
import ErrorMessage from './pages/ErrorMessage';

function ResetScrolling() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <div className="bg-white bg-cover bg-center bg-no-repeat flex flex-col min-h-screen font-sans">
        <ResetScrolling />
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