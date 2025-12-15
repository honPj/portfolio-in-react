import React, { useState, useEffect } from 'react';
import { FaArrowUp, FaCopyright, FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Responsive breakpoints
  const isMobile = windowWidth <= 768;
  const isTablet = windowWidth > 768 && windowWidth <= 1024;

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Responsive Styles
  const containerStyles: React.CSSProperties = {
    backgroundColor: 'var(--color-surface)',
    borderTop: '1px solid var(--color-border)',
    padding: isMobile ? '1.5rem 0 1rem' : '2rem 0 1.5rem',
    position: 'relative' as const,
  };

  const contentStyles: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: isMobile ? '0 1rem' : isTablet ? '0 1.25rem' : '0 1.5rem',
  };

  // Responsive grid layout
  const topSectionStyles: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : isTablet ? '1fr 1fr' : '1fr 1fr',
    gap: isMobile ? '2rem' : isTablet ? '3rem' : '4rem',
    marginBottom: isMobile ? '1.5rem' : '2rem',
  };

  const leftColumnStyles: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: isMobile ? '1rem' : '1.25rem',
  };

  // Responsive right column grid
  const rightColumnStyles: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : isTablet ? '1fr 1fr' : '1fr 1fr',
    gap: isMobile ? '1.5rem' : '2rem',
  };

  const titleStyles: React.CSSProperties = {
    fontSize: isMobile ? '1.2rem' : isTablet ? '1.25rem' : '1.3rem',
    color: 'var(--color-primary)',
    fontWeight: '700',
    marginBottom: isMobile ? '0.5rem' : '0.75rem',
    letterSpacing: '-0.5px',
  };

  const textStyles: React.CSSProperties = {
    color: 'var(--color-text-light)',
    fontSize: isMobile ? '0.95rem' : '1rem',
    lineHeight: 1.6,
    maxWidth: '100%',
  };

  const contactItemStyles: React.CSSProperties = {
    display: 'flex',
    alignItems: 'flex-start',
    gap: isMobile ? '0.5rem' : '0.75rem',
    marginBottom: isMobile ? '0.5rem' : '0.75rem',
    fontSize: isMobile ? '0.9rem' : '1rem',
    color: 'var(--color-text-light)',
    transition: 'color 0.2s ease',
    wordBreak: 'break-word' as const,
  };

  const contactIconStyles: React.CSSProperties = {
    color: 'var(--color-accent)',
    minWidth: isMobile ? '18px' : '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '2px',
  };

  const socialContainerStyles: React.CSSProperties = {
    display: 'flex',
    gap: isMobile ? '0.75rem' : '1rem',
    marginTop: '0.5rem',
  };

  const socialLinkStyles: React.CSSProperties = {
    width: isMobile ? '38px' : '42px',
    height: isMobile ? '38px' : '42px',
    backgroundColor: 'var(--color-background)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'var(--color-text)',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    border: '1px solid var(--color-border)',
    fontSize: isMobile ? '1rem' : '1.1rem',
    flexShrink: 0,
  };

  const dividerStyles: React.CSSProperties = {
    height: '1px',
    backgroundColor: 'var(--color-border)',
    margin: isMobile ? '1.5rem 0' : '2rem 0',
  };

  const bottomSectionStyles: React.CSSProperties = {
    display: 'flex',
    justifyContent: isMobile ? 'center' : 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap' as const,
    gap: isMobile ? '1rem' : '1.5rem',
    flexDirection: isMobile ? 'column' : 'row',
  };

  const copyrightStyles: React.CSSProperties = {
    color: 'var(--color-text-light)',
    fontSize: isMobile ? '0.85rem' : '1rem',
    display: 'flex',
    alignItems: 'center',
    gap: isMobile ? '0.5rem' : '0.75rem',
    flexWrap: 'wrap' as const,
    fontWeight: 500,
    textAlign: isMobile ? 'center' : 'left',
  };

  const backToTopStyles: React.CSSProperties = {
    backgroundColor: 'var(--color-accent)',
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    width: isMobile ? '44px' : '48px',
    height: isMobile ? '44px' : '48px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s ease',
    fontSize: isMobile ? '1rem' : '1.1rem',
    flexShrink: 0,
  };

  const availabilityItemStyles: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: isMobile ? '0.375rem' : '0.5rem',
    marginBottom: isMobile ? '0.375rem' : '0.5rem',
    fontSize: isMobile ? '0.85rem' : '0.95rem',
    color: 'var(--color-text)',
  };

  // Hover effect functions
  const handleSocialHover = (e: React.MouseEvent<HTMLAnchorElement>, color: string) => {
    e.currentTarget.style.backgroundColor = color;
    e.currentTarget.style.color = 'white';
    e.currentTarget.style.transform = 'translateY(-3px)';
    e.currentTarget.style.borderColor = color;
  };

  const handleSocialLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.backgroundColor = 'var(--color-background)';
    e.currentTarget.style.color = 'var(--color-text)';
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.borderColor = 'var(--color-border)';
  };

  const handleContactHover = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.color = 'var(--color-accent)';
  };

  const handleContactLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.color = 'var(--color-text-light)';
  };

  const handleBackToTopHover = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.transform = 'translateY(-3px)';
    e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.15)';
    e.currentTarget.style.backgroundColor = 'var(--color-primary)';
  };

  const handleBackToTopLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.boxShadow = 'none';
    e.currentTarget.style.backgroundColor = 'var(--color-accent)';
  };

  return (
    <footer style={containerStyles}>
      <div style={contentStyles}>
        <div style={topSectionStyles}>
          {/* Left Column - About & Social */}
          <div style={leftColumnStyles}>
            <h3 style={titleStyles}>Peter Muturi Muigai</h3>
            <p style={textStyles}>
              Full Stack Developer & IT Specialist passionate about building innovative web solutions, 
              AI integration, and delivering exceptional user experiences.
            </p>
            <div style={socialContainerStyles}>
              <a 
                href="https://github.com/honPj" 
                target="_blank" 
                rel="noopener noreferrer"
                style={socialLinkStyles}
                aria-label="GitHub"
                onMouseEnter={(e) => handleSocialHover(e, 'var(--color-accent)')}
                onMouseLeave={handleSocialLeave}
              >
                <FaGithub />
              </a>
              <a 
                href="https://www.linkedin.com/in/peter-muturi-303089306" 
                target="_blank"
                rel="noopener noreferrer"
                style={socialLinkStyles}
                aria-label="LinkedIn"
                onMouseEnter={(e) => handleSocialHover(e, '#0077b5')}
                onMouseLeave={handleSocialLeave}
              >
                <FaLinkedin />
              </a>
              <a 
                href="mailto:muigaipeter61@gmail.com" 
                style={socialLinkStyles}
                aria-label="Email"
                onMouseEnter={(e) => handleSocialHover(e, '#ea4335')}
                onMouseLeave={handleSocialLeave}
              >
                <FaEnvelope />
              </a>
            </div>
          </div>

          {/* Right Column - Split into 2 columns */}
          <div style={rightColumnStyles}>
            {/* Contact Section */}
            <div>
              <h4 style={titleStyles}>Get In Touch</h4>
              <div>
                <a 
                  href="mailto:muigaipeter61@gmail.com" 
                  style={{ textDecoration: 'none' }}
                >
                  <div 
                    style={contactItemStyles}
                    onMouseEnter={handleContactHover}
                    onMouseLeave={handleContactLeave}
                  >
                    <div style={contactIconStyles}>
                      <FaEnvelope size={isMobile ? 14 : 16} />
                    </div>
                    <span>muigaipeter61@gmail.com</span>
                  </div>
                </a>
                
                <a 
                  href="tel:+254703551225" 
                  style={{ textDecoration: 'none' }}
                >
                  <div 
                    style={contactItemStyles}
                    onMouseEnter={handleContactHover}
                    onMouseLeave={handleContactLeave}
                  >
                    <div style={contactIconStyles}>
                      <FaPhone size={isMobile ? 14 : 16} />
                    </div>
                    <span>+254 703 551 225</span>
                  </div>
                </a>
                
                <div style={contactItemStyles}>
                  <div style={contactIconStyles}>
                    <FaMapMarkerAlt size={isMobile ? 14 : 16} />
                  </div>
                  <span>Embu, Kenya</span>
                </div>
              </div>
            </div>

            {/* Availability Section */}
            <div>
              <h4 style={titleStyles}>Availability</h4>
              <div style={{ marginTop: '0.5rem' }}>
                <div style={availabilityItemStyles}>
                  <FaCheckCircle size={isMobile ? 14 : 16} style={{ color: 'var(--color-accent)' }} />
                  <span>Remote Projects</span>
                </div>
                <div style={availabilityItemStyles}>
                  <FaCheckCircle size={isMobile ? 14 : 16} style={{ color: 'var(--color-accent)' }} />
                  <span>On-site Work</span>
                </div>
                <div style={availabilityItemStyles}>
                  <FaCheckCircle size={isMobile ? 14 : 16} style={{ color: 'var(--color-accent)' }} />
                  <span>Freelance</span>
                </div>
                <div style={availabilityItemStyles}>
                  <FaCheckCircle size={isMobile ? 14 : 16} style={{ color: 'var(--color-accent)' }} />
                  <span>Full-time</span>
                </div>
                <div style={availabilityItemStyles}>
                  <FaCheckCircle size={isMobile ? 14 : 16} style={{ color: 'var(--color-accent)' }} />
                  <span>Contract</span>
                </div>
                <div style={availabilityItemStyles}>
                  <FaCheckCircle size={isMobile ? 14 : 16} style={{ color: 'var(--color-accent)' }} />
                  <span>Open to Collaborate</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={dividerStyles}></div>

        <div style={bottomSectionStyles}>
          <div style={copyrightStyles}>
            <FaCopyright size={isMobile ? 14 : 16} />
            <span>{currentYear} Peter Muturi Muigai. All rights reserved.</span>
          </div>

          <button 
            onClick={scrollToTop} 
            style={backToTopStyles} 
            aria-label="Back to top"
            onMouseEnter={handleBackToTopHover}
            onMouseLeave={handleBackToTopLeave}
          >
            <FaArrowUp />
          </button>
        </div>
      </div>

      {/* CSS for additional responsive tweaks */}
      <style>{`
        /* Touch device optimizations */
        @media (hover: none) and (pointer: coarse) {
          a, button {
            min-height: 44px;
          }
          
          .social-link {
            min-width: 44px;
            min-height: 44px;
          }
          
          .back-to-top {
            min-width: 44px;
            min-height: 44px;
          }
        }
        
        /* High contrast mode support */
        @media (prefers-contrast: high) {
          footer {
            border-top: 2px solid var(--color-text);
          }
          
          .footer-divider {
            background-color: var(--color-text);
            height: 2px;
          }
        }
        
        /* Reduced motion preferences */
        @media (prefers-reduced-motion: reduce) {
          * {
            transition-duration: 0.01ms !important;
          }
          
          button, a {
            transition: none !important;
          }
        }
        
        /* Small mobile devices */
        @media (max-width: 480px) {
          .contact-item span {
            font-size: 0.85rem;
          }
          
          .availability-item span {
            font-size: 0.8rem;
          }
          
          .copyright-text {
            font-size: 0.8rem;
          }
        }
        
        /* Landscape orientation */
        @media (max-height: 600px) and (orientation: landscape) {
          .footer-container {
            padding-top: 1rem !important;
            padding-bottom: 1rem !important;
          }
          
          .top-section {
            gap: 1.5rem !important;
            margin-bottom: 1rem !important;
          }
        }
        
        /* Print styles */
        @media print {
          .footer-container {
            border-top: 1px solid #000;
            background-color: #fff !important;
          }
          
          .back-to-top {
            display: none;
          }
          
          .social-container {
            display: none;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;