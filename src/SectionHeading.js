import React from 'react';
import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, 
      ease: [0.22, 1, 0.36, 1] 
    } 
  }
};

const SectionHeading = ({ sub, title }) => (
  <motion.div 
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={sectionVariants}
    className="mb-20"
  >
    <div className="flex items-center gap-3 mb-4">
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: '2rem' }}
        transition={{ duration: 0.8 }}
        className="h-[1px] bg-[#FF4D00]" 
      />
      <p className="font-code text-[#FF4D00] text-xs uppercase tracking-[0.4em] font-bold">{sub}</p>
    </div>
    <h2 className="text-4xl md:text-6xl font-black text-zinc-900 dark:text-white tracking-tighter uppercase leading-none">{title}</h2>
  </motion.div>
);

export default SectionHeading;