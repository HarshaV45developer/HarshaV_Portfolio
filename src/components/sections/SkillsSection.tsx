import React from 'react';

export const SkillsSection: React.FC = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['TypeScript', 'JavaScript (ES6+)', 'HTML5 & Semantic Markup', 'CSS3 / Modern CSS', 'SQL Basics']
    },
    {
      title: 'Frontend Development',
      skills: ['React 19', 'Vite', 'Component Architecture', 'State Management', 'React Router']
    },
    {
      title: 'UI, Styling & 3D',
      skills: ['Bootstrap 5', 'Tailwind CSS', 'Responsive Grid Systems', 'Three.js / WebGL', 'Framer Motion']
    },
    {
      title: 'Backend Development',
      skills: ['Node.js', 'Express.js', 'RESTful API Architecture', 'JWT Authentication', 'Validation Middleware']
    },
    {
      title: 'Databases & Modeling',
      skills: ['MongoDB', 'Mongoose ODM', 'Aggregation Pipelines', 'Schema Indexing', 'Data Relational References']
    },
    {
      title: 'Development Tools',
      skills: ['Git & GitHub', 'Postman API Testing', 'VS Code', 'npm / package.json', 'Vercel Deployment']
    },
    {
      title: 'Cloud Technologies',
      skills: ['AWS Certified Cloud Practitioner', 'Azure AZ-900 Fundamentals', 'GCP Foundations', 'Cloud Architecture']
    },
    {
      title: 'Architecture & Design',
      skills: ['Dashboard UI Design', 'Role-Based Access (RBAC)', 'Information Architecture', 'Component Reusability']
    }
  ];

  return (
    <section id="skills" className="portfolio-section" style={{ backgroundColor: '#FAFAFC' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-kicker">04. Engineering Competencies</div>
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-description">
            Core technologies, libraries, and architectural paradigms I demonstrate across enterprise business platforms and independent web projects.
          </p>
        </div>

        {/* Categorized Skills Grid */}
        <div className="skills-category-grid">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="skill-category-card">
              <h3 className="skill-category-title">{cat.title}</h3>
              <div className="skill-pills-wrap">
                {cat.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
