import React, { useEffect } from 'react';
import { 
  X, ExternalLink, Github, CheckCircle2, 
  Workflow, Layers, Shield, Wrench, Bug, Award
} from 'lucide-react';
import { ProjectCaseStudy } from '../../types/portfolio';

interface CaseStudyModalProps {
  project: ProjectCaseStudy | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div 
        className="modal-content-box"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Sticky Header */}
        <div className="modal-header-sticky">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span className="section-kicker" style={{ margin: 0 }}>
                {project.category === 'professional' ? 'Professional Enterprise Case Study' : 'Independent Project Deep-Dive'}
              </span>
              {project.isFork && (
                <span style={{ fontSize: '10px', fontWeight: 600, color: '#92400E', backgroundColor: '#FEF3C7', padding: '2px 8px', borderRadius: '4px' }}>
                  Open-Source Fork
                </span>
              )}
            </div>
            <h2 style={{ fontSize: '22px', fontWeight: 600, letterSpacing: '-0.02em', marginTop: '4px' }}>
              {project.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            style={{
              background: '#F4F4F6',
              border: 'none',
              borderRadius: '50%',
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
            aria-label="Close modal"
          >
            <X size={16} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body-scroll" style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
          {/* Metadata Strip */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '12px', padding: '16px', backgroundColor: '#F9F9FB', borderRadius: '14px', border: '1px solid #ECECEF', fontSize: '12px' }}>
            <div>
              <div style={{ color: 'rgba(0,0,0,0.5)' }}>Role</div>
              <div style={{ fontWeight: 600, marginTop: '2px' }}>{project.role}</div>
            </div>
            <div>
              <div style={{ color: 'rgba(0,0,0,0.5)' }}>Timeline</div>
              <div style={{ fontWeight: 600, marginTop: '2px' }}>{project.period}</div>
            </div>
            <div>
              <div style={{ color: 'rgba(0,0,0,0.5)' }}>Type</div>
              <div style={{ fontWeight: 600, marginTop: '2px' }}>{project.projectType}</div>
            </div>
            <div>
              <div style={{ color: 'rgba(0,0,0,0.5)' }}>Organization</div>
              <div style={{ fontWeight: 600, marginTop: '2px' }}>{project.organization || 'Independent (GitHub)'}</div>
            </div>
          </div>

          {/* Quick Action Links */}
          {(project.githubUrl || project.liveDemoUrl) && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary-pill"
                  style={{ gap: '6px' }}
                >
                  <Github size={14} />
                  <span>Inspect Source Repository</span>
                </a>
              )}
              {project.liveDemoUrl && (
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary-pill"
                  style={{ gap: '6px' }}
                >
                  <ExternalLink size={14} />
                  <span>Launch Live Deployment</span>
                </a>
              )}
            </div>
          )}

          {/* A. Project Overview & Problem Statement */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <div className="modal-section-title">A. Project Overview</div>
              <p style={{ fontSize: '14px', lineHeight: 1.6, color: 'rgba(0,0,0,0.75)' }}>
                {project.overview}
              </p>
            </div>

            <div style={{ padding: '16px', backgroundColor: '#F8F8FA', borderRadius: '12px', border: '1px solid #ECECEF' }}>
              <div className="modal-section-title" style={{ color: '#000000' }}>B. Problem Statement</div>
              <p style={{ fontSize: '13px', lineHeight: 1.6, color: 'rgba(0,0,0,0.7)' }}>
                {project.problemStatement}
              </p>
            </div>
          </div>

          {/* C. Objectives & D. My Role */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            <div style={{ padding: '20px', backgroundColor: '#F9F9FB', borderRadius: '14px', border: '1px solid #ECECEF' }}>
              <div className="modal-section-title" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Workflow size={14} />
                <span>C. Key Objectives</span>
              </div>
              <ul className="exp-bullets" style={{ marginTop: '10px' }}>
                {project.objectives.map((obj, i) => (
                  <li key={i} className="exp-bullet-item">{obj}</li>
                ))}
              </ul>
            </div>

            <div style={{ padding: '20px', backgroundColor: '#F9F9FB', borderRadius: '14px', border: '1px solid #ECECEF' }}>
              <div className="modal-section-title" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Shield size={14} />
                <span>D. Specific Responsibilities</span>
              </div>
              <ul className="exp-bullets" style={{ marginTop: '10px' }}>
                {project.responsibilities.map((resp, i) => (
                  <li key={i} className="exp-bullet-item">{resp}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* E. Features & Workflows */}
          <div>
            <div className="modal-section-title">E. Features & Workflows</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '14px', marginTop: '10px' }}>
              {project.features.map((feat, i) => (
                <div key={i} style={{ padding: '16px', backgroundColor: '#F9F9FB', borderRadius: '12px', border: '1px solid #ECECEF' }}>
                  <div style={{ fontSize: '14px', fontWeight: 600 }}>{feat.name}</div>
                  <p style={{ fontSize: '12px', lineHeight: 1.5, color: 'rgba(0,0,0,0.65)', marginTop: '4px' }}>
                    {feat.description}
                  </p>
                  {feat.workflow && (
                    <div style={{ fontSize: '11px', color: 'rgba(0,0,0,0.7)', backgroundColor: '#ffffff', padding: '8px 12px', borderRadius: '6px', border: '1px solid #E5E5EA', marginTop: '10px' }}>
                      <strong>Workflow:</strong> {feat.workflow}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* G. Technology Stack Explained */}
          <div>
            <div className="modal-section-title" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Wrench size={14} />
              <span>G. Technology Stack & Technical Roles</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '10px', marginTop: '10px' }}>
              {project.techStack.map((tech, i) => (
                <div key={i} style={{ padding: '12px', backgroundColor: '#F9F9FB', borderRadius: '10px', border: '1px solid #ECECEF' }}>
                  <div style={{ fontSize: '13px', fontWeight: 600 }}>{tech.name}</div>
                  <div style={{ fontSize: '11px', color: 'rgba(0,0,0,0.5)', marginTop: '2px' }}>{tech.role}</div>
                </div>
              ))}
            </div>
          </div>

          {/* H. Architecture & I. Implementation */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div style={{ padding: '16px', backgroundColor: '#F8F8FA', borderRadius: '12px', border: '1px solid #ECECEF' }}>
              <div className="modal-section-title" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Layers size={14} />
                <span>H. System Architecture</span>
              </div>
              <p style={{ fontSize: '12px', fontFamily: 'monospace', color: 'rgba(0,0,0,0.75)', marginTop: '6px', lineHeight: 1.5 }}>
                {project.architecture}
              </p>
            </div>

            <div style={{ padding: '16px', backgroundColor: '#F8F8FA', borderRadius: '12px', border: '1px solid #ECECEF' }}>
              <div className="modal-section-title">I. Implementation Highlights</div>
              <ul className="exp-bullets" style={{ marginTop: '8px' }}>
                {project.implementationDetails.map((detail, i) => (
                  <li key={i} className="exp-bullet-item">{detail}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* J. Challenges & Solutions */}
          <div>
            <div className="modal-section-title" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Bug size={14} />
              <span>J. Challenges & Engineered Solutions</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '10px' }}>
              {project.challengesAndSolutions.map((cs, i) => (
                <div key={i} style={{ padding: '14px', backgroundColor: '#F9F9FB', borderRadius: '12px', border: '1px solid #ECECEF' }}>
                  <div style={{ fontSize: '12px', fontWeight: 600, color: '#DC2626' }}>
                    Challenge: {cs.challenge}
                  </div>
                  <div style={{ fontSize: '12px', color: '#166534', marginTop: '4px' }}>
                    Solution: {cs.solution}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* K. Testing, L. Results, M. Lessons Learned */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px' }}>
            <div style={{ padding: '16px', backgroundColor: '#F9F9FB', borderRadius: '12px', border: '1px solid #ECECEF' }}>
              <div className="modal-section-title">K. Testing Rigor</div>
              <ul className="exp-bullets" style={{ marginTop: '6px' }}>
                {project.testing.map((t, i) => (
                  <li key={i} className="exp-bullet-item">{t}</li>
                ))}
              </ul>
            </div>

            <div style={{ padding: '16px', backgroundColor: '#F9F9FB', borderRadius: '12px', border: '1px solid #ECECEF' }}>
              <div className="modal-section-title" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Award size={13} />
                <span>L. Verified Results</span>
              </div>
              <ul className="exp-bullets" style={{ marginTop: '6px' }}>
                {project.results.map((r, i) => (
                  <li key={i} className="exp-bullet-item">{r}</li>
                ))}
              </ul>
            </div>

            <div style={{ padding: '16px', backgroundColor: '#F9F9FB', borderRadius: '12px', border: '1px solid #ECECEF' }}>
              <div className="modal-section-title">M. Lessons Learned</div>
              <ul className="exp-bullets" style={{ marginTop: '6px' }}>
                {project.lessonsLearned.map((l, i) => (
                  <li key={i} className="exp-bullet-item">{l}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div style={{ padding: '16px 28px', borderTop: '1px solid #ECECEF', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#ffffff' }}>
          <span style={{ fontSize: '11px', color: 'rgba(0,0,0,0.5)' }}>
            Verified candidate submission · Harsha Vardhan Chithirala
          </span>
          <button onClick={onClose} className="btn-secondary-pill" style={{ padding: '8px 18px', fontSize: '12px' }}>
            Close Case Study
          </button>
        </div>
      </div>
    </div>
  );
};
