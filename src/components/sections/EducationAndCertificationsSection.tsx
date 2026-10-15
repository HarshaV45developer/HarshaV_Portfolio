import React from 'react';
import { educationData, certificationsData } from '../../data/portfolioData';

export const EducationAndCertificationsSection: React.FC = () => {
  const edu = educationData[0];

  return (
    <section id="education" className="portfolio-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-kicker">05. Academic & Cloud Foundations</div>
          <h2 className="section-title">Education & Certifications</h2>
          <p className="section-description">
            Undergraduate engineering degree from KL University and verified cloud architecture credentials.
          </p>
        </div>

        <div className="edu-cert-split">
          {/* Left: Education Card */}
          <div className="mono-card">
            <div className="section-kicker">Higher Education</div>
            <h3 style={{ fontSize: '20px', fontWeight: 600, letterSpacing: '-0.02em', marginTop: '6px' }}>
              {edu.degree}
            </h3>
            <div style={{ fontSize: '13px', color: 'rgba(0,0,0,0.6)', marginTop: '4px' }}>
              {edu.institution} · {edu.location}
            </div>

            <div style={{ display: 'inline-block', backgroundColor: '#F4F4F6', padding: '4px 12px', borderRadius: '9999px', fontSize: '12px', fontWeight: 600, margin: '14px 0' }}>
              {edu.score} · {edu.period}
            </div>

            <p style={{ fontSize: '13px', lineHeight: 1.6, color: 'rgba(0,0,0,0.7)', marginBottom: '16px' }}>
              {edu.description}
            </p>

            <div style={{ fontSize: '11px', fontWeight: 600, color: 'rgba(0,0,0,0.5)', marginBottom: '8px' }}>
              Coursework & Highlights:
            </div>
            <ul className="exp-bullets" style={{ marginTop: 0 }}>
              {edu.highlights.map((h, i) => (
                <li key={i} className="exp-bullet-item">{h}</li>
              ))}
            </ul>
          </div>

          {/* Right: Certifications List */}
          <div className="mono-card">
            <div className="section-kicker">Industry Credentials</div>
            <h3 style={{ fontSize: '20px', fontWeight: 600, letterSpacing: '-0.02em', marginTop: '6px', marginBottom: '16px' }}>
              Cloud & Solutions Architecture
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {certificationsData.map((cert, i) => (
                <div
                  key={i}
                  style={{
                    padding: '14px 18px',
                    borderRadius: '12px',
                    backgroundColor: '#F9F9FB',
                    border: '1px solid #ECECEF',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '10px'
                  }}
                >
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: 600 }}>{cert.title}</div>
                    <div style={{ fontSize: '11px', color: 'rgba(0,0,0,0.5)', marginTop: '2px' }}>
                      {cert.issuer} · {cert.date}
                    </div>
                  </div>
                  <span
                    style={{
                      fontSize: '11px',
                      fontWeight: 500,
                      backgroundColor: cert.status === 'Certified' ? '#E6F4EA' : '#F1F3F4',
                      color: cert.status === 'Certified' ? '#137333' : '#3C4043',
                      padding: '3px 10px',
                      borderRadius: '9999px',
                    }}
                  >
                    {cert.status}
                  </span>
                </div>
              ))}
            </div>

            <p style={{ fontSize: '12px', color: 'rgba(0,0,0,0.5)', marginTop: '20px', lineHeight: 1.5 }}>
              Certifications validate fundamental competencies in distributed cloud architectures, serverless computing, storage paradigms, and security boundaries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
