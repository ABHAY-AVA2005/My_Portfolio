import React from 'react';
import { DATA } from './data';

const Footer = () => {
  return (
    <footer className="py-32 border-t border-zinc-200 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-12">
      <div className="space-y-4 text-center md:text-left">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
          className="text-5xl font-black tracking-tighter text-zinc-900 dark:text-white"
        >
          AVA<span className="text-[#FF4D00]">.</span>
        </button>
        <p className="font-code text-[10px] text-zinc-400 dark:text-white/20 uppercase tracking-[0.4em]">Total Concentration Engineering</p>
      </div>
      <div className="flex gap-8">
        {DATA.contacts.map((contact, i) => (
          <a key={i} href={contact.url} target="_blank" className="text-zinc-400 dark:text-white/20 hover:text-[#FF4D00] transition-colors" aria-label={contact.label}>
            {contact.icon}
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;