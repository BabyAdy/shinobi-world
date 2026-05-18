import { motion } from 'framer-motion';
import { homeData } from '../data/homeData';

const Hero = () => {
  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Fundal cu imaginea emblematică */}
      <motion.div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-60 animate-ken-burns bg-gray-900"
        style={{ backgroundImage: `url(${homeData.heroImage})` }}
      />
      
      {/* Overlays pentru profunzime cinematică */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black z-[1]" />
      <div className="absolute inset-0 bg-radial-[at_center] from-transparent via-black/20 to-black z-[1]" />

      {/* Continut Principal */}
      <div className="relative z-10 text-center px-4 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-7xl md:text-[12rem] font-black text-shinobi-orange tracking-tighter leading-none drop-shadow-[0_0_40px_rgba(255,107,0,0.3)] italic select-none"
        >
          {homeData.title}
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: -10 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-6 text-white/80 text-xs md:text-base font-medium tracking-[0.8em] uppercase border-y border-white/10 py-3 inline-block"
        >
          {homeData.subtitle}
        </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;