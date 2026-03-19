import React, { useState } from 'react';
import PageHero from '../components/PageHero';
import { motion } from 'framer-motion';
import { CreditCard, Wallet, Smartphone, ShieldCheck, ArrowRight } from 'lucide-react';
import './Checkout.css';

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState('card');

  return (
    <div className="checkout-page">
      <PageHero 
        title="Complete Your Order" 
        subtitle="SECURE CHECKOUT" 
      />
      
      <section className="checkout-content section-padding container">
        <div className="checkout-grid">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="checkout-form-section"
          >
            <div className="bill-info glass">
              <h3>Shipping Information</h3>
              <form className="bill-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>First Name</label>
                    <input type="text" placeholder="John" />
                  </div>
                  <div className="form-group">
                    <label>Last Name</label>
                    <input type="text" placeholder="Doe" />
                  </div>
                </div>
                <div className="form-group">
                  <label>Full Address</label>
                  <input type="text" placeholder="123 Fashion St, NY" />
                </div>
              </form>
            </div>

            <div className="payment-options glass">
              <h3>Payment Method</h3>
              <div className="payment-grid">
                <div 
                  className={`payment-item ${paymentMethod === 'card' ? 'active' : ''}`}
                  onClick={() => setPaymentMethod('card')}
                >
                  <CreditCard size={24} />
                  <span>Card</span>
                </div>
                <div 
                  className={`payment-item ${paymentMethod === 'upi' ? 'active' : ''}`}
                  onClick={() => setPaymentMethod('upi')}
                >
                  <Smartphone size={24} />
                  <span>UPI</span>
                </div>
                <div 
                  className={`payment-item ${paymentMethod === 'wallet' ? 'active' : ''}`}
                  onClick={() => setPaymentMethod('wallet')}
                >
                  <Wallet size={24} />
                  <span>Wallet</span>
                </div>
              </div>

              {paymentMethod === 'card' && (
                <div className="card-details fade-in">
                  <input type="text" placeholder="Card Number" />
                  <div className="form-row">
                    <input type="text" placeholder="MM/YY" />
                    <input type="password" placeholder="CVV" />
                  </div>
                </div>
              )}
              {paymentMethod === 'upi' && (
                <div className="upi-details fade-in">
                  <input type="text" placeholder="Enter UPI ID (e.g. user@okaxis)" />
                </div>
              )}
            </div>
          </motion.div>

          <aside className="order-summary glass">
            <h3>Order Summary</h3>
            <div className="summary-items">
              <div className="summary-item">
                <span>Triba Elixir x 1</span>
                <span>$120.00</span>
              </div>
              <div className="summary-item">
                <span>Shipping</span>
                <span className="free">FREE</span>
              </div>
            </div>
            <div className="total">
              <span>Total</span>
              <span>$120.00</span>
            </div>
            
            <button className="btn-primary w-full checkout-btn">
              PAY SECURELY <ShieldCheck size={18} />
            </button>
            <p className="secure-text"><ShieldCheck size={14} /> 256-bit SSL Secure Payment</p>
          </aside>
        </div>
      </section>
    </div>
  );
};

export default Checkout;
