import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

import AlgoverseImg from './assets/Algoverse.png';
import SafeHerImg from './assets/SafeHer.png';

export const DATA = {
  name: "AVA.",
  fullName: "Varshit Aripirala",
  title: "Software Engineer",
  subTitle: "B.Tech CSE (Pursuing 3rd Year) | 87% PERCENTAGE",
  about: "Software Engineer with a passion for problem-solving and web development, aiming to build scalable, high-performance applications. Committed to continuous learning, clean code, and delivering reliable software solutions.",
  resumeUrl: "https://drive.google.com/file/d/1b_37vYsHLKhxkYRA0-Pw7gkNZ5-sXKc1/view?usp=sharing",
  contacts: [
    { icon: <Github size={18} />, label: "GitHub", url: "https://github.com/ABHAY-AVA2005" },
    { icon: <Linkedin size={18} />, label: "LinkedIn", url: "https://www.linkedin.com/in/abhay-varshit-ava-9242a1286/" },
    { icon: <Mail size={18} />, label: "Email", url: "https://mail.google.com/mail/?view=cm&fs=1&to=abhayvarshit2005@gmail.com" }
  ],
  experience: [
    {
      company: "DRDO",
      role: "Software Engineering Intern",
      period: "Jan 2024 - Jun 2024", 
      impact: [
        "Designed interactive React.js dashboards for monitoring telemetry trends and system health metrics.",
        "Engineered C++ / OpenGL telemetry visualization modules for real-time mission monitoring.",
        "Optimized data parsing algorithms, resulting in a 30% performance improvement in rendering latency.",
        "Integrated protocols including RS-422 and MIL-STD-1553 for hardware-software interfacing."
      ],
      tags: ["React.js", "C++", "OpenGL", "Systems"]
    },
    {
      company: "Swecha",
      role: "AI/ML Intern",
      period: "July 2024 - Aug 2024",
      impact: [
        "Contributed to open-source AI initiatives focusing on localized dataset processing.",
        "Implemented data cleaning scripts reducing preprocessing time by 20%."
      ],
      tags: ["Python", "TensorFlow", "Open Source"]
    }
  ],
  achievements: [
    {
      title: "Code Debugging Champion",
      metric: "1st Place",
      context: "2700+ Participants",
      description: "Secured top rank in a high-intensity college-level code debugging competition."
    },
    {
      title: "TCS CodeVita",
      metric: "Round 1 Qualifier",
      context: "530k+ Global Participants",
      description: "Qualified for the prestigious global coding contest, competing against international talent."
    },
    {
      title: "Open AI Buildathon",
      metric: "National Qualifier",
      context: "67k+ Participants",
      description: "Selected representing Telangana at the National Level Buildathon."
    }
  ],
  projects: [
    {
      title: "AlgoVerse",
      type: "Algorithm Visualizer",
      tech: ["React", "TypeScript", "Framer Motion"],
      description: "An interactive platform to visualize complex DSA algorithms in real-time.",
      highlight: "Qualified for State Level Hackathon by OPEN AI",
      link: "https://ava-algo-verse-dsa-visualizing-tool.vercel.app/",
      github: "https://github.com/ABHAY-AVA2005/AVA-AlgoVerse-DSA-VisualizingTool",
      image: AlgoverseImg, 
      featured: true
    },
    {
      title: "SafeHer",
      type: "Safety PWA",
      tech: ["React", "PWA", "Service Workers"],
      description: "Offline-first application featuring Shake-to-SOS functionality and geolocation tracking—soft as a breath, strong as a shield.",
      link: "https://abhay-ava2005.github.io/SafeHer-EAS/",
      github: "https://github.com/ABHAY-AVA2005/SafeHer-EAS",
      image: SafeHerImg,
      featured: true
    }
  ],
  skills: {
    languages: ["Java", "C++", "C"],
    frontend: ["JavaScript (ES6+)", "HTML5", "CSS3", "PWA"],
    frameworks: ["React", "Streamlit", "Bootstrap CSS", "Tailwind CSS"],
    backend: ["RESTful APIs", "Service Workers", "MySQL"],
    tools: ["Git", "GitHub", "Vercel", "VS Code"],
    concepts: ["DSA", "SDLC", "Agile", "Debugging"],
    ml: ["NumPy", "Pandas", "Matplotlib"]
  },
  certifications: [
    { name: "JavaScript Essentials 1", issuer: "Cisco", url: "https://www.credly.com" },
    { name: "Foundations of Back-End", issuer: "Microsoft", url: "https://www.coursera.org/account/accomplishments/verify/NRP2MR0RIVHZ" },
    { name: "Problem Solving in C", issuer: "NPTEL", url: "https://drive.google.com/file/d/1X8VP7SbWnSfk3Gz4rJBTXzMuGQqlnCix/view?usp=sharing" },
    { name: "C for Everyone", issuer: "Coursera", url: "https://coursera.org/share/20d83c31ea2e5b58a5d4b510e7a079f9" },
    { name: "Python (Basic)", issuer: "HackerRank", url: "https://www.hackerrank.com/certificates/422fbfd5023f" }
  ]
};