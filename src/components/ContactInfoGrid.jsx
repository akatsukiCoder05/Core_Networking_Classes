import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, PhoneCall, MessageSquare, Mail } from 'lucide-react';

const ContactInfoGrid = () => {
  const contactData = [
    {
      icon: <MapPin size={24} />,
      title: 'Our Location',
      value: 'Delhi 110007, India',
      link: 'https://maps.google.com/?q=Core+Networking+Classes+Delhi'
    },
    {
      icon: <PhoneCall size={24} />,
      title: 'Call Support',
      value: '+91 93153 44729',
      link: 'tel:+919315344729'
    },
    {
      icon: <MessageSquare size={24} />,
      title: 'WhatsApp Chat',
      value: '+91 93153 44729',
      link: 'https://wa.me/919315344729'
    },
    {
      icon: <Mail size={24} />,
      title: 'Drop an Email',
      value: 'admin@corenetworkingclasses.com',
      link: 'mailto:admin@corenetworkingclasses.com'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="contact-grid-section">
      <motion.div 
        className="contact-cards-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {contactData.map((card, index) => (
          <motion.a 
            key={index}
            href={card.link}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-info-card"
            variants={cardVariants}
          >
            <div className="contact-card-icon-box">
              {card.icon}
            </div>
            <h4 className="contact-card-title">{card.title}</h4>
            <p className="contact-card-value">{card.value}</p>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
};

export default ContactInfoGrid;
