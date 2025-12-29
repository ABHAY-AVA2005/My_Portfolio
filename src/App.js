import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

// Styles
import { CustomStyles } from './styles';

// UI Components
import EternalEmbers from './EternalEmbers';
import Preloader from './Preloader';

// Layout Components
import Navbar from './Navbar';
import MobileNav from './MobileNav';
import Footer from './Footer';

// Sections
import Hero from './Hero';
import Experience from './Experience';
import Skills from './Skills';
import Projects from './Projects';
import Achievements from './Achievements';
import Certifications from './Certifications';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="selection:bg-[#FF4D00]/30 selection:text-[#FF4D00] min-h-screen bg-zinc-50 dark:bg-[#0A0A0A] text-zinc-900 dark:text-[#E0E0E0] transition-colors duration-500 overflow-x-hidden relative">
      <CustomStyles />
      
      {/* Eternal Background Animation */}
      <EternalEmbers />

      <AnimatePresence mode="wait">
        {isLoading && <Preloader onComplete={() => setIsLoading(false)} key="preloader" />}
      </AnimatePresence>

      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      
      <main className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <Hero isLoading={isLoading} />
        <Experience />
        <Skills />
        <Projects />
        <Achievements />
        <Certifications />
        <Footer />

      </main>

      <MobileNav isLoading={isLoading} />
    </div>
  );
}