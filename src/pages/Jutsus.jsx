import React from 'react';
import { jutsusData } from '../data/jutsusData';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
// Am eliminat importul de Link din react-router-dom

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
};

const rankColors = {
  "s-rank": "border-red-600/50 text-red-500 bg-red-600/10 shadow-[0_0_8px_rgba(220,38,38,0.3)]",
  "a-rank": "border-orange-500/50 text-orange-400 bg-orange-500/10 shadow-[0_0_8px_rgba(249,115,22,0.3)]",
  "b-rank": "border-yellow-500/50 text-yellow-400 bg-yellow-500/10 shadow-[0_0_8px_rgba(250,204,21,0.3)]",
  "c-rank": "border-green-500/50 text-green-400 bg-green-500/10 shadow-[0_0_8px_rgba(34,197,94,0.3)]",
  "d-rank": "border-blue-500/50 text-blue-400 bg-blue-500/10 shadow-[0_0_8px_rgba(59,130,246,0.3)]",
  "n/a": "border-gray-500/50 text-gray-400 bg-gray-500/10 shadow-[0_0_8px_rgba(156,163,175,0.3)]",
};

const rankIcons = {
  "s-rank": "⭐", "a-rank": "🌟", "b-rank": "✨", "c-rank": "💫", "d-rank": "🔹",
  "n/a": "❓",
};

const defaultTagStyle = "border-white/10 text-white/50 bg-white/5 shadow-none";

const Jutsu = () => {
  // Grupare pe categorii
  const categories = ["Ninjutsu", "Taijutsu", "Dojutsu", "Kekkei Genkai", "Lightning Release"];
  const categorizedData = categories.reduce((acc, cat) => {
    acc[cat] = jutsusData.filter(j => j.categories?.includes(cat));
    return acc;
  }, {});

  return (
    <div className="relative min-h-screen bg-black pt-32 pb-20 px-10 text-white">
      <Navbar />
      <h1 className="text-6xl md:text-8xl font-black text-white mb-16 italic uppercase leading-tight text-center">Jutsu Library</h1>

      <div className="max-w-7xl mx-auto space-y-24">
        {Object.entries(categorizedData).map(([category, items]) => items.length > 0 && (
          <section key={category}>
            <h2 className="text-3xl font-black text-shinobi-orange mb-8 uppercase tracking-widest border-l-4 border-shinobi-orange pl-4">
              {category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {items.map((jutsu) => (
                <div 
                  key={`${category}-${jutsu.id}`} 
                  onClick={() => window.location.hash = `#jutsu/${jutsu.id}`} 
                  className="group cursor-pointer bg-neutral-900/40 backdrop-blur-lg border border-white/10 p-8 rounded-xl shadow-lg hover:border-shinobi-orange transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="flex items-center gap-4 mb-4">
                    {jutsu.image && (
                      <div className="w-16 h-16 flex-shrink-0">
                        <img src={jutsu.image} alt={jutsu.name} className="w-full h-full object-contain drop-shadow-[0_0_10px_rgba(255,107,0,0.3)]" />
                      </div>
                    )}
                    <h3 className="text-2xl font-black text-white group-hover:text-shinobi-orange uppercase italic leading-tight">
                      {jutsu.name}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {jutsu.categories.map((c, i) => (
                      <span 
                        key={i} 
                        className={`px-3 py-1 text-[10px] font-black uppercase border rounded-sm flex items-center gap-2 ${jutsuColors[c.toLowerCase()] || defaultTagStyle}`}
                      >
                        {jutsuIcons[c.toLowerCase()] && (
                          <span className="text-xs">{jutsuIcons[c.toLowerCase()]}</span>
                        )}
                        {c}
                      </span>
                    ))}
                    {jutsu.rank && (
                      <span 
                        className={`px-3 py-1 text-[10px] font-black uppercase border rounded-sm flex items-center gap-2 ${rankColors[jutsu.rank.toLowerCase()] || defaultTagStyle}`}
                      >
                        {rankIcons[jutsu.rank.toLowerCase()] && (
                          <span className="text-xs">{rankIcons[jutsu.rank.toLowerCase()]}</span>
                        )}
                        {jutsu.rank}
                      </span>
                    )}
                  </div>

                  <p className="text-white/50 text-xs leading-relaxed line-clamp-3">
                    {jutsu.description}
                  </p>
                  <div className="mt-6 flex justify-end">
                    <span className="text-shinobi-orange text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">View Details →</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Jutsu;