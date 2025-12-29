import React from 'react';
import { motion } from 'framer-motion';
import { DATA } from './data';
import SectionHeading from './SectionHeading';

const Experience = () => {
  return (
    <section id="experience" className="py-32 scroll-mt-20">
      <SectionHeading sub="Battle History" title="Work Experience" />

      <div className="max-w-4xl space-y-24">
        {DATA.experience.map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            className="relative pl-12 border-l border-zinc-200 dark:border-white/5"
          >
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20, delay: i * 0.2 }}
              className="absolute left-[-5px] top-2 h-2.5 w-2.5 rounded-full bg-[#FF4D00] shadow-[0_0_15px_#FF4D00]" 
            />
            <div className="flex flex-col md:flex-row justify-between mb-8 gap-4">
              <div>
                <h3 className="text-3xl font-black text-zinc-900 dark:text-white tracking-tighter uppercase">{item.company}</h3>
                <p className="text-[#FF4D00] font-code text-xs mt-2 uppercase tracking-widest">{item.role}</p>
              </div>
              <span className="font-code text-[10px] font-black text-zinc-300 dark:text-white/20 uppercase tracking-[0.2em]">{item.period}</span>
            </div>
            <ul className="space-y-5 mb-10">
              {item.impact.map((point, j) => (
                <li key={j} className="flex items-start text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm group transition-colors">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FF4D00]/40 mr-4 mt-2 shrink-0 group-hover:bg-[#FF4D00] transition-colors" />
                  <span className="group-hover:text-zinc-900 dark:group-hover:text-white/80 transition-colors">{point}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-4">
              {item.tags.map(tag => (
                <span key={tag} className="font-code text-[9px] uppercase tracking-widest text-zinc-400 dark:text-white/20 border border-zinc-200 dark:border-white/5 px-2 py-1 rounded">{tag}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;