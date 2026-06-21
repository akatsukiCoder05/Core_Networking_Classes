import React, { useState } from 'react';
import { ChevronRight, Send, Mail, Phone, MapPin, Globe } from 'lucide-react';

const Footer = () => {
  const [newsEmail, setNewsEmail] = useState('');
  const [notifPhone, setNotifPhone] = useState('');
  const [newsSuccess, setNewsSuccess] = useState(false);
  const [notifSuccess, setNotifSuccess] = useState(false);

  const handleNewsSubmit = (e) => {
    e.preventDefault();
    if (newsEmail.trim()) {
      setNewsSuccess(true);
      setNewsEmail('');
      setTimeout(() => setNewsSuccess(false), 4000);
    }
  };

  const handleNotifSubmit = (e) => {
    e.preventDefault();
    if (notifPhone.trim()) {
      setNotifSuccess(true);
      setNotifPhone('');
      setTimeout(() => setNotifSuccess(false), 4000);
    }
  };

  return (
    <footer className="footer-area">
      <div className="footer-top-grid">
        
        {/* Column 1: Top Certification Courses */}
        <div className="footer-column">
          <h4 className="footer-col-title">Certification Courses</h4>
          <ul className="footer-links-list">
            <li className="footer-link-item">
              <a href="https://corenetworkingclasses.com/ccna-certification-training.php">
                <ChevronRight /> CCNA Enterprise Training
              </a>
            </li>
            <li className="footer-link-item">
              <a href="https://corenetworkingclasses.com/ccnp-enterprise-training.php">
                <ChevronRight /> CCNP ENARSI Training
              </a>
            </li>
            <li className="footer-link-item">
              <a href="https://corenetworkingclasses.com/ccnp-security-training.php">
                <ChevronRight /> CCNP ENCOR Training
              </a>
            </li>
            <li className="footer-link-item">
              <a href="https://corenetworkingclasses.com/ccnp-enterprise-training.php">
                <ChevronRight /> CCNP Design Training
              </a>
            </li>
            <li className="footer-link-item">
              <a href="https://corenetworkingclasses.com/cisco-sdwan-training.php">
                <ChevronRight /> Cisco SDWAN Training
              </a>
            </li>
            <li className="footer-link-item">
              <a href="https://corenetworkingclasses.com/ccie-enterprise-training.php">
                <ChevronRight /> CCIE Enterprise Training
              </a>
            </li>
            <li className="footer-link-item">
              <a href="https://corenetworkingclasses.com/palo-alto-firewall-training.php">
                <ChevronRight /> Palo-Alto PCNSA Training
              </a>
            </li>
            <li className="footer-link-item">
              <a href="https://corenetworkingclasses.com/palo-alto-firewall-training.php">
                <ChevronRight /> Palo-Alto PCNSE Training
              </a>
            </li>
            <li className="footer-link-item">
              <a href="https://corenetworkingclasses.com/big-ip-f5-ltm-training.php">
                <ChevronRight /> F5 Load Balancer Training
              </a>
            </li>
            <li className="footer-link-item">
              <a href="https://corenetworkingclasses.com/fortigate-firewall-training.php">
                <ChevronRight /> FortiGate Firewall Training
              </a>
            </li>
          </ul>
        </div>

        {/* Column 2: Job Assurance Combo Courses */}
        <div className="footer-column">
          <h4 className="footer-col-title">Job Assurance</h4>
          <ul className="footer-links-list">
            <li className="footer-link-item">
              <a href="https://corenetworkingclasses.com/job-guarantee-courses.php">
                <ChevronRight /> Enterprise Combo Training
              </a>
            </li>
            <li className="footer-link-item">
              <a href="https://corenetworkingclasses.com/job-guarantee-courses.php">
                <ChevronRight /> Network Security Combo
              </a>
            </li>
            <li className="footer-link-item">
              <a href="https://corenetworkingclasses.com/job-guarantee-courses.php">
                <ChevronRight /> Security Combo Training
              </a>
            </li>
            <li className="footer-link-item">
              <a href="https://corenetworkingclasses.com/ccie-enterprise-training.php">
                <ChevronRight /> CCIE Enterprise Course
              </a>
            </li>
            <li className="footer-link-item">
              <a href="https://corenetworkingclasses.com/job-guarantee-courses.php">
                <ChevronRight /> Multi-vendor Training
              </a>
            </li>
            <li className="footer-link-item">
              <a href="https://corenetworkingclasses.com/job-guarantee-courses.php">
                <ChevronRight /> MVIP Training Course
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Quick Links */}
        <div className="footer-column">
          <h4 className="footer-col-title">Quick Links</h4>
          <ul className="footer-links-list">
            <li className="footer-link-item">
              <a href="https://corenetworkingclasses.com/jobs.php">
                <ChevronRight /> CNC Jobs
              </a>
            </li>
            <li className="footer-link-item">
              <a href="https://corenetworkingclasses.com/career.php">
                <ChevronRight /> Career
              </a>
            </li>
            <li className="footer-link-item">
              <a href="https://corenetworkingclasses.com/contact.php">
                <ChevronRight /> Contact Us
              </a>
            </li>
            <li className="footer-link-item">
              <a href="https://corenetworkingclasses.com/payment.php">
                <ChevronRight /> Payment Mode
              </a>
            </li>
            <li className="footer-link-item">
              <a href="https://corenetworkingclasses.com/job-guarantee-courses.php">
                <ChevronRight /> 100% Placement Course
              </a>
            </li>
            <li className="footer-link-item">
              <a href="https://corenetworkingclasses.com/index.php#service-section">
                <ChevronRight /> Our Best Services
              </a>
            </li>
            <li className="footer-link-item">
              <a href="https://corenetworkingclasses.com/T&C.php">
                <ChevronRight /> Terms & Conditions
              </a>
            </li>
            <li className="footer-link-item">
              <a href="https://corenetworkingclasses.com/admission.php">
                <ChevronRight /> Admission Form
              </a>
            </li>
            <li className="footer-link-item">
              <a href="https://corenetworkingclasses.com/faq.php">
                <ChevronRight /> FAQs
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact & Subscriptions */}
        <div className="footer-column">
          <h4 className="footer-col-title">Connect with Us</h4>
          <ul className="footer-links-list" style={{ gap: '14px' }}>
            <li className="footer-link-item" style={{ alignItems: 'flex-start' }}>
              <span style={{ display: 'flex', gap: '8px', color: 'var(--text-secondary)' }}>
                <MapPin size={16} style={{ color: 'var(--primary-color)', flexShrink: 0, marginTop: '2px' }} />
                <span>Delhi NCR, India</span>
              </span>
            </li>
            <li className="footer-link-item">
              <a href="https://wa.me/919625343392">
                <Phone size={16} /> +91-962-534-3392
              </a>
            </li>
            <li className="footer-link-item">
              <a href="https://wa.me/919315344729">
                <Phone size={16} /> +91-931-534-4729
              </a>
            </li>
            <li className="footer-link-item">
              <a href="mailto:admin@corenetworkingclasses.com">
                <Mail size={16} /> admin@corenetworkingclasses.com
              </a>
            </li>
            <li className="footer-link-item">
              <a href="https://corenetworkingclasses.com">
                <Globe size={16} /> www.corenetworkingclasses.com
              </a>
            </li>
          </ul>

          {/* Social Follow block */}
          <div className="footer-social-block">
            <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)' }}>Follow Us</span>
            <div className="footer-social-icons">
              <a href="https://www.facebook.com/corenetworkingclasses" target="_blank" rel="noopener noreferrer" className="footer-social-btn social-facebook" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://www.instagram.com/prachii_cnc/?igsh=MWJlZm01d2cxaHBqcA%3D%3D" target="_blank" rel="noopener noreferrer" className="footer-social-btn social-instagram" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="https://youtube.com/c/CiscoNetworkingClasses" target="_blank" rel="noopener noreferrer" className="footer-social-btn social-youtube" aria-label="YouTube">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z"/><path d="m10 15 5-3-5-3z"/></svg>
              </a>
              <a href="https://www.linkedin.com/company/core-networking-classes" target="_blank" rel="noopener noreferrer" className="footer-social-btn social-linkedin" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </div>

          {/* Subscriptions: Email Updates */}
          <div>
            <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-primary)' }}>Subscribe for Job Updates</span>
            <form onSubmit={handleNewsSubmit} className="footer-subscription-form">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="footer-sub-input"
                value={newsEmail}
                onChange={(e) => setNewsEmail(e.target.value)}
                required
              />
              <button type="submit" className="footer-sub-btn">
                <Send />
              </button>
            </form>
            {newsSuccess && <span style={{ fontSize: '11px', color: 'var(--accent-color)', display: 'block', marginTop: '4px' }}>Subscribed!</span>}
          </div>

          {/* Subscriptions: Phone Notifications */}
          <div>
            <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-primary)' }}>Subscribe for Alerts</span>
            <form onSubmit={handleNotifSubmit} className="footer-subscription-form">
              <input 
                type="tel" 
                placeholder="Your phone number" 
                className="footer-sub-input"
                value={notifPhone}
                onChange={(e) => setNotifPhone(e.target.value)}
                required
              />
              <button type="submit" className="footer-sub-btn">
                <Send />
              </button>
            </form>
            {notifSuccess && <span style={{ fontSize: '11px', color: 'var(--accent-color)', display: 'block', marginTop: '4px' }}>Registered!</span>}
          </div>

        </div>

      </div>

      {/* Copyright row */}
      <div className="footer-bottom-row">
        <span>Copyright © 2026 | Tech CNC | Core Networking Classes</span>
        <span>Growing Dreams in IT Infrastructure</span>
      </div>
    </footer>
  );
};

export default Footer;
