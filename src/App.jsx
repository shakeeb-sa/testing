// src/App.jsx (Final Version)
import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import './styles/global.css';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import BackToTopButton from './components/common/BackToTopButton'; // 1. Import the component

function App() {
  return (
    <ThemeProvider>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Header />
      <main id="main-content">
        <HomePage />
      </main>
      <Footer />
      <BackToTopButton /> {/* 2. Add the component to the layout */}
    </ThemeProvider>
  );
}

export default App;