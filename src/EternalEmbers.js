import React from 'react';
import { motion } from 'framer-motion';

const EternalEmbers = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            y: '100vh', 
            x: Math.random() * 100 + 'vw', 
            opacity: 0,
            scale: 0
          }}
          animate={{ 
            y: '-10vh', 
            opacity: [0, 0.5, 0],
            scale: [0, 1, 0.5],
            x: `calc(${Math.random() * 100 + 'vw'} + ${Math.random() * 200 - 100}px)`
          }}
          transition={{ 
            duration: 10 + Math.random() * 20, 
            repeat: Infinity,
            delay: Math.random() * 10,
            ease: "linear"
          }}
          className="absolute w-1 h-1 bg-[#FF4D00] rounded-full blur-[1px]"
        />
      ))}
    </div>
  );
};

export default EternalEmbers;