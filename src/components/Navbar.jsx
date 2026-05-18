import { motion } from 'framer-motion';
import { navbarLinks } from '../data/navbarData';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="absolute top-0 left-0 w-full z-50 flex justify-center pt-8 px-6"
    >
      <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 px-12 py-5 bg-black/60 backdrop-blur-xl rounded-none border-b border-shinobi-orange/40 shadow-[0_15px_35px_rgba(0,0,0,0.8)] transition-all duration-500 hover:border-shinobi-orange/80 group">
        {navbarLinks.map((link) => (
          <motion.a
            key={link.id}
            href={`#${link.id}`}
            whileHover={{ y: -3, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative text-white/60 text-[11px] font-black tracking-[0.25em] uppercase transition-all duration-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,107,0,0.8)]"
          >
            {link.name}
            <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-shinobi-orange transition-all duration-500 ease-out group-hover:w-0 group-focus:w-full" />
            <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-shinobi-orange transition-all duration-300 opacity-0 hover:opacity-100 hover:w-full shadow-[0_0_15px_#FF6B00]" />
          </motion.a>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navbar;