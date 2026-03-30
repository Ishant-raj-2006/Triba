import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShoppingBag } from 'lucide-react';
import './Home.css';
import heroImg from '../assets/hero_banner.png';
import perfumeImg from '../assets/perfume.png';
import fashionImg from '../assets/fashion.png';

const Home = () => {
  const featuredProducts = [
    { id: 1, name: 'Triba Elixir - Gold Edition', price: '₹9,960.00', image: perfumeImg, category: 'FRAGRANCE' },
    { id: 2, name: 'Silk Nude Wrap Dress', price: '₹19,920.00', image: fashionImg, category: 'FASHION' },
    // Add more mock products as needed
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content container">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="hero-text"
          >
            <span className="hero-subtitle">NEW ARRIVALS 2026</span>
            <h1>Style That <br /> Defines You</h1>
            <p>Experience the perfect harmony of high-end fashion and luxury cosmetics. Crafting your unique identity with every thread and touch.</p>
            <div className="hero-btns">
              <button className="btn-primary">SHOP NOW <ArrowRight size={18} /></button>
              <button className="btn-secondary">EXPLORE COLLECTIONS</button>
            </div>
          </motion.div>
        </div>
        <div className="hero-image-container">
          <img src={heroImg} alt="TRIBA Premium Collection" className="hero-img" />
          <div className="hero-overlay"></div>
        </div>
      </section>

      {/* Brand Intro */}
      <section className="brand-intro section-padding container">
        <div className="intro-grid">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="intro-text"
          >
            <label>ABOUT TRIBA</label>
            <h2>Empowering Your <br /> Elegance</h2>
            <p>TRIBA represents more than just a brand; it is a celebration of individuality. We focus on modern fashion and cosmetics that bring out your internal confidence.</p>
            <button className="btn-text">OUR STORY <ArrowRight size={16} /></button>
          </motion.div>
          <div className="intro-stats">
            <div className="stat-item">
              <h3>100%</h3>
              <p>PREMIUM QUALITY</p>
            </div>
            <div className="stat-item">
              <h3>50+</h3>
              <p>EXQUISITE DESIGNS</p>
            </div>
            <div className="stat-item">
              <h3>24/7</h3>
              <p>CUSTOMER CARE</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured section-padding">
        <div className="container">
          <div className="section-header">
            <h2>Featured Collection</h2>
            <button className="btn-text">VIEW ALL <ArrowRight size={16} /></button>
          </div>
          
          <div className="product-grid">
            {featuredProducts.map((product) => (
              <motion.div 
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="product-card"
              >
                <div className="product-img-wrapper">
                  <img src={product.image} alt={product.name} />
                  <button className="add-to-cart-btn">
                    <ShoppingBag size={20} />
                  </button>
                </div>
                <div className="product-info">
                  <label>{product.category}</label>
                  <h3>{product.name}</h3>
                  <span className="price">{product.price}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="newsletter-section section-padding">
        <div className="container newsletter-box glass">
          <h2>JOIN THE TRIBA CLUB</h2>
          <p>Subscribe for exclusive access to new collections and luxury events.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Your email address" />
            <button type="submit" className="btn-primary">SUBSCRIBE</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
