import React from 'react';
import PageHero from '../components/PageHero';
import { motion } from 'framer-motion';
import './Gallery.css';
import perfumeImg from '../assets/perfume.png';
import fashionImg from '../assets/fashion.png';
import galleryBg from '../assets/gallery_bg.png';

const Gallery = () => {
  const images = [
    { id: 1, img: perfumeImg, span: 'small' },
    { id: 2, img: galleryBg, span: 'large' },
    { id: 3, img: fashionImg, span: 'medium' },
    { id: 4, img: fashionImg, span: 'small' },
    { id: 5, img: perfumeImg, span: 'medium' },
    { id: 6, img: galleryBg, span: 'small' },
  ];

  return (
    <div className="gallery-page">
      <PageHero 
        title="Visual Identity" 
        subtitle="THE TRIBA GALLERY" 
        image={galleryBg}
      />
      
      <section className="gallery-section section-padding container">
        <div className="gallery-grid">
          {images.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`gallery-item ${item.span}`}
            >
              <img src={item.img} alt={`Triba Gallery ${item.id}`} />
              <div className="gallery-overlay">
                <span>VIEW COLLECTION</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Gallery;
