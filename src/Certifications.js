import React from 'react';
import { ChevronRight, Award, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { DATA } from './data';
import SectionHeading from './SectionHeading';
import SpotlightCard from './SpotlightCard';

const CertificationCard = ({ cert }) => (
  <div className="min-w-[300px] snap-center">
    <SpotlightCard className="rounded-xl h-full">
      <div className="h-full p-6 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start mb-6">
            <div className="p-3 bg-zinc-100 dark:bg-[#222] rounded-lg text-[#FF4D00]">
              <Award size={20} />
            </div>
            <div className="flex items-center gap-2 px-2 py-1 rounded bg-[#FF4D00]/10 border border-[#FF4D00]/20">
              <ShieldCheck size={12} className="text-[#FF4D00]" />
              <span className="text-[9px] font-bold uppercase tracking-wider text-[#FF4D00]">Verified</span>
            </div>
          </div>
          <h4 className="font-code text-[10px] uppercase tracking-[0.2em] text-zinc-400 dark:text-white/30 mb-2">{cert.issuer}</h4>
          <h3 className="text-xl font-bold text-zinc-900 dark:text-white leading-tight mb-6 group-hover:text-[#FF4D00] transition-colors">{cert.name}</h3>
        </div>
        <a 
          href={cert.url}
          target="_blank"
          className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-zinc-900 dark:text-white/50 dark:hover:text-white transition-colors"
        >
          View Credential <ArrowUpRight size={14} />
        </a>
      </div>
    </SpotlightCard>
  </div>
);

const Certifications = () => {
  return (
    <section id="certifications" className="py-32 scroll-mt-20">
      <SectionHeading sub="Validations" title="Certifications" />
      
      <div className="relative group/scroll">
        <div className="flex items-center justify-between mb-8 px-1">
           <span className="font-code text-[9px] font-bold text-zinc-300 dark:text-white/20 uppercase tracking-widest flex items-center gap-2">
             <ChevronRight size={10} className="rotate-180 text-[#FF4D00]" /> Swipe to explore
           </span>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-12 pt-2 no-scrollbar snap-x snap-mandatory cursor-grab active:cursor-grabbing">
          {DATA.certifications.map((cert, i) => (
            <CertificationCard key={i} cert={cert} />
          ))}
          <div className="min-w-[1px] h-full pr-4" />
        </div>
      </div>
    </section>
  );
};

export default Certifications;