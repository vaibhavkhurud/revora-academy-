import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Video, Camera, Scissors, Film, Briefcase, DollarSign, Rocket } from 'lucide-react';
import BreadcrumbRibbon from '../components/BreadcrumbRibbon';
import './page.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <img 
          src="https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
          alt="Cinematic Camera Setup" 
          className="hero-image"
        />
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <span className="eyebrow">Revora Cinematic Academy</span>
            <h1 className="hero-title">LEARN THE CRAFT.<br/>BUILD YOUR CREATIVE CAREER.</h1>
            <p className="hero-desc">
              Master cinematic videography, storytelling, and editing — then put those skills to work on <strong>real projects that actually pay you</strong>.
            </p>
            <div className="hero-actions">
              <Link to="/courses" className="btn btn-primary">Explore Courses</Link>
              <Link to="/admissions" className="btn btn-secondary">Join Now</Link>
            </div>
            
            <BreadcrumbRibbon style={{ justifyContent: 'flex-start' }} />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section" style={{ backgroundColor: 'var(--bg-color)' }}>
        <div className="container">
          <div className="stats-grid">
            <div>
              <div className="stat-number">500+</div>
              <div className="stat-label">Students</div>
            </div>
            <div>
              <div className="stat-number">200+</div>
              <div className="stat-label">Projects</div>
            </div>
            <div>
              <div className="stat-number">50+</div>
              <div className="stat-label">Workshops</div>
            </div>
            <div>
              <div className="stat-number">4.9/5</div>
              <div className="stat-label">Student Rating</div>
            </div>
          </div>
        </div>
      </section>

            {/* Featured Courses Section */}
      <section className="section" style={{ backgroundColor: 'var(--bg-color)' }}>
        <div className="container">
          <h2 className="section-title">START WITH THE RIGHT COURSE</h2>
          <p className="section-subtitle">Programs designed to take you from beginner to professional.</p>
          
          <div className="bento-grid">
            {/* Cinematic Videography Mastery */}
            <div className="bento-card featured" style={{ display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap' }}>
              <div style={{ flex: '1 1 300px' }}>
                <span className="eyebrow" style={{ fontSize: '0.75rem', padding: '4px 8px', backgroundColor: 'var(--brand-red)', color: 'white', borderRadius: '4px' }}>Beginner to Advanced</span>
                <h3 style={{ fontSize: '2rem', margin: '16px 0' }}>Cinematic Videography Mastery</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '8px' }}>Duration: 21 Days</p>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>Level: Beginner to Advanced</p>
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
              <h3 style={{ fontSize: '1.5rem', margin: '12px 0' }}>Content Creation Mastery</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', flexGrow: 1 }}>Duration: 21 Days</p>
              <Link to="/courses/content-creation-mastery" className="btn btn-primary">View Course</Link>
            </div>
            
            {/* Business Growth Mastery */}
            <div className="bento-card" style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ height: '200px', margin: '-32px -32px 24px -32px', borderRadius: 'var(--radius-lg) var(--radius-lg) 0 0', overflow: 'hidden' }}>
                <img src="/Business.png" alt="Business Growth" style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
              </div>
              <h3 style={{ fontSize: '1.5rem', margin: '12px 0' }}>Business Growth Mastery</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', flexGrow: 1 }}>Duration: 21 Days</p>
              <Link to="/courses/business-growth-mastery" className="btn btn-primary">View Course</Link>
            </div>
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
             <Link to="/courses" className="btn btn-primary">Explore All Courses <ArrowRight size={16} style={{ marginLeft: '8px' }} /></Link>
          </div>
        </div>
      </section>

      {/* About Revora Section */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', gap: '60px', alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 400px' }}>
              <span className="eyebrow">More Than a Course</span>
              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '24px' }}>A CREATIVE CAREER STARTS HERE.</h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '32px' }}>
                Revora focuses on practical education rather than only theoretical learning. We bring you hands-on training, real-world projects, professional workflows, and mentorship to build your portfolio and guide your career.
              </p>
              <Link to="/about" className="btn btn-primary">Discover Revora <ArrowRight size={16} style={{ marginLeft: '8px' }} /></Link>
            </div>
            <div style={{ flex: '1 1 400px' }}>
              <div style={{ paddingBottom: '75%', position: 'relative', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
                <img 
                  src="/about-revora.png" 
                  alt="Behind the scenes filming" 
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'fill' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Start Earning Section */}
      <section className="section" style={{ backgroundColor: 'var(--bg-color)' }}>
        <div className="container">
          <div style={{
            background: 'linear-gradient(135deg, #111 0%, #1a0a0a 60%, #2a0808 100%)',
            borderRadius: 'var(--radius-lg)',
            padding: '60px 48px',
            display: 'flex',
            gap: '48px',
            alignItems: 'center',
            flexWrap: 'wrap',
            border: '1px solid rgba(200,30,30,0.25)',
            position: 'relative',
            overflow: 'hidden',
          }}>
            {/* Accent glow */}
            <div style={{
              position: 'absolute',
              top: '-60px',
              right: '-60px',
              width: '300px',
              height: '300px',
              background: 'radial-gradient(circle, rgba(200,30,30,0.18) 0%, transparent 70%)',
              pointerEvents: 'none',
            }} />

            <div style={{ flex: '1 1 320px' }}>
              <span className="eyebrow" style={{ color: 'var(--brand-red)' }}>Real World. Real Income.</span>
              <h2 style={{ fontSize: '2.4rem', lineHeight: '1.15', color: '#fff', margin: '16px 0 20px' }}>
                WE'RE NOT JUST<br/>UPSKILLING YOU —<br/><span style={{ color: 'var(--brand-red)' }}>WE START YOUR EARNING.</span>
              </h2>
              <p style={{ color: '#A3A3A3', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '32px', maxWidth: '460px' }}>
                Revora Academy goes beyond teaching. We provide <strong style={{ color: '#fff' }}>real-world projects with actual income</strong> — so while you're still learning, you're already earning. Build your skills and your bank account at the same time.
              </p>
              <Link to="/admissions" className="btn btn-primary">Apply Now <ArrowRight size={16} style={{ marginLeft: '8px' }} /></Link>
            </div>

            <div style={{ flex: '1 1 280px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {[
                { icon: <Briefcase size={24} color="var(--brand-red)" />, title: 'Paid Real Projects', desc: 'Work on live client projects and get compensated while you learn.' },
                { icon: <DollarSign size={24} color="var(--brand-red)" />, title: 'Income From Once You Complete Course', desc: 'Start generating income after successfully completing your course.' },
                { icon: <Rocket size={24} color="var(--brand-red)" />, title: 'Career Launchpad', desc: 'Graduate with a portfolio, experience, and earnings already in hand.' },
              ].map((item, i) => (
                <div key={i} style={{
                  display: 'flex',
                  gap: '16px',
                  alignItems: 'flex-start',
                  background: 'rgba(255,255,255,0.04)',
                  borderRadius: 'var(--radius-md)',
                  padding: '18px 20px',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}>
                  <span style={{ lineHeight: 1, marginTop: '2px' }}>{item.icon}</span>
                  <div>
                    <div style={{ color: '#fff', fontWeight: 700, marginBottom: '4px' }}>{item.title}</div>
                    <div style={{ color: '#A3A3A3', fontSize: '0.9rem', lineHeight: 1.5 }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What You Will Master (Bento Grid) */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">MASTER THE COMPLETE CREATIVE WORKFLOW</h2>
          <p className="section-subtitle">Develop skills across the entire production pipeline.</p>
          
          <div className="bento-grid">
            <div className="bento-card featured">
              <Camera size={32} color="var(--brand-red)" style={{ marginBottom: '16px' }} />
              <h3>Camera Fundamentals</h3>
              <p style={{ color: 'var(--text-secondary)', marginTop: '8px' }}>Master exposure, lenses, and settings to capture exactly what you envision.</p>
            </div>
            <div className="bento-card">
              <Video size={32} color="var(--brand-red)" style={{ marginBottom: '16px' }} />
              <h3>Cinematic Composition</h3>
              <p style={{ color: 'var(--text-secondary)', marginTop: '8px' }}>Frame shots that tell a compelling visual story.</p>
            </div>
            <div className="bento-card">
              <Film size={32} color="var(--brand-red)" style={{ marginBottom: '16px' }} />
              <h3>Lighting</h3>
              <p style={{ color: 'var(--text-secondary)', marginTop: '8px' }}>Paint with light to create depth and mood.</p>
            </div>
            <div className="bento-card">
              <Scissors size={32} color="var(--brand-red)" style={{ marginBottom: '16px' }} />
              <h3>Video Editing</h3>
              <p style={{ color: 'var(--text-secondary)', marginTop: '8px' }}>Pace your story and weave footage together professionally.</p>
            </div>
          </div>
        </div>
      </section>



      {/* Final CTA */}
      <section className="section" style={{ backgroundColor: '#080808', color: '#fff', textAlign: 'center' }}>
        <div className="container">
          <span className="eyebrow" style={{ color: 'var(--brand-red)' }}>Your Journey Starts Now</span>
          <h2 className="section-title" style={{ color: '#fff', marginTop: '12px' }}>LEARN. CREATE. EARN.</h2>
          <p className="section-subtitle" style={{ color: '#A3A3A3' }}>
            We don't just upskill you — we help you start actual earning.<br/>
            Revora Academy provides real-world projects with real income.
          </p>
          <div className="hero-actions" style={{ justifyContent: 'center' }}>
            <Link to="/courses" className="btn btn-primary">Explore Courses</Link>
            <Link to="/admissions" className="btn" style={{ backgroundColor: '#fff', color: '#111' }}>Join Revora</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
