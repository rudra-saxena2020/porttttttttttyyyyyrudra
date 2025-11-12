import React, { useState, useEffect } from 'react';

const AnimatedHeading: React.FC<{ text: string }> = ({ text }) => {
  return (
    <span className="inline-block">
      {text.split('').map((char, index) => (
        <span
          key={`${char}-${index}`}
          className="inline-block opacity-0 animate-fade-in-up"
          style={{ animationDelay: `${0.2 + index * 0.05}s`, willChange: 'transform, opacity' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
};

const TypingSubheading: React.FC<{ text: string; delay: number }> = ({ text, delay }) => {
    const [typedText, setTypedText] = useState('');
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => setIsReady(true), delay);
        return () => clearTimeout(timeout);
    }, [delay]);
    
    useEffect(() => {
        if (!isReady) return;
        
        if (typedText.length < text.length) {
            const timeoutId = setTimeout(() => {
                setTypedText(text.slice(0, typedText.length + 1));
            }, 100);
            return () => clearTimeout(timeoutId);
        }
    }, [typedText, text, isReady]);
    
    return <p className="mt-4 text-xl md:text-2xl text-brand-cyan font-semibold typing-cursor">{typedText}</p>;
};


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
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 80%)`,
        }}
      />
      <div className="container mx-auto px-6 text-center z-10">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-tight">
          Hi, I’m <AnimatedHeading text="Rudra Saxena" />
        </h1>
        
        <TypingSubheading text="Creative Web Developer" delay={1200} />

        <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-300 opacity-0 animate-fade-in-up" style={{ animationDelay: '2.0s', willChange: 'transform, opacity' }}>
          I blend technology with imagination to craft unique and powerful web experiences.
        </p>
        <div className="mt-10 opacity-0 animate-fade-in-up" style={{ animationDelay: '2.2s', willChange: 'transform, opacity' }}>
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
