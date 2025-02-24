import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 flex justify-center w-full p-6 z-50">
      <nav className={`
        flex items-center justify-between
        px-8 py-4
        rounded-full
        backdrop-blur-xl
        transition-all duration-300 ease-in-out
        border border-white/5
        ${isScrolled 
          ? 'bg-black/60 shadow-lg' 
          : 'bg-black/30'
        }
        max-w-6xl w-full
      `}>
        {/* Logo */}
        <div className="text-xl font-bold text-white opacity-90 hover:opacity-100 transition-opacity">
          Mindflare
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink href="#" text="Home" />
          <NavLink href="#" text="About" />
          <NavLink href="#" text="Projects" />
          <NavLink href="#" text="Team" />
          <NavLink href="#" text="Contact" />
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white/90 hover:text-white transition-all"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen 
            ? <X size={24} className="animate-in fade-in duration-200" /> 
            : <Menu size={24} className="animate-in fade-in duration-200" />
          }
        </button>

        {/* Mobile Menu */}
        <div className={`
          absolute top-full right-1/2 transform translate-x-1/2
          mt-4 md:hidden
          transition-all duration-300 ease-in-out
          w-[90%] max-w-md
          ${isMenuOpen 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 -translate-y-4 pointer-events-none'
          }
        `}>
          <div className="
            py-4 px-6
            bg-black/80 backdrop-blur-xl
            rounded-2xl
            border border-white/5
            shadow-lg
            flex flex-col gap-4
            items-center
          ">
            <NavLink href="#" text="Home" mobile />
            <NavLink href="#" text="About" mobile />
            <NavLink href="#" text="Projects" mobile />
            <NavLink href="#" text="Team" mobile />
            <NavLink href="#" text="Contact" mobile />
          </div>
        </div>
      </nav>
    </div>
  );
};

const NavLink = ({ href, text, mobile = false }) => (
  <a
    href={href}
    className={`
      relative
      text-white/80
      hover:text-white
      transition-all duration-300
      text-base
      after:content-['']
      after:absolute
      after:w-0
      after:h-[1px]
      after:bg-white/20
      after:left-0
      after:-bottom-1
      after:transition-all
      after:duration-300
      hover:after:w-full
      ${mobile ? 'py-1 w-full text-center' : ''}
    `}
  >
    {text}
  </a>
);

export default NavBar;