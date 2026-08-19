import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import BreadcrumbRibbon from '../components/BreadcrumbRibbon';
import './page.css';

const CourseDetails = () => {
  const { slug } = useParams();
  
  const courseTitle = slug ? slug.replace(/-/g, ' ') : 'Cinematic Videography Mastery';

  const courseThumbnails = {
    'cinematic-videography-mastery': '/cenematic.png',
    'content-creation-mastery': '/content.png',
    'business-growth-mastery': '/Business.png'
  };

  const thumbnailUrl = (slug && courseThumbnails[slug]) ? courseThumbnails[slug] : courseThumbnails['cinematic-videography-mastery'];
  
  return (
    <div className="page-wrapper">
      <section className="section inner-hero" style={{ paddingTop: '120px', paddingBottom: '60px', backgroundColor: 'var(--surface-color)' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '60px', flexWrap: 'wrap', alignItems: 'center' }}>
            <div style={{ flex: '1 1 500px' }}>
              <span className="eyebrow" style={{ padding: '6px 12px', backgroundColor: 'var(--brand-red)', color: 'white', borderRadius: '4px', display: 'inline-block', marginBottom: '16px' }}>
                Admissions Open – Limited Seats Available
              </span>
              <h1 className="hero-title" style={{ fontSize: '3.5rem', textTransform: 'capitalize' }}>
                {courseTitle}
              </h1>
              
              <div style={{ display: 'flex', gap: '24px', margin: '24px 0 40px', color: 'var(--text-primary)', fontWeight: 600, fontSize: '1.1rem' }}>
                <span style={{ padding: '12px 24px', backgroundColor: 'var(--bg-color)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }}>Duration: 21 Days</span>
                <span style={{ padding: '12px 24px', backgroundColor: 'var(--bg-color)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }}>Level: Beginner to Advanced</span>
              </div>
              
              <div className="hero-actions">
                <Link to="/admissions" className="btn btn-primary">Enroll Now - Contact for Fee</Link>
                <Link to="/contact" className="btn btn-secondary">Talk to Us</Link>
              </div>
              <BreadcrumbRibbon style={{ justifyContent: 'flex-start' }} />
            </div>
            
            <div style={{ flex: '1 1 400px' }}>
              <div style={{ paddingBottom: '75%', position: 'relative', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
                <img src={thumbnailUrl} alt={`${courseTitle} Thumbnail`} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}/>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--bg-color)' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '60px', flexWrap: 'wrap' }}>
            
            {/* What You'll Learn */}
            <div style={{ flex: '2 1 400px' }}>
              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '32px' }}>What You'll Learn</h2>
              <div className="bento-grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
                {[
                  'Fundamentals of Cinematic Videography',
                  'Camera Settings & Shot Composition',
                  'AI Tools for Video Creation',
                  'Cinematic Storytelling',
                  'Professional Video Editing',
                  'Color Grading & Sound Design',
                  'Automotive & Showroom Cinematic Shoots',
                  'Instagram Reels & Social Media Content',
                  'Client Communication & Project Workflow',
                  'Portfolio Building & Freelancing Basics'
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', padding: '16px', backgroundColor: 'var(--secondary-surface-color)', borderRadius: 'var(--radius-sm)' }}>
                    <CheckCircle2 color="var(--brand-red)" size={20} style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontWeight: 500 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Side Highlights & Who can join */}
            <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: '40px' }}>
              
              <div style={{ padding: '32px', backgroundColor: 'var(--surface-color)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '24px' }}>Course Highlights</h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {['100% Offline Practical Training', 'Daily Hands-on Practice', 'Real Project Experience', 'Small Batch Size', 'Industry Mentorship', 'Certificate of Completion', 'Career & Freelancing Guidance'].map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-secondary)' }}>
                      <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--brand-red)' }}></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ padding: '32px', backgroundColor: 'var(--secondary-surface-color)', borderRadius: 'var(--radius-lg)' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '24px' }}>Who Can Join?</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                  {['Students', 'Beginners', 'Content Creators', 'Freelancers', 'Business Owners', 'Anyone passionate about filmmaking and content creation'].map((item, i) => (
                    <span key={i} style={{ padding: '8px 16px', backgroundColor: 'var(--bg-color)', borderRadius: '20px', fontSize: '0.9rem', border: '1px solid var(--border-color)' }}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>

            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseDetails;
