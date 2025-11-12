import React, { useEffect, useRef, useState } from 'react';
import type { Project } from '../types';

const projects: Project[] = [
  {
    title: 'Project Zenith',
    description: 'A cutting-edge data visualization platform for enterprise clients, built with React and D3.',
    tags: ['React', 'TypeScript', 'D3.js', 'Node.js'],
    imageUrl: 'https://picsum.photos/seed/zenith/600/400',
    link: '#',
  },
  {
    title: 'E-commerce Fusion',
    description: 'A headless e-commerce solution with a focus on performance and user experience.',
    tags: ['Next.js', 'GraphQL', 'Tailwind CSS', 'Stripe'],
    imageUrl: 'https://picsum.photos/seed/fusion/600/400',
    link: '#',
  },
  {
    title: 'Creative Canvas',
    description: 'An interactive web-based design tool for digital artists, powered by WebGL.',
    tags: ['WebGL', 'Three.js', 'Vue.js', 'Firebase'],
    imageUrl: 'https://picsum.photos/seed/canvas/600/400',
    link: '#',
  },
   {
    title: 'Innovate AI',
    description: 'A SaaS platform providing AI-driven analytics for marketing teams.',
    tags: ['SvelteKit', 'Python', 'FastAPI', 'PostgreSQL'],
    imageUrl: 'https://picsum.photos/seed/innovate/600/400',
    link: '#',
  },
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <a href={project.link} target="_blank" rel="noopener noreferrer" className="group block overflow-hidden rounded-lg relative">
       <div className="absolute -inset-px bg-gradient-to-r from-brand-cyan to-brand-violet rounded-lg opacity-0 group-hover:opacity-70 transition-opacity duration-300 blur-md"></div>
      <div className="relative bg-gray-800 border border-gray-700/50 rounded-lg p-1 transition-all duration-300 group-hover:scale-[1.03] group-hover:bg-gray-800/80 backdrop-blur-sm">
        <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover rounded-md" />
        <div className="p-4 relative">
          <h3 className="text-xl font-bold text-white">{project.title}</h3>
          <p className="mt-2 text-gray-400 text-sm">{project.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="bg-brand-cyan/10 text-brand-cyan text-xs font-semibold px-2.5 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
           <div className="mt-4 text-brand-cyan font-semibold flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            View Project
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </div>
        </div>
      </div>
    </a>
  );
};


const ProjectsSection: React.FC = () => {
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
    <section ref={sectionRef} className={`py-24 bg-gray-900 animate-on-scroll ${isVisible ? 'is-visible' : ''}`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">My Projects</h2>
          <p className="text-lg text-gray-400 mt-2">A selection of my work blending creativity and code.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
