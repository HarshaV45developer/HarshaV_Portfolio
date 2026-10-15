import React, { useState } from 'react';
import { professionalExperience, professionalProjects } from '../../data/portfolioData';
import { ProjectCaseStudy } from '../../types/portfolio';
import { ArrowRight, ExternalLink } from 'lucide-react';

interface ExperienceSectionProps {
  onSelectCaseStudy: (project: ProjectCaseStudy) => void;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ onSelectCaseStudy }) => {
  const [activeProjectTab, setActiveProjectTab] = useState<'hrms' | 'cms'>('hrms');
  const [hrmsRole, setHrmsRole] = useState<'admin' | 'user'>('admin');
  const [cmsTab, setCmsTab] = useState<'schedule' | 'roster'>('schedule');

  const exp = professionalExperience[0];
  const hrmsProject = professionalProjects[0];
  const cmsProject = professionalProjects[1];

  return (
    <section id="experience" className="portfolio-section" style={{ backgroundColor: '#FAFAFC' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-kicker">02. Career Experience</div>
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-description">
            Current role and core business management software designed at Pirnav Software Technology in Hyderabad.
          </p>
        </div>

        {/* Single Employment Entry Card */}
        <div className="experience-header-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <h3 className="exp-role-title">{exp.role}</h3>
              <div className="exp-company-sub">{exp.company} · {exp.location}</div>
            </div>
            <div className="meta-pill">{exp.period}</div>
          </div>

          <p style={{ fontSize: '14px', lineHeight: 1.6, color: 'rgba(0,0,0,0.7)', marginTop: '16px' }}>
            {exp.summary}
          </p>

          <ul className="exp-bullets">
            {exp.highlights.map((h, i) => (
              <li key={i} className="exp-bullet-item">{h}</li>
            ))}
          </ul>
        </div>

        {/* Category A — Professional Experience Projects */}
        <div style={{ marginTop: '48px' }}>
          <div style={{ marginBottom: '24px' }}>
            <div className="section-kicker">Category A — Enterprise Product Design</div>
            <h3 style={{ fontSize: '24px', fontWeight: 500, letterSpacing: '-0.02em', marginTop: '4px' }}>
              Professional Experience Projects
            </h3>
          </div>

          {/* Project Switcher Tabs */}
          <div className="category-tab-bar">
            <button
              className={`category-tab-btn ${activeProjectTab === 'hrms' ? 'active' : ''}`}
              onClick={() => setActiveProjectTab('hrms')}
            >
              HRMS Portal
            </button>
            <button
              className={`category-tab-btn ${activeProjectTab === 'cms' ? 'active' : ''}`}
              onClick={() => setActiveProjectTab('cms')}
            >
              College Management System (CMS)
            </button>
          </div>

          {/* Active Project Card & Interactive Simulator */}
          {activeProjectTab === 'hrms' ? (
            <div className="enterprise-showcase-grid">
              {/* Left Column: Resume-Style Details */}
              <div className="showcase-left-info mono-card">
                <div>
                  <div className="section-kicker">Business Management Application</div>
                  <h4 style={{ fontSize: '20px', fontWeight: 600, letterSpacing: '-0.02em', marginTop: '4px' }}>
                    {hrmsProject.title}
                  </h4>
                  <div style={{ fontSize: '12px', color: 'rgba(0,0,0,0.5)', marginTop: '4px', marginBottom: '16px' }}>
                    Role: {hrmsProject.role} · {hrmsProject.period}
                  </div>

                  <p style={{ fontSize: '13px', lineHeight: 1.6, color: 'rgba(0,0,0,0.7)', marginBottom: '16px' }}>
                    {hrmsProject.overview}
                  </p>

                  <div style={{ fontSize: '12px', fontWeight: 600, color: '#000000', marginBottom: '8px' }}>
                    Key Responsibilities:
                  </div>
                  <ul className="exp-bullets" style={{ marginTop: '0', marginBottom: '20px' }}>
                    {hrmsProject.responsibilities.slice(0, 5).map((resp, i) => (
                      <li key={i} className="exp-bullet-item">{resp}</li>
                    ))}
                  </ul>

                  <div style={{ fontSize: '11px', color: 'rgba(0,0,0,0.5)', marginBottom: '8px' }}>
                    Technologies Used:
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {hrmsProject.techStack.map((t, i) => (
                      <span key={i} className="meta-pill">{t.name}</span>
                    ))}
                  </div>
                </div>

                <div style={{ paddingTop: '20px', borderTop: '1px solid #ECECEF' }}>
                  <button
                    onClick={() => onSelectCaseStudy(hrmsProject)}
                    className="btn-primary-pill"
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    <span>View Detailed HRMS Case Study</span>
                    <ArrowRight size={14} style={{ marginLeft: '6px' }} />
                  </button>
                </div>
              </div>

              {/* Right Column: Live Interactive HRMS Simulator */}
              <div className="simulator-box">
                <div className="simulator-bar">
                  <span style={{ fontSize: '12px', fontWeight: 600 }}>Pirnav HRMS UI Architecture</span>
                  <div className="simulator-role-toggle">
                    <button
                      className={`simulator-role-btn ${hrmsRole === 'admin' ? 'active' : ''}`}
                      onClick={() => setHrmsRole('admin')}
                    >
                      Admin Dashboard
                    </button>
                    <button
                      className={`simulator-role-btn ${hrmsRole === 'user' ? 'active' : ''}`}
                      onClick={() => setHrmsRole('user')}
                    >
                      User Dashboard
                    </button>
                  </div>
                </div>

                <div className="simulator-body">
                  {hrmsRole === 'admin' ? (
                    <div>
                      <div className="kpi-row">
                        <div className="kpi-card">
                          <div className="kpi-label">Total Staff</div>
                          <div className="kpi-value">148</div>
                        </div>
                        <div className="kpi-card">
                          <div className="kpi-label">On Duty Today</div>
                          <div className="kpi-value">142</div>
                        </div>
                        <div className="kpi-card">
                          <div className="kpi-label">Pending Leaves</div>
                          <div className="kpi-value">6</div>
                        </div>
                        <div className="kpi-card">
                          <div className="kpi-label">Departments</div>
                          <div className="kpi-value">8</div>
                        </div>
                      </div>

                      <div style={{ fontSize: '12px', fontWeight: 600, marginBottom: '8px' }}>
                        Staff Directory Overview
                      </div>
                      <table className="table-clean">
                        <thead>
                          <tr>
                            <th>EMP ID</th>
                            <th>Name</th>
                            <th>Department</th>
                            <th>Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>EMP-1042</td>
                            <td><strong>Harsha Vardhan Chithirala</strong></td>
                            <td>Engineering</td>
                            <td><span style={{ color: '#059669', fontWeight: 500 }}>Active</span></td>
                          </tr>
                          <tr>
                            <td>EMP-1038</td>
                            <td>Priya Sharma</td>
                            <td>Design System</td>
                            <td><span style={{ color: '#059669', fontWeight: 500 }}>Active</span></td>
                          </tr>
                          <tr>
                            <td>EMP-1015</td>
                            <td>Vikram Mehta</td>
                            <td>Cloud Platform</td>
                            <td><span style={{ color: '#D97706', fontWeight: 500 }}>On Leave</span></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', padding: '14px', backgroundColor: '#F8F8FA', borderRadius: '12px' }}>
                        <div>
                          <div style={{ fontSize: '13px', fontWeight: 600 }}>Harsha Vardhan Chithirala</div>
                          <div style={{ fontSize: '11px', color: 'rgba(0,0,0,0.5)' }}>EMP-1042 · Associate Software Engineer</div>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                          <div style={{ fontSize: '11px', color: 'rgba(0,0,0,0.5)' }}>Leave Balance</div>
                          <div style={{ fontSize: '15px', fontWeight: 600 }}>14 Days</div>
                        </div>
                      </div>

                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                        <div className="kpi-card">
                          <div className="kpi-label">Today's Check-in</div>
                          <div style={{ fontSize: '14px', fontWeight: 600, marginTop: '4px' }}>09:12 AM IST</div>
                          <div style={{ fontSize: '11px', color: '#059669', marginTop: '4px' }}>On-Premises Hyderabad</div>
                        </div>
                        <div className="kpi-card">
                          <div className="kpi-label">Monthly Attendance</div>
                          <div style={{ fontSize: '14px', fontWeight: 600, marginTop: '4px' }}>98.5%</div>
                          <div style={{ fontSize: '11px', color: 'rgba(0,0,0,0.5)', marginTop: '4px' }}>Standard Shift Verified</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="enterprise-showcase-grid">
              {/* Left Column: CMS Details */}
              <div className="showcase-left-info mono-card">
                <div>
                  <div className="section-kicker">Education Management Application</div>
                  <h4 style={{ fontSize: '20px', fontWeight: 600, letterSpacing: '-0.02em', marginTop: '4px' }}>
                    {cmsProject.title}
                  </h4>
                  <div style={{ fontSize: '12px', color: 'rgba(0,0,0,0.5)', marginTop: '4px', marginBottom: '16px' }}>
                    Role: {cmsProject.role} · {cmsProject.period}
                  </div>

                  <p style={{ fontSize: '13px', lineHeight: 1.6, color: 'rgba(0,0,0,0.7)', marginBottom: '16px' }}>
                    {cmsProject.overview}
                  </p>

                  <div style={{ fontSize: '12px', fontWeight: 600, color: '#000000', marginBottom: '8px' }}>
                    Key Responsibilities:
                  </div>
                  <ul className="exp-bullets" style={{ marginTop: '0', marginBottom: '20px' }}>
                    {cmsProject.responsibilities.slice(0, 5).map((resp, i) => (
                      <li key={i} className="exp-bullet-item">{resp}</li>
                    ))}
                  </ul>

                  <div style={{ fontSize: '11px', color: 'rgba(0,0,0,0.5)', marginBottom: '8px' }}>
                    Technologies Used:
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {cmsProject.techStack.map((t, i) => (
                      <span key={i} className="meta-pill">{t.name}</span>
                    ))}
                  </div>
                </div>

                <div style={{ paddingTop: '20px', borderTop: '1px solid #ECECEF' }}>
                  <button
                    onClick={() => onSelectCaseStudy(cmsProject)}
                    className="btn-primary-pill"
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    <span>View Detailed CMS Case Study</span>
                    <ArrowRight size={14} style={{ marginLeft: '6px' }} />
                  </button>
                </div>
              </div>

              {/* Right Column: CMS Preview */}
              <div className="simulator-box">
                <div className="simulator-bar">
                  <span style={{ fontSize: '12px', fontWeight: 600 }}>College Management System UI</span>
                  <div className="simulator-role-toggle">
                    <button
                      className={`simulator-role-btn ${cmsTab === 'schedule' ? 'active' : ''}`}
                      onClick={() => setCmsTab('schedule')}
                    >
                      Lecture Timetable
                    </button>
                    <button
                      className={`simulator-role-btn ${cmsTab === 'roster' ? 'active' : ''}`}
                      onClick={() => setCmsTab('roster')}
                    >
                      Student Roster
                    </button>
                  </div>
                </div>

                <div className="simulator-body">
                  {cmsTab === 'schedule' ? (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <div className="kpi-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                          <div style={{ fontSize: '13px', fontWeight: 600 }}>Distributed Cloud Systems</div>
                          <div style={{ fontSize: '11px', color: 'rgba(0,0,0,0.5)' }}>Lab Complex 4 · Dr. K. Raman</div>
                        </div>
                        <div style={{ fontSize: '11px', fontWeight: 500, fontFamily: 'monospace' }}>09:00 - 10:30 AM</div>
                      </div>

                      <div className="kpi-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                          <div style={{ fontSize: '13px', fontWeight: 600 }}>Full Stack Web Architecture</div>
                          <div style={{ fontSize: '11px', color: 'rgba(0,0,0,0.5)' }}>Hall 201 · Prof. S. Sen</div>
                        </div>
                        <div style={{ fontSize: '11px', fontWeight: 500, fontFamily: 'monospace' }}>11:00 - 12:30 PM</div>
                      </div>

                      <div className="kpi-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                          <div style={{ fontSize: '13px', fontWeight: 600 }}>Database Performance Tuning</div>
                          <div style={{ fontSize: '11px', color: 'rgba(0,0,0,0.5)' }}>Seminar Room A · Dr. M. Verma</div>
                        </div>
                        <div style={{ fontSize: '11px', fontWeight: 500, fontFamily: 'monospace' }}>02:00 - 03:30 PM</div>
                      </div>
                    </div>
                  ) : (
                    <table className="table-clean">
                      <thead>
                        <tr>
                          <th>Roll No</th>
                          <th>Student Name</th>
                          <th>Program</th>
                          <th>CGPA</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>2000030101</td>
                          <td>Aarav Patel</td>
                          <td>B.Tech CS & IT</td>
                          <td>8.6</td>
                        </tr>
                        <tr>
                          <td>2000030145</td>
                          <td>Divya Narayanan</td>
                          <td>B.Tech CS & IT</td>
                          <td>9.1</td>
                        </tr>
                        <tr>
                          <td>2000030188</td>
                          <td>Karthik Reddy</td>
                          <td>B.Tech CS & IT</td>
                          <td>8.2</td>
                        </tr>
                      </tbody>
                    </table>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
