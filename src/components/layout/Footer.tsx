import React from 'react';
import { personalInfo } from '../../data/portfolioData';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-inner">
          <div>
            <div style={{ fontSize: '15px', fontWeight: 600 }}>{personalInfo.fullName}</div>
            <div style={{ fontSize: '13px', color: 'rgba(0,0,0,0.5)', marginTop: '2px' }}>
              Associate Software Engineer at {personalInfo.currentCompany} · Hyderabad, India
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: '13px', color: 'rgba(0,0,0,0.6)', textDecoration: 'none' }}
            >
              LinkedIn
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: '13px', color: 'rgba(0,0,0,0.6)', textDecoration: 'none' }}
            >
              GitHub
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              style={{ fontSize: '13px', color: 'rgba(0,0,0,0.6)', textDecoration: 'none' }}
            >
              Email
            </a>
            <button
              onClick={scrollToTop}
              className="icon-btn-square"
              title="Return to Top"
              aria-label="Back to top"
            >
              <ArrowUp size={14} />
            </button>
          </div>
        </div>

        <div style={{ marginTop: '32px', paddingTop: '20px', borderTop: '1px solid #F4F4F6', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '11px', color: 'rgba(0,0,0,0.4)', flexWrap: 'wrap', gap: '8px' }}>
          <span>© {new Date().getFullYear()} Harsha Vardhan Chithirala. All rights reserved.</span>
          <span>Tripuranthakam, Andhra Pradesh & Hyderabad, Telangana</span>
        </div>
      </div>
    </footer>
  );
};
