import React from 'react';
import { Link } from 'react-router-dom';
import BreadcrumbRibbon from '../components/BreadcrumbRibbon';
import './page.css';

const Courses = () => {
  return (
    <div className="page-wrapper">
      <section className="hero inner-hero" style={{ minHeight: '50vh', textAlign: 'center', justifyContent: 'center' }}>
        <div className="container">
          <span className="eyebrow">LEARN. CREATE. MASTER.</span>
          <h1 className="hero-title" style={{ fontSize: '3rem' }}>OUR COURSES</h1>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>Practical, career-focused learning designed for the modern creator.</p>
          <BreadcrumbRibbon />
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--bg-color)' }}>
        <div className="container">
          <div className="bento-grid">
            {/* Cinematic Videography Mastery */}
            <div className="bento-card featured" style={{ display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap' }}>
              <div style={{ flex: '1 1 300px' }}>
                <span className="eyebrow" style={{ fontSize: '0.75rem', padding: '4px 8px', backgroundColor: 'var(--brand-red)', color: 'white', borderRadius: '4px' }}>Beginner to Advanced</span>
                <h3 style={{ fontSize: '2rem', margin: '16px 0' }}>Cinematic Videography Mastery</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '8px' }}>Duration: 21 Days</p>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>Price: Contact for Details</p>
                <Link to="/courses/cinematic-videography-mastery" className="btn btn-primary">View Course</Link>
              </div>
              <div style={{ flex: '1 1 300px', height: '300px', backgroundColor: '#333', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
                <img src="/cenematic.png" alt="Cinematic Videography" style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
              </div>
            </div>
            
            {/* Content Creation Mastery */}
            <div className="bento-card" style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ height: '200px', margin: '-32px -32px 24px -32px', borderRadius: 'var(--radius-lg) var(--radius-lg) 0 0', overflow: 'hidden' }}>
                <img src="/content.png" alt="Content Creation" style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
              </div>
              <span className="eyebrow" style={{ fontSize: '0.75rem' }}>Beginner to Advanced</span>
              <h3 style={{ fontSize: '1.5rem', margin: '12px 0' }}>Content Creation Mastery</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '8px' }}>Duration: 21 Days</p>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', flexGrow: 1 }}>Price: Contact for Details</p>
              <Link to="/courses/content-creation-mastery" className="btn btn-primary">View Course</Link>
            </div>
            
            {/* Business Growth Mastery */}
            <div className="bento-card" style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ height: '200px', margin: '-32px -32px 24px -32px', borderRadius: 'var(--radius-lg) var(--radius-lg) 0 0', overflow: 'hidden' }}>
                <img src="/Business.png" alt="Business Growth" style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
              </div>
              <span className="eyebrow" style={{ fontSize: '0.75rem' }}>Intermediate to Advanced</span>
              <h3 style={{ fontSize: '1.5rem', margin: '12px 0' }}>Business Growth Mastery</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '8px' }}>Duration: 21 Days</p>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', flexGrow: 1 }}>Price: Contact for Details</p>
              <Link to="/courses/business-growth-mastery" className="btn btn-primary">View Course</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
