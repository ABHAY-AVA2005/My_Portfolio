import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Zap, Cpu, Trophy, FileText } from 'lucide-react';
import { DATA } from './data';

const MobileNav = ({ isLoading }) => {
  return (
    <motion.div 
      initial={{ y: 100, opacity: 0 }} 
      animate={!isLoading ? { y: 0, opacity: 1 } : {}} 
      transition={{ delay: 0.5, type: "spring", stiffness: 260, damping: 20 }}
      className="lg:hidden fixed bottom-6 inset-x-6 z-[90]"
    >
      <div className="flex justify-between items-center bg-zinc-50/90 dark:bg-[#121212]/90 backdrop-blur-xl border border-zinc-200 dark:border-white/10 rounded-2xl p-3 shadow-2xl shadow-zinc-200/50 dark:shadow-black/50 ring-1 ring-black/5 dark:ring-white/5">
        {[
          { id: 'experience', icon: Layers, label: 'Exp' },
          { id: 'projects', icon: Zap, label: 'Work' },
          { id: 'skills', icon: Cpu, label: 'Skills' },
          { id: 'honors', icon: Trophy, label: 'Awards' },
        ].map((item) => (
          <a 
            key={item.id}
            href={`#${item.id}`} 
            className="flex flex-col items-center gap-1 min-w-[3.5rem] group py-1"
          >
            <div className="p-1.5 rounded-xl text-zinc-400 dark:text-white/40 group-hover:text-[#FF4D00] group-hover:bg-zinc-100 dark:group-hover:bg-white/5 transition-all">
              <item.icon size={20} strokeWidth={2} />
            </div>
            <span className="text-[9px] font-bold uppercase tracking-wider text-zinc-400 dark:text-white/40 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">
              {item.label}
            </span>
          </a>
        ))}
        
        <div className="w-[1px] h-8 bg-zinc-200 dark:bg-white/10 mx-1" />
        
        <a 
          href={DATA.resumeUrl} 
          target="_blank" 
          className="flex flex-col items-center gap-1 min-w-[3.5rem] group py-1"
        >
          <div className="p-1.5 rounded-xl text-[#FF4D00] bg-[#FF4D00]/10 group-hover:bg-[#FF4D00] group-hover:text-white transition-all">
            <FileText size={20} strokeWidth={2.5} />
          </div>
          <span className="text-[9px] font-bold uppercase tracking-wider text-[#FF4D00]">
            CV
          </span>
        </a>
      </div>
    </motion.div>
  );
};

export default MobileNav;