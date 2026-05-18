import React from 'react';
import { motion } from 'framer-motion';
import { villagesData } from '../data/villagesData';
import { charactersData } from '../data/charactersData';
import Navbar from '../components/Navbar';

const kageRoleColors = {
  "hokage": "border-orange-500/50 text-orange-500 bg-orange-500/10 shadow-[0_0_8px_rgba(249,115,22,0.3)]",
  "kazekage": "border-red-600/50 text-red-500 bg-red-600/10 shadow-[0_0_8px_rgba(220,38,38,0.3)]",
  "mizukage": "border-blue-500/50 text-blue-400 bg-blue-500/10 shadow-[0_0_8px_rgba(59,130,246,0.3)]",
  "raikage": "border-yellow-400/50 text-yellow-400 bg-yellow-400/10 shadow-[0_0_8px_rgba(234,179,8,0.3)]",
  "tsuchikage": "border-amber-600/50 text-amber-600 bg-amber-600/10 shadow-[0_0_8px_rgba(211,176,54,0.3)]",
};

const functionColors = {
  "first": "border-emerald-500/50 text-emerald-500 bg-emerald-500/10",
  "second": "border-blue-500/50 text-blue-500 bg-blue-500/10",
  "third": "border-gray-400/50 text-gray-400 bg-gray-400/10",
  "fourth": "border-yellow-600/50 text-yellow-600 bg-yellow-600/10",
  "fifth": "border-pink-500/50 text-pink-500 bg-pink-500/10",
  "sixth": "border-cyan-500/50 text-cyan-500 bg-cyan-500/10",
  "seventh": "border-orange-500/50 text-orange-500 bg-orange-500/10",
};

const VillageDetails = ({ id }) => {
  const village = villagesData.find(v => v.id === id);
  if (!village) return <div className="text-white">Village not found</div>;

  const getFunctionStyle = (func) => {
    const lowerFunc = func.toLowerCase();
    const key = Object.keys(functionColors).find(k => lowerFunc.includes(k));
    return functionColors[key] || "border-white/10 text-white/50 bg-white/5";
  };

  return (
    <div className="min-h-screen bg-black pt-32 pb-20 px-10 text-white">
      <Navbar />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-7xl mx-auto bg-neutral-900/40 p-12 rounded-2xl border border-white/10 shadow-2xl backdrop-blur-xl">
        <button onClick={() => window.location.hash = '#villages'} className="text-white/40 hover:text-shinobi-orange uppercase text-[10px] font-black tracking-widest mb-12 block">← Back to Villages</button>
        
        <div className="flex flex-col md:flex-row gap-16 items-center mb-20 border-b border-white/5 pb-16">
          <img src={village.symbol} alt="Village Symbol" className="w-48 h-48 object-contain drop-shadow-[0_0_30px_rgba(255,107,0,0.3)]" />
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black italic uppercase tracking-tighter leading-none">{village.name}</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Info Column */}
          <div className="lg:col-span-3 space-y-8">
            <div>
              <span className="text-white/20 font-black uppercase tracking-widest text-[9px] block mb-3 italic border-l-2 border-shinobi-orange/30 pl-3">Leader Role</span>
              <span className={`px-3 py-1 rounded-sm text-[10px] font-black uppercase tracking-widest border ${kageRoleColors[village.leader.toLowerCase()] || "border-white/10 text-white/50"}`}>
                {village.leader}
              </span>
            </div>
            <div>
              <span className="text-white/20 font-black uppercase tracking-widest text-[9px] block mb-2 italic border-l-2 border-shinobi-orange/30 pl-3">Country</span>
              <p className="text-white/90 text-[10px] font-black uppercase tracking-widest">{village.country}</p>
            </div>
            <div>
              <span className="text-white/20 font-black uppercase tracking-widest text-[9px] block mb-2 italic border-l-2 border-shinobi-orange/30 pl-3">Status</span>
              <p className="text-emerald-400 text-[10px] font-black uppercase tracking-widest">{village.status}</p>
            </div>

            {/* Kage List Section */}
            <div className="pt-8 border-t border-white/5">
              <span className="text-white/20 font-black uppercase tracking-widest text-[9px] block mb-6 italic border-b border-white/5 pb-2">
                {village.name} - {village.kageTitle} List
              </span>
              <div className="space-y-3">
                {village.kageList?.map((kage) => (
                  <div key={kage.id} className="flex items-center gap-3 bg-white/5 p-2 rounded-lg border border-white/5 group transition-all hover:border-shinobi-orange/30">
                    <img src={kage.avatar} className="w-8 h-8 rounded-full object-cover border border-white/10" alt="" />
                    <div className="flex-1 min-w-0">
                      <p 
                        onClick={() => window.location.hash = `#character/${kage.id}`}
                        className="text-[10px] font-black uppercase tracking-tighter truncate cursor-pointer hover:text-shinobi-orange transition-colors"
                      >
                        {kage.name}
                      </p>
                      <p className={`text-[7px] font-bold uppercase tracking-widest mt-0.5 px-1.5 py-0.5 border rounded-xs inline-block ${getFunctionStyle(kage.function)}`}>
                        {kage.function}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="lg:col-span-6 border-x border-white/5 px-8">
             <span className="text-white/20 font-black uppercase tracking-widest text-[9px] block mb-4 italic border-b border-white/5 pb-2">Description</span>
             <p className="text-white/70 text-xs leading-relaxed italic first-letter:text-3xl first-letter:text-shinobi-orange first-letter:font-black">{village.description}</p>
          </div>

          {/* Notable Residents */}
          <div className="lg:col-span-3">
            <span className="text-white/20 font-black uppercase tracking-widest text-[9px] block mb-6 italic border-b border-white/5 pb-2">Notable Residents</span>
            <div className="space-y-4">
              {charactersData.filter(c => c.affiliation.includes(village.name)).map(char => (
                <div key={char.id} onClick={() => window.location.hash = `#character/${char.id}`} className="flex items-center gap-4 bg-white/5 p-3 rounded-lg border border-white/5 cursor-pointer hover:border-shinobi-orange/50 transition-all">
                  <img src={char.mainAvatar} className="w-10 h-10 rounded-full object-cover border border-white/10" alt="" />
                  <span className="text-[10px] font-black uppercase tracking-widest">{char.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Gallery */}
        {village.gallery.length > 0 && (
          <div className="mt-20 pt-10 border-t border-white/5">
            <h4 className="text-white/20 font-black uppercase tracking-[0.5em] text-center mb-10 italic">Village Scenery</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {village.gallery.map((img, idx) => (
                <div key={idx} className="aspect-video rounded-xl overflow-hidden border border-white/10 opacity-60 hover:opacity-100 transition-opacity">
                  <img src={img.url} className="w-full h-full object-cover" alt="" />
                </div>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default VillageDetails;