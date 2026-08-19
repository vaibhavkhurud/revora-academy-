import React from 'react';
import { Link } from 'react-router-dom';
import BreadcrumbRibbon from '../components/BreadcrumbRibbon';
import './page.css';

const Testimonials = () => {
  return (
    <div className="page-wrapper">
      <section className="hero inner-hero" style={{ minHeight: '50vh', textAlign: 'center', justifyContent: 'center' }}>
        <div className="container">
          <h1 className="hero-title">REAL STUDENTS.<br/>REAL PROJECTS.<br/>REAL GROWTH.</h1>
          <BreadcrumbRibbon />
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--bg-color)' }}>
        <div className="container">
          <div className="bento-grid">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="bento-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#555' }}></div>
                  <div>
                    <div style={{ fontWeight: 600 }}>Student {i}</div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Cinematic Videography</div>
                  </div>
                </div>
                <p>"Revora completely changed my career trajectory. The practical projects were exactly what I needed."</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
