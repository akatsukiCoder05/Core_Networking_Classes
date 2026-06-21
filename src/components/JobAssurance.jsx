import React from 'react';
import { motion } from 'framer-motion';
import { Award, Server, Users, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';

const JobAssurance = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const benefits = [
    {
      icon: <Server size={24} />,
      title: "Real Physical Devices & Racks",
      desc: "Train on physical Cisco switches, routers, firewalls, and F5 load balancers, not just simulators."
    },
    {
      icon: <Award size={24} />,
      title: "Production Migration Scenarios",
      desc: "Get hands-on experience performing network migration activities and hardware troubleshooting."
    },
    {
      icon: <Users size={24} />,
      title: "1-on-1 Certified Mentorship",
      desc: "Direct guidance and reviews from Neeraj Sir and other CCIE-certified IT trainers."
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "Full Placement & Interview Prep",
      desc: "Comprehensive mock interviews, CV building sessions, and direct networking company introductions."
    }
  ];

  return (
    <section className="job-assurance-section" id="job-assurance">
      <div className="section-container">
        
        {/* Decorative elements */}
        <div className="assurance-glow-1" />
        <div className="assurance-glow-2" />

        <motion.div 
          className="assurance-wrapper"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* LEFT COLUMN: HERO INFORMATION */}
          <div className="assurance-info">
            <motion.div className="badge gold-badge" variants={itemVariants}>
              CNC FLAGSHIP PROGRAM
            </motion.div>
            
            <motion.h2 className="heading" variants={itemVariants}>
              100% Job Assurance <span>MVIP Program</span>
            </motion.h2>
            
            <motion.p className="subtitle" variants={itemVariants}>
              If you are passionate about mastering enterprise networking and security, the MVIP (Multi-Vendor Integration Program) is your golden ticket to a guaranteed IT career.
            </motion.p>

            <motion.div className="description" variants={itemVariants}>
              <p>
                We deliver practical, physical lab training on real enterprise hardware. Learn how network engineers actually architect, configure, migrate, and troubleshoot live networks.
              </p>
              <p>
                Our graduates don't just pass certification exams; they gain true technical depth, allowing them to ace job interviews and perform confidently on day one in corporate roles.
              </p>
            </motion.div>

            <motion.div className="mvip-highlight-box" variants={itemVariants}>
              <div className="highlight-icon">
                <CheckCircle2 size={24} className="text-emerald" />
              </div>
              <div className="highlight-content">
                <h4>Guaranteed Placement or Full Refund</h4>
                <p>We back our training with a full job assurance contract. Receive placement support until you land your dream IT role.</p>
              </div>
            </motion.div>

            <motion.div className="cta-group" variants={itemVariants}>
              <a href="https://corenetworkingclasses.com/job-guarantee-courses.php" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Apply for MVIP Program
                <ArrowRight className="btn-icon" />
              </a>
              <a href="https://wa.me/9315344729" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                Contact Neeraj Sir
              </a>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: BENEFITS GRID */}
          <div className="assurance-grid">
            {benefits.map((benefit, index) => (
              <motion.div 
                className="benefit-card" 
                key={index}
                variants={itemVariants}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
              >
                <div className="benefit-icon-wrapper">
                  {benefit.icon}
                </div>
                <h3>{benefit.title}</h3>
                <p>{benefit.desc}</p>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default JobAssurance;
