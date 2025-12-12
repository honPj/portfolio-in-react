// import React, { useEffect } from 'react';
// import { useTheme } from './ThemContext';

// const ThemeWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const { theme } = useTheme();

//   useEffect(() => {
//     // Apply theme class to document body
//     document.body.className = theme === 'dark' ? 'dark-theme' : 'light-theme';
    
//     // Or add data-theme attribute
//     document.documentElement.setAttribute('data-theme', theme);
    
//     // Add theme-specific global styles
//     const style = document.createElement('style');
//     style.id = 'theme-styles';
    
//     if (theme === 'dark') {
//       style.textContent = `
//         :root {
//           --hero-bg-gradient: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
//           --hero-text-color: #f8fafc;
//           --hero-subtitle-color: #cbd5e1;
//           --hero-description-color: #94a3b8;
//           --primary-btn-gradient: linear-gradient(90deg, #3b82f6, #6366f1);
//           --card-bg: #1e293b;
//           --card-border: rgba(148, 163, 184, 0.1);
//         }
//       `;
//     } else {
//       style.textContent = `
//         :root {
//           --hero-bg-gradient: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
//           --hero-text-color: #1e293b;
//           --hero-subtitle-color: #475569;
//           --hero-description-color: #64748b;
//           --primary-btn-gradient: linear-gradient(90deg, #3182ce, #4c6ef5);
//           --card-bg: #ffffff;
//           --card-border: rgba(203, 213, 225, 0.3);
//         }
//       `;
//     }
    
//     // Remove old styles if they exist
//     const oldStyle = document.getElementById('theme-styles');
//     if (oldStyle) {
//       document.head.removeChild(oldStyle);
//     }
    
//     document.head.appendChild(style);
    
//     return () => {
//       // Cleanup on unmount
//       const styleToRemove = document.getElementById('theme-styles');
//       if (styleToRemove) {
//         document.head.removeChild(styleToRemove);
//       }
//     };
//   }, [theme]);

//   return <>{children}</>;
// };

// export default ThemeWrapper;