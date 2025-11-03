import { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { Background } from '@/components/Background';
import { Hero } from '@/components/Hero';
import { AboutSection } from '@/components/sections/AboutSection';
import { GallerySection } from '@/components/sections/GallerySection';
import { MagazineSection } from '@/components/sections/MagazineSection';
import { AchievementsSection } from '@/components/sections/AchievementsSection';
import { TeamSection } from '@/components/sections/TeamSection';
import { QuotesSection } from '@/components/sections/QuotesSection';
import { ContactSection } from '@/components/sections/ContactSection';

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
        {activeSection === 'home' && <Hero setActiveSection={setActiveSection} />}
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
