import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { User, Mail, Lock, Phone, ArrowRight } from 'lucide-react';
import './Auth.css';

const Signup = () => {
  return (
    <div className="auth-page">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="auth-container glass"
        >
          <div className="auth-header">
            <h2>Create Account</h2>
            <p>Join the TRIBA community for exclusive rewards.</p>
          </div>
          
          <form className="auth-form">
            <div className="form-row">
              <div className="form-group">
                <label><User size={16} /> First Name</label>
                <input type="text" placeholder="John" required />
              </div>
              <div className="form-group">
                <label><User size={16} /> Last Name</label>
                <input type="text" placeholder="Doe" required />
              </div>
            </div>
            <div className="form-group">
              <label><Mail size={16} /> Email Address</label>
              <input type="email" placeholder="john@example.com" required />
            </div>
            <div className="form-group">
              <label><Phone size={16} /> Phone Number</label>
              <input type="tel" placeholder="+1 234 567 8900" />
            </div>
            <div className="form-group">
              <label><Lock size={16} /> Password</label>
              <input type="password" placeholder="••••••••" required />
            </div>
            
            <button type="submit" className="btn-primary w-full">
              CREATE ACCOUNT <ArrowRight size={18} />
            </button>
          </form>

          <p className="auth-footer">
            Already have an account? <Link to="/login">Sign In</Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Signup;
