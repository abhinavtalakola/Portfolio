import React, { useState } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState({ text: '', type: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setSubmitMessage({ text: 'Name is required', type: 'error' });
      return false;
    }
    if (!formData.email.trim()) {
      setSubmitMessage({ text: 'Email is required', type: 'error' });
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setSubmitMessage({ text: 'Email is invalid', type: 'error' });
      return false;
    }
    if (!formData.message.trim()) {
      setSubmitMessage({ text: 'Message is required', type: 'error' });
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitMessage({ text: '', type: '' });

    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        console.log('Form submitted:', formData);
        setIsSubmitting(false);
        setSubmitMessage({ 
          text: 'Message sent successfully!', 
          type: 'success' 
        });
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      }, 1500);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <h2>Contact Me</h2>
      
      <div className="contact-container">
        <div className="contact-card">
          <div className="contact-info">
            <h3>Get in Touch</h3>
            <p>Feel free to reach out for collaborations or just to say hello!</p>
            
            <div className="contact-methods">
              <div className="contact-method">
                <FaEnvelope className="contact-icon" />
                <span>abhinavreddy27114@gmail.com</span>
              </div>
              <div className="contact-method">
                <a href="https://github.com/abhinavtalakola" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="contact-icon" />
                  <span>Github</span>
                </a>
              </div>
              <div className="contact-method">
                <a href="https://www.linkedin.com/in/talakola-abhinav-reddy/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="contact-icon" />
                  <span>linkedin</span>
                </a>
              </div>
            </div>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            {submitMessage.text && (
              <div className={`submit-message ${submitMessage.type}`}>
                {submitMessage.text}
              </div>
            )}
            
            <button 
              type="submit" 
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
