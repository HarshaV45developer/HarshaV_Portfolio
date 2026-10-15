import React, { useState } from 'react';
import { personalProjects } from '../../data/portfolioData';
import { ProjectCaseStudy } from '../../types/portfolio';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';

interface PersonalProjectsSectionProps {
  onSelectCaseStudy: (project: ProjectCaseStudy) => void;
}

export const PersonalProjectsSection: React.FC<PersonalProjectsSectionProps> = ({ onSelectCaseStudy }) => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Backend' | 'Frontend' | 'Tools'>('All');

  const filtered = personalProjects.filter(p => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Backend') return p.projectType.toLowerCase().includes('backend') || p.projectType.toLowerCase().includes('api');
    if (activeFilter === 'Frontend') return p.projectType.toLowerCase().includes('frontend') || p.projectType.toLowerCase().includes('portfolio');
    if (activeFilter === 'Tools') return p.projectType.toLowerCase().includes('developer tools') || p.isFork;
    return true;
  });

  return (
    <section id="projects" className="portfolio-section">
      <div className="container">
        {/* Section Header & Filter Tabs */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '40px' }}>
          <div>
            <div className="section-kicker">03. Category B — GitHub Showcase</div>
            <h2 className="section-title">Personal Projects & Development Work</h2>
            <p className="section-description">
              Independent development projects and publicly available repositories from my verified GitHub profile (<a href="https://github.com/HarshaV45developer" target="_blank" rel="noopener noreferrer" style={{ color: '#000000', fontWeight: 600 }}>@HarshaV45developer</a>).
            </p>
          </div>

          {/* Filter Pills */}
          <div className="category-tab-bar">
            {(['All', 'Backend', 'Frontend', 'Tools'] as const).map((tab) => (
              <button
                key={tab}
                className={`category-tab-btn ${activeFilter === tab ? 'active' : ''}`}
                onClick={() => setActiveFilter(tab)}
              >
                {tab === 'All' ? 'All Repositories' : tab === 'Backend' ? 'Backend APIs' : tab}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="personal-projects-grid">
          {filtered.map((project) => (
            <div key={project.id} className="project-card">
              <div>
                <div className="project-top-meta">
                  <span>{project.projectType}</span>
                  <span>{project.period}</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                  <h3 className="project-title">{project.title}</h3>
                </div>

                {project.isFork && (
                  <div style={{ display: 'inline-block', fontSize: '10px', fontWeight: 600, color: '#92400E', backgroundColor: '#FEF3C7', padding: '2px 8px', borderRadius: '4px', marginBottom: '8px' }}>
                    Open-Source Fork Study
                  </div>
                )}

                <div className="project-stack-text">
                  Stack: {project.techStack.map(t => t.name).join(' · ')}
                </div>

                <p className="project-desc">
                  {project.overview}
                </p>

                <div style={{ fontSize: '11px', fontWeight: 600, color: 'rgba(0,0,0,0.5)', marginBottom: '6px' }}>
                  Key Contributions:
                </div>
                <ul className="project-bullets">
                  {project.responsibilities.slice(0, 3).map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </div>

              {/* Bottom Actions */}
              <div className="project-actions">
                <div className="project-links-group">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon-btn-square"
                      title="View GitHub Repository"
                      aria-label="GitHub Repository"
                    >
                      <Github size={14} />
                    </a>
                  )}
                  {project.liveDemoUrl && (
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon-btn-square"
                      title="Launch Live Deployment"
                      aria-label="Live Demo"
                    >
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>

                <button
                  onClick={() => onSelectCaseStudy(project)}
                  className="btn-text-link"
                >
                  <span>Case Study</span>
                  <ArrowRight size={13} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
