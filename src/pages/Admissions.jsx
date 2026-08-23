import React, { useState } from 'react';
import BreadcrumbRibbon from '../components/BreadcrumbRibbon';
import './page.css';

const Admissions = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    course: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const { fullName, email, mobile, course, message } = formData;

    const mobileRegex = /^[0-9]{10}$/;
    if (!mobileRegex.test(mobile)) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    const wpNumber = '917276247633';
    
    const text = `*New Admission Enquiry*%0A%0A*Name:* ${fullName}%0A*Email:* ${email}%0A*Mobile:* ${mobile}%0A*Course:* ${course}%0A*Message:* ${message}`;
    const whatsappUrl = `https://wa.me/${wpNumber}?text=${text}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="page-wrapper">
      <section className="hero inner-hero" style={{ minHeight: '40vh', textAlign: 'center', justifyContent: 'center' }}>
        <div className="container">
          <h1 className="hero-title">START YOUR CREATIVE JOURNEY.</h1>
          <p className="hero-desc" style={{ margin: '0 auto' }}>Fill out the form and take the first step toward becoming a professional creator.</p>
          <BreadcrumbRibbon />
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--bg-color)' }}>
        <div className="container">
          <div style={{ maxWidth: '700px', margin: '0 auto', backgroundColor: 'var(--secondary-surface-color)', padding: '40px', borderRadius: 'var(--radius-lg)' }}>
            <h2 className="section-title" style={{ fontSize: '2rem', marginBottom: '32px' }}>Application Form</h2>
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <input 
                  type="text" 
                  name="fullName"
                  placeholder="Full Name *" 
                  value={formData.fullName}
                  onChange={handleChange}
                  style={{ padding: '16px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', background: 'var(--bg-color)', color: 'var(--text-primary)' }} 
                  required 
                />
                <input 
                  type="email" 
                  name="email"
                  placeholder="Email *" 
                  value={formData.email}
                  onChange={handleChange}
                  style={{ padding: '16px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', background: 'var(--bg-color)', color: 'var(--text-primary)' }} 
                  required 
                />
                <input 
                  type="tel" 
                  name="mobile"
                  placeholder="Mobile No. *" 
                  value={formData.mobile}
                  onChange={handleChange}
                  style={{ padding: '16px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', background: 'var(--bg-color)', color: 'var(--text-primary)' }} 
                  required 
                />
                <select 
                  name="course" 
                  value={formData.course} 
                  onChange={handleChange} 
                  style={{ padding: '16px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', background: 'var(--bg-color)', color: 'var(--text-primary)' }} 
                  required
                >
                  <option value="" disabled>Select a Course *</option>
                  <option value="Cinematic Videography Mastery">Cinematic Videography Mastery</option>
                  <option value="Content Creation Mastery">Content Creation Mastery</option>
                  <option value="Business Growth Mastery">Business Growth Mastery</option>
                  <option value="Other">Other</option>
                </select>
                <textarea 
                  name="message"
                  placeholder="Message *" 
                  rows="4" 
                  value={formData.message}
                  onChange={handleChange}
                  style={{ padding: '16px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', background: 'var(--bg-color)', color: 'var(--text-primary)' }} 
                  required
                ></textarea>
                <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '16px' }}>Apply Now via WhatsApp</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;
