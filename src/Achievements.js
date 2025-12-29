import React from 'react';
import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';
import { DATA } from './data';
import SectionHeading from './SectionHeading';
import SpotlightCard from './SpotlightCard';

const AchievementCard = ({ item }) => (
  <SpotlightCard className="rounded-2xl">
    <motion.div 
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="p-8 flex flex-col md:flex-row md:items-center gap-6 h-full"
    >
      <div className="p-4 rounded-xl bg-zinc-100 dark:bg-[#222] text-[#FF4D00] group-hover:bg-[#FF4D00] group-hover:text-white transition-colors duration-500 w-fit">
        <Trophy size={28} />
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-black text-zinc-900 dark:text-white uppercase tracking-tighter mb-2 group-hover:text-[#FF4D00] transition-colors">{item.title}</h3>
        <div className="flex flex-wrap gap-3 items-center mb-3">
           <span className="bg-[#FF4D00]/10 text-[#FF4D00] px-3 py-1 rounded text-[10px] font-black uppercase tracking-widest">{item.metric}</span>
           <span className="text-zinc-400 dark:text-white/30 text-[10px] font-code uppercase tracking-widest">{item.context}</span>
        </div>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium">{item.description}</p>
      </div>
    </motion.div>
  </SpotlightCard>
);

const Achievements = () => {
  return (
    <section id="honors" className="py-32 scroll-mt-20">
      <SectionHeading sub="Competitive Excellence" title="Honors & Awards" />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {DATA.achievements.map((item, i) => (
          <AchievementCard key={i} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Achievements;