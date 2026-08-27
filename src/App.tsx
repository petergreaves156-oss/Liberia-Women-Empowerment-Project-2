import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import KeyStats from './components/KeyStats';
import AboutSection from './components/AboutSection';
import ComponentsShowcase from './components/ComponentsShowcase';
import CountyExplorer from './components/CountyExplorer';
import GrantCalculator from './components/GrantCalculator';
import SuccessStories from './components/SuccessStories';
import NewsAndResources from './components/NewsAndResources';
import GrievanceRedressModal from './components/GrievanceRedressModal';
import Footer from './components/Footer';

export default function App() {
  const [isGRMOpen, setIsGRMOpen] = useState(false);

  const handleOpenGRM = () => {
    setIsGRMOpen(true);
  };

  const handleCloseGRM = () => {
    setIsGRMOpen(false);
  };

  const handleExploreComponents = () => {
    const el = document.getElementById('components');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenGrantCalculator = () => {
    const el = document.getElementById('grants');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#faf8f5] text-stone-900 selection:bg-emerald-800 selection:text-white">
      {/* Official Government & Partner Header */}
      <Header
        onOpenGRM={handleOpenGRM}
        onOpenGrantCalculator={handleOpenGrantCalculator}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          onExploreComponents={handleExploreComponents}
          onOpenGrantCalculator={handleOpenGrantCalculator}
        />

        {/* Floating KPI Impact Bar */}
        <KeyStats />

        {/* Project Background, Mission & Ministerial Oversight */}
        <AboutSection />

        {/* The 5 Core Pillars & Activities Breakdown */}
        <ComponentsShowcase />

        {/* 6 Target Counties Interactive Explorer */}
        <CountyExplorer />

        {/* Interactive Grant Eligibility & VSLA Readiness Calculator */}
        <GrantCalculator />

        {/* Voices of Change & Community Beneficiary Stories */}
        <SuccessStories />

        {/* News, Field Bulletins & Project Appraisal Documents */}
        <NewsAndResources />
      </main>

      {/* Official Ministerial Complex Footer */}
      <Footer onOpenGRM={handleOpenGRM} />

      {/* Grievance Redress Mechanism (GRM) Modal */}
      <GrievanceRedressModal
        isOpen={isGRMOpen}
        onClose={handleCloseGRM}
      />
    </div>
  );
}
