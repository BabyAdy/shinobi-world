import React from 'react';
import { motion } from 'framer-motion';
import { beastsData } from '../data/beastsData';
import { charactersData } from '../data/charactersData';
import Navbar from '../components/Navbar';

const statusColors = {
  "alive": "border-emerald-500/50 text-emerald-400 bg-emerald-500/10 shadow-[0_0_8px_rgba(100,245,146,0.3)]",
  "sealed": "border-red-600/50 text-red-500 bg-red-600/10 shadow-[0_0_8px_rgba(220,38,38,0.3)]",
  "free": "border-cyan-400/50 text-cyan-400 bg-cyan-400/10 shadow-[0_0_8px_rgba(34,211,238,0.3)]",
  "deceased": "border-gray-600/50 text-gray-500 bg-gray-600/10 shadow-[0_0_8px_rgba(156,163,175,0.3)]"
};

const affiliationIcons = {
  "konohagakure": "🍃",
  "sunagakure": "⏳",
  "kumogakure": "☁️",
  "kirigakure": "🌫️",
  "iwagakure": "⛰️",
};

const abilityColors = {
  "tailed beast bomb": "border-red-600/50 text-red-600 bg-red-600/10 shadow-[0_0_8px_rgba(220,38,38,0.3)]",
  "negative emotions sensing": "border-purple-500/50 text-purple-400 bg-purple-500/10 shadow-[0_0_8px_rgba(147,51,234,0.3)]",
  "sand manipulation": "border-amber-600/50 text-amber-500 bg-amber-600/10 shadow-[0_0_8px_rgba(211,176,54,0.3)]",
  "magnet release": "border-zinc-500/50 text-zinc-400 bg-zinc-500/10 shadow-[0_0_8px_rgba(156,163,175,0.3)]"
};

const defaultTagStyle = "border-white/10 text-white/50 bg-white/5";

