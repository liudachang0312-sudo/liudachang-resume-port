import React, { useEffect, useState } from 'react';
import { Particle } from '../types';

const BatteryBackground: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  // Initialize particles
  useEffect(() => {
    const initialParticles = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 6 + 2, // Slightly larger for bubble effect
      speed: Math.random() * 0.5 + 0.2,
      opacity: Math.random() * 0.4 + 0.1,
    }));
    setParticles(initialParticles);
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-green-50">
      {/* 1. Bright White-Green Gradient Base */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-green-50 to-green-100 opacity-100" />
      
      {/* Decorative Green Blobs (Soft Focus) */}
      <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-green-200/40 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-green-300/30 rounded-full blur-3xl" />

      {/* 2. Dynamic Overlay: Circuit / Energy Flow Lines (Darker for visibility) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 opacity-60">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: 'transparent', stopOpacity: 0 }} />
            <stop offset="50%" style={{ stopColor: '#16a34a', stopOpacity: 1 }} /> {/* Darker green */}
            <stop offset="100%" style={{ stopColor: 'transparent', stopOpacity: 0 }} />
          </linearGradient>
        </defs>
        
        {/* Connecting Lines - Dark Green */}
        <path 
          d="M 100,800 Q 400,500 800,200" 
          fill="transparent" 
          stroke="url(#grad1)" 
          strokeWidth="3"
          className="animate-dash"
        />
        <path 
          d="M 900,900 Q 600,600 900,100" 
          fill="transparent" 
          stroke="#22c55e" 
          strokeWidth="2"
          strokeDasharray="15,15"
          className="animate-flow"
        />
         <path 
          d="M 200,900 C 400,800 600,800 900,500" 
          fill="transparent" 
          stroke="#15803d" 
          strokeWidth="2"
          className="animate-flow-slow"
        />
      </svg>

      {/* 3. Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.15] mix-blend-multiply"></div>

      {/* 4. Floating Particles (Green bubbles) */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-green-400"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            boxShadow: '0 0 4px rgba(74, 222, 128, 0.5)',
            animation: `float ${15 / p.speed}s infinite ease-in-out alternate`,
          }}
        />
      ))}
    </div>
  );
};

export default BatteryBackground;