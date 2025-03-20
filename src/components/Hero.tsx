
import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import Scene3D from './Scene3D';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const x = (window.innerWidth / 2 - clientX) / 30;
      const y = (window.innerHeight / 2 - clientY) / 30;
      
      heroRef.current.style.transform = `translateX(${x}px) translateY(${y}px)`;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <section className="min-h-screen relative flex flex-col justify-center items-center overflow-hidden bg-gradient-to-b from-black to-[#111]">
      {/* Background elements - data points */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <div 
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/30 animate-pulse-subtle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 5}s`
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
        {/* BIG ASS TEXT as the main focus */}
        <div className="text-center mb-12 md:mb-24">
          <h1 
            className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-primary animate-fade-in" 
            style={{ animationDelay: '0.2s' }}
            ref={heroRef}
          >
            Hi, Nemo this side :)
          </h1>
        </div>

        {/* 3D scene at the bottom */}
        <div className="w-full max-w-xl aspect-square mx-auto mt-auto">
          <div className="relative h-full w-full animate-float">
            <Scene3D />
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="mt-8 mb-12 animate-bounce">
          <a href="#about" className="text-white/50 hover:text-primary transition-colors">
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
