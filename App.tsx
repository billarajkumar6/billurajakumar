import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ParticleBackground from './components/ParticleBackground';
import StatsSection from './components/StatsSection';
import ExperienceTabs from './components/ExperienceTabs';
import Education from './components/Education';
import CertificatePreview from './components/CertificatePreview';
import ContactFooter from './components/ContactFooter';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-white selection:text-black overflow-x-hidden">
      {/* Background Animation */}
      <ParticleBackground />
      
      {/* Navigation */}
      <Navigation />

      <main>
        {/* Intro */}
        <Hero />
        
        {/* Quick Certificate Verification */}
        <CertificatePreview />

        {/* Professional Experience (Tabs) */}
        <ExperienceTabs />

        {/* Skills & Data Visualization */}
        <StatsSection />

        {/* Education Timeline */}
        <Education />
      </main>

      {/* Footer */}
      <ContactFooter />
    </div>
  );
};

export default App;