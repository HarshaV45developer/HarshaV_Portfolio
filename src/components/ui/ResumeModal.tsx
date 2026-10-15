import React, { useState } from 'react';
import { X, Printer, Copy, Check, MapPin, Mail, Phone, Linkedin, Github } from 'lucide-react';
import { personalInfo, professionalExperience, professionalProjects, personalProjects, educationData, skillsData, certificationsData } from '../../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyMarkdown = () => {
    const markdown = `# ${personalInfo.fullName}
**${personalInfo.title}**
- Location: ${personalInfo.currentLocation}
- Email: ${personalInfo.email}
- Phone: ${personalInfo.phone}
- LinkedIn: ${personalInfo.linkedin}
- GitHub: ${personalInfo.github}

## Professional Summary
${personalInfo.aboutBio}

## Professional Experience
### ${professionalExperience[0].role} — ${professionalExperience[0].company}
*${professionalExperience[0].period} | ${professionalExperience[0].location}*
${professionalExperience[0].summary}

**Projects at ${professionalExperience[0].company}:**
1. **${professionalProjects[0].title}**: ${professionalProjects[0].overview}
2. **${professionalProjects[1].title}**: ${professionalProjects[1].overview}

## Personal & Independent Projects
${personalProjects.map(p => `### ${p.title} (${p.period})
- Tech Stack: ${p.techStack.map(t => t.name).join(', ')}
- Description: ${p.overview}
- GitHub: ${p.githubUrl || 'N/A'}`).join('\n\n')}

## Education
### ${educationData[0].degree}
*${educationData[0].institution} (${educationData[0].period})*
- ${educationData[0].score}
- ${educationData[0].description}

## Certifications
${certificationsData.map(c => `- ${c.title} (${c.issuer})`).join('\n')}
`;

    navigator.clipboard.writeText(markdown);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div 
        className="modal-content-box"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Controls Bar */}
        <div className="modal-header-sticky">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '11px', fontWeight: 600, color: 'rgba(0,0,0,0.5)', textTransform: 'uppercase' }}>
              CURRICULUM VITAE
            </span>
            <span style={{ color: 'rgba(0,0,0,0.2)' }}>·</span>
            <span style={{ fontSize: '12px', fontWeight: 500 }}>Standard Candidate Format</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <button
              onClick={handleCopyMarkdown}
              className="btn-secondary-pill"
              style={{ padding: '6px 14px', fontSize: '11px', gap: '4px' }}
            >
              {copied ? <Check size={12} color="#059669" /> : <Copy size={12} />}
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="btn-primary-pill"
              style={{ padding: '6px 14px', fontSize: '11px', gap: '4px' }}
            >
              <Printer size={12} />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              style={{
                background: '#F4F4F6',
                border: 'none',
                borderRadius: '50%',
                width: '30px',
                height: '30px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                marginLeft: '4px'
              }}
            >
              <X size={15} />
            </button>
          </div>
        </div>

        {/* Printable Resume Container */}
        <div className="modal-body-scroll" style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
          {/* Header */}
          <div style={{ borderBottom: '1px solid #E5E5EA', paddingBottom: '20px' }}>
            <h1 style={{ fontSize: '26px', fontWeight: 700, letterSpacing: '-0.03em' }}>
              {personalInfo.fullName}
            </h1>
            <div style={{ fontSize: '14px', fontWeight: 500, color: '#000000', marginTop: '4px' }}>
              {personalInfo.title}
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginTop: '12px', fontSize: '12px', color: 'rgba(0,0,0,0.6)' }}>
              <span>{personalInfo.currentLocation}</span>
              <span>·</span>
              <a href={`mailto:${personalInfo.email}`} style={{ color: '#000000', textDecoration: 'none' }}>
                {personalInfo.email}
              </a>
              <span>·</span>
              <a href={`tel:${personalInfo.phone}`} style={{ color: '#000000', textDecoration: 'none' }}>
                {personalInfo.phone}
              </a>
              <span>·</span>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: '#000000', textDecoration: 'none' }}>
                LinkedIn
              </a>
              <span>·</span>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" style={{ color: '#000000', textDecoration: 'none' }}>
                GitHub
              </a>
            </div>
          </div>

          {/* Professional Experience */}
          <div>
            <div className="modal-section-title">Professional Experience</div>
            <div style={{ marginTop: '10px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px' }}>
                <div style={{ fontSize: '15px', fontWeight: 600 }}>
                  {professionalExperience[0].role} — {professionalExperience[0].company}
                </div>
                <div style={{ fontSize: '12px', color: 'rgba(0,0,0,0.5)' }}>
                  {professionalExperience[0].period} · {professionalExperience[0].location}
                </div>
              </div>
              <p style={{ fontSize: '13px', lineHeight: 1.5, color: 'rgba(0,0,0,0.7)', marginTop: '6px' }}>
                {professionalExperience[0].summary}
              </p>

              <div style={{ marginTop: '12px', paddingLeft: '14px', borderLeft: '2px solid #000000', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div>
                  <div style={{ fontSize: '13px', fontWeight: 600 }}>
                    Project 1: {professionalProjects[0].title}
                  </div>
                  <p style={{ fontSize: '12px', color: 'rgba(0,0,0,0.65)', marginTop: '2px' }}>
                    {professionalProjects[0].overview}
                  </p>
                  <ul className="exp-bullets" style={{ marginTop: '6px' }}>
                    {professionalProjects[0].responsibilities.slice(0, 3).map((r, i) => (
                      <li key={i} className="exp-bullet-item">{r}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div style={{ fontSize: '13px', fontWeight: 600 }}>
                    Project 2: {professionalProjects[1].title}
                  </div>
                  <p style={{ fontSize: '12px', color: 'rgba(0,0,0,0.65)', marginTop: '2px' }}>
                    {professionalProjects[1].overview}
                  </p>
                  <ul className="exp-bullets" style={{ marginTop: '6px' }}>
                    {professionalProjects[1].responsibilities.slice(0, 3).map((r, i) => (
                      <li key={i} className="exp-bullet-item">{r}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Personal & Independent Projects */}
          <div>
            <div className="modal-section-title">Personal Projects (GitHub Showcase)</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '14px', marginTop: '10px' }}>
              {personalProjects.slice(0, 4).map((p) => (
                <div key={p.id} style={{ padding: '14px', backgroundColor: '#F9F9FB', borderRadius: '12px', border: '1px solid #ECECEF', fontSize: '12px' }}>
                  <div style={{ fontWeight: 600, display: 'flex', justifyContent: 'space-between' }}>
                    <span>{p.title}</span>
                    <span style={{ color: 'rgba(0,0,0,0.45)' }}>{p.period}</span>
                  </div>
                  <div style={{ fontSize: '11px', color: 'rgba(0,0,0,0.5)', marginTop: '2px', fontFamily: 'monospace' }}>
                    {p.techStack.map(t => t.name).join(' · ')}
                  </div>
                  <p style={{ color: 'rgba(0,0,0,0.65)', marginTop: '6px', lineHeight: 1.4 }}>
                    {p.overview}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div>
              <div className="modal-section-title">Education</div>
              <div style={{ fontSize: '13px', marginTop: '6px' }}>
                <div style={{ fontWeight: 600 }}>{educationData[0].degree}</div>
                <div style={{ color: 'rgba(0,0,0,0.6)' }}>{educationData[0].institution}</div>
                <div style={{ fontWeight: 500, marginTop: '2px' }}>{educationData[0].score} ({educationData[0].period})</div>
              </div>
            </div>

            <div>
              <div className="modal-section-title">Certifications</div>
              <ul className="exp-bullets" style={{ marginTop: '6px' }}>
                {certificationsData.map((c, i) => (
                  <li key={i} className="exp-bullet-item">
                    <span><strong>{c.title}</strong> — {c.issuer}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
