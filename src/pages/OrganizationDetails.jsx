import React from 'react';
import { motion } from 'framer-motion';
import { charactersData } from '../data/charactersData';
import { organizationsData } from '../data/organizationsData';
import Navbar from '../components/Navbar';

const roleColors = {
  "member": "border-gray-500 text-gray-400 bg-gray-500/10 shadow-[0_0_8px_rgba(156,163,175,0.3)]",
  "leader": "border-red-600 text-red-500 bg-red-600/10 shadow-[0_0_8px_rgba(220,38,38,0.3)]",
  "vessel": "border-purple-600 text-purple-400 bg-purple-600/10 shadow-[0_0_8px_rgba(147,51,234,0.3)]",
  "god / official leader & co-founder": "border-red-600 text-red-500 bg-red-600/10 shadow-[0_0_8px_rgba(220,38,38,0.3)]",
  "benefactor / real leader from the shadows": "border-red-600 text-red-500 bg-red-600/10 shadow-[0_0_8px_rgba(220,38,38,0.3)]",
  "rogue elite / infiltrator & spy": "border-red-600 text-red-500 bg-red-600/10 shadow-[0_0_8px_rgba(220,38,38,0.3)]",
  "leader of taka / temporary ally": "border-purple-600 text-purple-500 bg-purple-600/10 shadow-[0_0_8px_rgba(147,51,234,0.3)]",
  "angel / co-founder & second-in-command": "border-purple-350 text-purple-500 bg-purple-350/10 shadow-[0_0_8px_rgba(147,51,234,0.3)]",
  "original founder & former leader": "border-red-600 text-red-500 bg-red-600/10 shadow-[0_0_8px_rgba(220,38,38,0.3)]",
  "monster of the mist / heavy attacker": "border-blue-600 text-blue-500 bg-blue-600/10 shadow-[0_0_8px_rgba(96,165,250,0.3)]",
  "rogue sannin / infiltrator (defected)": "border-purple-400 text-purple-500 bg-purple-400/10 shadow-[0_0_8px_rgba(168,85,247,0.3)]",
  "puppet master / assassin": "border-rose-600 text-rose-500 bg-rose-600/10 shadow-[0_0_8px_rgba(239,68,68,0.3)]",
  "rogue artist / long-range bomber": "border-orange-600 text-orange-500 bg-orange-600/10 shadow-[0_0_8px_rgba(249,115,22,0.3)]",
  "treasurer / immortal enforcer": "border-green-600 text-green-500 bg-green-600/10 shadow-[0_0_8px_rgba(34,197,94,0.3)]",
  "vanguard / immortal berserker": "border-red-350 text-red-500 bg-red-350/10 shadow-[0_0_8px_rgba(220,38,38,0.3)]",
  "will of kaguya / spymaster & chronicler": "border-zinc-800 text-white bg-black/40 shadow-[0_0_8px_rgba(0,0,0,0.8)]",
  "clone army / spy & scout": "border-white text-green-500 bg-white/10 shadow-[0_0_8px_rgba(34,197,94,0.3)]",
  "member of taka / temporary ally": "border-purple-350 text-purple-700 bg-purple-350/10 shadow-[0_0_8px_rgba(147,51,234,0.3)]",
  "former rogue swordsman / itachi's first partner": "border-blue-600 text-blue-500 bg-blue-600/10 shadow-[0_0_8px_rgba(96,165,250,0.3)]",
  "artificial akatsuki / self-proclaimed leader (boruto era)": "border-orange-600 text-orange-500 bg-orange-600/10 shadow-[0_0_8px_rgba(249,115,22,0.3)]",
};

const statusColors = {
  "active": "border-emerald-500/50 text-emerald-400 bg-emerald-500/10 shadow-[0_0_8px_rgba(100,245,146,0.3)]",
  "dissolved": "border-red-600/50 text-red-500 bg-red-600/10 shadow-[0_0_8px_rgba(220,38,38,0.3)]",
};

