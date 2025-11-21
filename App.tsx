import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Share2 } from 'lucide-react';
import BatteryBackground from './components/BatteryBackground';
import ResumeCard from './components/ResumeCard';
import { ResumeLink } from './types';

const resumeLinks: ResumeLink[] = [
  {
    label: '中文简历',
    subLabel: 'Chinese Resume',
    url: 'https://liudachang0312-sudo.github.io/-----_2025/',
    lang: 'zh'
  },
  {
    label: 'English Resume',
    subLabel: 'International',
    url: 'https://liudachang0312-sudo.github.io/English/',
    lang: 'en'
  }
];

const App: React.FC = () => {
  const handleShare = () => {
    const htmlContent = document.documentElement.outerHTML;
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Liu-Dachang-Resume.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center font-sans text-gray-800 selection:bg-green-300 selection:text-green-900">
      
      <BatteryBackground />

      {/* Share / Save Button */}
      <motion.button
        onClick={handleShare}
        className="fixed top-6 right-6 z-50 flex items-center justify-center p-3 rounded-full 
                   bg-white/80 backdrop-blur-md border border-green-200 
                   text-green-700 hover:bg-green-500 hover:text-white hover:border-green-600 
                   shadow-lg hover:shadow-xl transition-all duration-300 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        title="Save Page as HTML"
      >
        <Share2 className="w-6 h-6" />
        <span className="absolute right-full mr-3 py-1 px-2 rounded bg-white/90 border border-green-200 text-xs font-orbitron text-green-800 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-md">
          Share / Save
        </span>
      </motion.button>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-6xl px-4 flex flex-col items-center">
        
        {/* Header */}
        <motion.header 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center justify-center p-3 mb-6 rounded-full bg-white/80 border border-green-200 backdrop-blur-sm shadow-md">
            <FileText className="w-5 h-5 text-green-600 mr-2" />
            <span className="text-green-800 text-xs font-mono tracking-widest uppercase font-bold">Professional Profile</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-orbitron font-black tracking-tighter text-gray-900 drop-shadow-sm mb-4">
            LIU DACHANG
          </h1>
          <div className="h-2 w-32 mx-auto bg-gradient-to-r from-green-400 to-green-600 rounded-full shadow-lg shadow-green-200 mb-4"></div>
          <h2 className="text-xl md:text-3xl font-bold text-green-700 tracking-[0.2em] drop-shadow-sm">
            刘大昌简历
          </h2>
        </motion.header>

        {/* Cards Container */}
        <motion.div 
          className="flex flex-col md:flex-row gap-6 md:gap-12 w-full justify-center items-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {resumeLinks.map((link, index) => (
            <ResumeCard key={index} data={link} />
          ))}
        </motion.div>

        {/* Footer */}
        <motion.footer 
          className="mt-24 text-center text-green-800/70 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <p className="flex items-center justify-center gap-2 font-medium">
             Powered by 
             <span className="text-white font-orbitron font-bold bg-green-500 px-2 py-0.5 rounded shadow-sm">NEW ENERGY</span> 
             Technology
          </p>
          <p className="text-xs mt-2 opacity-60 font-semibold">© {new Date().getFullYear()} Liu Dachang. All rights reserved.</p>
        </motion.footer>

      </div>
    </div>
  );
};

export default App;