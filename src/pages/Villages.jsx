import React from 'react';
import { motion } from 'framer-motion';
import { villagesData } from '../data/villagesData';
import Navbar from '../components/Navbar';

const Villages = () => {
  const handleVillageSelect = (id) => {
    window.location.hash = `#villages/${id}`;
  };

  return (
    <div className="min-h-screen bg-black pt-32 pb-20 px-10">
      <Navbar />
      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        className="grid grid-cols-2 md:grid-cols-3 gap-12 max-w-7xl mx-auto mt-10"
      >
        {villagesData.map((village) => (
          <motion.div
            key={village.id}
            whileHover={{ scale: 1.05, y: -10 }}
            onClick={() => handleVillageSelect(village.id)}
            className="cursor-pointer group relative flex flex-col items-center bg-neutral-900/40 p-12 border border-white/5 rounded-2xl hover:border-shinobi-orange/50 transition-all shadow-2xl"
          >
            <div className="w-40 h-40 mb-8">
              <img src={village.symbol} alt={village.name} className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(255,107,0,0.2)] group-hover:drop-shadow-[0_0_25px_rgba(255,107,0,0.5)] transition-all" />
            </div>
            <h3 className="text-white font-black tracking-[0.3em] uppercase text-center group-hover:text-shinobi-orange transition-colors">{village.name}</h3>
            <p className="text-[10px] text-white/30 uppercase font-bold mt-2 tracking-widest">{village.country}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Villages;