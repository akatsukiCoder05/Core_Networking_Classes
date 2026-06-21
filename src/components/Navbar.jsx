import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Phone, Menu, X, ChevronDown, ChevronRight, Search, Mail } from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `https://corenetworkingclasses.com/search.php?search=${encodeURIComponent(searchQuery)}`;
    }
  };

  const navItems = [
    { name: 'Home', href: 'https://corenetworkingclasses.com/index.php' },
    { 
      name: 'Courses', 
      href: '#',
      dropdown: [
        {
          name: 'R & S / Enterprise',
          subItems: [
            { name: 'CCNA 200-301', href: 'https://corenetworkingclasses.com/ccna-certification-training.php' },
            { name: 'CCNP Enterprise', href: 'https://corenetworkingclasses.com/ccnp-enterprise-training.php' },
            { name: 'CCIE Enterprise', href: 'https://corenetworkingclasses.com/ccie-enterprise-training.php' },
            { name: 'CISCO SDWAN', href: 'https://corenetworkingclasses.com/cisco-sdwan-training.php' },
            { name: 'JNCIA', href: 'https://corenetworkingclasses.com/jncia-training.php' }
          ]
        },
        {
          name: 'Security',
          subItems: [
            { name: 'CCNA Security', href: 'https://corenetworkingclasses.com/ccna-security-training.php' },
            { name: 'CCNP Security', href: 'https://corenetworkingclasses.com/ccnp-security-training.php' },
            { name: 'Palo-Alto', href: 'https://corenetworkingclasses.com/palo-alto-firewall-training.php' },
            { name: 'ASA', href: 'https://corenetworkingclasses.com/asa-firewall-training.php' },
            { name: 'Ethical Hacking', href: 'https://corenetworkingclasses.com/ethical-hacking-training.php' },
            { name: 'Security+', href: 'https://corenetworkingclasses.com/security-plus-training.php' },
            { name: 'Cyber Security', href: 'https://corenetworkingclasses.com/cyber-security-training.php' },
            { name: 'FortiGate', href: 'https://corenetworkingclasses.com/fortigate-firewall-training.php' }
          ]
        },
        {
          name: 'MultiVendor',
          subItems: [
            { name: 'BIG-IP F5 LTM', href: 'https://corenetworkingclasses.com/big-ip-f5-ltm-training.php' },
            { name: 'BIG-IP F5 GTM', href: 'https://corenetworkingclasses.com/big-ip-f5-gtm-training.php' },
            { name: 'BIG-IP F5 ASM', href: 'https://corenetworkingclasses.com/big-ip-f5-asm-training.php' },
            { name: 'WireShark', href: 'https://corenetworkingclasses.com/wireshark-training.php' },
            { name: 'MVIP', href: 'https://corenetworkingclasses.com/job-guarantee-courses.php' }
          ]
        },
        {
          name: 'Web-Development',
          subItems: [
            { name: 'HTML/CSS/JS', href: 'https://corenetworkingclasses.com/html-css-training.php' },
            { name: 'PHP', href: 'https://corenetworkingclasses.com/php-training.php' },
            { name: 'MySQL', href: 'https://corenetworkingclasses.com/mysql-training.php' },
            { name: 'Node.JS', href: 'https://corenetworkingclasses.com/node-js-training.php' },
            { name: 'MongoDB', href: 'https://corenetworkingclasses.com/mongodb-training.php' },
            { name: 'PDO', href: 'https://corenetworkingclasses.com/pdo-training.php' }
          ]
        },
        {
          name: 'Automation',
          subItems: [
            { name: 'Devnet 200-901', href: 'https://corenetworkingclasses.com/cisco-devnet-training.php' }
          ]
        },
        {
          name: 'DC',
          subItems: [
            { name: 'ACI 300-620', href: 'https://corenetworkingclasses.com/cisco-aci-training.php' }
          ]
        }
      ]
    },
    { name: 'Rack Rental', href: 'https://corenetworkingclasses.com/rackrental.php' },
    { 
      name: 'Blog', 
      href: 'https://corenetworkingclasses.com/blog.php',
      dropdown: [
        {
          name: 'Advance Routing',
          subItems: [
            { name: 'EIGRP Overview', href: 'https://corenetworkingclasses.com/eigrp/eigrp-overview.php' },
            { name: 'OSPF Overview', href: 'https://corenetworkingclasses.com/ospf/ospf-overview.php' }
          ]
        },
        {
          name: 'Switching',
          subItems: [
            { name: 'SPAN/RSPAN', href: 'https://corenetworkingclasses.com/blog-details.php?token=14' }
          ]
        },
        {
          name: 'Security',
          subItems: [
            { name: 'VPN', href: '#' },
            { name: 'ASA', href: '#' },
            { name: 'Palo-Alto', href: '#' }
          ]
        }
      ]
    },
    { name: 'Our Victory', href: 'https://corenetworkingclasses.com/our-victory.php' },
    {
      name: 'Certificate',
      href: '#',
      dropdown: [
        { name: 'Course Completion', href: 'https://corenetworkingclasses.com/course-certificates.php' },
        { name: 'Seminar Completion', href: 'https://corenetworkingclasses.com/verify.php' }
      ]
    },
    { name: 'Contact', href: 'https://corenetworkingclasses.com/contact.php' },
    { name: 'Login', href: 'https://login.corenetworkingclasses.com/login' }
  ];

  return (
    <>
      {/* Top Banner widgets */}
      <div className="header-top-bar">
        <div className="header-top-container">
          <div className="header-widgets">
            <div className="header-widget-item">
              <Clock />
              <span>Business Hours: Mon to Sat: 10 Am - 10 Pm</span>
            </div>
            <div className="header-widget-item">
              <Mail />
              <a href="mailto:admin@corenetworkingclasses.com" style={{ textDecoration: 'none', color: 'inherit' }}>
                admin@corenetworkingclasses.com
              </a>
            </div>
          </div>
          <div className="header-phones">
            <Phone />
            <a href="tel:+919625343392">+91 962-534-3392</a>
            <span>|</span>
            <a href="tel:+919315344729">+91 931-534-4729</a>
          </div>
        </div>
      </div>

      {/* Sticky Main Navigation */}
      <header className={`navbar-wrapper ${scrolled ? 'scrolled' : ''}`}>
        <nav className="navbar-container">
          {/* Logo Brand */}
          <a href="https://corenetworkingclasses.com/index.php" className="logo-wrapper">
            <span className="logo-main">CNC<span>.</span></span>
            <span className="logo-sub">GROWING DREAMS</span>
          </a>

          {/* Desktop Navigation Links */}
          <ul className="nav-links">
            {navItems.map((item, index) => (
              <li key={index} className="nav-item">
                <a href={item.href} className="nav-link">
                  {item.name}
                  {item.dropdown && <ChevronDown size={14} />}
                </a>
                
                {/* Custom Nested Hover Dropdowns */}
                {item.dropdown && (
                  <ul className="dropdown-menu">
                    {item.dropdown.map((dropItem, dropIndex) => (
                      <li key={dropIndex} className="dropdown-item">
                        <a href={dropItem.href || '#'} className="dropdown-link">
                          {dropItem.name}
                          {dropItem.subItems && <ChevronRight size={12} />}
                        </a>
                        
                        {/* Level 2 Sub-Dropdown */}
                        {dropItem.subItems && (
                          <ul className="sub-dropdown-menu">
                            {dropItem.subItems.map((subItem, subIndex) => (
                              <li key={subIndex}>
                                <a href={subItem.href} className="dropdown-link">
                                  {subItem.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* Actions: Social, Search, Toggler */}
          <div className="nav-actions">
            {/* Search Box Trigger */}
            <div style={{ position: 'relative' }}>
              <button 
                onClick={() => setSearchActive(!searchActive)} 
                className="nav-link"
                style={{ padding: '8px', border: 'none', background: 'none', cursor: 'pointer' }}
              >
                <Search size={18} />
              </button>
              
              <AnimatePresence>
                {searchActive && (
                  <motion.form 
                    onSubmit={handleSearchSubmit}
                    initial={{ opacity: 0, scale: 0.9, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: -10 }}
                    style={{
                      position: 'absolute',
                      right: 0,
                      top: '100%',
                      marginTop: '12px',
                      background: 'white',
                      border: '1px solid rgba(0,0,0,0.08)',
                      borderRadius: '8px',
                      padding: '8px',
                      boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
                      display: 'flex',
                      gap: '8px',
                      zIndex: 100
                    }}
                  >
                    <input 
                      type="text" 
                      placeholder="Search courses..." 
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      style={{
                        padding: '6px 12px',
                        border: '1px solid #e2e8f0',
                        borderRadius: '6px',
                        fontSize: '13px',
                        outline: 'none',
                        width: '180px'
                      }}
                    />
                    <button 
                      type="submit" 
                      style={{
                        background: '#0066FF',
                        color: 'white',
                        border: 'none',
                        padding: '6px 12px',
                        borderRadius: '6px',
                        fontSize: '12px',
                        cursor: 'pointer'
                      }}
                    >
                      Go
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>

            {/* Quick social links */}
            <a href="https://www.facebook.com/corenetworkingclasses" target="_blank" className="nav-link nav-social-link nav-social-facebook" style={{ padding: '8px' }} aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="https://youtube.com/c/CiscoNetworkingClasses" target="_blank" className="nav-link nav-social-link nav-social-youtube" style={{ padding: '8px' }} aria-label="YouTube">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z"/><path d="m10 15 5-3-5-3z"/></svg>
            </a>
            <a href="https://www.linkedin.com/company/core-networking-classes" target="_blank" className="nav-link nav-social-link nav-social-linkedin" style={{ padding: '8px' }} aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>

            {/* CTA */}
            <a 
              href="https://wa.me/9315344729" 
              target="_blank"
              className="btn btn-primary" 
              style={{ padding: '10px 18px', fontSize: '13px', borderRadius: '8px' }}
            >
              Get In Touch
            </a>
          </div>

          {/* Mobile Menu Toggler */}
          <button 
            className="navbar-toggler"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </nav>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                background: 'black',
                zIndex: 1999
              }}
            />

            {/* Sidebar drawer */}
            <motion.div 
              className="mobile-menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <div className="mobile-menu-header">
                <a href="#" className="logo-wrapper">
                  <span className="logo-main">CNC<span>.</span></span>
                  <span className="logo-sub">GROWING DREAMS</span>
                </a>
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                >
                  <X size={24} />
                </button>
              </div>

              <ul className="mobile-nav-links">
                {navItems.map((item, index) => {
                  const hasDropdown = !!item.dropdown;
                  const isDropdownOpen = activeMobileDropdown === index;
                  return (
                    <li key={index}>
                      {hasDropdown ? (
                        <div style={{ width: '100%' }}>
                          <button
                            className="mobile-nav-link"
                            style={{ 
                              width: '100%', 
                              display: 'flex', 
                              justifyContent: 'space-between', 
                              alignItems: 'center', 
                              background: 'none', 
                              border: 'none', 
                              textAlign: 'left', 
                              cursor: 'pointer',
                              padding: '12px' 
                            }}
                            onClick={() => setActiveMobileDropdown(isDropdownOpen ? null : index)}
                          >
                            <span>{item.name}</span>
                            <motion.span 
                              animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                              style={{ display: 'inline-flex' }}
                            >
                              <ChevronDown size={18} />
                            </motion.span>
                          </button>
                          
                          <AnimatePresence initial={false}>
                            {isDropdownOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                style={{ overflow: 'hidden', paddingLeft: '16px', background: 'rgba(0,102,255,0.02)', borderRadius: '8px' }}
                              >
                                <ul style={{ listStyle: 'none', padding: '8px 0', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                  {item.dropdown.map((dropItem, dropIndex) => (
                                    <li key={dropIndex} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                      <span style={{ fontSize: '11px', fontWeight: 'bold', color: 'var(--text-muted)', textTransform: 'uppercase', paddingLeft: '8px', paddingTop: '4px' }}>
                                        {dropItem.name}
                                      </span>
                                      {dropItem.subItems && (
                                        <ul style={{ listStyle: 'none', paddingLeft: '8px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                          {dropItem.subItems.map((subItem, subIndex) => (
                                            <li key={subIndex}>
                                              <a
                                                href={subItem.href}
                                                className="mobile-nav-sub-link"
                                                onClick={() => setMobileMenuOpen(false)}
                                                style={{ display: 'block', padding: '6px 8px', fontSize: '14px', color: 'var(--text-secondary)', textDecoration: 'none', borderRadius: '4px' }}
                                              >
                                                {subItem.name}
                                              </a>
                                            </li>
                                          ))}
                                        </ul>
                                      )}
                                    </li>
                                  ))}
                                </ul>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <a 
                          href={item.href} 
                          className="mobile-nav-link"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </a>
                      )}
                    </li>
                  );
                })}
              </ul>

              <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ fontSize: '13px', color: '#64748b', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <span>Business Hours: Mon-Sat 10am-10pm</span>
                  <span>Contact: +91 93153 44729</span>
                </div>
                <a 
                  href="https://wa.me/9315344729" 
                  target="_blank"
                  className="btn btn-primary"
                  style={{ width: '100%' }}
                >
                  Message on WhatsApp
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
