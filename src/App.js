// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importing Router components
import Header from './components/Header'; // Import your Header component
import Home from './components/Home'; // Import your Home component
import About from './components/About'; // Import your About component
import Projects from './components/Projects'; // Import your Projects component
import Skills from './components/Skills'; // Import your Skills component
import Contact from './components/Contact'; // Import your Contact component

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
