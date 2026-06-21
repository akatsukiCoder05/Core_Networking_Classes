import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonialsList = [
    {
      name: "Ega Fosso",
      role: "Project Manager",
      course: "CCIE Enterprise Lab",
      text: "Video courses talking about specific and important topics, based on real live scenarios with hands on labs. You have one of my favorite YouTube Channels for learning and mastering Networking. I'm using it to prepare for the CCIE Lab Exam. Thank you so much for your help.",
      photo: "https://corenetworkingclasses.com/panel/assets/images/testimonials/16288002255162testimonial1.png",
      initials: "EF"
    },
    {
      name: "Umang Chaudhary",
      role: "Sr Network Engg",
      course: "CCNP Enterprise",
      text: "Each and every Concept's are explained in detail. Wonderful Knowledge Transfer sessions. Proud member of CNC 😁💪",
      photo: "https://corenetworkingclasses.com/panel/assets/images/testimonials/16288002673665testimonial2.png",
      initials: "UC"
    },
    {
      name: "Alpa Singh",
      role: "Service Desk Specialist",
      course: "Cisco CCNA",
      text: "I really like the way they take the complex topics such as BGP from simple concepts to more in-depth for better understanding of such topics.",
      photo: "https://corenetworkingclasses.com/panel/assets/images/testimonials/16288002976139testimonial3.png",
      initials: "AS"
    },
    {
      name: "Fariha khan",
      role: "Network Engineer",
      course: "BGP & MPLS",
      text: "The way of explaining technique is the best which I experienced here and Neeraj sir make sure that students practice even after the class. The trainers here make sure to provide you the understanding of the topics to the best.",
      photo: "https://corenetworkingclasses.com/panel/assets/images/testimonials/16288003249511testimonial4.png",
      initials: "FK"
    },
    {
      name: "Himanshu Dubey",
      role: "Network Administrator",
      course: "CCNP Enterprise",
      text: "I Did CCNP enterprise from Cisco Networking Classes (CNC) i am very appreciate to do CCNP from Neeraj sir really he is very good trainer & CNC is very good institute in india for any Networking & security courses. Thanks CNC.",
      photo: "https://corenetworkingclasses.com/panel/assets/images/testimonials/16288003523237testimonial5.jpeg",
      initials: "HD"
    },
    {
      name: "Somesh Mishra",
      role: "Network Engineer",
      course: "Advanced Troubleshooting",
      text: "It's very good experience with Neeraj Sir & CNC. The explanation technics & examples is very easy for understand. Really He the one of the best Networking Trainer. Its my luck meet Neeraj sir with CNC youtube channel. He is not only giving you training, he is giving you real-world troubleshooting.",
      photo: "https://corenetworkingclasses.com/panel/assets/images/testimonials/16288003805324testimonial6.jpeg",
      initials: "SM"
    },
    {
      name: "Abhishek Arora",
      role: "Network Engg",
      course: "Cisco Routing & Switching",
      text: "NEERAJ SIR best trainer In Networking. The way of teaching is excellent and Neeraj Sir explained all points and topics very well 👍",
      photo: "https://corenetworkingclasses.com/panel/assets/images/testimonials/16289318827533circled-user-male-skin-type-1-2.png",
      initials: "AA"
    },
    {
      name: "Neha Sharma",
      role: "Network Consultant",
      course: "F5 LTM & GTM",
      text: "The hands-on labs for F5 load balancers were outstanding. Neeraj sir's teaching methodology is very practical and industry-oriented. Recommended for anyone looking to master application delivery controllers.",
      initials: "NS"
    },
    {
      name: "David Miller",
      role: "Infrastructure Architect",
      course: "BGP Masterclass",
      text: "CNC's advanced routing modules cleared all my doubts regarding BGP attributes and route reflectors. The troubleshooting sessions are worth every penny.",
      initials: "DM"
    },
    {
      name: "Rahul Verma",
      role: "Security Analyst",
      course: "Palo Alto Firewall",
      text: "Excellent training on Palo Alto next-gen firewalls. The integration labs with Cisco routers helped me secure a great job transition. The trainers are highly supportive.",
      initials: "RV"
    }
  ];

  // Double the list to make an infinite marquee chain
  const doubledList = [...testimonialsList, ...testimonialsList];

  return (
    <section className="testimonials-section-wrapper" id="testimonials">
      {/* Glow Effects */}
      <div className="testimonials-glow-1" />
      <div className="testimonials-glow-2" />

      {/* Section Header */}
      <div className="testimonials-header">
        <div className="google-review-badge">
          <span className="google-g">G</span>
          <span>CNC Google Review</span>
          <div className="stars-row">
            {[...Array(5)].map((_, i) => <Star key={i} size={13} fill="#FBBF24" color="#FBBF24" />)}
          </div>
        </div>
        <h2>Our <span>Testimonials</span></h2>
        <p>What CNC Candidates Talk About us, So Now Its Your Turn To Get Your Hands Dirty in Networking Courses</p>
      </div>

      {/* Horizontal Marquee Ticker Container */}
      <div className="testimonials-marquee-container">
        <div className="testimonials-marquee-content">
          {doubledList.map((testimonial, index) => (
            <div className="testimonial-card marquee-card" key={index}>
              <div className="quote-icon-container">
                <Quote size={28} className="quote-icon" />
              </div>
              
              <div className="testimonial-stars">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="#FBBF24" color="#FBBF24" />)}
              </div>

              <p className="testimonial-text">
                "{testimonial.text}"
              </p>

              <div className="testimonial-author-box">
                <div className="author-avatar-wrapper">
                  {testimonial.photo ? (
                    <img 
                      src={testimonial.photo} 
                      alt={testimonial.name} 
                      className="author-photo" 
                      onError={(e) => { 
                        e.target.style.display = 'none'; 
                      }} 
                    />
                  ) : null}
                  <div className="author-initials">{testimonial.initials}</div>
                </div>
                <div className="author-details">
                  <h4>{testimonial.name}</h4>
                  <span>{testimonial.role}</span>
                  <span className="author-course">{testimonial.course}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
