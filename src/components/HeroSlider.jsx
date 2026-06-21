import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Globe, Shield, Terminal, Award, ChevronLeft, ChevronRight } from 'lucide-react';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [threatCount, setThreatCount] = useState(4912);

  useEffect(() => {
    const interval = setInterval(() => {
      setThreatCount((prev) => prev + Math.floor(Math.random() * 3) + 1);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const slides = [
    {
      badge: '100% Job Assurance',
      title: '100% Job Assurance <span>MVIP Program</span>',
      description: 'Secure your future with our flagship Multi-Vendor Integration Program. Get certified, train on physical hardware racks, and land a high-paying networking role backed by a job assurance contract.',
      primaryBtn: 'Explore MVIP',
      secondaryBtn: 'View Syllabus',
      graphicIcon: <Award size={40} className="glow-icon" style={{ color: '#FBBF24' }} />,
      graphicText: '100% Job Placement'
    },
    {
      badge: 'Cisco Training & Certification',
      title: 'Accelerate Your Network Engineering <span>Career</span>',
      description: 'Core Networking Classes delivers enterprise-level training in Cisco Routing & Switching, CCNP Enterprise, SDWAN, CCIE infrastructure, and multi-vendor systems to shape global network experts.',
      primaryBtn: 'Book Free Demo',
      secondaryBtn: 'Explore Courses',
      graphicIcon: <Globe size={40} className="glow-icon" style={{ color: '#0066FF' }} />,
      graphicText: 'Enterprise Routing & Switching'
    },
    {
      badge: 'Advanced Cybersecurity Courses',
      title: 'Secure the Modern <span>Digital Infrastructure</span>',
      description: 'Acquire practical security skills with Palo Alto Networks, Fortigate Firewalls, Cisco ASA, and Certified Ethical Hacking. Learn from senior experts and practical lab environments.',
      primaryBtn: 'Contact Advisor',
      secondaryBtn: 'Security Tracks',
      graphicIcon: <Shield size={40} className="glow-icon" style={{ color: '#7B61FF' }} />,
      graphicText: 'Next-Gen Firewall & Cyber defense'
    }
  ];

  // Auto cycle slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="hero-slider-section">
      <div className="slider-container">
        
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentSlide}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="slide-content-box"
          >
            {/* Slide Badge */}
            <div className="app-promo-badge" style={{ alignSelf: 'flex-start' }}>
              {slides[currentSlide].badge}
            </div>

            {/* Slide Title */}
            <h1 
              className="slide-title"
              dangerouslySetInnerHTML={{ __html: slides[currentSlide].title }}
            />

            {/* Slide Description */}
            <p className="slide-desc">
              {slides[currentSlide].description}
            </p>

            {/* Slide Actions */}
            <div className="slide-buttons">
              <a href="#contact-section" className="btn btn-primary">
                {slides[currentSlide].primaryBtn}
                <ArrowRight className="btn-icon" />
              </a>
              <a href="#courses-section" className="btn btn-secondary">
                {slides[currentSlide].secondaryBtn}
              </a>
            </div>

            {/* Interactive Dot Navigation */}
            <div className="slider-nav-controls">
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={`slider-nav-dot ${currentSlide === index ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Floating Illustrative Mockup Overlay on Right */}
        <div className="slider-image-overlay">
          <div className="slider-bg-circle" />
          <motion.div 
            className="slider-mock-graphic"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <div style={{ padding: '36px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
              {slides[currentSlide].graphicIcon}
              <h3 style={{ fontFamily: 'Poppins', fontSize: '18px', fontWeight: 700, color: '#0F172A', textAlign: 'center' }}>
                {slides[currentSlide].graphicText}
              </h3>
              
              {/* Dynamic Interactive Widgets */}
              {currentSlide === 0 && (
                <div className="slider-widget placement-widget">
                  <div className="widget-status-badge">
                    <span className="pulse-dot" />
                    <span>Assurance Contract Signed</span>
                  </div>
                  <div className="progress-bar-container">
                    <div className="progress-bar-label">
                      <span>Placement Readiness</span>
                      <span>100%</span>
                    </div>
                    <div className="progress-bar-track">
                      <motion.div 
                        className="progress-bar-fill" 
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                  <div className="partner-logos-row">
                    <span>Cisco</span> • <span>L&T</span> • <span>Infosys</span> • <span>Wipro</span>
                  </div>
                </div>
              )}

              {currentSlide === 1 && (
                <div className="slider-widget terminal-widget">
                  <div className="terminal-header">
                    <span className="dot red" />
                    <span className="dot yellow" />
                    <span className="dot green" />
                    <span className="terminal-title">cisco-router-console</span>
                  </div>
                  <div className="terminal-body">
                    <div className="terminal-line command">cnc-router# show ip interface brief</div>
                    <div className="terminal-line output">Gi0/0    192.168.10.1   up      up</div>
                    <div className="terminal-line output">Gi0/1    10.100.2.14    up      up</div>
                    <div className="terminal-line command">cnc-router# show ip route bgp</div>
                    <div className="terminal-line output">B*   0.0.0.0/0 [20/0] via 10.100.2.1</div>
                    <span className="terminal-cursor-blink">_</span>
                  </div>
                </div>
              )}

              {currentSlide === 2 && (
                <div className="slider-widget security-widget">
                  <div className="security-stats">
                    <div className="stat-row">
                      <span className="stat-label">Intrusion Prevention</span>
                      <span className="stat-status active">ACTIVE</span>
                    </div>
                    <div className="stat-row">
                      <span className="stat-label">Traffic Inspected</span>
                      <span className="stat-value">12.8 Gbps</span>
                    </div>
                    <div className="stat-row">
                      <span className="stat-label">Threats Prevented</span>
                      <span className="stat-value counter-value">{threatCount}</span>
                    </div>
                  </div>
                </div>
              )}

              <p style={{ fontSize: '13px', color: '#64748b', textAlign: 'center', lineHeight: '1.4' }}>
                Full-featured virtual lab racks and topologies accessible online 24/7.
              </p>
              <div style={{ display: 'flex', gap: '8px', marginTop: '6px' }}>
                <span 
                  style={{ width: '8px', height: '8px', borderRadius: '50%', cursor: 'pointer', background: currentSlide === 0 ? '#0066FF' : '#cbd5e1', transition: 'background 0.3s' }} 
                  onClick={() => setCurrentSlide(0)}
                  title="Slide 1"
                />
                <span 
                  style={{ width: '8px', height: '8px', borderRadius: '50%', cursor: 'pointer', background: currentSlide === 1 ? '#7B61FF' : '#cbd5e1', transition: 'background 0.3s' }} 
                  onClick={() => setCurrentSlide(1)}
                  title="Slide 2"
                />
                <span 
                  style={{ width: '8px', height: '8px', borderRadius: '50%', cursor: 'pointer', background: currentSlide === 2 ? '#10B981' : '#cbd5e1', transition: 'background 0.3s' }} 
                  onClick={() => setCurrentSlide(2)}
                  title="Slide 3"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Floating Arrows */}
        <button 
          className="slider-arrow arrow-left" 
          onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
          aria-label="Previous Slide"
        >
          <ChevronLeft size={22} />
        </button>
        <button 
          className="slider-arrow arrow-right" 
          onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
          aria-label="Next Slide"
        >
          <ChevronRight size={22} />
        </button>

      </div>
    </section>
  );
};

export default HeroSlider;
