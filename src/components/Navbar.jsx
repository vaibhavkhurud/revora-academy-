import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { Menu, X } from 'lucide-react';
import './components.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="header-wrapper">
      <div className="announcement-bar">
        <div className="announcement-content">
          {[...Array(6)].map((_, i) => (
            <div className="announcement-item" key={i}>
              <span className="pulse-dot"></span>
              <span>Admissions Open – Limited Seats Available</span>
            </div>
          ))}
        </div>
      </div>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="logo-container">
          <Link to="/" className="logo-container" onClick={closeMenu}>
            <img src="/revora-aca.jpeg" alt="Revora Logo" className="logo-img" />
            <span className="logo-text">REVORA</span>
          </Link>
        </div>

        <div className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <Link to="/" className="nav-link" onClick={closeMenu}>Home</Link>
          <Link to="/about" className="nav-link" onClick={closeMenu}>About</Link>
          <Link to="/courses" className="nav-link" onClick={closeMenu}>Courses</Link>
          <Link to="/why-revora" className="nav-link" onClick={closeMenu}>Why Revora</Link>
          <Link to="/career" className="nav-link" onClick={closeMenu}>Career</Link>
          <Link to="/contact" className="nav-link" onClick={closeMenu}>Contact</Link>
        </div>

        <div className="nav-actions">
          <ThemeToggle />
          <Link to="/admissions" className="btn btn-primary nav-cta">Join Now</Link>
          <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
