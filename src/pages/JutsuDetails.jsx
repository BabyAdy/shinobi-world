import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// Am eliminat importul de useParams din react-router-dom
import { jutsusData } from '../data/jutsusData';
import { charactersData } from '../data/charactersData';
import Navbar from '../components/Navbar'; // Presupunând că ai o componentă Navbar

// Mappings for Jutsu categories and ranks
const jutsuColors = {
  "ninjutsu": "border-blue-500/50 text-blue-400 bg-blue-500/10 shadow-[0_0_8px_rgba(59,130,246,0.3)]",
  "taijutsu": "border-green-500/50 text-green-400 bg-green-500/10 shadow-[0_0_8px_rgba(250,204,21,0.3)]", 
  "dojutsu": "border-purple-500/50 text-purple-400 bg-purple-500/10 shadow-[0_0_8px_rgba(168,85,247,0.3)]",
  "kekkei genkai": "border-red-500/50 text-red-400 bg-red-500/10 shadow-[0_0_8px_rgba(34,197,94,0.3)]",
  "kekkei tota": "border-green-900/50 text-green-800 bg-green-900/10 shadow-[0_0_8px_rgba(34,197,94,0.3)]",
  "kekkei mora": "border-red-900/50 text-red-800 bg-red-900/10 shadow-[0_0_8px_rgba(239,68,68,0.3)]",
  "lightning release": "border-yellow-400/50 text-yellow-300 bg-yellow-400/10 shadow-[0_0_8px_rgba(239,68,68,0.3)]",
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
  "kinjutsu": "border-red-600/50 text-red-500 bg-red-600/10 shadow-[0_0_8px_rgba(220,38,38,0.3)]",
};

// New mapping for jutsu name color
const nameColors = {
  "default": "border-white/50 text-white bg-white/10 shadow-[0_0_8px_rgba(255,255,255,0.3)]",
  "rasengan": "border-teal-400/60 text-emerald-200 bg-teal-950/40 shadow-[0_0_15px_rgba(45,212,191,0.5)]",
  "chidori": "border-cyan-400/50 text-cyan-100 bg-sky-950/40 shadow-[0_0_15px_rgba(34,211,238,0.45)]",
  "sharingan": "border-red-600/50 text-red-500 bg-red-950/20 shadow-[0_0_8px_rgba(220,38,38,0.3)]",
  "mangekyo-sharingan": "border-red-600 text-red-500 bg-black/60 shadow-[0_0_12px_rgba(220,38,38,0.5)]",
  "eternal-mangekyo-sharingan": "border-red-700 text-red-600 bg-black/80 shadow-[0_0_18px_rgba(185,28,28,0.6)]",
  "rinnegan": "border-purple-500/40 text-purple-300 bg-purple-950/30 shadow-[0_0_12px_rgba(168,85,247,0.4)]",
  "byakugan": "border-slate-300/40 text-slate-200 bg-slate-100/10 shadow-[0_0_8px_rgba(241,245,249,0.25)]",
  "jogan": "border-cyan-300/50 text-cyan-100 bg-slate-950/80 shadow-[0_0_14px_rgba(6,182,212,0.45)]",
  "kokugan": "border-amber-500/40 text-amber-400 bg-stone-950/90 shadow-[0_0_10px_rgba(245,158,11,0.3)]",
  "amaterasu": "border-red-700/60 text-red-500 bg-red-950/40 shadow-[0_0_15px_rgba(185,28,28,0.5)]",
  "baryon-mode": "border-orange-600 text-orange-400 bg-orange-950/40 shadow-[0_0_15px_rgba(249,115,22,0.5)]",
  "multiple-shadow-clone-technique": "border-blue-500 text-blue-300 bg-blue-950/40 shadow-[0_0_10px_rgba(59,130,246,0.4)]",
  "susanoo": "border-purple-500/60 text-purple-400 bg-purple-950/40 shadow-[0_0_15px_rgba(168,85,247,0.5)]",
  "tsukuyomi": "border-indigo-500/40 text-indigo-300 bg-slate-900/60 shadow-[0_0_10px_rgba(99,102,241,0.4)]",
  "kamui": "border-zinc-500/50 text-zinc-300 bg-zinc-950/80 shadow-[0_0_15px_rgba(255,255,255,0.1)]",
  "izanagi": "border-rose-500/50 text-rose-300 bg-rose-950/20",
  "izanami": "border-rose-700/50 text-rose-500 bg-rose-950/40",
  "genjutsu-sharingan": "border-indigo-500/40 text-indigo-300 bg-slate-900/60 shadow-[0_0_10px_rgba(99,102,241,0.4)]",
  "copy-technique": "border-blue-500/40 text-blue-300 bg-blue-950/40 shadow-[0_0_10px_rgba(59,130,246,0.4)]",
  "gentle-fist": "border-green-500/50 text-green-400 bg-green-500/10 shadow-[0_0_8px_rgba(34,197,94,0.3)]",
  "eight-trigrams-sixty-four-palms": "border-green-600/50 text-green-500 bg-green-600/10 shadow-[0_0_8px_rgba(34,197,94,0.4)]",
};

