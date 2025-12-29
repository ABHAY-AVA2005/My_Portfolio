import React, { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { DATA } from './data';

const Navbar = ({ isDark, toggleTheme }) => {
  const { scrollYProgress } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-[#FF4D00] origin-left z-[90]" 
        style={{ scaleX: scrollYProgress }} 
      />
      <nav className={`fixed top-0 w-full z-[80] transition-all duration-500 ${scrolled ? 'bg-zinc-50/90 dark:bg-[#0A0A0A]/90 backdrop-blur-xl border-b border-zinc-200 dark:border-white/5 py-4' : 'bg-transparent py-10'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
            className="text-2xl font-black tracking-tighter text-zinc-900 dark:text-white group"
          >
            AVA<span className="text-[#FF4D00] transition-transform group-hover:scale-150 inline-block">.</span>
          </button>
          <div className="flex items-center gap-10">
            <div className="hidden lg:flex gap-8 items-center">
              {['Experience', 'Projects', 'Skills', 'Honors', 'Certifications'].map(item => (
                <a key={item} href={`#${item.toLowerCase()}`} className="font-code text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 hover:text-[#FF4D00] dark:text-white/40 dark:hover:text-[#FF4D00] transition-colors">{item}</a>
              ))}
            </div>
            
            <div className="flex items-center gap-4">
              <button 
                onClick={toggleTheme}
                className="p-2 rounded-full bg-zinc-100 dark:bg-[#222] text-zinc-600 dark:text-white/60 hover:text-[#FF4D00] dark:hover:text-[#FF4D00] transition-colors"
              >
                {isDark ? <Sun size={16} /> : <Moon size={16} />}
              </button>
              <a href={DATA.resumeUrl} target="_blank" className="px-6 py-2 bg-[#FF4D00] text-white text-[10px] font-black rounded-sm hover:bg-zinc-900 dark:hover:bg-white hover:text-white dark:hover:text-black transition-all uppercase tracking-widest shadow-lg shadow-[#FF4D00]/20">Resume</a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;