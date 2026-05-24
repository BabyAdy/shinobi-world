import React from 'react';
import { motion } from 'framer-motion';
import { clansData } from '../data/clansData';
import { charactersData } from '../data/charactersData';
import { jutsusData } from '../data/jutsusData';
import Navbar from '../components/Navbar';

const roleColors = {
  "clan descendant / hokage & savior of the shinobi world": "border-yellow-500/50 text-yellow-500 bg-yellow-500/10 shadow-[0_0_8px_rgba(249,115,22,0.3)]",
  "clan massacre survivor / avenger of the clan": "border-purple-600/50 text-purple-600 bg-purple-600/10 shadow-[0_0_8px_rgba(147,51,234,0.3)]",
  "co-founder & ex-clan leader / defector": "border-emerald-500/50 text-emerald-500 bg-emerald-500/10 shadow-[0_0_8px_rgba(100,245,146,0.3)]",
  "missing-in-action member / shadow manipulator of the clan": "border-cyan-500/50 text-cyan-500 bg-cyan-500/10 shadow-[0_0_8px_rgba(34,211,238,0.3)]",
  "clan elite shinobi / executor of the uchiha clan downfall": "border-red-300/50 text-red-500 bg-red-300/10 shadow-[0_0_8px_rgba(220,38,38,0.3)]",
  "clan descendant (new generation)": "border-red-500/50 text-red-500 bg-red-500/10 shadow-[0_0_8px_rgba(220,38,38,0.3)]",
  "clan elite shinobi / shadow protector of the clan": "border-emerald-500/50 text-emerald-500 bg-emerald-500/10 shadow-[0_0_8px_rgba(100,245,146,0.3)]",
  "last official clan leader / head of the uchiha military police": "border-blue-500/50 text-blue-500 bg-blue-500/10 shadow-[0_0_8px_rgba(59,130,246,0.3)]",
  "clan jōnin / wife of clan leader fugaku": "border-orange-500/50 text-orange-500 bg-orange-500/10 shadow-[0_0_8px_rgba(245,158,11,0.3)]",
  "second-in-command during warring states era / leader's brother": "border-cyan-500/50 text-cyan-500 bg-cyan-500/10 shadow-[0_0_8px_rgba(34,211,238,0.3)]",
  "clan leader during warring states era / father of madara & izuna": "border-yellow-500/50 text-yellow-500 bg-yellow-500/10 shadow-[0_0_8px_rgba(250,204,21,0.3)]",
  "clan shinobi loyal to konoha's will / ancestor of shisui": "border-green-500/50 text-green-500 bg-green-500/10 shadow-[0_0_8px_rgba(34,197,94,0.3)]",
  "historical clan kunoichi / creator of izanami": "border-orange-500/50 text-orange-500 bg-orange-500/10 shadow-[0_0_8px_rgba(249,115,22,0.3)]",
  "historical clan shinobi / fighter in the clan's internal wars": "border-orange-500/50 text-orange-500 bg-orange-500/10 shadow-[0_0_8px_rgba(249,115,22,0.3)]",
  "historical clan shinobi / faction leader in the clan's internal war": "border-orange-500/50 text-orange-500 bg-orange-500/10 shadow-[0_0_8px_rgba(249,115,22,0.3)]",
  "leader & progenitor of the clan during konoha's founding": "border-orange-500/50 text-orange-500 bg-orange-500/10 shadow-[0_0_8px_rgba(249,115,22,0.3)]",
  "clan princess / first nine-tails jinchūriki of konoha": "border-rose-700/50 text-rose-700 bg-rose-700/10 shadow-[0_0_8px_rgba(239,68,68,0.3)]",
  "clan descendant / second nine-tails jinchūriki of konoha": "border-rose-700/50 text-rose-700 bg-rose-700/10 shadow-[0_0_8px_rgba(239,68,68,0.3)]",
  "clan matriarch / wife of naruto uzumaki": "border-purple-500/50 text-purple-500 bg-purple-500/10 shadow-[0_0_8px_rgba(168,85,247,0.3)]",
  "clan matriarch / wife of sasuke uchiha": "border-pink-500/50 text-pink-500 bg-pink-500/10 shadow-[0_0_8px_rgba(239,68,68,0.3)]",
  "new generation descendant / prodigy of the clan": "border-purple-600/50 text-purple-900 bg-purple-600/10 shadow-[0_0_8px_rgba(168,85,247,0.3)]",
  "new generation descendant / hyuga-uzumaki lineage": "border-yellow-500/50 text-yellow-500 bg-yellow-500/10 shadow-[0_0_8px_rgba(250,204,21,0.3)]",
  "clan descendant (ame faction) / godlike shinobi": "border-purple-400/50 text-purple-400 bg-purple-400/10 shadow-[0_0_8px_rgba(168,85,247,0.3)]",
  "clan survivor / grass village refugee": "border-red-400/50 text-red-400 bg-red-400/10 shadow-[0_0_8px_rgba(220,38,38,0.3)]"
};

