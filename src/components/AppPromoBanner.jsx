import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Bell } from 'lucide-react';

const AppPromoBanner = () => {
  return (
    <section className="app-promo-section">
      <motion.div 
        className="app-promo-card"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Promo details */}
        <div className="app-promo-text">
          <span className="app-promo-badge">Mobile Learning</span>
          <h3 className="app-promo-title">Take Your IT Training Anywhere with the CNC App</h3>
          <p className="app-promo-desc">
            Access practice labs, watch premium lectures offline, get push notifications for new placements, and verify seminar completion certificates instantly right from your phone.
          </p>

          <div className="app-download-buttons">
            <a 
              href="https://play.google.com/store/apps/details?id=co.griffin.qchzj" 
              target="_blank" 
              rel="noopener noreferrer"
              className="download-app-btn"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 135 40" 
                style={{ height: '48px', width: '162px', border: '1px solid rgba(15,23,42,0.1)', borderRadius: '10px', background: 'black', padding: '6px' }}
              >
                <path fill="#FFF" d="M18.8 8.8c-.4.4-.7 1.1-.7 2v22.5c0 .9.3 1.6.7 2l.1.1L31.3 23v-.4L18.9 8.7l-.1.1z" opacity=".15"/>
                <path fill="#A5C700" d="M19 8.2c-.5.5-.8 1.3-.8 2.2V33c0 1 .3 1.7.8 2.2L19.2 35l14-14v-.8l-14-14L19 8.2z"/>
                <path fill="#00E676" d="M37.7 24.3l-4.5-4.5v-.8l4.5-4.5.1.1 5.3 3c1.5.9 1.5 2.3 0 3.2l-5.3 3-.1-.5z"/>
                <path fill="#FFD600" d="M33.2 19.8L19.2 5.8c.6-.6 1.6-.6 2.7 0l15.9 9-4.6 5z"/>
                <path fill="#FF3D00" d="M33.2 21L19.2 35c-.6.6-1.6.6-2.7 0l-15.9-9 4.6-5"/>
                <text x="50" y="16" fill="#FFF" fontFamily="sans-serif" fontSize="8" fontWeight="bold">GET IT ON</text>
                <text x="50" y="30" fill="#FFF" fontFamily="sans-serif" fontSize="13" fontWeight="bold">Google Play</text>
              </svg>
            </a>
          </div>
        </div>

        {/* Promo phone graphic mockup */}
        <div className="app-promo-graphic-area">
          <motion.div 
            className="app-promo-circle-glow" 
            animate={{ scale: [1, 1.15, 1], opacity: [0.8, 1, 0.8] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          />
          
          <motion.div 
            className="promo-floating-card lab-card"
            animate={{ y: [0, -10, 0], x: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 4.2, ease: "easeInOut" }}
          >
            <div className="promo-floating-icon-wrapper">
              <CheckCircle2 size={16} style={{ color: '#10B981' }} />
            </div>
            <div className="promo-floating-card-info">
              <span>Lab Completed</span>
              <small>BGP Route Reflector</small>
            </div>
          </motion.div>

          <motion.div 
            className="promo-floating-card placement-card"
            animate={{ y: [0, 10, 0], x: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 4.8, ease: "easeInOut", delay: 0.4 }}
          >
            <div className="promo-floating-icon-wrapper notification-icon">
              <Bell size={16} style={{ color: '#FF7B31' }} />
            </div>
            <div className="promo-floating-card-info">
              <span>New Placement</span>
              <small>L&T Infotech Hiring</small>
            </div>
          </motion.div>

          <motion.div 
            className="app-mock-phone"
            animate={{ y: [0, -15, 0] }}
            whileHover={{ rotate: -3, scale: 1.03 }}
            transition={{ 
              y: { repeat: Infinity, duration: 5, ease: "easeInOut" },
              rotate: { duration: 0.3 },
              scale: { duration: 0.3 }
            }}
          >
            <div className="app-mock-inner">
              <div className="app-mock-screen">
                <span className="app-mock-logo">CNC App</span>
                <span className="app-mock-tag">Growing Dreams.....</span>
                <div className="app-mock-welcome">Welcome Back</div>
              </div>
            </div>
          </motion.div>
        </div>

      </motion.div>
    </section>
  );
};

export default AppPromoBanner;
