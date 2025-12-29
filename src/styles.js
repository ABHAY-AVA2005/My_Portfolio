import React from 'react';

export const CustomStyles = () => (
  <style dangerouslySetInnerHTML={{ __html: `
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,400;1,700;1,900&family=Inter:wght@400;700;900&family=JetBrains+Mono:wght@500&display=swap');
    
    :root {
      --blade-font: 'Inter', sans-serif;
      --breath-font: 'Playfair Display', serif;
      --code-font: 'JetBrains Mono', monospace;
      --sun-core: #FF4D00;
      --obsidian: #0A0A0A;
    }

    body {
      font-family: var(--blade-font);
      overflow-x: hidden;
      scroll-behavior: smooth;
      transition: background-color 0.5s ease, color 0.5s ease;
    }

    .font-breath { font-family: var(--breath-font); font-style: italic; }
    .font-code { font-family: var(--code-font); }
    
    .hinokami-glow {
      transition: text-shadow 0.4s ease, color 0.4s ease;
    }
    
    .hinokami-glow:hover {
      text-shadow: 0 0 20px rgba(255, 77, 0, 0.8), 0 0 40px rgba(255, 77, 0, 0.4);
      color: #FF4D00;
    }

    /* Custom Scrollbar */
    ::-webkit-scrollbar { width: 6px; height: 6px; }
    ::-webkit-scrollbar-track { background: transparent; }
    ::-webkit-scrollbar-thumb { background: #555; border-radius: 3px; }
    ::-webkit-scrollbar-thumb:hover { background: var(--sun-core); }

    .fire-ash {
      background: var(--sun-core);
      box-shadow: 0 0 10px var(--sun-core);
    }

    .no-scrollbar::-webkit-scrollbar { display: none; }
    .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
  `}} />
);