import { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import AnimatedBackground from '../components/AnimatedBackground';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import WorkSection from '../components/sections/WorkSection';
import TradingSection from '../components/sections/TradingSection';
import ContactSection from '../components/sections/ContactSection';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'work', 'trading', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
      <AnimatedBackground />
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main>
        <HeroSection />
        <AboutSection />
        <WorkSection />
        <TradingSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