const classColors = {
  "offensive": "border-red-500/50 text-red-400 bg-red-500/10 shadow-[0_0_8px_rgba(239,68,68,0.3)]",
  "defensive": "border-blue-500/50 text-blue-400 bg-blue-500/10 shadow-[0_0_8px_rgba(59,130,246,0.3)]",
  "supplementary": "border-green-500/50 text-green-400 bg-green-500/10 shadow-[0_0_8px_rgba(34,197,94,0.3)]",
};

const clansColors = {
  "uchiha": "border-red-600/50 text-red-500 bg-red-600/10 shadow-[0_0_8px_rgba(220,38,38,0.3)]",
  "hyuga": "border-indigo-400/50 text-indigo-300 bg-indigo-400/10 shadow-[0_0_8px_rgba(129,140,248,0.3)]",
  "uzumaki": "border-orange-500/50 text-orange-400 bg-orange-500/10 shadow-[0_0_8px_rgba(249,115,22,0.3)]",
  "namikaze": "border-yellow-400/50 text-yellow-300 bg-yellow-400/10 shadow-[0_0_8px_rgba(250,204,21,0.3)]",
  "otsutsuki": "border-slate-300/50 text-slate-200 bg-slate-300/10 shadow-[0_0_8px_rgba(226,232,240,0.3)]",
};

// Helper to extract text color from a class string
const getTextColorClass = (classString) => {
  const match = classString.match(/text-[\w-]+\/[\d.]+/); // Matches text-color/opacity (e.g., text-red-400/50)
  if (match) return match[0];
  const simpleMatch = classString.match(/text-[\w-]+/); // Matches simple text-color (e.g., text-red-400)
  if (simpleMatch) return simpleMatch[0];
  return "text-white"; // Default fallback if no text color is found
};

const jutsuIcons = {
  "ninjutsu": "🌀", 
  "taijutsu": "👊", 
  "dojutsu": "👁️", 
  "kekkei genkai": "🧬",
  "kekkei tota": "",
  "kekkei mora": "",
  "lightning release": "⚡", 
  "wind release": "🌬️", 
  "fire release": "https://i.imgur.com/6G0ellT.png",
  "water release": "💧", 
  "earth release": "🪨",
  "sharingan": "https://i.imgur.com/dv8piFl.png",
  "mangekyo-sharingan": "https://i.imgur.com/kZtP86r.png",
  "eternal-mangekyo-sharingan": "https://i.imgur.com/lS4DqLk.png",
  "rinnegan": "https://i.imgur.com/ISu8ah4.png",
  "sage mode": "🐸",
  "amaterasu": "https://i.imgur.com/zVHpHYI.png",
  "susanoo": "🛡️",
  "tsukuyomi": "🌑",
  "byakugan": "https://i.imgur.com/4DVK3Sh.png",
  "jogan": "https://i.imgur.com/6T4V9Pr.png",
  "kokugan": "https://i.imgur.com/JUcCbhm.png",
  "kinjutsu": "🚫",
  "s-rank": "⭐", 
  "a-rank": "🌟", 
  "b-rank": "✨", 
  "c-rank": "💫", 
  "d-rank": "🔹",
  "genjutsu-sharingan": "👁️",
  "copy-technique": "📝",
  "gentle-fist": "👊",
  "eight-trigrams-sixty-four-palms": "💥",
};

