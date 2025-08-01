import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Tracks from './components/Tracks';
import SkillSprints from './components/SkillSprints';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Stats from './components/Stats';
import NGO from './components/NGO';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import SparkCoin from './components/SparkCoin';
import ProblemSolution from './components/ProblemSolution';
import JobPortal from './components/JobPortal';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <ProblemSolution />
      <Tracks />
      <SkillSprints />
      <HowItWorks />
      <Dashboard />
      <SparkCoin />
      <Stats />
      <JobPortal />
      <Testimonials />
      <NGO />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;