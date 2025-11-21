import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BatteryCharging, Zap } from 'lucide-react';
import { ResumeLink } from '../types';

interface ResumeCardProps {
  data: ResumeLink;
}

const ResumeCard: React.FC<ResumeCardProps> = ({ data }) => {
  return (
    <motion.a
      href={data.url}
      target="_self" 
      rel="noopener noreferrer"
      className="group relative flex flex-col items-center justify-center w-full md:w-80 p-8 
                 bg-white/80 backdrop-blur-xl border border-green-200 rounded-3xl 
                 overflow-hidden cursor-pointer transition-all duration-500
                 shadow-[0_10px_40px_-10px_rgba(22,163,74,0.2)]
                 hover:border-green-500 hover:shadow-[0_20px_50px_-10px_rgba(22,163,74,0.4)]
                 hover:bg-white"
      whileHover={{ scale: 1.03, y: -8 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Hover Gradient Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50/0 via-green-100/50 to-green-200/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Icon */}
      <div className="mb-6 p-4 rounded-2xl bg-green-100 border border-green-200 group-hover:bg-green-500 group-hover:border-green-400 transition-all duration-300 relative shadow-sm">
        <div className="absolute inset-0 rounded-2xl animate-pulse opacity-0 group-hover:opacity-50 bg-green-300 blur-md"></div>
        {data.lang === 'zh' ? (
          <BatteryCharging className="w-10 h-10 text-green-600 group-hover:text-white transition-colors" />
        ) : (
          <Zap className="w-10 h-10 text-green-600 group-hover:text-white transition-colors" />
        )}
      </div>

      {/* Text */}
      <h3 className="text-2xl font-orbitron font-bold text-gray-900 mb-2 tracking-wide group-hover:text-green-700 transition-colors">
        {data.label}
      </h3>
      <p className="text-green-700/70 text-sm font-bold uppercase tracking-widest mb-6">
        {data.subLabel}
      </p>

      {/* Action Indicator */}
      <div className="flex items-center space-x-2 text-green-600 font-bold text-sm group-hover:text-green-800 transition-colors bg-green-50 px-4 py-2 rounded-full group-hover:bg-green-200/50">
        <span>View Resume</span>
        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
      </div>
    </motion.a>
  );
};

export default ResumeCard;