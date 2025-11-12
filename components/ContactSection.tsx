import React, { useEffect, useRef, useState } from 'react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './icons/SocialIcons';

const FloatingLabelInput: React.FC<{ id: string; type: string; placeholder: string }> = ({ id, type, placeholder }) => (
    <div className="relative">
        <input 
            type={type} 
            id={id} 
            placeholder=" " 
            className="block px-4 py-3 w-full text-md text-white bg-transparent rounded-lg border border-gray-700 appearance-none focus:outline-none focus:ring-0 focus:border-brand-blue peer" 
        />
        <label 
            htmlFor={id} 
            className="absolute text-md text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-brand-cyan"
        >
            {placeholder}
        </label>
    </div>
);

const FloatingLabelTextarea: React.FC<{ id: string; placeholder: string }> = ({ id, placeholder }) => (
    <div className="relative">
        <textarea 
            id={id} 
            placeholder=" " 
            rows={5}
            className="block px-4 py-3 w-full text-md text-white bg-transparent rounded-lg border border-gray-700 appearance-none focus:outline-none focus:ring-0 focus:border-brand-blue peer"
        ></textarea>
        <label 
            htmlFor={id} 
            className="absolute text-md text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-brand-cyan"
        >
            {placeholder}
        </label>
    </div>
);


const ContactSection: React.FC = () => {
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
          <h2 className="text-4xl font-bold text-white">Get In Touch</h2>
          <p className="text-lg text-gray-400 mt-2">Have a project in mind or just want to say hi? I'd love to hear from you.</p>
        </div>
        <div className="max-w-2xl mx-auto">
          <form className="space-y-8">
            <FloatingLabelInput id="name" type="text" placeholder="Your Name" />
            <FloatingLabelInput id="email" type="email" placeholder="Your Email" />
            <FloatingLabelTextarea id="message" placeholder="Your Message" />
            
            <div className="text-center">
              <button type="submit" className="bg-brand-violet text-white font-bold py-3 px-8 rounded-full shadow-lg shadow-brand-violet/30 transition-all duration-300 hover:bg-brand-violet/90 hover:shadow-xl hover:shadow-brand-violet/40 transform hover:-translate-y-1">
                Send Message
              </button>
            </div>
          </form>
          <div className="mt-12 flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-brand-cyan transition-colors"><GithubIcon /></a>
            <a href="#" className="text-gray-400 hover:text-brand-cyan transition-colors"><LinkedinIcon /></a>
            <a href="#" className="text-gray-400 hover:text-brand-cyan transition-colors"><TwitterIcon /></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
