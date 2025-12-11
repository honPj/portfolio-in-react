import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './Components/Layout/Header';
import Footer from './Components/Layout/Fooder';
import { ThemeProvider } from './Components/Layout/ThemContext';

// Import all your existing section components
import Hero from './Components/Section/Hero';
import About from './Components/Section/About';
import Resume from './Components/Section/Resume';
import Skills from './Components/Section/Skills';
import Projects from './Components/Section/Project';
import Blog from './Components/Section/Blog';
import Contact from './Components/Section/Contact';

const App: React.FC = () => {
  // Wrapper component for each page that includes the section
  const createPageWrapper = (Component: React.FC) => () => (
    <div style={{ minHeight: 'calc(100vh - 140px)' }}>
      <Component />
    </div>
  );

  return (
    <Router>
      <ThemeProvider>
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'var(--color-background)',
          color: 'var(--color-text)',
          transition: 'background-color 0.3s ease, color 0.3s ease',
        }}>
          <Header />
          <main style={{ flex: 1, marginTop: '70px' }}>
            <Routes>
              {/* Home page - shows only Hero section */}
              <Route path="/" element={createPageWrapper(Hero)()} />
              
              {/* About page - shows only About section */}
              <Route path="/about" element={createPageWrapper(About)()} />
              
              {/* Resume page - shows only Resume section */}
              <Route path="/resume" element={createPageWrapper(Resume)()} />
              
              {/* Skills page - shows only Skills section */}
              <Route path="/skills" element={createPageWrapper(Skills)()} />
              
              {/* Projects page - shows only Projects section */}
              <Route path="/projects" element={createPageWrapper(Projects)()} />
              
              {/* Blog page - shows only Blog section */}
              <Route path="/blog" element={createPageWrapper(Blog)()} />
              
              {/* Contact page - shows only Contact section */}
              <Route path="/contact" element={createPageWrapper(Contact)()} />
              
              {/* Redirect any unknown routes to home */}
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </Router>
  );
};

export default App;