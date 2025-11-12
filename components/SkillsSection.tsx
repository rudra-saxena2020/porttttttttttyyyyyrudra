import React, { useEffect, useRef, useState } from 'react';
import type { Skill } from '../types';
import { ReactIcon, NodeIcon, FigmaIcon, TSIcon, NextJSIcon, GraphQLIcon, AWSIcon, DockerIcon, TailwindIcon } from './icons/SkillIcons';

const frontendSkills: Skill[] = [
  { name: 'React', icon: <ReactIcon /> },
  { name: 'TypeScript', icon: <TSIcon /> },
  { name: 'Next.js', icon: <NextJSIcon /> },
  { name: 'Tailwind CSS', icon: <TailwindIcon /> },
];

const backendSkills: Skill[] = [
  { name: 'Node.js', icon: <NodeIcon /> },
  { name: 'GraphQL', icon: <GraphQLIcon /> },
  { name: 'AWS', icon: <AWSIcon /> },
  { name: 'Docker', icon: <DockerIcon /> },
];

const designSkills: Skill[] = [
  { name: 'Figma', icon: <FigmaIcon /> },
  { name: 'UI/UX Principles', icon: <div className="text-2xl">🎨</div> },
  { name: 'Prototyping', icon: <div className="text-2xl">📱</div> },
  { name: 'Design Systems', icon: <div className="text-2xl">📚</div> },
];

const SkillCategory: React.FC<{ title: string; skills: Skill[] }> = ({ title, skills }) => (
  <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-6 backdrop-blur-sm">
    <h3 className="text-2xl font-bold text-white mb-6 text-center">{title}</h3>
    <div className="grid grid-cols-2 gap-4">
      {skills.map((skill) => (
        <div key={skill.name} className="group flex items-center space-x-3 bg-gray-700/40 p-3 rounded-lg transition-all duration-300 transform hover:bg-brand-violet/20 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-violet/20">
          <div className="w-8 h-8 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">{skill.icon}</div>
          <span className="text-gray-200 font-medium">{skill.name}</span>
        </div>
      ))}
    </div>
  </div>
);

const SkillsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className={`py-24 bg-gray-900/50 animate-on-scroll ${isVisible ? 'is-visible' : ''}`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">Skills & Expertise</h2>
          <p className="text-lg text-gray-400 mt-2">The tools and technologies I use to bring ideas to life.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <SkillCategory title="Frontend" skills={frontendSkills} />
          <SkillCategory title="Backend" skills={backendSkills} />
          <SkillCategory title="UI/UX Design" skills={designSkills} />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
