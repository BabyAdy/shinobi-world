import React from 'react';
import { motion } from 'framer-motion';
import { beastsData } from '../data/beastsData';
import Navbar from '../components/Navbar';

const Beasts = () => {
  return (
    <div className="min-h-screen bg-black pt-32 pb-20 px-10">
      <Navbar />
      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto"
      >
        {beastsData.map((beast) => (
          <motion.div
            key={beast.id}
            whileHover={{ y: -10 }}
            onClick={() => window.location.hash = `#beast-tails/${beast.id}`}
            className="cursor-pointer group relative aspect-square bg-neutral-900/40 p-8 border border-white/10 rounded-3xl flex flex-col items-center justify-center overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-shinobi-orange/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="w-48 h-48 mb-6 relative z-10">
              <img src={beast.image} alt={beast.name} className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(255,107,0,0.3)]" />
            </div>
            <h3 className="text-2xl font-black text-white italic uppercase tracking-tighter group-hover:text-shinobi-orange transition-colors relative z-10">
              {beast.name}
            </h3>
            <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em] mt-2">{beast.tails} Tails</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Beasts;