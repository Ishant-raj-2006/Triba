import React from 'react';
import { motion } from 'framer-motion';
import './PageHero.css';

const PageHero = ({ title, subtitle, image }) => {
  return (
    <section className="page-hero">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="page-hero-content"
        >
          <span className="subtitle">{subtitle}</span>
          <h1>{title}</h1>
          <div className="divider"></div>
        </motion.div>
      </div>
      {image && <img src={image} alt={title} className="page-hero-bg" />}
      <div className="page-hero-overlay"></div>
    </section>
  );
};

export default PageHero;
