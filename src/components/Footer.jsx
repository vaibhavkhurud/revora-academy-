import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaYoutube, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import { MapPin } from 'lucide-react';
import './components.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand + Social */}
          <div className="footer-col">
            <div className="logo-container" style={{ marginBottom: '16px' }}>
              <img src="/revora-aca.jpeg" alt="Revora Logo" className="logo-img" />
              <span className="logo-text">REVORA</span>
            </div>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '300px', marginBottom: '20px' }}>
              Premium practical education platform focused on cinematic videography and creative careers.
            </p>
            {/* Social Icons */}
            <div style={{ display: 'flex', gap: '12px' }}>
              {[
                { icon: <FaInstagram size={18} />, href: '#', label: 'Instagram' },
                { icon: <FaYoutube size={18} />, href: '#', label: 'YouTube' },
                { icon: <FaFacebook size={18} />, href: '#', label: 'Facebook' },
                { icon: <FaWhatsapp size={18} />, href: '#', label: 'WhatsApp' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '38px',
                    height: '38px',
                    borderRadius: '8px',
                    border: '1px solid var(--border-color)',
                    color: 'var(--text-secondary)',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = '#fff';
                    e.currentTarget.style.backgroundColor = 'var(--brand-red)';
                    e.currentTarget.style.borderColor = 'var(--brand-red)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = 'var(--text-secondary)';
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.borderColor = 'var(--border-color)';
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Academy Links */}
          <div className="footer-col">
            <h4>Academy</h4>
            <div className="footer-links">
              <Link to="/about">About Revora</Link>
              <Link to="/courses">Courses</Link>
              <Link to="/why-revora">Why Revora</Link>
              <Link to="/career">Career</Link>
              <Link to="/testimonials">Testimonials</Link>
            </div>
          </div>

          {/* Resources Links */}
          <div className="footer-col">
            <h4>Resources</h4>
            <div className="footer-links">
              <Link to="#">FAQ</Link>
              <Link to="#">Student Benefits</Link>
              <Link to="#">Terms</Link>
              <Link to="#">Privacy</Link>
            </div>
          </div>

          {/* Address & Map */}
          <div className="footer-col">
            <h4>Find Us</h4>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', marginBottom: '16px' }}>
              <MapPin size={16} color="var(--brand-red)" style={{ marginTop: '3px', flexShrink: 0 }} />
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
                Revora Cinematic Academy<br />
                123 Creative District,<br />
                Film Nagar, Hyderabad,<br />
                Telangana — 500033
              </p>
            </div>
            {/* Embedded Map */}
            <div style={{ borderRadius: '10px', overflow: 'hidden', border: '1px solid var(--border-color)' }}>
              <iframe
                title="Revora Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.4!2d78.3996!3d17.4489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93e0!2sFilm+Nagar%2C+Hyderabad!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="140"
                style={{ border: 0, display: 'block' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 Revora Cinematic Academy. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '16px' }}>
            <Link to="/contact">Contact</Link>
            <Link to="/admissions">Admissions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
