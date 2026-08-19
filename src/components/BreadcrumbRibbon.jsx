import React from 'react';
import { Camera, Video } from 'lucide-react';

const BreadcrumbRibbon = ({ style }) => {
  return (
    <div style={{ display: 'flex', gap: '32px', marginTop: '48px', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center', ...style }}>
      <div className="breadcrumb-text" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: 500 }}>
        <Camera size={18} color="var(--brand-red)" />
        <span>Videography</span>
      </div>
      <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'var(--border-color)' }}></div>
      <div className="breadcrumb-text" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: 500 }}>
        <Video size={18} color="var(--brand-red)" />
        <span>Content Creation</span>
      </div>
      <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'var(--border-color)' }}></div>
      <div className="breadcrumb-text" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: 500 }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--brand-red)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
        <span>Business Growth</span>
      </div>
    </div>
  );
};

export default BreadcrumbRibbon;
