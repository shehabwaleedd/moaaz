import React, { useState } from 'react';
import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import ScrollUp from './components/scrollup/ScrollUp';
import SiteHome from './pages/siteHome/SiteHome';
import Navbar from './navbar/Navbar';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import { motion } from 'framer-motion';
import Work from './pages/work/Work';

function App() {
  const location = useLocation();
  const [theme, setTheme] = useState('dark');
  const [navOpen, setNavOpen] = React.useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };
  const handleMenuClose = () => {
    setNavOpen(false);
  };




  return (
    <div className="App" id={theme}>
      <Navbar theme={theme} isTablet={isTablet} setIsTablet={setIsTablet} handleMenuClose={handleMenuClose} location={location} toggleTheme={toggleTheme} navOpen={navOpen} setNavOpen={setNavOpen} isMobile={isMobile} setIsMobile={setIsMobile} />
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<SiteHome isTablet={isTablet} isMobile={isMobile}/>} />
          <Route path="/work" element={<Work isTablet={isTablet} isMobile={isMobile}/>} />
          <Route path="/about" element={<About isTablet={isTablet} isMobile={isMobile}/>} />
          <Route path="/contact" element={<Contact isTablet={isTablet} isMobile={isMobile}/>} />
        </Routes>
      </AnimatePresence>
      <ScrollUp />
    </div>
  );
}

export default App;
