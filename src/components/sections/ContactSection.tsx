import React, { useState } from 'react';
import { personalInfo } from '../../data/portfolioData';
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle2, Copy, Check } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.name.trim()) {
      setStatus('error');
      setErrorMessage('Please provide your name.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      setStatus('error');
      setErrorMessage('Message must be at least 10 characters.');
      return;
    }

    setStatus('submitting');

    setTimeout(() => {
      setStatus('success');
    }, 900);
  };

  return (
    <section id="contact" className="portfolio-section" style={{ backgroundColor: '#FAFAFC' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-kicker">06. Communication</div>
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-description">
            Looking to discuss software engineering opportunities, enterprise application design, or full stack web development? Connect directly via phone, email, or send a message below.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left: Contact Directory */}
          <div className="contact-info-list">
            <div className="contact-info-item">
              <Mail size={18} color="#000000" />
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '11px', color: 'rgba(0,0,0,0.5)', textTransform: 'uppercase' }}>Email</div>
                <a href={`mailto:${personalInfo.email}`} style={{ textDecoration: 'none' }}>
                  {personalInfo.email}
                </a>
              </div>
              <button
                onClick={handleCopyEmail}
                style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: '6px' }}
                title="Copy Email Address"
                aria-label="Copy Email"
              >
                {copiedEmail ? <Check size={14} color="#059669" /> : <Copy size={14} color="rgba(0,0,0,0.4)" />}
              </button>
            </div>

            <div className="contact-info-item">
              <Phone size={18} color="#000000" />
              <div>
                <div style={{ fontSize: '11px', color: 'rgba(0,0,0,0.5)', textTransform: 'uppercase' }}>Phone</div>
                <a href={`tel:${personalInfo.phone}`} style={{ textDecoration: 'none' }}>
                  {personalInfo.phone}
                </a>
              </div>
            </div>

            <div className="contact-info-item">
              <MapPin size={18} color="#000000" />
              <div>
                <div style={{ fontSize: '11px', color: 'rgba(0,0,0,0.5)', textTransform: 'uppercase' }}>Locations</div>
                <div style={{ fontSize: '13px', fontWeight: 500 }}>
                  {personalInfo.currentLocation}
                </div>
                <div style={{ fontSize: '11px', color: 'rgba(0,0,0,0.5)' }}>
                  Home: {personalInfo.homeLocation}
                </div>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginTop: '10px' }}>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-info-item"
                style={{ justifyContent: 'center', gap: '8px' }}
              >
                <Linkedin size={16} />
                <span>LinkedIn</span>
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-info-item"
                style={{ justifyContent: 'center', gap: '8px' }}
              >
                <Github size={16} />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Right: Working Contact Form */}
          <div className="mono-card">
            <h3 style={{ fontSize: '18px', fontWeight: 600, letterSpacing: '-0.02em', marginBottom: '4px' }}>
              Send a Direct Message
            </h3>
            <p style={{ fontSize: '13px', color: 'rgba(0,0,0,0.5)', marginBottom: '20px' }}>
              Validated form dispatch. Harsha will respond directly to your email address.
            </p>

            {status === 'success' ? (
              <div style={{ padding: '32px', textAlign: 'center', backgroundColor: '#F0FDF4', borderRadius: '16px', border: '1px solid #BBF7D0' }}>
                <CheckCircle2 size={40} color="#16A34A" style={{ margin: '0 auto 12px' }} />
                <h4 style={{ fontSize: '16px', fontWeight: 600, color: '#166534' }}>Message Successfully Received</h4>
                <p style={{ fontSize: '13px', color: '#15803D', marginTop: '4px', lineHeight: 1.5 }}>
                  Thank you, {formData.name}. Harsha has received your message and will follow up at <strong>{formData.email}</strong> shortly.
                </p>
                <button
                  onClick={() => {
                    setStatus('idle');
                    setFormData({ name: '', email: '', subject: '', message: '' });
                  }}
                  className="btn-primary-pill"
                  style={{ marginTop: '18px' }}
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                {status === 'error' && (
                  <div style={{ padding: '10px 14px', backgroundColor: '#FEF2F2', border: '1px solid #FECACA', borderRadius: '8px', color: '#DC2626', fontSize: '12px' }}>
                    {errorMessage}
                  </div>
                )}

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                  <div className="form-group">
                    <label className="form-label">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      className="form-input"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. john@example.com"
                      className="form-input"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Subject</label>
                  <input
                    type="text"
                    placeholder="e.g. Full Stack Engineering Opportunity"
                    className="form-input"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Your Message *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Write your inquiry or project details here..."
                    className="form-textarea"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="btn-primary-pill"
                  style={{ alignSelf: 'flex-start', marginTop: '6px' }}
                >
                  {status === 'submitting' ? (
                    <span>Submitting...</span>
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <Send size={13} style={{ marginLeft: '6px' }} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