const abilityIcons = {
  "sharingan": "https://i.imgur.com/dv8piFl.png",
  "mangekyō sharingan": "https://i.imgur.com/kZtP86r.png",
  "mangekyo-sharingan": "https://i.imgur.com/kZtP86r.png",
  "eternal-mangekyo-sharingan": "https://i.imgur.com/lS4DqLk.png",
  "eternal mangekyō sharingan": "https://i.imgur.com/lS4DqLk.png",
  "rinnegan": "https://i.imgur.com/ISu8ah4.png",
  "rinne sharingan": "https://i.imgur.com/PilaNKQ.png",
  "byakugan": "https://i.imgur.com/4DVK3Sh.png",
  "jōgan": "https://i.imgur.com/6T4V9Pr.png",
  "kokugan": "https://i.imgur.com/JUcCbhm.png",
  "katon": "https://i.imgur.com/6G0ellT.png",
  "raiton": "https://i.imgur.com/scbuDt0.png",
  "mokuton": "https://i.imgur.com/OxsfWW3.png",
};

const affiliationIcons = {
  "konohagakure": "https://i.imgur.com/kSAKLvN.png",
  "uzushiogakure": "🌀",
};

const natureIcons = {
  "fire release": "https://i.imgur.com/6G0ellT.png",
  "wind release": "https://i.imgur.com/pNT9v2T.png  ",
  "lightning release": "https://i.imgur.com/scbuDt0.png",
  "water release": "https://i.imgur.com/zPAhF2O.png",
  "earth release": "https://i.imgur.com/T39UrlN.png",
};

const abilityColors = {
  "sharingan": "border-red-600/50 text-red-600 bg-red-600/10 shadow-[0_0_8px_rgba(220,38,38,0.3)]",
  "mangekyō sharingan": "border-red-700/50 text-red-700 bg-red-700/10 shadow-[0_0_8px_rgba(185,28,28,0.3)]",
  "eternal mangekyō sharingan": "border-red-700/50 text-red-700 bg-red-700/10 shadow-[0_0_8px_rgba(185,28,28,0.3)]",
  "rinnegan": "border-purple-500/50 text-purple-500 bg-purple-500/10 shadow-[0_0_8px_rgba(168,85,247,0.3)]",
  "rinne sharingan": "border-red-600/50 text-red-600 bg-red-600/10 shadow-[0_0_8px_rgba(220,38,38,0.3)]",
  "byakugan": "border-purple-100/10 text-purple-400 bg-purple-100/10 shadow-[0_0_8px_rgba(147,51,234,0.3)]",
  "jōgan": "border-purple-100/10 text-purple-400 bg-purple-100/10 shadow-[0_0_8px_rgba(147,51,234,0.3)]",
  "kokugan": "border-yellow-100/10 text-yellow-400 bg-yellow-100/10 shadow-[0_0_8px_rgba(234,179,8,0.3)]",
  "wood release": "border-emerald-800/50 text-emerald-800 bg-emerald-800/10 shadow-[0_0_8px_rgba(100,245,146,0.3)]",
};

const affiliationColors = {
  "konohagakure": "border-emerald-500/50 text-emerald-500 bg-emerald-500/10 shadow-[0_0_8px_rgba(100,245,146,0.3)]",
  "uzushiogakure": "border-red-500/50 text-red-500 bg-red-500/10 shadow-[0_0_8px_rgba(220,38,38,0.3)]",
};

