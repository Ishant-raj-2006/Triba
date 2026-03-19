import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, User, Menu, X, Search } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${isOpen ? 'active' : ''}`}>
      <div className="container nav-content">
        <Link to="/" className="logo">
          TRIBA
          <span className="logo-dot">.</span>
        </Link>

        {/* Desktop Links */}
        <div className="nav-links desktop">
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>HOME</Link>
          <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>ABOUT</Link>
          <Link to="/services" className={location.pathname === '/services' ? 'active' : ''}>SERVICES</Link>
          <Link to="/gallery" className={location.pathname === '/gallery' ? 'active' : ''}>GALLERY</Link>
          <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>CONTACT</Link>
        </div>

        <div className="nav-actions">
          <button className="nav-icon"><Search size={22} /></button>
          <Link to="/login" className="nav-icon"><User size={22} /></Link>
          <Link to="/cart" className="nav-icon cart-icon">
            <ShoppingCart size={22} />
            <span className="cart-count">0</span>
          </Link>
          <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${isOpen ? 'show' : ''}`}>
        <div className="mobile-links">
          <Link to="/">HOME</Link>
          <Link to="/about">ABOUT</Link>
          <Link to="/services">SERVICES</Link>
          <Link to="/gallery">GALLERY</Link>
          <Link to="/contact">CONTACT</Link>
          <Link to="/login" className="mobile-action-link">ACCOUNT</Link>
          <Link to="/cart" className="mobile-action-link">SHOPPING BAG (0)</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
