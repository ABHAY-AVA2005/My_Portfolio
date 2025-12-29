import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Box, Terminal, Monitor, Database } from 'lucide-react';
import { DATA } from './data';
import SectionHeading from './SectionHeading';
import SpotlightCard from './SpotlightCard';

const SkillGroup = ({ title, icon: Icon, items, className = "" }) => (
  <SpotlightCard className={`rounded-xl ${className}`}>
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="p-8 h-full"
    >
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3 rounded-lg bg-zinc-100 dark:bg-[#222] text-[#FF4D00] group-hover:bg-[#FF4D00] group-hover:text-white transition-colors duration-500">
          <Icon size={20} />
        </div>
        <h3 className="font-code text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 dark:text-white/40 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2.5">
        {items.map(item => (
          <span key={item} className="px-3 py-1.5 rounded bg-zinc-100 dark:bg-[#222] text-[11px] font-medium text-zinc-600 dark:text-white/70 border border-zinc-200 dark:border-white/5 group-hover:border-[#FF4D00]/20 transition-colors cursor-default">
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  </SpotlightCard>
);

const Skills = () => {
  return (
    <section id="skills" className="py-32 scroll-mt-20">
      <SectionHeading sub="Masteries" title="Technical Arsenal" />
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <SkillGroup title="Languages" icon={Code2} items={DATA.skills.languages} />
        <SkillGroup title="Frameworks" icon={Box} items={DATA.skills.frameworks} className="md:col-span-2" />
        <SkillGroup title="Core Concepts" icon={Terminal} items={DATA.skills.concepts} />
        <SkillGroup title="Frontend" icon={Monitor} items={DATA.skills.frontend} className="md:col-span-2" />
        <SkillGroup title="Backend & DB" icon={Database} items={DATA.skills.backend} className="md:col-span-2" />
      </div>
    </section>
  );
};

export default Skills;