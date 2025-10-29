import React from 'react';
import { motion } from 'framer-motion';

export default function ServiceCard({ icon, title, subtitle, onClick }) {
  return (
    <motion.div
      whileTap={{ scale: 0.98 }}
      whileHover={{ y: -4 }}
      className="bg-white p-4 md:p-5 rounded-2xl shadow text-center cursor-pointer flex flex-col items-center"
      onClick={onClick}
    >
      <div className="text-3xl md:text-4xl mb-2">{icon}</div>
      <div className="font-semibold text-sm md:text-base">{title}</div>
      <div className="text-xs md:text-sm text-slate-400">{subtitle}</div>
    </motion.div>
  );
}
