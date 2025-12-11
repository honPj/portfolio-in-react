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
      root.style.setProperty('--color-background', '#1a202c');
      root.style.setProperty('--color-surface', '#2d3748');
      root.style.setProperty('--color-primary', '#e2e8f0');
      root.style.setProperty('--color-secondary', '#a0aec0');
      root.style.setProperty('--color-accent', '#63b3ed');
      root.style.setProperty('--color-text', '#e2e8f0');
      root.style.setProperty('--color-text-light', '#a0aec0');
      root.style.setProperty('--color-border', '#4a5568');
    } else {
      root.style.setProperty('--color-background', '#f7fafc');
      root.style.setProperty('--color-surface', '#ffffff');
      root.style.setProperty('--color-primary', '#2d3748');
      root.style.setProperty('--color-secondary', '#4a5568');
      root.style.setProperty('--color-accent', '#3182ce');
      root.style.setProperty('--color-text', '#2d3748');
      root.style.setProperty('--color-text-light', '#718096');
      root.style.setProperty('--color-border', '#e2e8f0');
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