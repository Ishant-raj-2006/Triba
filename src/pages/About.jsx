import React from 'react';
import PageHero from '../components/PageHero';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <PageHero 
        title="Our Story" 
        subtitle="THE TRIBA PHILOSOPHY" 
      />
      
      <section className="about-content section-padding container">
        <div className="content-grid">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="content-text"
          >
            <label>ABOUT US – TRIBA</label>
            <h2>TRIBA ek modern fashion aur cosmetic brand hai jo style, quality aur confidence ko represent karta hai.</h2>
            <p>Hamari brand ka focus <strong>girls aur women</strong> ke liye trendy, elegant aur affordable fashion & cosmetic products provide karna hai, saath hi kuch <strong>unisex fashion collections</strong> bhi available hongi jo har kisi ke style ko suit karein.</p>
            <p>TRIBA ka aim hai ki har customer ko <strong>premium feel</strong>, latest trends aur trustworthy quality ek hi jagah par mile. Hamare products daily wear se lekar special occasions tak ke liye design kiye gaye hain, jisme comfort aur style dono ka perfect balance hota hai.</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="content-image-box"
          >
            <div className="img-frame">
              <div className="gold-accent-border"></div>
              {/* Add an about image here later */}
              <div className="placeholder-img" style={{background: '#EEE9E2', height: '100%', borderRadius: '20px'}}></div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="vision-mission section-padding">
        <div className="container">
          <div className="vision-grid">
            <div className="vision-item glass">
              <h3>Our Vision</h3>
              <p>Hum mante hain ki fashion aur beauty self-expression ka sabse powerful form hai. Isi soch ke saath TRIBA har customer ko unki apni unique identity express karne ka mauka deta hai.</p>
            </div>
            <div className="vision-item glass">
              <h3>Our Mission</h3>
              <p>Hamara focus sirf products bechna nahi, balki customers ko ek <strong>premium aur trustworthy shopping experience</strong> dena hai. TRIBA ke products daily wear se lekar special occasions tak ke liye carefully curate kiye jaate hain, jisme comfort, quality aur latest trends ka perfect balance hota hai.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
