import React, { createContext, useContext, useEffect, useState } from 'react';

interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    // Check localStorage first
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme === 'light' || savedTheme === 'dark') {
      return savedTheme;
    }
    // Check system preference
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  });

  useEffect(() => {
    // Update CSS variables based on theme
    const root = document.documentElement;
    
    if (theme === 'dark') {
      // Base theme variables
      root.style.setProperty('--color-background', '#1a202c');
      root.style.setProperty('--color-surface', '#2d3748');
      root.style.setProperty('--color-primary', '#e2e8f0');
      root.style.setProperty('--color-secondary', '#a0aec0');
      root.style.setProperty('--color-accent', '#63b3ed');
      root.style.setProperty('--color-text', '#e2e8f0');
      root.style.setProperty('--color-text-light', '#a0aec0');
      root.style.setProperty('--color-border', '#4a5568');
      
      // RGB values for opacity (for rgba() usage)
      root.style.setProperty('--color-background-rgb', '26, 32, 44');
      root.style.setProperty('--color-surface-rgb', '45, 55, 72');
      root.style.setProperty('--color-accent-rgb', '99, 179, 237');
      root.style.setProperty('--color-border-rgb', '74, 85, 104');
      
      // Hero component specific variables (from your hardcoded colors)
      root.style.setProperty('--hero-bg-gradient', 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)');
      root.style.setProperty('--hero-text-color', '#f8fafc');
      root.style.setProperty('--hero-subtitle-color', '#cbd5e1');
      root.style.setProperty('--hero-description-color', '#94a3b8');
      root.style.setProperty('--hero-badge-gradient', 'linear-gradient(90deg, #3b82f6, #8b5cf6)');
      root.style.setProperty('--hero-title-gradient', 'linear-gradient(90deg, #f8fafc 60%, #cbd5e1 100%)');
      root.style.setProperty('--hero-accent-color', '#60a5fa');
      root.style.setProperty('--hero-stat-color', '#60a5fa');
      root.style.setProperty('--hero-stat-label-color', '#94a3b8');
      
      // Button variables
      root.style.setProperty('--primary-btn-gradient', 'linear-gradient(90deg, #3b82f6, #6366f1)');
      root.style.setProperty('--secondary-btn-bg', 'rgba(99, 102, 241, 0.1)');
      root.style.setProperty('--secondary-btn-color', '#818cf8');
      root.style.setProperty('--secondary-btn-border', '1px solid rgba(99, 102, 241, 0.2)');
      root.style.setProperty('--outline-btn-color', '#cbd5e1');
      root.style.setProperty('--outline-btn-border', '1px solid rgba(203, 213, 225, 0.3)');
      
      // Social link variables
      root.style.setProperty('--social-bg', 'rgba(30, 41, 59, 0.8)');
      root.style.setProperty('--social-color', '#cbd5e1');
      root.style.setProperty('--social-border', '1px solid rgba(148, 163, 184, 0.2)');
      root.style.setProperty('--social-hover-bg', 'rgba(59, 130, 246, 0.2)');
      root.style.setProperty('--social-hover-color', '#60a5fa');
      root.style.setProperty('--social-hover-border', 'rgba(96, 165, 250, 0.4)');
      
      // Card/Project variables
      root.style.setProperty('--card-bg', '#1e293b');
      root.style.setProperty('--card-border', 'rgba(148, 163, 184, 0.1)');
      root.style.setProperty('--tech-tag-bg', 'rgba(30, 41, 59, 0.8)');
      
      // Form variables
      root.style.setProperty('--form-bg', '#2d3748');
      root.style.setProperty('--form-border', '#4a5568');
      root.style.setProperty('--input-bg', '#1a202c');
      
      // Border variables for stats
      root.style.setProperty('--stats-border-top', '1px solid rgba(148, 163, 184, 0.1)');
      root.style.setProperty('--stats-border-bottom', '1px solid rgba(148, 163, 184, 0.1)');
      
    } else {
      // Light theme
      // Base theme variables
      root.style.setProperty('--color-background', '#f7fafc');
      root.style.setProperty('--color-surface', '#ffffff');
      root.style.setProperty('--color-primary', '#2d3748');
      root.style.setProperty('--color-secondary', '#4a5568');
      root.style.setProperty('--color-accent', '#3182ce');
      root.style.setProperty('--color-text', '#2d3748');
      root.style.setProperty('--color-text-light', '#718096');
      root.style.setProperty('--color-border', '#e2e8f0');
      
      // RGB values for opacity
      root.style.setProperty('--color-background-rgb', '247, 250, 252');
      root.style.setProperty('--color-surface-rgb', '255, 255, 255');
      root.style.setProperty('--color-accent-rgb', '49, 130, 206');
      root.style.setProperty('--color-border-rgb', '226, 232, 240');
      
      // Hero component specific variables
      root.style.setProperty('--hero-bg-gradient', 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)');
      root.style.setProperty('--hero-text-color', '#1e293b');
      root.style.setProperty('--hero-subtitle-color', '#475569');
      root.style.setProperty('--hero-description-color', '#64748b');
      root.style.setProperty('--hero-badge-gradient', 'linear-gradient(90deg, #3182ce, #8b5cf6)');
      root.style.setProperty('--hero-title-gradient', 'linear-gradient(90deg, #1e293b 60%, #475569 100%)');
      root.style.setProperty('--hero-accent-color', '#2563eb');
      root.style.setProperty('--hero-stat-color', '#2563eb');
      root.style.setProperty('--hero-stat-label-color', '#64748b');
      
      // Button variables
      root.style.setProperty('--primary-btn-gradient', 'linear-gradient(90deg, #3182ce, #4c6ef5)');
      root.style.setProperty('--secondary-btn-bg', 'rgba(49, 130, 206, 0.1)');
      root.style.setProperty('--secondary-btn-color', '#2563eb');
      root.style.setProperty('--secondary-btn-border', '1px solid rgba(49, 130, 206, 0.2)');
      root.style.setProperty('--outline-btn-color', '#475569');
      root.style.setProperty('--outline-btn-border', '1px solid rgba(71, 85, 105, 0.3)');
      
      // Social link variables
      root.style.setProperty('--social-bg', 'rgba(248, 250, 252, 0.8)');
      root.style.setProperty('--social-color', '#475569');
      root.style.setProperty('--social-border', '1px solid rgba(203, 213, 225, 0.5)');
      root.style.setProperty('--social-hover-bg', 'rgba(49, 130, 206, 0.2)');
      root.style.setProperty('--social-hover-color', '#2563eb');
      root.style.setProperty('--social-hover-border', 'rgba(37, 99, 235, 0.4)');
      
      // Card/Project variables
      root.style.setProperty('--card-bg', '#ffffff');
      root.style.setProperty('--card-border', 'rgba(203, 213, 225, 0.3)');
      root.style.setProperty('--tech-tag-bg', 'rgba(248, 250, 252, 0.8)');
      
      // Form variables
      root.style.setProperty('--form-bg', '#ffffff');
      root.style.setProperty('--form-border', '#e2e8f0');
      root.style.setProperty('--input-bg', '#f8fafc');
      
      // Border variables for stats
      root.style.setProperty('--stats-border-top', '1px solid rgba(203, 213, 225, 0.3)');
      root.style.setProperty('--stats-border-bottom', '1px solid rgba(203, 213, 225, 0.3)');
    }

    // Save theme to localStorage
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};