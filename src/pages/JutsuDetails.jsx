import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// Am eliminat importul de useParams din react-router-dom
import { jutsusData } from '../data/jutsusData';
import { charactersData } from '../data/charactersData';
import Navbar from '../components/Navbar'; // Presupunând că ai o componentă Navbar

// Mappings for Jutsu categories and ranks
const jutsuColors = {
  "ninjutsu": "border-blue-500/50 text-blue-400 bg-blue-500/10 shadow-[0_0_8px_rgba(59,130,246,0.3)]",
  "taijutsu": "border-red-500/50 text-red-400 bg-red-500/10 shadow-[0_0_8px_rgba(239,68,68,0.3)]",
  "dojutsu": "border-purple-500/50 text-purple-400 bg-purple-500/10 shadow-[0_0_8px_rgba(168,85,247,0.3)]",
  "kekkei genkai": "border-green-500/50 text-green-400 bg-green-500/10 shadow-[0_0_8px_rgba(34,197,94,0.3)]",
  "lightning release": "border-yellow-400/50 text-yellow-300 bg-yellow-400/10 shadow-[0_0_8px_rgba(250,204,21,0.3)]",
  "wind release": "border-teal-500/50 text-teal-400 bg-teal-500/10 shadow-[0_0_8px_rgba(20,184,166,0.3)]",
  "fire release": "border-orange-500/50 text-orange-400 bg-orange-500/10 shadow-[0_0_8px_rgba(249,115,22,0.3)]",
  "water release": "border-blue-400/50 text-blue-300 bg-blue-400/10 shadow-[0_0_8px_rgba(96,165,250,0.3)]",
  "earth release": "border-amber-600/50 text-amber-500 bg-amber-600/10 shadow-[0_0_8px_rgba(245,158,11,0.3)]",
  "wind": "border-teal-500/50 text-teal-400 bg-teal-500/10 shadow-[0_0_8px_rgba(20,184,166,0.3)]",
  "fire": "border-orange-500/50 text-orange-400 bg-orange-500/10 shadow-[0_0_8px_rgba(249,115,22,0.3)]",
  "water": "border-blue-400/50 text-blue-300 bg-blue-400/10 shadow-[0_0_8px_rgba(96,165,250,0.3)]",
  "earth": "border-amber-600/50 text-amber-500 bg-amber-600/10 shadow-[0_0_8px_rgba(245,158,11,0.3)]",
  "lightning": "border-yellow-400/50 text-yellow-300 bg-yellow-400/10 shadow-[0_0_8px_rgba(250,204,21,0.3)]",
  "wind (affinity)": "border-teal-500/50 text-teal-400 bg-teal-500/10 shadow-[0_0_8px_rgba(20,184,166,0.3)]",
  "s-rank": "border-red-600/50 text-red-500 bg-red-600/10 shadow-[0_0_8px_rgba(220,38,38,0.3)]",
  "s": "border-red-600/50 text-red-500 bg-red-600/10 shadow-[0_0_8px_rgba(220,38,38,0.3)]", // For single letter rank
  "a-rank": "border-orange-500/50 text-orange-400 bg-orange-500/10 shadow-[0_0_8px_rgba(249,115,22,0.3)]",
  "a": "border-orange-500/50 text-orange-400 bg-orange-500/10 shadow-[0_0_8px_rgba(249,115,22,0.3)]",
  "b-rank": "border-yellow-500/50 text-yellow-400 bg-yellow-500/10 shadow-[0_0_8px_rgba(250,204,21,0.3)]",
  "c-rank": "border-green-500/50 text-green-400 bg-green-500/10 shadow-[0_0_8px_rgba(34,197,94,0.3)]",
  "d-rank": "border-blue-500/50 text-blue-400 bg-blue-500/10 shadow-[0_0_8px_rgba(59,130,246,0.3)]",
  "n/a": "border-gray-500/50 text-gray-400 bg-gray-500/10 shadow-[0_0_8px_rgba(156,163,175,0.3)]",
};

