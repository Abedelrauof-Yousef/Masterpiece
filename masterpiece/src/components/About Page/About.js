// src/AboutUs.jsx
import React from "react";
import TeamMember from "./TeamMember";
import "./AboutUs.css"; // Importing CSS for styling

const AboutUs = () => {
  return (
    <div className="about-container">
      <section className="intro">
        <h2>About Us</h2>
        <p>
          Welcome to [Company Name]. We are committed to delivering the best
          solutions in [industry/field]. Our team is passionate about [specific
          mission].
        </p>
      </section>

      <section className="core-values">
        <h2>Our Core Values</h2>
        <div className="values-grid">
          <div className="value">
            <h3>Integrity</h3>
            <p>
              We uphold the highest standards of integrity in all our actions.
            </p>
          </div>
          <div className="value">
            <h3>Innovation</h3>
            <p>
              We constantly seek innovative solutions to drive success for our
              clients.
            </p>
          </div>
          <div className="value">
            <h3>Customer Focus</h3>
            <p>Our customers are at the heart of everything we do.</p>
          </div>
        </div>
      </section>

      <section className="team">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          <TeamMember
            imgSrc="path/to/leader1.jpg"
            name="Leader Name"
            title="CEO & Founder"
            bio="Brief bio about the leader's role and experience."
          />
          <TeamMember
            imgSrc="path/to/leader2.jpg"
            name="Leader Name"
            title="CTO"
            bio="Brief bio about the leader's role and experience."
          />
          {/* Add more TeamMember components as needed */}
        </div>
      </section>

      <section className="history">
        <h2>Our Journey</h2>
        <div className="timeline">
          <div className="milestone">
            <div className="year">2000</div>
            <div className="description">
              Company founded with a mission to innovate.
            </div>
          </div>
          <div className="milestone">
            <div className="year">2005</div>
            <div className="description">Launched first major product.</div>
          </div>
          {/* Add more milestones as needed */}
        </div>
      </section>

      <section className="mission-vision">
        <div className="box">
          <h3>Our Vision</h3>
          <p>To be the leading provider of [industry/field] solutions.</p>
        </div>
        <div className="box">
          <h3>Our Mission</h3>
          <p>
            To deliver innovative and reliable services that exceed customer
            expectations.
          </p>
        </div>
      </section>

      <section className="contact">
        <h2>Contact Us</h2>
        <p>Address: 123 Main Street, City, Country</p>
        <p>Phone: (123) 456-7890</p>
        <p>Email: contact@company.com</p>
      </section>
    </div>
  );
};

export default AboutUs;
