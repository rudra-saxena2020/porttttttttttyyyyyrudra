
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="py-24 bg-gray-900/50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-2">
            <div className="relative w-full max-w-sm mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-cyan to-brand-violet rounded-full blur-xl animate-subtle-glow"></div>
              <img
                src="https://picsum.photos/seed/rudrasaxena/500/500"
                alt="Rudra Saxena"
                className="relative rounded-full w-full aspect-square object-cover shadow-2xl"
              />
            </div>
          </div>
          <div className="md:col-span-3 text-center md:text-left">
            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
            <p className="text-lg text-gray-300 mb-4">
              I'm a passionate web developer with a keen eye for design and a love for solving complex problems. My journey in tech is driven by a desire to build things that are not only functional and efficient but also beautiful and intuitive to use.
            </p>
            <p className="text-lg text-gray-300">
              From crafting pixel-perfect interfaces to engineering robust backend systems, I'm dedicated to delivering high-quality solutions that exceed expectations. Let's connect and create something amazing together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