const jutsuIcons = {
  "ninjutsu": "🌀", 
  "taijutsu": "👊", 
  "dojutsu": "👁️", 
  "kekkei genkai": "🧬",
  "lightning release": "⚡", 
  "wind release": "🌬️", 
  "fire release": "🔥",
  "water release": "💧", 
  "earth release": "🪨",
  "wind": "🌬️",
  "fire": "🔥",
  "water": "💧",
  "earth": "🪨",
  "lightning": "⚡",
  "wind (affinity)": "🌬️",
  "sharingan": "https://i.imgur.com/dv8piFl.png",
  "mangekyō sharingan": "https://i.imgur.com/kZtP86r.png",
  "eternal mangekyō sharingan": "https://i.imgur.com/lS4DqLk.png",
  "rinnegan": "https://i.imgur.com/ISu8ah4.png",
  "sage mode": "🐸",
  "amaterasu": "🔥",
  "susanoo": "🛡️",
  "tsukuyomi": "🌑",
  "byakugan": "https://i.imgur.com/4DVK3Sh.png",
  "jōgan": "https://i.imgur.com/6T4V9Pr.png",
  "kokugan": "https://i.imgur.com/JUcCbhm.png",
  "s-rank": "⭐", 
  "a-rank": "🌟", 
  "b-rank": "✨", 
  "c-rank": "💫", 
  "d-rank": "🔹",
};

