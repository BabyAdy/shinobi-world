import React from 'react';
import { motion } from 'framer-motion';
import { chaptersData } from '../data/chaptersData';
import Navbar from '../components/Navbar';

const ChapterDetails = ({ id }) => {
  const chapter = chaptersData.find(c => c.id === id);

  if (!chapter) return (
    <div className="min-h-screen bg-black flex items-center justify-center text-white italic text-2xl font-black">
      Scroll not found in the archives...
    </div>
  );

  return (
    <div className="min-h-screen bg-black pt-32 pb-20 px-10 text-white font-inter">
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative max-w-7xl mx-auto bg-neutral-900/40 backdrop-blur-2xl border border-white/10 p-12 rounded-2xl shadow-2xl"
      >
        {/* Back Button */}
        <button
          onClick={() => window.location.hash = '#chapters'}
          className="absolute top-6 left-6 text-white/40 hover:text-shinobi-orange uppercase text-[10px] font-black tracking-[0.3em] flex items-center gap-2 transition-all"
        >
          <span className="text-lg">←</span> Back to Chapters
        </button>

        {/* Header Section */}
        <div className="flex flex-col md:flex-row gap-16 items-center mb-16 border-b border-white/5 pb-12">
          <div className="w-64 h-80 relative group overflow-hidden rounded-xl border-2 border-white/10 shadow-2xl shadow-shinobi-orange/10">
            <img 
              src={chapter.avatar} 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
              alt={chapter.name} 
            />
          </div>
          <div className="flex-1">
            <h2 className="text-6xl md:text-8xl font-black text-white mb-6 italic uppercase leading-none tracking-tighter">
              {chapter.name.split(' ')[0]} <br/>
              <span className="text-shinobi-orange">
                {chapter.name.split(' ').slice(1).join(' ')}
              </span>
            </h2>
            
            <div className="flex flex-wrap gap-10">
               <div>
                  <span className="text-white/20 font-black uppercase tracking-[0.3em] text-[10px] block mb-2">Current Status</span>
                  <p className={`font-black uppercase tracking-widest text-sm ${chapter.status === 'Ongoing' ? 'text-emerald-400' : 'text-cyan-400'}`}>
                    {chapter.status}
                  </p>
               </div>
               <div>
                  <span className="text-white/20 font-black uppercase tracking-[0.3em] text-[10px] block mb-2">Series Range</span>
                  <p className="text-white font-black uppercase tracking-widest text-sm">
                    {chapter.range}
                  </p>
               </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
           {/* Left Sidebar: Overview */}
           <div className="lg:col-span-4">
              <span className="text-white/20 font-black uppercase tracking-[0.3em] text-[10px] block mb-4 italic border-b border-white/5 pb-2">
                Brief Overview
              </span>
              <p className="text-white/60 italic leading-relaxed text-sm bg-white/5 p-6 rounded-lg border-l-4 border-shinobi-orange/50">
                "{chapter.description}"
              </p>
           </div>

           {/* Main Column: Full Story */}
           <div className="lg:col-span-8 lg:px-8 lg:border-l border-white/5">
              <span className="text-white/20 font-black uppercase tracking-[0.3em] text-[10px] block mb-6 italic border-b border-white/5 pb-2">
                The Complete Chronicles
              </span>
              <div className="prose prose-invert max-w-none">
                <p className="text-white/90 leading-relaxed font-medium tracking-wide text-lg first-letter:text-6xl first-letter:font-black first-letter:text-shinobi-orange first-letter:mr-3 first-letter:float-left first-letter:leading-none">
                  {chapter.story}
                </p>
              </div>
           </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ChapterDetails;