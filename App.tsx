import React, { useRef, useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const outlineRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (dotRef.current && outlineRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
        
        outlineRef.current.animate({
          left: `${e.clientX}px`,
          top: `${e.clientY}px`
        }, { duration: 500, fill: "forwards" });
      }
    };
    
    const onMouseOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest('a, button, input')) {
        document.body.classList.add('link-hovered');
      }
    }
    const onMouseOut = (e: MouseEvent) => {
       if ((e.target as HTMLElement).closest('a, button, input')) {
        document.body.classList.remove('link-hovered');
      }
    }
    
    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener("mouseover", onMouseOver);
    document.addEventListener("mouseout", onMouseOut);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseout", onMouseOut);
    }
  }, []);
  
  return (
    <>
      <div ref={dotRef} className="cursor-dot"></div>
      <div ref={outlineRef} className="cursor-outline"></div>
    </>
  );
}

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
    <div className="bg-gray-900 text-gray-200 font-sans leading-relaxed relative overflow-x-hidden">
      <div 
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-900 via-[#0c1222] to-brand-violet/20 animate-gradient-move" 
        style={{backgroundSize: '200% 200%'}}
      />
      <CustomCursor />
      <div className="relative z-10">
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
    </div>
  );
};

export default App;
