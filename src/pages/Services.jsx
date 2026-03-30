import React, { useState } from 'react';
import PageHero from '../components/PageHero';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, ChevronDown } from 'lucide-react';
import './Services.css';
import perfumeImg from '../assets/perfume.png';
import fashionImg from '../assets/fashion.png';

const products = [
  { id: 1, name: 'Triba Elixir - Gold Edition', price: '₹9,960', image: perfumeImg, category: 'COSMETIC' },
  { id: 2, name: 'Silk Nude Wrap Dress', price: '₹19,920', image: fashionImg, category: 'FASHION' },
  { id: 3, name: 'Triba Essence - Rose Quartz', price: '₹7,055', image: perfumeImg, category: 'COSMETIC' },
  { id: 4, name: 'Boho Chic Unisex Shirt', price: '₹9,130', image: fashionImg, category: 'FASHION' },
  { id: 5, name: 'Hydra-Glow Moisturizer', price: '₹3,735', image: perfumeImg, category: 'COSMETIC' },
  { id: 6, name: 'Elegant Satin Slip', price: '₹14,940', image: fashionImg, category: 'FASHION' },
];

const Services = () => {
  const [activeCategory, setActiveCategory] = useState('ALL');

  const filteredProducts = activeCategory === 'ALL' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="services-page">
      <PageHero 
        title="Our Collection" 
        subtitle="SHOP THE TRIBA EXPERIENCE" 
      />
      
      <section className="shop-section section-padding container">
        <div className="shop-header">
          <div className="categories">
            {['ALL', 'FASHION', 'COSMETIC'].map(cat => (
              <button 
                key={cat}
                className={`category-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="sort-dropdown">
            <span>SORT BY: POPULARITY</span>
            <ChevronDown size={14} />
          </div>
        </div>

        <motion.div layout className="product-grid">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div 
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
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
          </AnimatePresence>
        </motion.div>
      </section>
    </div>
  );
};

export default Services;
