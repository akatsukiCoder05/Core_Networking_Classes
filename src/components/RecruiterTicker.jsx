import React, { useState, useEffect } from 'react';
import { Globe } from 'lucide-react';

const RecruiterTicker = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  const partners = [
    { name: "Cisco Systems", color: "#0066FF" },
    { name: "L&T Infotech", color: "#FF7B31" },
    { name: "Orange Telecom", color: "#FF6600" },
    { name: "Juniper Networks", color: "#7B61FF" },
    { name: "Infosys", color: "#007CC3" },
    { name: "Tech Mahindra", color: "#E31E24" },
    { name: "Wipro Technologies", color: "#25D366" },
    { name: "HCL Technologies", color: "#092C5C" }
  ];

  // Monitor screen size for responsive orbit dimensions
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-rotate the orbit
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % partners.length);
    }, 1800);
    return () => clearInterval(timer);
  }, [partners.length]);

  const globeSize = windowWidth < 480 ? 45 : windowWidth < 768 ? 55 : 75;

  return (
    <section className="recruiter-ticker-section orbit-section">
      <div className="section-container orbit-container">
        <h2 className="ticker-heading">CNC Graduates Work at <span>Industry Giants</span></h2>
        <p className="ticker-description">
          Our alumni are engineering the future at leading global enterprises, hyper-scale cloud providers, and top-tier systems integrators. With industry-grade hands-on lab training, they are ready to design, deploy, and secure complex enterprise networks.
        </p>
        
        <div className="globe-orbit-wrapper">
          {/* Central Rotating Globe */}
          <div className="central-globe">
            <Globe size={globeSize} className="orbiting-globe-icon" />
            <div className="globe-pulse-1" />
            <div className="globe-pulse-2" />
          </div>

          {/* Orbiting Brand Names */}
          <div className="orbit-items-container">
            {partners.map((partner, index) => {
              const total = partners.length;
              const diff = (index - activeIndex + total) % total;
              const angle = (diff * 2 * Math.PI) / total;
              
              // Dynamic radius parameters based on viewport width
              const Rx = windowWidth < 480 ? 115 : windowWidth < 768 ? 170 : 300;
              const Ry = windowWidth < 768 ? 95 : 50; // taller ellipse on mobile for staggered layout

              const x = Math.sin(angle) * Rx;
              const z = Math.cos(angle); // -1 (back) to 1 (front)
              const y = z * Ry;

              const scale = windowWidth < 480 
                ? (0.65 + (z + 1) * 0.125) 
                : (0.75 + (z + 1) * 0.125);
              const opacity = 0.2 + (z + 1) * 0.4;
              const zIndex = Math.round((z + 1) * 10);
              const isActive = index === activeIndex;

              return (
                <div 
                  key={index}
                  className={`orbit-brand-card ${isActive ? 'active' : ''}`}
                  style={{
                    transform: `translate3d(calc(-50% + ${x}px), calc(-50% + ${y}px), 0) scale(${scale})`,
                    opacity: opacity,
                    zIndex: zIndex,
                    '--brand-color': partner.color
                  }}
                  onClick={() => setActiveIndex(index)}
                >
                  <span className="brand-dot" />
                  <span className="brand-name">{partner.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecruiterTicker;
