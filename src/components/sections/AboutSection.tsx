import React from 'react';
import { personalInfo, educationData } from '../../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="portfolio-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-kicker">01. Professional Profile</div>
          <h2 className="section-title">About Me</h2>
          <p className="section-description">
            Associate Software Engineer and Full Stack Developer with a passion for designing scalable business applications, intuitive enterprise dashboards, and high-performance interactive interfaces.
          </p>
        </div>

        {/* 3-Column Highlights Grid */}
        <div className="about-grid">
          {/* Card 1: Current Employment */}
          <div className="mono-card">
            <div className="section-kicker">Current Role</div>
            <h3 className="about-card-title">{personalInfo.currentCompany}</h3>
            <p className="about-card-text">
              Working as an Associate Software Engineer in Hyderabad, designing core business management applications including an HRMS portal with dual-role dashboards and a College Management System.
            </p>
          </div>

          {/* Card 2: Academic Background */}
          <div className="mono-card">
            <div className="section-kicker">Education</div>
            <h3 className="about-card-title">KL University, Vijayawada</h3>
            <p className="about-card-text">
              Graduated with a Bachelor of Technology in Computer Science and Information Technology (2020–2024), maintaining an 8.3/10 CGPA across algorithmic and systems coursework.
            </p>
          </div>

          {/* Card 3: Engineering Locations */}
          <div className="mono-card">
            <div className="section-kicker">Presence</div>
            <h3 className="about-card-title">Hyderabad & Tripuranthakam</h3>
            <p className="about-card-text">
              Based professionally in Hyderabad, Telangana, with family roots in Tripuranthakam, Andhra Pradesh. Available for full stack engineering collaborations.
            </p>
          </div>
        </div>

        {/* Development Tenets Box */}
        <div className="tenets-box">
          <div className="section-kicker">Core Principles</div>
          <h3 style={{ fontSize: '18px', fontWeight: 500, letterSpacing: '-0.02em', marginTop: '4px' }}>
            Engineering Methodology
          </h3>
          <div className="tenets-grid">
            <div className="tenet-item">
              <h4>Role-Tailored Architecture</h4>
              <p>Designing interfaces that respect distinct user personas—reducing cognitive load for everyday staff while providing high-density controls for administrators.</p>
            </div>
            <div className="tenet-item">
              <h4>Robust RESTful Microservices</h4>
              <p>Developing secure, stateless backend APIs with JWT-based authentication, structured request validation, and clean controller-service architecture.</p>
            </div>
            <div className="tenet-item">
              <h4>Modern Frontend & Motion</h4>
              <p>Building responsive, accessible web interfaces utilizing React 19, modular styling, and purposeful frame-rate independent animations.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
