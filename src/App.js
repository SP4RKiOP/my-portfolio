import React from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Projects />
      <Skills />
      <Education />
    </div>
  );
}

export default App;
