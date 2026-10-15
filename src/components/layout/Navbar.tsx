import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, X, ArrowUpRight, FileText } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
}

const EASE = [0.16, 1, 0.3, 1] as const;

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Professional Experience', href: '#experience' },
    { label: 'Personal Projects', href: '#projects' },
    { label: 'Technical Skills', href: '#skills' },
    { label: 'Education & Certifications', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <motion.header
        className="navbar-fixed"
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: EASE }}
      >
        {/* Left Side Group */}
        <div className="nav-left nav-interactive">
          {/* Logo & Brand Name */}
          <a href="#hero" className="brand-lockup" aria-label="Harsha Vardhan Home">
            <div className="logo-icon-wrap">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Two black rounded rectangles rotated approximately -35 degrees */}
                <g transform="rotate(-35 12 12)">
                  <rect x="7" y="3" width="3.6" height="18" rx="1.8" fill="#000000" />
                  <rect x="13.4" y="3" width="3.6" height="18" rx="1.8" fill="#000000" />
                </g>
              </svg>
            </div>
            <span className="brand-title">Harsha Vardhan</span>
          </a>

          {/* Menu Button */}
          <button
            className="menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Navigation Menu"
            aria-expanded={menuOpen}
          >
            <div className="menu-icon-circle">
              <Plus size={12} strokeWidth={3} />
            </div>
            <span className="menu-btn-text">Menu</span>
          </button>

          {/* Technology Tags (Desktop 768px+) */}
          <div className="nav-tags-pill">
            <span>Full Stack Development</span>
            <span className="tag-separator">/</span>
            <span>Interactive Experiences</span>
          </div>
        </div>

        {/* Right Side Group */}
        <div className="nav-interactive" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <a
            href="#projects"
            className="nav-right-pill"
            aria-label="Navigate to Developer Portfolio"
          >
            <div className="nav-right-icon-circle">
              {/* 4-dot Grid SVG icon */}
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <circle cx="3.2" cy="3.2" r="1.3" fill="#ffffff" />
                <circle cx="8.8" cy="3.2" r="1.3" fill="#ffffff" />
                <circle cx="3.2" cy="8.8" r="1.3" fill="#ffffff" />
                <circle cx="8.8" cy="8.8" r="1.3" fill="#ffffff" />
              </svg>
            </div>
            <span className="nav-right-label">Developer Portfolio</span>
          </a>
        </div>
      </motion.header>

      {/* Accessible Navigation Drawer / Modal */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="modal-backdrop"
            onClick={() => setMenuOpen(false)}
          >
            <motion.div
              initial={{ y: -20, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -16, opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3, ease: EASE }}
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '24px',
                padding: '32px',
                width: '100%',
                maxWidth: '420px',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.15)',
                color: '#000000',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#000000' }} />
                  <span style={{ fontSize: '13px', fontWeight: 600 }}>Harsha Vardhan Chithirala</span>
                </div>
                <button
                  onClick={() => setMenuOpen(false)}
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
                  aria-label="Close Menu"
                >
                  <X size={16} />
                </button>
              </div>

              <div style={{ fontSize: '11px', fontWeight: 600, color: 'rgba(0,0,0,0.4)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '12px' }}>
                Portfolio Sections
              </div>

              <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {navLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.href}
                    style={{
                      padding: '12px 16px',
                      borderRadius: '12px',
                      backgroundColor: '#F9F9FA',
                      textDecoration: 'none',
                      color: '#000000',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      fontSize: '14px',
                      fontWeight: 500,
                      transition: 'background-color 0.2s ease',
                    }}
                    onClick={() => setMenuOpen(false)}
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight size={15} color="rgba(0,0,0,0.35)" />
                  </a>
                ))}
              </nav>

              <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid #EDEDF0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    onOpenResume();
                  }}
                  style={{
                    background: '#000000',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '9999px',
                    padding: '8px 16px',
                    fontSize: '12px',
                    fontWeight: 500,
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  <FileText size={13} />
                  <span>Curriculum Vitae</span>
                </button>
                <span style={{ fontSize: '11px', color: 'rgba(0,0,0,0.5)' }}>Hyderabad, India</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
