import { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { Background } from '@/components/Background';
import { Hero } from '@/components/Hero';

export default function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'magazine', label: 'Magazine' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'team', label: 'Team' },
    { id: 'quotes', label: 'Quotes' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      <Background />
      
      <Navigation
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        navItems={navItems}
      />

      <main className="relative z-10 pt-20">
        {activeSection === 'home' && <Hero />}
        {activeSection === 'about' && <AboutSection />}
        {activeSection === 'gallery' && <GallerySection />}
        {activeSection === 'magazine' && <MagazineSection />}
        {activeSection === 'achievements' && <AchievementsSection />}
        {activeSection === 'team' && <TeamSection />}
        {activeSection === 'quotes' && <QuotesSection />}
        {activeSection === 'contact' && <ContactSection />}
      </main>
    </div>
  );
}

function AboutSection() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-['Pacifico'] text-white mb-8">About Us</h2>
        <p className="text-xl text-blue-100 font-['Poppins']">
          We are Grade 9C, a class of 27 amazing students at Emirates National School.
          Together, we're building friendships, achieving excellence, and creating memories that will last a lifetime.
        </p>
      </div>
    </div>
  );
}

function GallerySection() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-['Pacifico'] text-white mb-8">Gallery</h2>
        <p className="text-xl text-blue-100 font-['Poppins']">Coming soon...</p>
      </div>
    </div>
  );
}

function MagazineSection() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-['Pacifico'] text-white mb-8">Magazine</h2>
        <p className="text-xl text-blue-100 font-['Poppins']">Coming soon...</p>
      </div>
    </div>
  );
}

function AchievementsSection() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-['Pacifico'] text-white mb-8">Achievements</h2>
        <p className="text-xl text-blue-100 font-['Poppins']">Coming soon...</p>
      </div>
    </div>
  );
}

function TeamSection() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-['Pacifico'] text-white mb-8">Our Team</h2>
        <p className="text-xl text-blue-100 font-['Poppins']">Coming soon...</p>
      </div>
    </div>
  );
}

function QuotesSection() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-['Pacifico'] text-white mb-8">Quotes</h2>
        <p className="text-xl text-blue-100 font-['Poppins']">Coming soon...</p>
      </div>
    </div>
  );
}

function ContactSection() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-['Pacifico'] text-white mb-8">Contact Us</h2>
        <p className="text-xl text-blue-100 font-['Poppins']">Coming soon...</p>
      </div>
    </div>
  );
}
