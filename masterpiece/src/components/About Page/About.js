import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-pro">
      <header className="hero">
        <div className="hero-content">
          <h1>Redefining Financial Management</h1>
          <p>BudgetWizeHub: Your partner in achieving financial excellence</p>
        </div>
      </header>

      <section className="mission">
        <div className="container">
          <h2>Our Mission</h2>
          <p>At BudgetWizeHub, we're on a relentless pursuit to democratize financial intelligence. We blend cutting-edge technology with deep financial expertise to empower individuals and businesses to make informed decisions, optimize their resources, and achieve their financial aspirations.</p>
        </div>
      </section>

      <section className="values">
        <div className="container">
          <h2>Core Values</h2>
          <div className="values-grid">
            <div className="value-item">
              <div className="value-icon">
                <i className="icon-innovation"></i>
              </div>
              <h3>Innovation</h3>
              <p>Constantly pushing boundaries to deliver state-of-the-art financial solutions.</p>
            </div>
            <div className="value-item">
              <div className="value-icon">
                <i className="icon-integrity"></i>
              </div>
              <h3>Integrity</h3>
              <p>Upholding the highest standards of honesty and ethical behavior in all our operations.</p>
            </div>
            <div className="value-item">
              <div className="value-icon">
                <i className="icon-empowerment"></i>
              </div>
              <h3>Empowerment</h3>
              <p>Equipping our clients with the tools and knowledge to take control of their financial future.</p>
            </div>
            <div className="value-item">
              <div className="value-icon">
                <i className="icon-excellence"></i>
              </div>
              <h3>Excellence</h3>
              <p>Striving for perfection in every aspect of our service and product delivery.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="approach">
        <div className="container">
          <h2>Our Approach</h2>
          <div className="approach-content">
            <div className="approach-text">
              <p>We believe that financial management should be accessible, intuitive, and tailored to individual needs. Our platform leverages advanced algorithms and machine learning to provide personalized insights and recommendations, ensuring that every user receives a bespoke experience designed to maximize their financial potential.</p>
            </div>
            <div className="approach-image">
              <img src="../../assets/secondHeroSection" alt="FinanceWise Dashboard" />
            </div>
          </div>
        </div>
      </section>

      <section className="team">
        <div className="container">
          <h2>Leadership Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <img src="/api/placeholder/300/300" alt="Sarah Johnson" />
              <h3>Sarah Johnson</h3>
              <p>CEO & Co-founder</p>
            </div>
            <div className="team-member">
              <img src="/api/placeholder/300/300" alt="Michael Chang" />
              <h3>Michael Chang</h3>
              <p>CTO & Co-founder</p>
            </div>
            <div className="team-member">
              <img src="/api/placeholder/300/300" alt="Emily Rodriguez" />
              <h3>Emily Rodriguez</h3>
              <p>Chief Financial Strategist</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Ready to Transform Your Finances?</h2>
          <p>Join thousands of individuals and businesses who have already taken the first step towards financial mastery.</p>
          <a href="#" className="cta-button">Start Your Journey</a>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;