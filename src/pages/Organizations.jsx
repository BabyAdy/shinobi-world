import React from 'react';
import { motion } from 'framer-motion';
import { organizationsData } from '../data/organizationsData';
import Navbar from '../components/Navbar';

const Organizations = () => {
  return (
    <div className="min-h-screen bg-black pt-32 pb-20 px-10">
      <Navbar />
      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto"
      >
        {organizationsData.map((org) => (
          <motion.div
            key={org.id}
            whileHover={{ y: -10 }}
            onClick={() => window.location.hash = `#organization/${org.id}`}
            className="cursor-pointer group flex items-center gap-10 bg-neutral-900/30 p-10 border border-white/5 rounded-3xl hover:border-red-600/30 transition-all"
          >
            <div className="w-32 h-32 flex-shrink-0">
              <img src={org.image} alt={org.name} className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(255,0,0,0.2)]" />
            </div>
            <div>
              <h3 className="text-4xl font-black italic uppercase tracking-tighter text-white group-hover:text-red-500 transition-colors">{org.name}</h3>
              <p className="text-[10px] uppercase font-bold text-white/30 tracking-widest mt-2 italic">Status: <span className="text-white/70">{org.status}</span></p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Organizations;