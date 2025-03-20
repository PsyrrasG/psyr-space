import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function SuccessMessage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 5000);
    return () => clearTimeout(timer); // Cleanup the timer
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-left px-10 lg:px-0 lg:w-1/2"
      >
        <h1 className="text-xl lg:text-5xl font-bold text-violet-700 mb-4">Message sent!</h1>
        <p className="text-lg lg:text-2xl text-gray-600">Thank you for reaching out. I'll get back to you soon.</p>
        <p className="text-base lg:text-xl text-gray-500 mt-4 animate-pulse">You will be redirected to the home page in a few seconds...</p>
      </motion.div>
    </div>
  );
}