import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Shield, Cpu, Layers, Activity, Terminal, ArrowRight } from 'lucide-react';
import courseRouting from '../assets/course_routing.png';
import courseSecurity from '../assets/course_security.png';
import courseF5 from '../assets/course_f5.png';
import courseSdwan from '../assets/course_sdwan.png';
import courseWireshark from '../assets/course_wireshark.png';
import courseHacking from '../assets/course_hacking.png';

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
      badge: "Cisco Core",
      image: courseRouting
    },
    {
      icon: <Shield size={24} />,
      title: "Network Security & Firewalls",
      desc: "Master industry-leading next-generation firewalls. Get hands-on with Palo Alto (PCNSE), FortiGate, Cisco ASA, and Security+ live labs.",
      link: "https://corenetworkingclasses.com/palo-alto-firewall-training.php",
      badge: "Security",
      image: courseSecurity
    },
    {
      icon: <Cpu size={24} />,
      title: "F5 Application Delivery (ADC)",
      desc: "Learn load balancer traffic management. Covers BIG-IP F5 Local Traffic Manager (LTM), Global Traffic Manager (GTM/DNS), and WAF (ASM).",
      link: "https://corenetworkingclasses.com/big-ip-f5-ltm-training.php",
      badge: "Multi-Vendor",
      image: courseF5
    },
    {
      icon: <Layers size={24} />,
      title: "Cisco SDWAN Training",
      desc: "Architect and engineer software-defined networks from scratch. Learn controller deployment, routing policy design, and security integrations.",
      link: "https://corenetworkingclasses.com/cisco-sdwan-training.php",
      badge: "Next-Gen",
      image: courseSdwan
    },
    {
      icon: <Activity size={24} />,
      title: "WireShark Packet Analysis",
      desc: "Troubleshoot network issues like an expert. Master deep packet inspection, latency analysis, and IPsec VPN decryption in live topologies.",
      link: "https://corenetworkingclasses.com/wireshark-training.php",
      badge: "Analysis",
      image: courseWireshark
    },
    {
      icon: <Terminal size={24} />,
      title: "Certified Ethical Hacking (CEH)",
      desc: "Gain offensive security skills. Understand pentesting frameworks, vulnerability assessments, and how to defend enterprise resources.",
      link: "https://corenetworkingclasses.com/ethical-hacking-training.php",
      badge: "Cyber Security",
      image: courseHacking
    }
  ];

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--x', `${x}px`);
    e.currentTarget.style.setProperty('--y', `${y}px`);
  };

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
              onMouseMove={handleMouseMove}
            >
              <div className="course-image-container">
                <img src={course.image} alt={course.title} className="course-card-image" />
                <div className="course-icon-floating">
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

