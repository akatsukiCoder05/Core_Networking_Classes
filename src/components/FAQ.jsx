import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const faqs = [
    {
      q: "Do you provide physical hardware lab racks?",
      a: "Yes, CNC is one of the few training institutes equipped with actual physical racks of enterprise Cisco Routers, Catalyst/Nexus Switches, Palo Alto Next-Gen Firewalls, and F5 BIG-IP appliances. You learn to configure, patch, and migrate physical network lines."
    },
    {
      q: "What is the 100% Job Assurance MVIP Program?",
      a: "Our Multi-Vendor Integration Program is a signature placement track. It covers Cisco Core Networking, advanced Firewalls, Linux DevOps scripts, and load balancer setups. We back this program with written placement contract terms, mock interviews, resume styling, and direct vendor introductions."
    },
    {
      q: "Are the training classes live or pre-recorded?",
      a: "All online and classroom training batches are completely live, interactive sessions led directly by Neeraj Sir and certified senior network experts. We emphasize 1-on-1 question queries, and also host recordings on the CNC mobile app for future revisions."
    },
    {
      q: "Which official certifications will I be prepared for?",
      a: "We train you to confidently clear official examinations including Cisco CCNA (200-301), CCNP Enterprise, CCIE Infrastructure, Palo Alto PCNSE, Fortinet Network Security, and BIG-IP F5 LTM/GTM certifications."
    }
  ];

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="faq-section" id="faq-section">
      <div className="section-container">
        
        {/* FAQ Header */}
        <div className="courses-header" style={{ marginBottom: '40px' }}>
          <span className="badge" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <HelpCircle size={14} />
            Common Questions
          </span>
          <h2>Frequently Asked <span>Questions</span></h2>
          <p>Got doubts about batches, physical labs, or placement? Here are key answers.</p>
        </div>

        {/* Accordion List Wrapper */}
        <div className="faq-accordion-wrapper">
          {faqs.map((faq, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <div 
                key={index} 
                className={`faq-item-card ${isExpanded ? 'expanded' : ''}`}
              >
                <button 
                  className="faq-question-btn" 
                  onClick={() => handleToggle(index)}
                  aria-expanded={isExpanded}
                >
                  <span className="faq-question-text">{faq.q}</span>
                  <motion.span 
                    className="faq-icon-arrow"
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <ChevronDown size={20} />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="faq-answer-content"
                    >
                      <div className="faq-answer-inner">
                        <p>{faq.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
