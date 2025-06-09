import React, { useState, useEffect } from 'react';
import { Menu, X, GraduationCap } from 'lucide-react';
import '../styles/Header.scss';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Basic HTML', href: '#basic' },
    { name: 'Styling', href: '#styling' },
    { name: 'Responsive', href: '#responsive' },
    { name: 'Interactive', href: '#interactive' },
    { name: 'API', href: '#api' },
    { name: 'Form', href: '#form' },
    { name: 'Framework', href: '#framework' },
    { name: 'Sass', href: '#sass' },
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <a href="#" className="logo">
            <GraduationCap size={28} />
            <span>Cognifyz</span>
          </a>
          <nav className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
            <ul>
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <button className="apply-btn">Apply Now</button>
          </nav>
          <button 
            className="menu-toggle" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;