const BeastDetails = ({ id }) => {
  const beast = beastsData.find(b => b.id === id);
  
  if (!beast) return <div className="min-h-screen bg-black flex items-center justify-center text-white italic">Beast not found in the scrolls...</div>;

  const jinchurikiChar = charactersData.find(c => c.name.toLowerCase() === beast.currentJinchuriki.toLowerCase());

  return (
    <div className="min-h-screen bg-black pt-32 pb-20 px-10 text-white">
      <Navbar />
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }} 
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-7xl mx-auto bg-neutral-900/40 backdrop-blur-2xl border border-white/10 p-12 relative rounded-2xl shadow-2xl"
      >
        <button 
          onClick={() => window.location.hash = '#beast-tails'} 
          className="absolute top-6 left-6 text-white/40 hover:text-shinobi-orange uppercase text-[10px] font-black tracking-[0.3em] flex items-center gap-2 transition-all"
        >
          <span className="text-lg">←</span> Back to Beasts
        </button>

        {/* Header Section */}
        <div className="flex flex-col md:flex-row gap-16 items-center mb-20 border-b border-white/5 pb-16">
          <div className="w-64 h-64 relative group">
            <img 
              src={beast.image} 
              className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(255,107,0,0.3)]" 
              alt={beast.name} 
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-6xl md:text-8xl font-black text-white italic uppercase leading-none mb-4 tracking-tighter">
              <span className="text-shinobi-orange">{beast.name.split(' ')[0]}</span> <br/>
              {beast.name.split(' ').slice(1).join(' ')}
            </h2>
            <div className="inline-block px-6 py-2 border border-shinobi-orange/30 bg-shinobi-orange/10 rounded-full">
              <span className="text-shinobi-orange font-black uppercase tracking-[0.4em] text-xs">
                {beast.tails} Tails Construct
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Info */}
          <div className="lg:col-span-3 space-y-8">
            <div>
              <span className="text-white/20 font-black uppercase tracking-[0.3em] text-[10px] block mb-2 italic border-l-2 border-shinobi-orange/30 pl-3">Tails Count</span>
              <p className="text-white font-bold text-xl">{beast.tails}</p>
            </div>
            <div>
              <span className="text-white/20 font-black uppercase tracking-[0.3em] text-[10px] block mb-2 italic border-l-2 border-shinobi-orange/30 pl-3">Current Status</span>
              <div className={`inline-block px-4 py-1.5 border rounded-sm text-[10px] font-black uppercase tracking-widest mt-1 ${statusColors[beast.status.toLowerCase().split(' / ')[0]] || defaultTagStyle}`}>
                {beast.status}
              </div>
            </div>
            <div>
              <span className="text-white/20 font-black uppercase tracking-[0.3em] text-[10px] block mb-2 italic border-l-2 border-shinobi-orange/30 pl-3">Affiliation</span>
              <div className="flex items-center gap-3 text-white/90 font-bold">
                <span className="text-xl">{affiliationIcons[beast.affiliation.toLowerCase()] || "🌐"}</span>
                {beast.affiliation}
              </div>
            </div>
          </div>

          {/* Middle Column: Description */}
          <div className="lg:col-span-6 px-4 border-x border-white/5">
            <span className="text-white/20 font-black uppercase tracking-[0.3em] text-[10px] block mb-4 italic border-b border-white/5 pb-2">Ancient Scrolls Description</span>
            <p className="text-white/80 leading-relaxed font-medium tracking-wide first-letter:text-4xl first-letter:font-black first-letter:text-shinobi-orange first-letter:mr-2 first-letter:float-left italic">
              "{beast.description}"
            </p>
          </div>

          {/* Right Column: Abilities & Jinchuriki */}
          <div className="lg:col-span-3 space-y-12">
            {/* Jinchuriki Card */}
            <div>
              <span className="text-white/20 font-black uppercase tracking-[0.3em] text-[10px] block mb-6 italic border-b border-white/5 pb-2">Current Jinchūriki</span>
              <motion.div 
                whileHover={{ x: 5, backgroundColor: 'rgba(255,107,0,0.05)' }}
                onClick={() => jinchurikiChar && (window.location.hash = `#character/${jinchurikiChar.id}`)}
                className={`flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5 transition-all ${jinchurikiChar ? 'cursor-pointer hover:border-shinobi-orange/40' : ''}`}
              >
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-shinobi-orange/30 bg-black flex-shrink-0">
                  <img 
                    src={jinchurikiChar?.mainAvatar || "https://i.imgur.com/Ar7Wz3A.png"} 
                    className="w-full h-full object-cover" 
                    alt="Jinchuriki" 
                  />
                </div>
                <div>
                  <span className="text-xs font-black uppercase tracking-tighter block">{beast.currentJinchuriki}</span>
                  <span className="text-[9px] text-shinobi-orange uppercase font-black tracking-widest">Vessel</span>
                </div>
              </motion.div>
            </div>

            {/* Abilities List */}
            <div>
              <span className="text-white/20 font-black uppercase tracking-[0.3em] text-[10px] block mb-6 italic border-b border-white/5 pb-2">Unique Abilities</span>
              <div className="space-y-4">
                {beast.abilities.map((abil, i) => {
                  const style = abilityColors[abil.toLowerCase()] || defaultTagStyle;
                  return (
                    <motion.div 
                      key={i} 
                      whileHover={{ x: 5, scale: 1.02 }}
                      className={`flex items-center px-5 py-4 border rounded-md transition-all ${style}`}
                    >
                      <span className="font-black uppercase text-[10px] tracking-[0.2em]">{abil}</span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Check (if you add it to beastsData later) */}
        {beast.gallery && beast.gallery.length > 0 && (
          <div className="mt-24 pt-12 border-t border-white/5">
            <h4 className="text-white/20 font-black uppercase tracking-[0.5em] text-sm mb-12 text-center italic">Beast Manifestations</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {beast.gallery.map((item, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="relative aspect-video bg-black/40 border border-white/10 overflow-hidden rounded-lg group shadow-2xl"
                >
                  {item.type === 'image' ? (
                    <img src={item.url} alt="Gallery item" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                  ) : (
                    <iframe 
                      src={item.url}
                      className="w-full h-full opacity-60 group-hover:opacity-100 transition-opacity"
                      title="Beast Power"
                      frameBorder="0"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                    ></iframe>
                  )}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-shinobi-orange/40 transition-all duration-500 pointer-events-none" />
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default BeastDetails;