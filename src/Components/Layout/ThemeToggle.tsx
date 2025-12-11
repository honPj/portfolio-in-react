import React from 'react';
import { useTheme } from '../../Context/Themecontext';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  const [isHovered, setIsHovered] = React.useState(false);
  const [isActive, setIsActive] = React.useState(false);

  const buttonStyles: React.CSSProperties = {
    backgroundColor: theme === 'light' ? '#f8f9fa' : '#212529',
    color: theme === 'light' ? '#212529' : '#f8f9fa',
    border: `2px solid ${theme === 'light' ? '#dee2e6' : '#495057'}`,
    borderRadius: '50%',
    width: '48px',
    height: '48px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 0.25s ease',
    boxShadow: isHovered 
      ? (theme === 'light' 
          ? '0 6px 20px rgba(0, 0, 0, 0.15)' 
          : '0 6px 20px rgba(0, 0, 0, 0.4)')
      : (theme === 'light' 
          ? '0 4px 12px rgba(0, 0, 0, 0.08)' 
          : '0 4px 12px rgba(0, 0, 0, 0.25)'),
    transform: isActive ? 'scale(0.92)' : (isHovered ? 'scale(1.08)' : 'scale(1)'),
    outline: 'none',
    position: 'relative',
    overflow: 'hidden',
  };

  const iconStyles: React.CSSProperties = {
    transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
    transform: isHovered ? 'rotate(15deg)' : 'rotate(0deg)',
  };

  const innerGlowStyles: React.CSSProperties = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    background: theme === 'light' 
      ? 'radial-gradient(circle, rgba(248,249,250,0.8) 0%, rgba(248,249,250,0) 70%)'
      : 'radial-gradient(circle, rgba(33,37,41,0.8) 0%, rgba(33,37,41,0) 70%)',
    pointerEvents: 'none',
    opacity: isHovered ? 0.8 : 0,
    transition: 'opacity 0.3s ease',
  };

  return (
    <button
      style={buttonStyles}
      onClick={toggleTheme}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseDown={() => setIsActive(true)}
      onMouseUp={() => setIsActive(false)}
      onTouchStart={() => setIsActive(true)}
      onTouchEnd={() => setIsActive(false)}
      aria-label="Toggle theme"
    >
      <div style={innerGlowStyles} />
      {theme === 'light' ? (
        <FaMoon size={20} style={iconStyles} />
      ) : (
        <FaSun size={20} style={iconStyles} />
      )}
    </button>
  );
};

export default ThemeToggle;