const abilityIcons = {
  "sharingan": "https://i.imgur.com/dv8piFl.png",
  "mangekyō sharingan": "https://i.imgur.com/kZtP86r.png",
  "eternal mangekyō sharingan": "https://i.imgur.com/lS4DqLk.png",
  "rinnegan": "https://i.imgur.com/ISu8ah4.png",
  "byakugan": "https://i.imgur.com/4DVK3Sh.png",
  "katon": "https://i.imgur.com/6G0ellT.png",
  "raiton": "https://i.imgur.com/scbuDt0.png",
  "mokuton": "https://i.imgur.com/OxsfWW3.png",
  "karma": "https://i.imgur.com/zPAhF2O.png", 
  // Placeholder, consider a more specific icon if available
};

const abilityColors = {
  "sharingan": "border-red-600/50 text-red-600 bg-red-600/10 shadow-[0_0_8px_rgba(220,38,38,0.3)]",
  "mangekyō sharingan": "border-red-600/50 text-red-600 bg-red-600/10 shadow-[0_0_8px_rgba(220,38,38,0.3)]",
  "eternal mangekyō sharingan": "border-red-600/50 text-red-600 bg-red-600/10 shadow-[0_0_8px_rgba(220,38,38,0.3)]",
  "sage mode": "border-orange-500/50 text-orange-500 bg-orange-500/10 shadow-[0_0_8px_rgba(249,115,22,0.3)]",
  "rinnegan": "border-purple-500/50 text-purple-500 bg-purple-500/10 shadow-[0_0_8px_rgba(168,85,247,0.3)]",
  "perfect susanoo": "border-purple-600/50 text-purple-600 bg-purple-600/10 shadow-[0_0_8px_rgba(168,85,247,0.3)]",
  "susanoo": "border-purple-400/50 text-purple-400 bg-purple-400/10 shadow-[0_0_8px_rgba(168,85,247,0.3)]",
  "izanagi": "border-red-400/50 text-red-400 bg-red-400/10 shadow-[0_0_8px_rgba(220,38,38,0.3)]",
  "izanami": "border-red-400/50 text-red-400 bg-red-400/10 shadow-[0_0_8px_rgba(220,38,38,0.3)]",
  "mokuton": "border-green-500/50 text-green-500 bg-green-500/10 shadow-[0_0_8px_rgba(34,197,94,0.3)]",
  "ten-tails jinchūriki": "border-red-600/50 text-red-600 bg-red-600/10 shadow-[0_0_8px_rgba(220,38,38,0.3)]",
  "tsukuyomi": "border-red-800/50 text-red-900 bg-red-800/10 shadow-[0_0_8px_rgba(220,38,38,0.3)]",
  "amaterasu": "border-red-900/50 text-red-900 bg-red-900/10 shadow-[0_0_8px_rgba(220,38,38,0.3)]",
  "kamui": "border-red-700/50 text-red-700 bg-red-700/10 shadow-[0_0_8px_rgba(220,38,38,0.3)]",
  "kotoamatsukami": "border-red-800/50 text-red-900 bg-red-800/10 shadow-[0_0_8px_rgba(220,38,38,0.3)]",
  "chidori": "border-cyan-200/50 text-cyan-400 bg-cyan-300/10 shadow-[0_0_8px_rgba(34,211,238,0.3)]",
  "cherry blossom impact": "border-purple-100/50 text-pink-500 bg-purple-300/10 shadow-[0_0_8px_rgba(168,85,247,0.3)]",
  "katon": "border-rose-700/50 text-rose-700 bg-rose-700/10 shadow-[0_0_8px_rgba(239,68,68,0.3)]",
  "raiton": "border-yellow-400/50 text-yellow-900 bg-yellow-400/10 shadow-[0_0_8px_rgba(250,204,21,0.3)]",
  "tactical genius": "border-yellow-400/50 text-yellow-900 bg-yellow-400/10 shadow-[0_0_8px_rgba(250,204,21,0.3)]",
  "shurikenjutsu master": "border-blue-400/50 text-blue-700 bg-blue-400/10 shadow-[0_0_8px_rgba(96,165,250,0.3)]",
  "kenjutsu mastery": "border-blue-400/50 text-blue-700 bg-blue-400/10 shadow-[0_0_8px_rgba(96,165,250,0.3)]",
  "clan war tactics": "border-yellow-400/50 text-yellow-700 bg-yellow-400/10 shadow-[0_0_8px_rgba(250,204,21,0.3)]",
  "high tactical acumen": "border-green-400/50 text-green-700 bg-green-400/10 shadow-[0_0_8px_rgba(34,197,94,0.3)]",
  "advanced chakra nature transformation": "border-green-400/50 text-green-900 bg-green-400/10 shadow-[0_0_8px_rgba(34,197,94,0.3)]",
  "kenjutsu": "border-blue-400/50 text-blue-700 bg-blue-400/10 shadow-[0_0_8px_rgba(96,165,250,0.3)]",
  "strength": "border-pink-400/50 text-pink-700 bg-pink-400/10 shadow-[0_0_8px_rgba(239,68,68,0.3)]",
  "healing": "border-emerald-400/50 text-emerald-700 bg-emerald-400/10 shadow-[0_0_8px_rgba(100,245,146,0.3)]",
  "chakra control": "border-purple-100/50 text-purple-400 bg-purple-300/10 shadow-[0_0_8px_rgba(168,85,247,0.3)]",
  "sealing": "border-orange-400/50 text-orange-700 bg-orange-400/10 shadow-[0_0_8px_rgba(249,115,22,0.3)]",
  "sealing chains": "border-orange-400/50 text-orange-700 bg-orange-400/10 shadow-[0_0_8px_rgba(249,115,22,0.3)]",
  "lifeforce": "border-blue-400/50 text-blue-700 bg-blue-400/10 shadow-[0_0_8px_rgba(96,165,250,0.3)]",
  "immense chakra": "border-yellow-400/50 text-yellow-700 bg-yellow-400/10 shadow-[0_0_8px_rgba(250,204,21,0.3)]",
  "sensory": "border-red-600/50 text-yellow-700 bg-red-600/10 shadow-[0_0_8px_rgba(220,38,38,0.3)]",
  "byakugan": "border-purple-100/50 text-purple-400 bg-purple-300/10 shadow-[0_0_8px_rgba(168,85,247,0.3)]",
  "taijutsu": "border-green-300/50 text-green-700 bg-green-300/10 shadow-[0_0_8px_rgba(34,197,94,0.3)]",
  "ninjutsu": "border-blue-400/50 text-blue-700 bg-blue-400/10 shadow-[0_0_8px_rgba(96,165,250,0.3)]",
  "vision": "border-cyan-200/50 text-cyan-400 bg-cyan-300/10 shadow-[0_0_8px_rgba(34,211,238,0.3)]",
  "otsutsuki genetic compatibility": "border-zinc-400/50 text-zinc-700 bg-zinc-400/10 shadow-[0_0_8px_rgba(156,163,175,0.3)]",
  "reflexes": "border-emerald-400/50 text-emerald-700 bg-emerald-400/10 shadow-[0_0_8px_rgba(100,245,146,0.3)]",
  "longevity": "border-rose-400/50 text-rose-700 bg-rose-400/10 shadow-[0_0_8px_rgba(239,68,68,0.3)]",
  "karma": "border-purple-600/50 text-purple-400 bg-purple-600/10 shadow-[0_0_8px_rgba(147,51,234,0.3)]",
  "six paths": "border-yellow-400/50 text-yellow-700 bg-yellow-400/10 shadow-[0_0_8px_rgba(250,204,21,0.3)]",
  "almighty push": "border-yellow-400/50 text-yellow-700 bg-yellow-400/10 shadow-[0_0_8px_rgba(250,204,21,0.3)]",
  "paper manipulation": "border-purple-100/50 text-purple-400 bg-purple-300/10 shadow-[0_0_8px_rgba(168,85,247,0.3)]",
  "flight": "border-blue-400/50 text-blue-700 bg-blue-400/10 shadow-[0_0_8px_rgba(96,105,250,0.3)]",
  "suiton": "border-blue-400/50 text-blue-700 bg-blue-400/10 shadow-[0_0_8px_rgba(96,165,250,0.3)]",
  "leadership": "border-red-600/50 text-red-500 bg-red-600/10 shadow-[0_0_8px_rgba(220,38,38,0.3)]",
  "samehada": "border-blue-400/50 text-blue-700 bg-blue-400/10 shadow-[0_0_8px_rgba(96,165,250,0.3)]",
  "chakra absorption": "border-purple-100/50 text-purple-400 bg-purple-300/10 shadow-[0_0_8px_rgba(168,85,247,0.3)]",
  "immortality": "border-zinc-400/50 text-purple-700 bg-zinc-400/10 shadow-[0_0_8px_rgba(156,163,175,0.3)]",
  "snake summoning": "border-purple-600/50 text-purple-700 bg-purple-600/10 shadow-[0_0_8px_rgba(147,51,234,0.3)]",
  "human puppetry": "border-purple-100/50 text-purple-400 bg-purple-300/10 shadow-[0_0_8px_rgba(168,85,247,0.3)]",
  "poison": "border-purple-100/50 text-purple-400 bg-purple-300/10 shadow-[0_0_8px_rgba(168,85,247,0.3)]",
  "explosive clay": "border-orange-400/50 text-orange-700 bg-orange-400/10 shadow-[0_0_8px_rgba(249,115,22,0.3)]",
  "c4 karura": "border-orange-400/50 text-orange-700 bg-orange-400/10 shadow-[0_0_8px_rgba(249,115,22,0.3)]",
  "five elements": "border-green-400/50 text-green-700 bg-green-400/10 shadow-[0_0_8px_rgba(34,397,94,0.3)]",
  "hearts theft": "border-red-600/50 text-red-500 bg-red-600/10 shadow-[0_0_8px_rgba(220,38,38,0.3)]",
  "jashin ritual": "border-zinc-700/50 text-zinc-700 bg-zinc-700/10 shadow-[0_0_8px_rgba(156,163,175,0.3)]",
  "curse": "border-rose-400/50 text-rose-700 bg-rose-400/10 shadow-[0_0_8px_rgba(239,68,68,0.3)]",
  "parasitism": "border-green-400/50 text-green-700 bg-green-400/10 shadow-[0_0_8px_rgba(34,107,94,0.3)]",
  "infiltration": "border-red-600/50 text-red-500 bg-red-600/10 shadow-[0_0_8px_rgba(220,38,38,0.3)]",
  "recording": "border-purple-600/50 text-purple-400 bg-purple-600/10 shadow-[0_0_8px_rgba(147,51,234,0.3)]",
  "spore clone": "border-green-400/50 text-green-700 bg-green-400/10 shadow-[0_0_8px_rgba(34,107,94,0.3)]",
  "camouflage": "border-purple-100/50 text-purple-400 bg-purple-300/10 shadow-[0_0_8px_rgba(168,85,247,0.3)]",
  "hydrification": "border-cyan-200/50 text-cyan-400 bg-cyan-300/10 shadow-[0_0_8px_rgba(34,211,238,0.3)]",
  "sage transformation": "border-orange-400/50 text-orange-700 bg-orange-400/10 shadow-[0_0_8px_rgba(249,115,22,0.3)]",
  "berserk strength": "border-orange-400/50 text-orange-700 bg-orange-400/10 shadow-[0_0_8px_rgba(249,115,22,0.3)]",
  "kubikiribōchō": "border-red-600/50 text-red-500 bg-red-600/10 shadow-[0_0_8px_rgba(220,38,38,0.3)]",
  "telekinesis": "border-pink-400/50 text-pink-700 bg-pink-400/10 shadow-[0_0_8px_rgba(239,68,68,0.3)]"
};

