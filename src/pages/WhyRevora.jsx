import React from 'react';
import { Link } from 'react-router-dom';
import BreadcrumbRibbon from '../components/BreadcrumbRibbon';
import './page.css';

const WhyRevora = () => {
  return (
    <div className="page-wrapper">
      <section className="hero inner-hero" style={{  textAlign: 'center', justifyContent: 'center' }}>
        <div className="container">
          <span className="eyebrow">Why Revora?</span>
          <h1 className="hero-title" style={{ fontSize: '4rem' }}>Learn differently.<br/>Create professionally.</h1>
          <BreadcrumbRibbon />
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--bg-color)' }}>
        <div className="container">
          <h2 className="section-title">8 Core Benefits</h2>
          <div className="bento-grid">
            {['Hands-on Learning', 'Real Projects', 'Expert Mentorship', 'Career Guidance', 'Portfolio Building', 'Freelancing Guidance', 'Industry Exposure', 'Certification'].map((benefit, i) => (
              <div key={i} className="bento-card">
                <h3>{benefit}</h3>
                <p style={{ color: 'var(--text-secondary)', marginTop: '8px' }}>Practical, career-focused learning designed for the modern creator.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyRevora;
