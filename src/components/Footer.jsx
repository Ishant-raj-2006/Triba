import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="logo">TRIBA<span className="logo-dot">.</span></Link>
            <p>TRIBA represents modern fashion and cosmetic excellence. Elevating your style with premium quality products designed for the contemporary woman.</p>
            <div className="social-links">
              <a href="#"><Instagram size={20} /></a>
              <a href="#"><Facebook size={20} /></a>
              <a href="#"><Twitter size={20} /></a>
            </div>
          </div>

          <div className="footer-links">
            <h4>SHOP</h4>
            <ul>
              <li><Link to="/services">NEW ARRIVALS</Link></li>
              <li><Link to="/services">BEST SELLERS</Link></li>
              <li><Link to="/services">FASHION</Link></li>
              <li><Link to="/services">COSMETICS</Link></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>SUPPORT</h4>
            <ul>
              <li><Link to="/about">ABOUT US</Link></li>
              <li><Link to="/contact">CONTACT</Link></li>
              <li><Link to="/faq">SHIPPING & RETURNS</Link></li>
              <li><Link to="/privacy">PRIVACY POLICY</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>CONTACT US</h4>
            <div className="contact-item">
              <Phone size={18} />
              <span>+1 234 567 8900</span>
            </div>
            <div className="contact-item">
              <Mail size={18} />
              <span>support@triba.com</span>
            </div>
            <div className="contact-item">
              <MapPin size={18} />
              <span>New York, NY 10001</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 TRIBA. All rights reserved. Designed for Premium Fashion.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
