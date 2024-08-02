import React from 'react';
import './Contact.css';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="contact-pro">
      <header className="contact-hero">
        <h1>Get in Touch</h1>
        <p>We're here to help and answer any question you might have.</p>
      </header>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-form">
              <h2>Send us a Message</h2>
              <form>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="submit-button">
                  <Send size={18} />
                  Send Message
                </button>
              </form>
            </div>
            <div className="contact-info">
              <h2>Contact Information</h2>
              <div className="info-item">
                <Mail size={24} />
                <p>contact@BudgetwiseHub.com</p>
              </div>
              <div className="info-item">
                <Phone size={24} />
                <p>+1 (555) 123-4567</p>
              </div>
              <div className="info-item">
                <MapPin size={24} />
                <p>123 Amman</p>
              </div>
              <div className="map-container">
                <img src="path/to/your-actual-map-image.jpg" alt="Map" className="map-placeholder" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
