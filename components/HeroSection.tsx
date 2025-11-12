
import React, { useState, useEffect } from 'react';

const HeroSection: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none transition-transform duration-300"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 80%)`,
        }}
      />
      <div className="container mx-auto px-6 text-center z-10">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-tight animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}>
          Hi, I’m Rudra Saxena
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-brand-cyan font-semibold animate-fade-in-up"
           style={{ animationDelay: '0.4s' }}>
          Creative Web Developer
        </p>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-300 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          I blend technology with imagination to craft unique and powerful web experiences.
        </p>
        <div className="mt-10 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <a
            href="#projects"
            className="inline-block bg-brand-violet text-white font-bold py-3 px-8 rounded-full shadow-lg shadow-brand-violet/30 transition-all duration-300 hover:bg-brand-violet/90 hover:shadow-xl hover:shadow-brand-violet/40 transform hover:-translate-y-1"
          >
            View My Work
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
