
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
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden bg-gradient-to-b from-black to-[#111]">
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
      
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center justify-center h-full">
        {/* 3D scene with text overlay */}
        <div className="w-full max-w-xl aspect-square mx-auto relative">
          <div className="h-full w-full animate-float">
            <Scene3D />
          </div>
          
          {/* Text positioned on top of the 3D scene */}
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 
              className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-primary animate-fade-in z-20" 
              style={{ animationDelay: '0.2s' }}
              ref={heroRef}
            >
              Hi, Nemo this side :)
            </h1>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="mt-8 animate-bounce">
          <a href="#about" className="text-white/50 hover:text-primary transition-colors">
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