const natureColors = {
  "fire release": "border-red-600/50 text-red-500 bg-red-600/10 shadow-[0_0_8px_rgba(220,38,38,0.3)]",
  "water release": "border-blue-600/50 text-blue-500 bg-blue-600/10 shadow-[0_0_8px_rgba(44,160,243,0.3)]",
  "wind release": "border-teal-900/10 text-teal-400 bg-teal-900/10 shadow-[0_0_8px_rgba(100,245,146,0.3)]",
  "lightning release": "border-yellow-400/50 text-yellow-400 bg-yellow-400/10 shadow-[0_0_8px_rgba(234,179,8,0.3)]",
  "earth release": "border-amber-600/50 text-amber-600 bg-amber-600/10 shadow-[0_0_8px_rgba(211,176,54,0.3)]",
  "lava release": "border-orange-700/50 text-orange-700 bg-orange-700/10 shadow-[0_0_8px_rgba(249,115,22,0.3)]",
  "ice release": "border-blue-400/50 text-blue-200 bg-blue-400/10 shadow-[0_0_8px_rgba(44,160,243,0.3)]",
  "wood release": "border-emerald-800/50 text-emerald-800 bg-emerald-800/10 shadow-[0_0_8px_rgba(100,245,146,0.3)]",
  "boil release": "border-red-500/50 text-red-500 bg-red-500/10 shadow-[0_0_8px_rgba(100,38,245,0.3)]",
  "storm release": "border-indigo-400/50 text-indigo-400 bg-indigo-400/10 shadow-[0_0_8px_rgba(129,140,248,0.3)]",
  "magnet release": "border-purple-500/50 text-purple-400 bg-purple-500/10 shadow-[0_0_8px_rgba(156,163,175,0.3)]",
  "explosion release": "border-red-600/50 text-red-500 bg-red-600/10 shadow-[0_0_8px_rgba(220,38,38,0.3)]",
  "yin release": "border-slate-300/50 text-slate-100 bg-slate-500/20 shadow-[0_0_8px_rgba(248,250,252,0.4)]",
  "yang release": "border-zinc-800/80 text-zinc-950 bg-zinc-400/20 shadow-[0_0_8px_rgba(24,24,27,0.4)]",
  "yin-yang release": "border-indigo-500/50 text-slate-200 bg-gradient-to-r from-zinc-900 via-slate-500 to-zinc-900 shadow-[0_0_8px_rgba(99,102,241,0.3)]"
};

const defaultTagStyle = "border-white/10 text-white/50 bg-white/5 shadow-none";

