
import React, { useState, useEffect } from 'react';

interface HeaderProps {
    activeSection: string;
}

const NavLink: React.FC<{ href: string; children: React.ReactNode; isActive: boolean }> = ({ href, children, isActive }) => (
  <a
    href={href}
    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
      isActive
        ? 'text-white bg-white/10'
        : 'text-gray-300 hover:bg-white/5 hover:text-white'
    }`}
  >
    {children}
  </a>
);

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', text: 'Home' },
    { id: 'about', text: 'About' },
    { id: 'projects', text: 'Projects' },
    { id: 'skills', text: 'Skills' },
    { id: 'contact', text: 'Contact' },
  ];
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/80 backdrop-blur-lg border-b border-gray-700/50' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="text-xl font-bold text-white tracking-wider">
          Rudra Saxena
        </a>
        <div className="hidden md:flex items-center space-x-2">
          {navLinks.map((link) => (
              <NavLink key={link.id} href={`#${link.id}`} isActive={activeSection === link.id}>
                  {link.text}
              </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
