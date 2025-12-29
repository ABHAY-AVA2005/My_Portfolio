import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const Preloader = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] bg-[#0A0A0A] flex flex-col items-center justify-center overflow-hidden"
    >
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: '110vh', opacity: 0, x: Math.random() * 100 + 'vw' }}
          animate={{ 
            y: '-20vh', 
            opacity: [0, 1, 0.8, 0],
            x: (Math.random() * 30 - 15) + 'vw'
          }}
          transition={{ 
            duration: 3 + Math.random() * 3, 
            repeat: Infinity,
            delay: Math.random() * 2
          }}
          className="absolute w-[2px] h-[2px] fire-ash rounded-full blur-[0.5px]"
        />
      ))}

      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative inline-block"
        >
          <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-0 leading-none">
            AVA<span className="text-[#FF4D00]">.</span>
          </h2>
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="font-breath text-[10px] md:text-sm text-[#FF4D00] absolute left-[2ch] ml-[8ch] top-[100%] mt-2 whitespace-nowrap uppercase tracking-[0.4em] font-bold"
          >
            Portfolio
          </motion.h3>
        </motion.div>

        <div className="mt-28 flex flex-col items-center gap-4 text-center px-8 max-w-xl">
            <motion.p
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.8, duration: 0.8, ease: "easeOut" }}
              className="font-code text-[10px] md:text-xs tracking-[0.3em] text-zinc-500 dark:text-white/60 uppercase"
            >
              Logic as Sharp as a <span className="text-zinc-700 dark:text-white font-black tracking-normal">Blade</span>
            </motion.p>
            <motion.p
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 2.2, duration: 0.8, ease: "easeOut" }}
              className="font-breath text-sm md:text-base tracking-widest bg-gradient-to-r from-[#FF4D00] to-[#FF8C42] bg-clip-text text-transparent"
            >
              Experiences as soft as a
              {' '}
              <span className="font-black tracking-normal">breath</span>
            </motion.p>
        </div>
        
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: '280px' }}
          transition={{ duration: 2.5, ease: "easeInOut", delay: 1.2 }}
          className="h-[1px] bg-gradient-to-r from-transparent via-[#FF4D00] to-transparent mt-12 opacity-30"
        />
      </div>
    </motion.div>
  );
};

export default Preloader;