const ClanDetails = ({ id }) => {
  const clan = clansData.find(c => c.id === id);

  if (!clan) return <div className="min-h-screen bg-black flex items-center justify-center text-white">Clan not found</div>;

  const handleLinkClick = (name) => {
    const lowName = name.toLowerCase();
    // Curățăm numele (ex: "Fugaku Uchiha (Last)" -> "Fugaku Uchiha") pentru a găsi potrivirea în charactersData
    const cleanName = name.split(' (')[0]; 
    const targetChar = charactersData.find(c => c.name.toLowerCase() === cleanName.toLowerCase());
    
    if (targetChar) {
      window.location.hash = `#character/${targetChar.id}`;
      return;
    }

    // Verificăm dacă este o abilitate
    const targetJutsu = jutsusData.find(j => j.name.toLowerCase() === lowName || j.id.toLowerCase() === lowName);
    if (targetJutsu) {
      window.location.hash = `#abilities/${targetJutsu.id}`;
    }
  };

  const InfoField = ({ label, value, mapping, iconMapping, isLink = false }) => {
    if (!value || (Array.isArray(value) && value.length === 0)) return null;
    return (
      <div className="mb-6">
        <span className="text-white/30 font-black uppercase tracking-[0.3em] text-[10px] block mb-3 border-l-2 border-shinobi-orange/30 pl-3">
          {label}
        </span>
        <div className="flex flex-wrap gap-2 pl-4">
          {(Array.isArray(value) ? value : [value]).map((v, i) => {
            const lowV = v.toLowerCase();
            const style = mapping ? mapping[lowV] || defaultTagStyle : "text-white/90 font-bold hover:text-shinobi-orange transition-colors";
            const icon = iconMapping ? iconMapping[lowV] : null;
            
            return (
              <div 
                key={i} 
                onClick={() => isLink && handleLinkClick(v)}
                className={`px-4 py-1.5 rounded-sm text-[10px] font-black uppercase tracking-widest flex items-center gap-2 transition-all ${mapping ? `border ${style}` : style} ${isLink ? 'cursor-pointer' : ''}`}
              >
                {icon && (
                  <div className="w-4 h-4 flex-shrink-0 flex items-center justify-center">
                    {icon.includes('http') ? (
                      <img src={icon} alt="" className="w-full h-full object-contain" />
                    ) : (
                      <span className="text-sm">{icon}</span>
                    )}
                  </div>
                )}
                {v}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="relative min-h-screen bg-black pt-32 pb-20 px-10 text-white">
      <Navbar />
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
        className="max-w-7xl mx-auto bg-neutral-900/40 backdrop-blur-2xl border border-white/10 p-12 relative rounded-2xl shadow-2xl"
      >
        <button onClick={() => window.location.hash = '#clans'} className="absolute top-6 left-6 text-white/40 hover:text-shinobi-orange uppercase text-[10px] font-black tracking-[0.3em] flex items-center gap-2 transition-all">
          <span className="text-lg">←</span> Back to Clans
        </button>

        <div className="flex flex-col md:flex-row gap-16 items-center mb-20">
          <div className="w-48 h-48 md:w-64 md:h-64 relative group">
            <img src={clan.image} className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(255,107,0,0.3)]" alt="Clan Crest" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-7xl md:text-9xl font-black text-white italic uppercase leading-none mb-4">
              <span className="text-shinobi-orange">{clan.name.split(' ')[0]}</span> <br/>
              {clan.name.split(' ').slice(1).join(' ')}
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 border-b border-white/5 pb-16">
          <div className="space-y-2">
            <InfoField label="Founder" value={clan.founder} isLink={true} />
            <InfoField label="Leader" value={clan.leader} isLink={true} />
          </div>
          <div className="space-y-2">
            <InfoField label="Nature Affinity" value={clan.natureAffinity} mapping={natureColors} iconMapping={natureIcons} />
            <InfoField label="Affiliation" value={clan.affiliation} mapping={affiliationColors} iconMapping={affiliationIcons} />
          </div>
          <div className="space-y-2">
            <InfoField label="Kekkei Genkai" value={clan.kekkeiGenkai} mapping={abilityColors} iconMapping={abilityIcons} isLink={true} />
            <InfoField label="Kekkei Tota" value={clan.kekkeiTota} mapping={abilityColors} iconMapping={abilityIcons} isLink={true} />
            <InfoField label="Kekkei Mora" value={clan.kekkeiMora} mapping={abilityColors} iconMapping={abilityIcons} isLink={true} />
          </div>
        </div>

        {/* Member List */}
        <div className="mt-20">
          <h4 className="text-white/20 font-black uppercase tracking-[0.5em] text-sm mb-12 italic border-b border-white/5 pb-4">Member List</h4>
          <div className="grid grid-cols-1 gap-4">
            {clan.members.map((member, idx) => {
              // Incercam sa gasim datele complete despre avatar si nume in charactersData daca nu sunt in clanData
              const charInfo = charactersData.find(c => c.id === member.id);
              const name = member.name || charInfo?.name || "Unknown Ninja";
              const avatar = member.avatar || charInfo?.mainAvatar || "https://via.placeholder.com/150";

              return (
                <motion.div 
                  key={idx}
                  whileHover={{ x: 10, backgroundColor: 'rgba(255,107,0,0.05)' }}
                  className="flex flex-wrap items-center gap-6 p-4 bg-white/5 border border-white/5 rounded-lg transition-all"
                >
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-shinobi-orange/30">
                    <img src={avatar} alt={name} className="w-full h-full object-cover" />
                  </div>
                  
                  <div className="flex-1 min-w-[200px]">
                    <span 
                      onClick={() => window.location.hash = `#character/${member.id}`}
                      className="text-lg font-black uppercase tracking-tighter cursor-pointer hover:text-shinobi-orange transition-colors"
                    >
                      {name}
                    </span>
                    <div className="flex items-center gap-2 mt-1">
                      <span className={`px-2 py-0.5 text-[9px] font-black uppercase rounded ${roleColors[member.role.toLowerCase()] || defaultTagStyle}`}>
                        {member.role}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {member.abilities.map((ability, i) => (
                      <span 
                        key={i} 
                        onClick={() => handleLinkClick(ability)}
                        className={`px-3 py-1 text-[10px] font-black uppercase border rounded-sm flex items-center gap-2 cursor-pointer hover:underline decoration-shinobi-orange transition-all ${abilityColors[ability.toLowerCase()] || defaultTagStyle}`}
                      >
                        {abilityIcons[ability.toLowerCase()] && (
                          <div className="w-3 h-3 flex-shrink-0 flex items-center justify-center">
                            {abilityIcons[ability.toLowerCase()].includes('http') ? (
                              <img src={abilityIcons[ability.toLowerCase()]} alt="" className="w-full h-full object-contain" />
                            ) : (
                              <span className="text-[10px]">{abilityIcons[ability.toLowerCase()]}</span>
                            )}
                          </div>
                        )}
                        {ability}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ClanDetails;