const JutsuDetails = () => {
  const [id, setId] = useState(null);
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    const extractIdFromHash = () => {
      const hash = window.location.hash;
      const match = hash.match(/^#jutsu\/(.+)$/); // Extrage ID-ul din URL-ul de tip #jutsu/jutsu-id
      if (match && match[1]) {
        setId(match[1]);
      } else {
        setId(null); // Gestionează cazul în care ID-ul nu este găsit sau hash-ul este invalid
      }
    };

    extractIdFromHash(); // Extrage ID-ul la încărcarea inițială a componentei
    window.addEventListener('hashchange', extractIdFromHash); // Ascultă modificările hash-ului

    return () => {
      window.removeEventListener('hashchange', extractIdFromHash); // Curăță event listener-ul la demontare
    };
  }, []);

  const selectedJutsu = jutsusData.find(j => j.id === id);

  if (!selectedJutsu) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-white">
        Jutsu not found
      </div>
    );
  }

  const defaultTagStyle = "border-white/10 text-white/50 bg-white/5 shadow-none";

  // Helper component for displaying info fields with tags
  const InfoField = ({ label, value, mapping, iconMapping, isLink = false }) => {
    if (!value || (Array.isArray(value) && value.length === 0)) return null;

    const finalValues = (typeof value === 'string' && value.includes('/'))
      ? value.split('/').map(v => v.trim())
      : (Array.isArray(value) ? value : [value]);

    return (
      <div className="mb-6 group/field">
        <span className="text-white/30 font-black uppercase tracking-[0.3em] text-[10px] block mb-2 group-hover/field:text-shinobi-orange transition-colors border-l-2 border-shinobi-orange/30 pl-3">
          {label}
        </span>
        <div className="flex flex-wrap gap-2 pl-4">
          {finalValues.map((v, i) => {
            const lowV = v.toLowerCase();
            const style = mapping ? mapping[lowV] || defaultTagStyle : defaultTagStyle;
            const icon = iconMapping ? iconMapping[lowV] : null;

            return (
              <motion.span
                key={i}
                whileHover={{ scale: 1.05 }}
                className={`px-3 py-1.5 border rounded-md ${style} text-[10px] font-black uppercase tracking-widest flex items-center gap-2 transition-all ${isLink ? 'cursor-pointer hover:underline decoration-shinobi-orange underline-offset-4' : ''}`}
              >
                {icon && (
                  <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center bg-white/5 rounded-md p-1 border border-white/10">
                    {icon.includes('http') ? (
                      <img src={icon} alt="" className="w-full h-full object-contain" />
                    ) : (
                      <span className="text-xs">{icon}</span>
                    )}
                  </div>
                )}
                {v}
              </motion.span>
            );
          })}
        </div>
      </div>
    );
  };


  return (
    <div className="relative min-h-screen bg-black pt-32 pb-20 px-10 text-white">
      <Navbar />
      <div className="max-w-7xl mx-auto bg-neutral-900/40 backdrop-blur-2xl border border-white/10 p-10 relative rounded-2xl shadow-2xl">
        <button onClick={() => window.location.hash = '#jutsu'} className="absolute top-6 left-6 text-white/40 hover:text-shinobi-orange uppercase text-[10px] font-black tracking-[0.3em] flex items-center gap-2 transition-all">
          <span className="text-lg">←</span> Back to Jutsu List
        </button>

        <div className="flex flex-col md:flex-row gap-12 items-center md:items-start mt-8 md:mt-12 mb-16 border-b border-white/5 pb-12">
          {selectedJutsu.image && (
            <div 
              className="w-32 h-32 md:w-48 md:h-48 flex-shrink-0 relative group cursor-zoom-in"
              onClick={() => setModalImage(selectedJutsu.image)}
            >
              <img 
                src={selectedJutsu.image} 
                alt={selectedJutsu.name} 
                className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(255,107,0,0.3)]" 
              />
            </div>
          )}
          <div className="flex-1 min-w-0 text-center md:text-left">
            <h2 className="text-6xl md:text-8xl font-black text-white italic uppercase leading-none mb-4">
              <span className="text-shinobi-orange">{selectedJutsu.name.split(' ')[0]}</span> <br/>
              {selectedJutsu.name.split(' ').slice(1).join(' ')}
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 space-y-2">
            <InfoField label="Name" value={selectedJutsu.name} />
            <InfoField label="Categories" value={selectedJutsu.categories} mapping={jutsuColors} iconMapping={jutsuIcons} />
            <InfoField label="Rank" value={selectedJutsu.rank} mapping={jutsuColors} iconMapping={jutsuIcons} />
            <InfoField label="Nature" value={selectedJutsu.nature} mapping={jutsuColors} iconMapping={jutsuIcons} />
            <InfoField label="Range" value={selectedJutsu.range} />
          </div>
          <div className="lg:col-span-8 px-4 border-l border-white/5">
            <span className="text-white/30 font-black uppercase tracking-[0.3em] text-[10px] block mb-4 italic border-b border-white/5 pb-2">Description</span>
            <p className="text-white/70 leading-relaxed font-medium tracking-wide text-xs first-letter:text-4xl first-letter:font-black first-letter:text-shinobi-orange first-letter:mr-2 first-letter:float-left">
              {selectedJutsu.description}
            </p>
          </div>
        </div>

        {/* Bottom Section for Lists */}
        <div className="mt-16 pt-12 border-t border-white/5">
          {selectedJutsu.users && selectedJutsu.users.length > 0 && (
            <div>
              <span className="text-white/30 font-black uppercase tracking-[0.3em] text-[10px] block mb-8 border-l-2 border-shinobi-orange/30 pl-3">
                Used By
              </span>
              <div className="grid grid-cols-1 gap-4 pl-4">
                {selectedJutsu.users.map((user, i) => {
                  const char = charactersData.find(c => c.id === user.id);
                  if (!char) return null;
                  return (
                    <motion.div 
                      key={i} 
                      whileHover={{ x: 10, backgroundColor: 'rgba(255,107,0,0.05)' }}
                      className="flex items-center gap-8 group bg-white/5 p-4 rounded-lg border border-white/5 hover:border-shinobi-orange/30 transition-all shadow-sm"
                    >
                      <div 
                        className="w-12 h-12 rounded-full border-2 border-white/10 overflow-hidden bg-black flex-shrink-0 group-hover:border-shinobi-orange transition-colors cursor-zoom-in"
                        onClick={() => setModalImage(char.mainAvatar)}
                      >
                        <img src={char.mainAvatar} className="w-full h-full object-cover" alt="" />
                      </div>
                      <div className="flex-1">
                        <span 
                          onClick={() => window.location.hash = `#character/${char.id}`}
                          className="text-lg font-black text-white hover:text-shinobi-orange cursor-pointer uppercase transition-colors tracking-tighter"
                        >
                          {char.name}
                        </span>
                      </div>
                      {user.styleImage && (
                        <div 
                          className="w-12 h-12 border-2 border-white/10 rounded-full overflow-hidden bg-neutral-900 shadow-md cursor-zoom-in"
                          onClick={() => setModalImage(user.styleImage)}
                        >
                          <img src={user.styleImage} className="w-full h-full object-cover" alt="style" />
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Modal pentru imagine mărită */}
      <AnimatePresence>
        {modalImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-20 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-5xl w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={modalImage} 
                alt="Mărit" 
                className="max-w-full max-h-full object-contain drop-shadow-[0_0_50px_rgba(255,107,0,0.5)]"
              />
              <button 
                className="absolute top-0 right-0 md:-top-10 md:-right-10 text-white/50 hover:text-shinobi-orange transition-colors uppercase text-xs font-black tracking-widest flex items-center gap-2"
                onClick={() => setModalImage(null)}
              >
                Închide <span className="text-2xl">×</span>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default JutsuDetails;