const defaultTagStyle = "border-white/10 text-white/50 bg-white/5";

const OrganizationDetails = ({ id }) => {
  const org = organizationsData.find(o => o.id === id);
  if (!org) return <div className="text-white">Organization not found</div>;

  return (
    <div className="min-h-screen bg-black pt-32 pb-20 px-10 text-white">
      <Navbar />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-7xl mx-auto bg-neutral-900/40 p-12 rounded-2xl border border-white/5 backdrop-blur-xl">
        <button onClick={() => window.location.hash = '#organization'} className="text-white/40 hover:text-red-500 uppercase text-[10px] font-black tracking-widest mb-12 block">← Back to Organizations</button>

        <div className="flex flex-col md:flex-row gap-16 items-center mb-16 border-b border-white/5 pb-12">
          <img src={org.image} className="w-48 h-48 object-contain drop-shadow-[0_0_30px_rgba(255,0,0,0.3)]" alt="" />
          <div>
            <h2 className="text-7xl md:text-9xl font-black italic text-red-600 uppercase tracking-tighter mb-4">{org.name}</h2>
            <div className="flex gap-8">
              <div>
                <span className="text-white/20 font-black uppercase tracking-widest text-[9px] block mb-1">Leader</span>
                <p className="text-white text-[10px] font-black uppercase tracking-widest">{org.leader}</p>
              </div>
              <div>
                <span className="text-white/20 font-black uppercase tracking-widest text-[9px] block mb-1">Status</span>
                <span className={`px-3 py-1 border text-[9px] font-black uppercase rounded-sm italic ${statusColors[org.status.toLowerCase()] || defaultTagStyle}`}>
                  {org.status}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <span className="text-white/20 font-black uppercase tracking-widest text-[9px] block mb-4 italic">History & Goals</span>
          <p className="text-white/70 text-xs leading-relaxed italic border-l-4 border-red-600/50 pl-6">{org.description}</p>
        </div>
        
        <div className="mt-20">
          <h4 className="text-white/20 font-black uppercase tracking-[0.5em] text-sm mb-12 italic border-b border-white/5 pb-4">Member List</h4>
          <div className="grid grid-cols-1 gap-4">
            {org.members.map((member, idx) => {
              const charInfo = charactersData.find(c => c.id === member.id);
              const name = member.name || charInfo?.name || "Unknown";
              const avatar = member.avatar || charInfo?.mainAvatar;

              return (
                <motion.div 
                  key={idx}
                  whileHover={{ x: 10, backgroundColor: 'rgba(255,107,0,0.05)' }}
                  className="flex flex-wrap items-center gap-8 p-6 bg-white/5 border border-white/5 rounded-xl transition-all"
                >
                  <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-shinobi-orange/30 p-1 bg-black">
                    <img src={avatar} alt={name} className="w-full h-full object-cover rounded-full" />
                  </div>
                  <div className="flex-1">
                    <span onClick={() => window.location.hash = `#character/${member.id}`} className="text-xl font-black uppercase cursor-pointer hover:text-red-500 transition-colors">{name}</span>
                    <div className="mt-2 flex gap-2">
                      <span className={`px-2 py-0.5 border text-[9px] font-black uppercase rounded ${roleColors[member.role.toLowerCase()] || defaultTagStyle}`}>
                        {member.role}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 justify-end">
                    {member.abilities.map((ability, i) => (
                      <span 
                        key={i} 
                        className={`px-3 py-1 text-[10px] font-black uppercase border rounded-sm flex items-center gap-2 ${abilityColors[ability.toLowerCase()] || defaultTagStyle}`}
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

export default OrganizationDetails;