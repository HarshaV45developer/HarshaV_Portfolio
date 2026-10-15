import React, { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { PersonalProjectsSection } from './components/sections/PersonalProjectsSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { EducationAndCertificationsSection } from './components/sections/EducationAndCertificationsSection';
import { ContactSection } from './components/sections/ContactSection';
import { CaseStudyModal } from './components/ui/CaseStudyModal';
import { ResumeModal } from './components/ui/ResumeModal';
import { ProjectCaseStudy } from './types/portfolio';

export default function App() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<ProjectCaseStudy | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);

  return (
    <div className="portfolio-app-root">
      {/* 1. Fixed Top Navigation Bar */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* 2. Main Full-Viewport Hero Landing Page */}
      <HeroSection />

      {/* 3. Extended Portfolio Sections */}
      <main>
        {/* Section 1: About Me */}
        <AboutSection />

        {/* Section 2: Professional Experience (Pirnav Software Technology) */}
        <ExperienceSection onSelectCaseStudy={(p) => setSelectedCaseStudy(p)} />

        {/* Section 3: Personal Projects (GitHub Showcase) */}
        <PersonalProjectsSection onSelectCaseStudy={(p) => setSelectedCaseStudy(p)} />

        {/* Section 4: Technical Skills */}
        <SkillsSection />

        {/* Section 5 & 6: Education & Certifications */}
        <EducationAndCertificationsSection />

        {/* Section 7: Contact Channels & Working Form */}
        <ContactSection />
      </main>

      {/* 4. Minimal Site Footer */}
      <Footer />

      {/* 5. Detailed Project Case Study Modal */}
      <CaseStudyModal
        project={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
      />

      {/* 6. Printable / Viewable Curriculum Vitae Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
