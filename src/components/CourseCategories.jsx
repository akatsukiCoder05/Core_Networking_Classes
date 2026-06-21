import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Shield, Cpu, Layers, Activity, Terminal, ArrowRight } from 'lucide-react';

const CourseCategories = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const courses = [
    {
      icon: <Globe size={24} />,
      title: "Enterprise Routing & Switching",
      desc: "Deep-dive training from CCNA 200-301 through CCNP to CCIE Enterprise. Learn advanced BGP, MPLS L3VPN, Segment Routing, and JNCIA configurations.",
      link: "https://corenetworkingclasses.com/ccna-certification-training.php",
      badge: "Cisco Core"
    },
    {
      icon: <Shield size={24} />,
      title: "Network Security & Firewalls",
      desc: "Master industry-leading next-generation firewalls. Get hands-on with Palo Alto (PCNSE), FortiGate, Cisco ASA, and Security+ live labs.",
      link: "https://corenetworkingclasses.com/palo-alto-firewall-training.php",
      badge: "Security"
    },
    {
      icon: <Cpu size={24} />,
      title: "F5 Application Delivery (ADC)",
      desc: "Learn load balancer traffic management. Covers BIG-IP F5 Local Traffic Manager (LTM), Global Traffic Manager (GTM/DNS), and WAF (ASM).",
      link: "https://corenetworkingclasses.com/big-ip-f5-ltm-training.php",
      badge: "Multi-Vendor"
    },
    {
      icon: <Layers size={24} />,
      title: "Cisco SDWAN Training",
      desc: "Architect and engineer software-defined networks from scratch. Learn controller deployment, routing policy design, and security integrations.",
      link: "https://corenetworkingclasses.com/cisco-sdwan-training.php",
      badge: "Next-Gen"
    },
    {
      icon: <Activity size={24} />,
      title: "WireShark Packet Analysis",
      desc: "Troubleshoot network issues like an expert. Master deep packet inspection, latency analysis, and IPsec VPN decryption in live topologies.",
      link: "https://corenetworkingclasses.com/wireshark-training.php",
      badge: "Analysis"
    },
    {
      icon: <Terminal size={24} />,
      title: "Certified Ethical Hacking (CEH)",
      desc: "Gain offensive security skills. Understand pentesting frameworks, vulnerability assessments, and how to defend enterprise resources.",
      link: "https://corenetworkingclasses.com/ethical-hacking-training.php",
      badge: "Cyber Security"
    }
  ];

  return (
    <section className="courses-grid-section" id="courses-section">
      <div className="section-container">
        
        {/* Heading */}
        <div className="courses-header">
          <span className="badge">BEST TRAINING SERVICES</span>
          <h2>Explore Our <span>Specialized Courses</span></h2>
          <p>Get certified and learn practical IT skills with live lab access and physical vendor devices.</p>
        </div>

        {/* Grid Container */}
        <motion.div 
          className="courses-grid-wrapper"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {courses.map((course, index) => (
            <motion.div 
              className="course-category-card"
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="course-card-top">
                <div className="course-icon-container">
                  {course.icon}
                </div>
                <span className="course-badge">{course.badge}</span>
              </div>
              
              <h3>{course.title}</h3>
              <p>{course.desc}</p>
              
              <a href={course.link} target="_blank" rel="noopener noreferrer" className="course-card-link">
                Learn More
                <ArrowRight size={16} />
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Courses Button */}
        <div className="view-more-courses-container">
          <a href="https://corenetworkingclasses.com/courses.php" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            View More Courses
            <ArrowRight className="btn-icon" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default CourseCategories;
