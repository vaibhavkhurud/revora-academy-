import React from 'react';
import { Link } from 'react-router-dom';
import BreadcrumbRibbon from '../components/BreadcrumbRibbon';
import './page.css';

const About = () => {
  return (
    <div className="page-wrapper">
      <section className="hero inner-hero">
        <div className="container">
          <div className="hero-content" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h1 className="hero-title">WE DON'T JUST TEACH VIDEOGRAPHY.<br/>WE TEACH YOU TO CREATE.</h1>
            <BreadcrumbRibbon />
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--bg-color)' }}>
        <div className="container">
          <h2 className="section-title">Our Story</h2>
          <p className="section-subtitle">Revora was built to bridge the gap between theoretical education and real-world creative work.</p>
          
          <div style={{ padding: '60px', backgroundColor: 'var(--secondary-surface-color)', borderRadius: 'var(--radius-lg)' }}>
            <h3 style={{ fontSize: '2rem', marginBottom: '24px', textAlign: 'center' }}>To help aspiring creators develop practical creative skills and build sustainable careers.</h3>
          </div>
        </div>
      </section>
      
      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="section-title">Ready to start creating?</h2>
          <Link to="/courses" className="btn btn-primary" style={{ marginTop: '24px' }}>Explore Courses</Link>
        </div>
      </section>
    </div>
  );
};

export default About;
