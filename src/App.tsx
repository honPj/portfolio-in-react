import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './Components/Layout/Header';
import Footer from './Components/Layout/Fooder';
import { ThemeProvider } from './Components/Layout/ThemContext';


// Import your section components
import Hero from './Components/Section/Hero';
import About from './Components/Section/About';
import Resume from './Components/Section/Resume';
import Skills from './Components/Section/Skills';
import Projects from './Components/Section/Project';
import Blog from './Components/Section/Blog';
import Contact from './Components/Section/Contact';

const App: React.FC = () => {
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
                <Route path="/" element={createPageWrapper(Hero)()} />
                <Route path="/about" element={createPageWrapper(About)()} />
                <Route path="/resume" element={createPageWrapper(Resume)()} />
                <Route path="/skills" element={createPageWrapper(Skills)()} />
                <Route path="/projects" element={createPageWrapper(Projects)()} />
                <Route path="/blog" element={createPageWrapper(Blog)()} />
                <Route path="/contact" element={createPageWrapper(Contact)()} />
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