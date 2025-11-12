
import React, { useRef, useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');

  const sectionRefs = {
    home: useRef<HTMLDivElement>(null),
    about: useRef<HTMLDivElement>(null),
    projects: useRef<HTMLDivElement>(null),
    skills: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null),
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -70% 0px' }
    );

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="bg-gray-900 text-gray-200 font-sans leading-relaxed">
      <Header activeSection={activeSection} />
      <main>
        <div id="home" ref={sectionRefs.home}>
          <HeroSection />
        </div>
        <div id="about" ref={sectionRefs.about}>
          <AboutSection />
        </div>
        <div id="projects" ref={sectionRefs.projects}>
          <ProjectsSection />
        </div>
        <div id="skills" ref={sectionRefs.skills}>
          <SkillsSection />
        </div>
        <div id="contact" ref={sectionRefs.contact}>
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
