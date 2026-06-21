import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, User, Mail, Phone, MessageSquare } from 'lucide-react';

const ContactFormAndMap = () => {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    mobile: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Mock API submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        fname: '',
        lname: '',
        email: '',
        mobile: '',
        message: ''
      });
      // Clear message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 6000);
    }, 1500);
  };

  return (
    <section className="contact-form-section" id="contact-section">
      <div className="form-map-grid">
        
        {/* Contact Form Card */}
        <motion.div 
          className="glass-form-card"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="form-title-area">
            <h3 className="form-title">Drop Us a Message</h3>
            <p className="form-desc">Want to get more details or have a query? We will be glad to contact you back!</p>
          </div>

          <form onSubmit={handleFormSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label" htmlFor="fname">First Name</label>
                <div className="form-group-input-wrapper">
                  <User size={16} className="input-icon" />
                  <input 
                    type="text" 
                    name="fname" 
                    id="fname" 
                    className="form-input" 
                    placeholder="First name"
                    value={formData.fname}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="lname">Last Name</label>
                <div className="form-group-input-wrapper">
                  <User size={16} className="input-icon" />
                  <input 
                    type="text" 
                    name="lname" 
                    id="lname" 
                    className="form-input" 
                    placeholder="Last name"
                    value={formData.lname}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label" htmlFor="email">Email Address</label>
                <div className="form-group-input-wrapper">
                  <Mail size={16} className="input-icon" />
                  <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    className="form-input" 
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="mobile">Contact Number</label>
                <div className="form-group-input-wrapper">
                  <Phone size={16} className="input-icon" />
                  <input 
                    type="tel" 
                    name="mobile" 
                    id="mobile" 
                    className="form-input" 
                    placeholder="Contact number"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="message">Your Message</label>
              <div className="form-group-input-wrapper message-textarea-wrapper">
                <MessageSquare size={16} className="input-icon message-icon" />
                <textarea 
                  name="message" 
                  id="message" 
                  className="form-input form-textarea" 
                  placeholder="How can our network specialists help you?"
                  value={formData.message}
                  onChange={handleInputChange}
                  required 
                />
              </div>
            </div>

            <div className="submit-btn-wrapper">
              <button 
                type="submit" 
                className="form-submit-btn" 
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={16} />
                  </>
                )}
              </button>
            </div>

            {submitSuccess && (
              <motion.div 
                className="success-message-banner"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <CheckCircle size={18} style={{ display: 'inline-block', marginRight: '8px', verticalAlign: 'middle' }} />
                <span>Thank you! Your enquiry has been sent successfully. We will connect with you soon.</span>
              </motion.div>
            )}
          </form>
        </motion.div>

        {/* Google Maps Container */}
        <motion.div 
          className="map-outer-container"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="map-iframe-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m22!1m8!1m3!1d3500.725037349975!2d77.1867076650834!3d28.667950582403858!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d28.668003!2d77.1888712!4m5!1s0x390d031f5ed06a59%3A0x84a7ede24b9d3745!2score%20networking%20classes!3m2!1d28.6679055!2d77.1888659!5e0!3m2!1sen!2sin!4v1628617445246!5m2!1sen!2sin" 
              allowFullScreen="" 
              loading="lazy" 
              title="CNC Location Map"
            />
          </div>
          
          <div className="map-overlay-card">
            <h4>CNC Delhi Campus</h4>
            <p>J/228, Swami Dayanand Colony, Sector 4, Dev Nagar, Karol Bagh, New Delhi, Delhi 110005</p>
            <div className="overlay-details">
              <span><strong>Phone:</strong> +91 93153 44729</span>
              <span><strong>Email:</strong> info@corenetworkingclasses.com</span>
              <span><strong>Hours:</strong> 10:00 AM - 7:00 PM</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ContactFormAndMap;
