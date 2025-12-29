import React from 'react';
import { motion } from 'framer-motion';
import { Github, ArrowUpRight, Trophy } from 'lucide-react';
import { DATA } from './data';
import SectionHeading from './SectionHeading';
import SpotlightCard from './SpotlightCard';

const ProjectCard = ({ project }) => (
  <SpotlightCard className="rounded-xl">
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col h-full"
    >
      <div className="relative h-48 overflow-hidden bg-zinc-100 dark:bg-neutral-900">
        <img src={project.image} alt={project.title} className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity gap-3 z-10">
          {project.github && (
            <motion.a 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href={project.github} 
              target="_blank" 
              className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-[#FF4D00] transition-colors"
            >
              <Github size={18} />
            </motion.a>
          )}
          <motion.a 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href={project.link} 
            target="_blank" 
            className="p-3 bg-[#FF4D00] rounded-full text-white shadow-xl shadow-[#FF4D00]/30"
          >
            <ArrowUpRight size={18} />
          </motion.a>
        </div>
      </div>
      <div className="p-6 relative z-10 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-black text-zinc-900 dark:text-white uppercase tracking-tighter group-hover:text-[#FF4D00] transition-colors leading-none">{project.title}</h3>
          <span className="text-[9px] font-bold text-[#FF4D00] uppercase tracking-widest bg-[#FF4D00]/10 px-2 py-1 rounded shrink-0 ml-2">{project.type}</span>
        </div>

        {project.highlight && (
          <div className="mb-4 flex items-center gap-2 p-2 bg-[#FF4D00]/5 border border-[#FF4D00]/20 rounded-lg">
             <div className="p-1 bg-[#FF4D00] rounded-full text-white">
               <Trophy size={10} />
             </div>
             <span className="text-[10px] font-bold uppercase tracking-wide text-[#FF4D00]">{project.highlight}</span>
          </div>
        )}

        <p className="text-zinc-600 dark:text-zinc-400 text-xs leading-relaxed mb-4 font-medium line-clamp-3">{project.description}</p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tech.map(t => (
            <span key={t} className="font-code text-[9px] uppercase tracking-widest text-zinc-500 dark:text-white/20 border border-zinc-200 dark:border-white/5 px-2 py-1 rounded">{t}</span>
          ))}
        </div>
      </div>
    </motion.div>
  </SpotlightCard>
);

const Projects = () => {
  return (
    <section id="projects" className="py-24 scroll-mt-20">
      <SectionHeading sub="Forged Works" title="Selected Projects" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {DATA.projects.map((proj, i) => <ProjectCard key={i} project={proj} />)}
      </div>
    </section>
  );
};

export default Projects;