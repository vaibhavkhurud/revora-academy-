import React from 'react';
import { Link } from 'react-router-dom';
import BreadcrumbRibbon from '../components/BreadcrumbRibbon';
import './page.css';

const Career = () => {
  return (
    <div className="page-wrapper">
      <section className="hero inner-hero">
        <div className="container">
          <div className="hero-content" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h1 className="hero-title">TURN YOUR CREATIVE SKILLS<br/>INTO A CAREER.</h1>
            <BreadcrumbRibbon />
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--secondary-surface-color)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="section-title">Career Paths</h2>
          <div className="bento-grid" style={{ marginTop: '40px' }}>
            {['Filmmaker', 'Cinematographer', 'Video Editor', 'Content Creator', 'Freelancer'].map((path, i) => (
              <div key={i} className="bento-card" style={{ textAlign: 'center' }}>
                <h3 style={{ fontSize: '1.5rem' }}>{path}</h3>
              </div>
            ))}
          </div>
          
          <Link to="/courses" className="btn btn-primary" style={{ marginTop: '60px' }}>Start Learning</Link>
        </div>
      </section>
    </div>
  );
};

export default Career;
