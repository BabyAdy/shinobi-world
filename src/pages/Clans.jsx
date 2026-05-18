import React from 'react';
import { motion } from 'framer-motion';
import { clansData } from '../data/clansData';
import Navbar from '../components/Navbar';

const Clans = () => {
  const handleClanSelect = (clanId) => {
    window.location.hash = `#clans/${clanId}`;
  };

  return (
    <div className="min-h-screen bg-black pt-32 pb-20 px-10">
      <Navbar />
      
      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-7xl mx-auto"
      >
        {clansData.map((clan) => (
          <motion.div
            key={clan.id}
            whileHover={{ scale: 1.05, y: -10 }}
            onClick={() => handleClanSelect(clan.id)}
            className="cursor-pointer group relative flex flex-col items-center bg-neutral-900/40 p-10 border border-white/5 rounded-2xl hover:border-shinobi-orange/50 transition-all shadow-2xl"
          >
            <div className="w-32 h-32 mb-6">
              <img src={clan.image} alt={clan.name} className="w-full h-full object-contain filter drop-shadow-[0_0_10px_rgba(255,107,0,0.2)] group-hover:drop-shadow-[0_0_20px_rgba(255,107,0,0.5)] transition-all" />
            </div>
            <h3 className="text-white font-black tracking-widest uppercase text-center group-hover:text-shinobi-orange transition-colors">{clan.name}</h3>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Clans;