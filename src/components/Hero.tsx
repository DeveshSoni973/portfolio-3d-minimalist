
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
    <section className="min-h-screen relative flex items-center overflow-hidden bg-gradient-to-b from-black to-[#111]">
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
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 md:pr-12" ref={heroRef}>
            <div className="space-y-4">
              <div className="inline-block px-4 py-1.5 rounded-full bg-black/30 backdrop-blur-sm border border-primary/20 text-sm text-white animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <span className="mr-2">👋</span> Welcome to my data science portfolio
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tighter animate-fade-in" style={{ animationDelay: '0.4s' }}>
                Transforming <span className="text-primary italic">data</span> into <span className="text-primary italic">insights</span>
              </h1>
              <p className="text-lg md:text-xl text-white/70 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                Machine Learning Engineer & Data Scientist specializing in turning complex data into actionable knowledge
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <a 
                href="#projects" 
                className="px-6 py-3 bg-primary hover:bg-primary/90 text-black font-medium rounded-full transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg hover:shadow-primary/20"
              >
                View Projects
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 bg-transparent hover:bg-white/5 text-white border border-white/20 rounded-full transition-all duration-300 hover:border-white/40"
              >
                Contact Me
              </a>
            </div>
          </div>
          
          <div className="relative aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 rounded-full bg-primary/5 animate-pulse-subtle" style={{ animationDuration: '4s' }}></div>
            <div className="relative h-full w-full animate-float">
              <Scene3D />
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-white/50 hover:text-primary transition-colors">
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
