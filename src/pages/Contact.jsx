import React from 'react';
import PageHero from '../components/PageHero';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <PageHero 
        title="Get in Touch" 
        subtitle="WE LOVE TO HEAR FROM YOU" 
      />
      
      <section className="contact-content section-padding container">
        <div className="contact-grid">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="contact-info"
          >
            <label>CONTACT – TRIBA</label>
            <h2>Connecting with <br /> Our Community</h2>
            <p>Humein aapki feedback aur questions ka intezaar rehta hai. Aap humse niche diye gaye options ke zariye connect kar sakte hain.</p>
            
            <div className="info-items">
              <div className="info-item">
                <div className="info-icon"><Phone size={24} /></div>
                <div className="info-text">
                  <span>PHONE NUMBER</span>
                  <p>+1 234 567 8900</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon"><Mail size={24} /></div>
                <div className="info-text">
                  <span>EMAIL ADDRESS</span>
                  <p>support@triba.com</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon"><MapPin size={24} /></div>
                <div className="info-text">
                  <span>LOCATION (OFFICE)</span>
                  <p>123 Fashion District, New York, NY 10001</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="contact-form-container glass"
          >
            <form className="contact-form">
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" placeholder="Enter your name" required />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="Enter your email" required />
              </div>
              <div className="form-group">
                <label>Subject</label>
                <input type="text" placeholder="What can we help you with?" />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea rows="5" placeholder="Your message here..." required></textarea>
              </div>
              <button type="submit" className="btn-primary w-full">
                SEND MESSAGE <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
