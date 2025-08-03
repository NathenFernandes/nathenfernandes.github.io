import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="animated-bg">
        <div className="bg-dot"></div>
        <div className="bg-dot"></div>
        <div className="bg-dot"></div>
        <div className="bg-dot"></div>
        <div className="bg-dot"></div>
        <div className="bg-dot"></div>
        <div className="bg-dot"></div>
        <div className="bg-dot"></div>
      </div>
      <Header />
      <Hero />
      <About />
      <Experience />
      <Contact />
    </div>
  );
}

export default App; 