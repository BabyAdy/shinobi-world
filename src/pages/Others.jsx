import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

const Others = () => {
  return (
    <div className="h-screen bg-black flex flex-col items-center justify-center text-white overflow-hidden">
      <Navbar />
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: [0.8, 1.1, 1], opacity: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        className="text-center"
      >
        <h2 className="text-8xl font-black italic tracking-tighter text-shinobi-orange drop-shadow-[0_0_30px_rgba(255,107,0,0.5)]">
          COMING SOON
        </h2>
        <p className="mt-4 text-white/30 uppercase font-black tracking-[1em] text-xs">The scroll is being written...</p>
      </motion.div>
    </div>
  );
};

export default Others;