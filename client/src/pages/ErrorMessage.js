import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function ErrorMessage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/contact'); // Redirect back to the contact page after 5 seconds
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
        <h1 className="text-xl lg:text-5xl font-bold text-red-600 mb-4">Oops!</h1>
        <p className="text-lg lg:text-2xl text-gray-600">Failed to send your message. Please try again.</p>
        <p className="text-base lg:text-xl text-gray-500 mt-4 animate-pulse">You will be redirected to the contact page in a few seconds...</p>
      </motion.div>
    </div>
  );
}