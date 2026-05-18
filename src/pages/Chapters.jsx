import React from 'react';
import { motion } from 'framer-motion';
import { chaptersData } from '../data/chaptersData';
import Navbar from '../components/Navbar';

const Chapters = () => {
  return (
    <div className="min-h-screen bg-black pt-32 pb-20 px-10">
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-7xl mx-auto mt-20">
        {chaptersData.map((chap) => (
          <motion.div
            key={chap.id}
            whileHover={{ scale: 1.05 }}
            onClick={() => window.location.hash = `#chapters/${chap.id}`}
            className="cursor-pointer group flex gap-8 bg-neutral-900/40 p-8 border border-white/5 rounded-2xl hover:border-shinobi-orange/40 transition-all"
          >
            <div className="w-32 h-32 flex-shrink-0 overflow-hidden rounded-xl border-2 border-white/10 group-hover:border-shinobi-orange/50 transition-all">
              <img src={chap.avatar} alt={chap.name} className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-black text-white group-hover:text-shinobi-orange transition-colors mb-2 italic tracking-tighter uppercase">{chap.name}</h3>
              <div className="space-y-1 mb-4">
                <p className="text-[10px] uppercase font-bold text-white/40">Status: <span className={chap.status === 'Ongoing' ? 'text-emerald-400' : 'text-cyan-400'}>{chap.status}</span></p>
                <p className="text-[10px] uppercase font-bold text-white/40">Range: <span className="text-white/80">{chap.range}</span></p>
              </div>
              <p className="text-xs text-white/60 font-medium italic line-clamp-2">"{chap.description}"</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Chapters;