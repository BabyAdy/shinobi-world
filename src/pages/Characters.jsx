import React from 'react';
import { motion } from 'framer-motion';
import { charactersData } from '../data/charactersData';
import Navbar from '../components/Navbar';

const Characters = () => {
  const handleCharSelect = (charId) => {
    window.location.hash = `#character/${charId}`;
  };

  return (
    <div className="min-h-screen bg-black pt-32 pb-20 px-10">
      <Navbar />
      
      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        className="grid grid-cols-2 md:grid-cols-5 gap-10 max-w-7xl mx-auto"
      >
        {charactersData.map((char) => (
          <motion.div
            key={char.id}
            whileHover={{ scale: 1.05, y: -10 }}
            onClick={() => handleCharSelect(char.id)}
            className="cursor-pointer group relative aspect-[3/4] bg-neutral-900/50 border border-white/10 overflow-hidden rounded-xl"
          >
            <img src={char.mainAvatar} alt={char.name} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-center">
              <h3 className="text-white font-black tracking-widest uppercase text-xs md:text-sm group-hover:text-shinobi-orange transition-colors drop-shadow-md">{char.name}</h3>
            </div>
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-shinobi-orange/50 transition-all rounded-xl" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Characters;