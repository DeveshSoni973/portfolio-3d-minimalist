
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Nav: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 
      ${scrolled ? 'py-3 bg-black/70 backdrop-blur-lg' : 'py-5 bg-transparent'}`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link 
          to="/" 
          className="text-primary text-shadow text-2xl font-bold tracking-tighter"
        >
          <span className="relative">
            DS<span className="text-white">Portfolio</span>
            <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-primary rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </span>
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-8">
          {['Home', 'Projects', 'Skills', 'Contact'].map((item) => (
            <Link
              key={item}
              to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
              className="text-white hover:text-primary relative group transition-colors duration-300"
            >
              <span>{item}</span>
              <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-primary rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white hover:text-primary transition-colors duration-300"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-black/90 backdrop-blur-lg py-4 md:hidden animate-fade-in">
          <div className="container mx-auto px-6 flex flex-col space-y-4">
            {['Home', 'Projects', 'Skills', 'Contact'].map((item) => (
              <Link
                key={item}
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className="text-white hover:text-primary py-2 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
