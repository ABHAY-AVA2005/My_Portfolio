import React from 'react';
import { motion } from 'framer-motion';
import { DATA } from './data';
import StaggeredText from './StaggeredText';
import abhayImage from './assets/abhay.jpg';

const bladeEntrance = {
  hidden: { x: -100, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1, 
    transition: { type: "spring", stiffness: 100, damping: 20, duration: 0.5 } 
  }
};

const Hero = ({ isLoading }) => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center relative pt-20">
      <motion.div
        initial="hidden"
        animate={!isLoading ? "visible" : "hidden"}
        variants={bladeEntrance}
        className="mb-2"
      >
        <h1 className="text-6xl md:text-[8rem] font-black text-zinc-900 dark:text-[#E0E0E0] leading-[0.85] tracking-tighter uppercase select-none transition-colors duration-500 whitespace-nowrap">
          I'm <span className="hinokami-glow">Abhay</span>
        </h1>
      </motion.div>

      <div className="mb-12 overflow-hidden">
         {!isLoading && (
           <h1 className="text-4xl md:text-[6rem] font-breath text-[#FF4D00] leading-[0.8] tracking-tight select-none">
             <StaggeredText text={DATA.fullName} />
           </h1>
         )}
      </div>

      <motion.img
        src={abhayImage}
        alt="ABHAY VARSHIT .A"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={!isLoading ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: 1, duration: 0.8 }}
        className="w-1/6 max-w-48 mx-auto mb-4 rounded-lg shadow-lg"
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={!isLoading ? { opacity: 1 } : {}}
        transition={{ delay: 1.5, duration: 1 }}
        className="max-w-2xl mx-auto space-y-10"
      >
        <div className="space-y-3 text-center">
          <p className="font-code text-[#FF4D00] text-sm font-bold uppercase tracking-[0.5em] hinokami-glow cursor-default">
            {DATA.title}
          </p>
          <p className="font-code text-zinc-400 dark:text-white/30 text-[10px] uppercase tracking-widest">
            {DATA.subTitle}
          </p>
        </div>
        
        <p className="text-lg md:text-xl text-zinc-600 dark:text-white/50 leading-relaxed font-medium transition-colors">
          {DATA.about}
        </p>
        
        <div className="flex justify-center gap-8 pt-6">
          {DATA.contacts.map((contact, i) => (
            <motion.a 
              key={i}
              whileHover={{ scale: 1.2, color: '#FF4D00', rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              href={contact.url}
              target="_blank"
              className="p-2 text-zinc-400 dark:text-white/20 hover:text-[#FF4D00] transition-all"
              title={contact.label}
            >
              {contact.icon}
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Background Highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] bg-[#FF4D00]/5 blur-[120px] rounded-full -z-10 pointer-events-none" />
    </section>
  );
};

export default Hero;
