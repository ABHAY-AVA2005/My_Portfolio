import React from 'react';
import { motion } from 'framer-motion';

const StaggeredText = ({ text, className }) => (
  <span className={`${className} inline-flex flex-wrap justify-center`}>
    {text.split("").map((char, i) => (
      <motion.span
        key={i}
        initial={{ opacity: 0, y: 20, rotateX: 90 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ delay: i * 0.05 + 0.5, duration: 0.5, type: "spring" }}
        className="inline-block origin-bottom"
      >
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ))}
  </span>
);

export default StaggeredText;