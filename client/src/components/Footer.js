import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-black text-white pt-10 pb-20 justify-end"
    >
      <div className="flex flex-col items-center mx-auto text-center
                      text-sm md:text-base font-Raleway">
        <div className="">
          <p>&copy; {new Date().getFullYear()}. All rights reserved.</p>
          <hr className='border-gray-400 my-3'/>
          <div className="flex flex-row gap-1 items-center justify-center">
            <p>Built using React</p>
            <img className='inline h-4' src='/logo512.png'/>
            <p>& Tailwind CSS </p>
            <img className='inline h-3' src='/tailwindcss-mark.svg'/>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}