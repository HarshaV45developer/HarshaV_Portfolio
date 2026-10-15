import React from 'react';
import { motion } from 'motion/react';

const EASE = [0.16, 1, 0.3, 1] as const;

export const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="hero-container">
      {/* ----------------------------------------------------
          1. Full-Screen Background Video Layer
         ---------------------------------------------------- */}
      <div className="video-wrapper-outer">
        <motion.div
          className="video-container"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.8, ease: EASE }}
        >
          <video
            className="bg-video"
            autoPlay
            muted
            loop
            playsInline
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_215831_c6a8989c-d716-4d8d-8745-e972a2eec711.mp4"
          />
        </motion.div>
      </div>

      {/* Spacer pushing content to bottom */}
      <div style={{ flex: 1, pointerEvents: 'none' }} />

      {/* ----------------------------------------------------
          2. Bottom Hero Content & Footer (Pinned over Gradient)
         ---------------------------------------------------- */}
      <motion.div
        className="footer-wrapper"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1, ease: EASE }}
      >
        <div className="footer-content">
          {/* Left Block: Professional Introduction */}
          <div className="footer-left">
            {/* Subtitle Line */}
            <motion.div
              className="subtitle-line"
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8, ease: EASE }}
            >
              <div className="subtitle-dot" />
              <span className="subtitle-text">
                ASSOCIATE SOFTWARE ENGINEER · FULL STACK DEVELOPER
              </span>
            </motion.div>

            {/* Main Heading on Two Lines */}
            <motion.h1
              className="hero-heading"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8, ease: EASE }}
            >
              <span className="heading-line">Building Interfaces.</span>
              <span className="heading-line">Engineering Possibilities.</span>
            </motion.h1>

            {/* Supporting Description */}
            <motion.p
              className="hero-description"
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8, ease: EASE }}
            >
              I design and develop modern web applications, business dashboards, management systems, and responsive user interfaces. Explore my professional experience, technical projects, and development work.
            </motion.p>

            {/* Primary Action Buttons */}
            <motion.div
              className="footer-buttons"
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.8, ease: EASE }}
            >
              <a href="#projects" className="btn-primary-pill">
                Explore Projects
              </a>
              <a href="#experience" className="btn-secondary-pill">
                View Experience
              </a>
            </motion.div>
          </div>

          {/* Right Block: Technology Tags */}
          <div className="footer-right">
            <span className="tech-tag-pill">React & Vite</span>
            <span className="tech-tag-pill">Business Applications</span>
            <span className="tech-tag-pill">3D Experiences</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
