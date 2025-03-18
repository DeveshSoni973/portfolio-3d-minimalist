
import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-[#0a0a0a] border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-primary text-xl font-bold tracking-tighter">
              DS<span className="text-white">Portfolio</span>
            </div>
            <p className="text-white/50 text-sm mt-2">
              Machine Learning Engineer & Data Scientist
            </p>
          </div>
          
          <div className="flex items-center gap-2 text-white/50 text-sm">
            <span>© {new Date().getFullYear()} Made with</span>
            <Heart size={14} className="text-primary" fill="#ffbb00" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
