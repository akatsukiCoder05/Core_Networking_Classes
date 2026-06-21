import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Play } from 'lucide-react';
import StatCard from './StatCard';
import ParticleBackground from './ParticleBackground';

const AboutCNC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const features = [
    "Live Labs",
    "Online & Offline Classes",
    "Corporate Training",
    "Practical Learning",
    "Placement Assistance",
    "Expert Trainers"
  ];

  return (
    <section className="about-section" id="about-cnc">
      <div className="about-top-grid">
        {/* LEFT SIDE - CONTENT */}
        <motion.div 
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Badge */}
          <motion.div className="badge" variants={itemVariants}>
            Multi-Vendor Integration
          </motion.div>

          {/* Heading */}
          <motion.h2 className="heading" variants={itemVariants}>
            Master BIG-IP F5, Palo Alto, & <span>Linux DevOps</span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p className="subtitle" variants={itemVariants}>
            Expand your expertise into industry-leading load balancing solutions, cloud infrastructure orchestration, and automated scripts for modern application deployment pipelines.
          </motion.p>

          {/* Description */}
          <motion.div className="description" variants={itemVariants} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <p>
              Core Networking Classes delivers deep-dive expertise in advanced load balancers, secure next-generation firewalls, and cloud infrastructure orchestration. Get hands-on with F5 LTM/GTM/ASM, Palo Alto network setups, and DevOps automation scripts.
            </p>
            <p>
              Whether you are building your IT foundations or seeking advanced training in cloud deployments, CNC provides virtual racks, real hardware access, and certified training with Neeraj Sir to boost your professional career.
            </p>
          </motion.div>

          {/* Feature Checklist */}
          <motion.div className="features-grid" variants={containerVariants}>
            {features.map((feature, index) => (
              <motion.div 
                key={index} 
                className="feature-item" 
                variants={itemVariants}
              >
                <div className="feature-icon-wrapper">
                  <Check className="feature-icon" />
                </div>
                <span>{feature}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div className="cta-group" variants={itemVariants}>
            <a href="https://login.corenetworkingclasses.com/login" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              View CNC App
              <ArrowRight className="btn-icon" />
            </a>
            <a href="#contact-section" className="btn btn-secondary">
              Batch Schedules
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE - VIDEO CONTAINER, GRAPHICS & STATS GRID */}
        <div className="about-right-side">
          <motion.div 
            className="about-graphics"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Animated Grid & Cyber Backdrop */}
            <div className="graphics-background">
              <div className="cyber-grid" />
              <div className="glow-circle-1" />
              <div className="glow-circle-2" />
              
              {/* Dynamic Network Node Particles */}
              <ParticleBackground />
            </div>

            {/* Video Wrapper (Glassmorphism Frame) */}
            <div className="video-wrapper">
              <div className="video-container">
                {!isPlaying ? (
                  <div 
                    className="video-overlay"
                    onClick={() => setIsPlaying(true)}
                  >
                    <div className="play-button">
                      <Play className="play-icon" />
                    </div>
                  </div>
                ) : (
                  <iframe 
                    src="https://www.youtube.com/embed/qwkb8bSL76g?autoplay=1&mute=1" 
                    title="CNC About Presentation"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen
                  />
                )}
              </div>
            </div>
          </motion.div>

          {/* Statistics Grid - placed below video */}
          <motion.div 
            className="about-stats-container"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <div className="stats-grid-about-right">
              <StatCard targetVal={10000} suffix="+" label="Trained Candidates" delay={0.05} />
              <StatCard targetVal={2000} suffix="+" label="College Candidates" delay={0.1} />
              <StatCard targetVal={95} suffix="%" label="CCIE Passed Ratio" delay={0.15} />
              <StatCard targetVal={100} suffix="+" label="Corporate Trainings" delay={0.2} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutCNC;