const JutsuDetails = () => {
  const [id, setId] = useState(null);
  const [modalImage, setModalImage] = useState(null);
  const [isBrowserOpen, setIsBrowserOpen] = useState(false);

  useEffect(() => {
    const extractIdFromHash = () => {
      const hash = window.location.hash;
      const match = hash.match(/^#abilities\/(.+)$/); // Redenumit în ability
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
  const InfoField = ({ label, value, mapping, iconMapping, isLink = false, linkPrefix = "" }) => {
    if (!value || (Array.isArray(value) && value.length === 0)) return null;

    const finalValues = (typeof value === 'string' && value.includes('/'))
      ? value.split('/').map(v => v.trim())
      : (Array.isArray(value) ? value : [value]); // Ensure value is always an array for mapping

    return (
      <div className="mb-6 group/field">
        <span className="text-white/30 font-black uppercase tracking-[0.3em] text-[10px] block mb-2 group-hover/field:text-shinobi-orange transition-colors border-l-2 border-shinobi-orange/30 pl-3">
          {label}
        </span>
        <div className="flex flex-wrap gap-2 pl-4">
          {finalValues.map((v, i) => {
            const lowV = v.toLowerCase();
            let style = defaultTagStyle; // Default style
            let icon = null; // Default icon
            let displayName = v;
            let targetUrl = "";
            
            if (isLink) {
              if (linkPrefix) {
                // Cazul pentru clanuri sau link-uri externe cu prefix
                targetUrl = `${linkPrefix}/${lowV}`;
                style = mapping ? mapping[lowV] || mapping.default || defaultTagStyle : defaultTagStyle;
                icon = iconMapping ? iconMapping[lowV] : null;
              } else {
                // Cazul pentru legături între abilități (Hierarchy)
                // Căutăm după ID (majoritatea ierarhiei) sau Nume (Related abilities)
                const targetAbility = jutsusData.find(j => 
                  j.id.toLowerCase() === lowV || j.name.toLowerCase() === lowV
                );

                if (targetAbility) {
                  displayName = targetAbility.name;
                  targetUrl = `#abilities/${targetAbility.id}`;
                  // Folosim ID-ul pentru stil și iconiță dacă e găsit
                  style = mapping ? mapping[targetAbility.id] || mapping.default || defaultTagStyle : defaultTagStyle;
                  icon = iconMapping ? iconMapping[targetAbility.id] || iconMapping[targetAbility.name.toLowerCase()] : null;
                }
              }
            } else {
              // Cazul non-link (Classification, Rank, etc.)
              style = mapping ? mapping[lowV] || mapping.default || defaultTagStyle : defaultTagStyle;
              icon = iconMapping ? iconMapping[lowV] : null;
            }

            const handleClick = () => {
              if (targetUrl) {
                window.location.hash = targetUrl;
                setIsBrowserOpen(false);
              }
            };

            return (
              <motion.span
                key={`${label}-${v}-${i}`}
                whileHover={{ scale: 1.05 }}
                onClick={isLink ? handleClick : undefined}
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
                {displayName}
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
        <button onClick={() => window.location.hash = '#abilities'} className="absolute top-6 left-6 text-white/40 hover:text-shinobi-orange uppercase text-[10px] font-black tracking-[0.3em] flex items-center gap-2 transition-all">
          <span className="text-lg">←</span> Back to Abilities Library
        </button>

        <button onClick={() => setIsBrowserOpen(true)} className="absolute top-6 right-6 text-white/40 hover:text-shinobi-orange uppercase text-[10px] font-black tracking-[0.3em] flex items-center gap-2 transition-all">
          Abilities Browser <span className="text-lg">☰</span>
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
            <h2 className={`text-6xl md:text-8xl font-black italic uppercase leading-none mb-4 ${
              getTextColorClass(nameColors[selectedJutsu.id] || nameColors.default)
            }`}>
              {selectedJutsu.name}
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 space-y-2">
            <InfoField label="Name" value={selectedJutsu.name} mapping={{ [selectedJutsu.id]: nameColors[selectedJutsu.id] || nameColors.default }} />
            <InfoField label="Classification" value={selectedJutsu.classification} mapping={jutsuColors} iconMapping={jutsuIcons} />
            <InfoField label="Rank" value={selectedJutsu.rank} mapping={jutsuColors} iconMapping={jutsuIcons} />
            <InfoField label="Nature" value={selectedJutsu.nature} mapping={jutsuColors} iconMapping={jutsuIcons} />
            <InfoField label="Class" value={selectedJutsu.class} mapping={classColors} />
            <InfoField label="Range" value={selectedJutsu.range} />
            <InfoField label="Clans" value={selectedJutsu.clans} mapping={clansColors} isLink={true} linkPrefix="#clans" />
            
            {/* Noi câmpuri pentru Ierarhie */}
            <div className="pt-4 mt-4 border-t border-white/5 space-y-2">
               <InfoField label="Parent Ability" value={selectedJutsu.parentAbilities} mapping={nameColors} iconMapping={jutsuIcons} isLink={true} />
               <InfoField label="Derived Abilities" value={selectedJutsu.derivedAbilities} mapping={nameColors} iconMapping={jutsuIcons} isLink={true} />
               <InfoField label="Related Abilities" value={selectedJutsu.relatedAbilities} mapping={nameColors} iconMapping={jutsuIcons} isLink={true} />
               <InfoField label="Specific Abilities" value={selectedJutsu.specificAbilities} mapping={nameColors} iconMapping={jutsuIcons} isLink={true} />
            </div>
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

      {/* Modal pentru Jutsu Browser */}
      <AnimatePresence>
        {isBrowserOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-10 backdrop-blur-md"
            onClick={() => setIsBrowserOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              className="bg-neutral-900/90 border border-white/10 p-8 rounded-2xl max-w-4xl w-full max-h-[80vh] overflow-y-auto shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-4 sticky top-0 bg-neutral-900/10 backdrop-blur-sm z-10">
                <h3 className="text-2xl font-black uppercase italic tracking-tighter text-white/80">Abilities Browser</h3>
                <button onClick={() => setIsBrowserOpen(false)} className="text-white/40 hover:text-shinobi-orange uppercase text-[10px] font-black tracking-widest transition-colors">
                  Close <span className="text-xl">×</span>
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {jutsusData.map((jutsu) => {
                  const isActive = jutsu.id === selectedJutsu.id;
                  const style = nameColors[jutsu.id] || nameColors.default;
                  return (
                    <motion.div
                      key={jutsu.id}
                      whileHover={{ scale: 1.03, y: -2 }}
                      onClick={() => { window.location.hash = `#abilities/${jutsu.id}`; setIsBrowserOpen(false); }}
                      className={`p-4 border rounded-xl cursor-pointer transition-all ${style} ${isActive ? 'ring-2 ring-shinobi-orange' : 'opacity-80 hover:opacity-100'}`}
                    >
                      <span className="text-xs font-black uppercase tracking-widest block mb-1">{jutsu.name}</span>
                      <span className="text-[8px] opacity-40 font-bold uppercase">{jutsu.category.join(' / ')}</span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default JutsuDetails;