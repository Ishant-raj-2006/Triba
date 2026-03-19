import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { User, Lock, ArrowRight } from 'lucide-react';
import './Auth.css';

const Login = () => {
  return (
    <div className="auth-page">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="auth-container glass"
        >
          <div className="auth-header">
            <h2>Welcome Back</h2>
            <p>Please enter your details to sign in.</p>
          </div>
          
          <form className="auth-form">
            <div className="form-group">
              <label><User size={16} /> Username or Email</label>
              <input type="text" placeholder="Enter your email" required />
            </div>
            <div className="form-group">
              <label><Lock size={16} /> Password</label>
              <input type="password" placeholder="••••••••" required />
            </div>
            
            <div className="form-actions">
              <label className="remember-me">
                <input type="checkbox" /> Remember me
              </label>
              <a href="#" className="forgot-pass">Forgot Password?</a>
            </div>

            <button type="submit" className="btn-primary w-full">
              SIGN IN <ArrowRight size={18} />
            </button>
          </form>

          <p className="auth-footer">
            Don't have an account? <Link to="/signup">Create Account</Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
