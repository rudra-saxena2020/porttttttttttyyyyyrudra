
import React from 'react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './icons/SocialIcons';

const ContactSection: React.FC = () => {
  return (
    <section className="py-24 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">Get In Touch</h2>
          <p className="text-lg text-gray-400 mt-2">Have a project in mind or just want to say hi? I'd love to hear from you.</p>
        </div>
        <div className="max-w-2xl mx-auto">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <input type="text" id="name" placeholder="Your Name" className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-blue" />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input type="email" id="email" placeholder="Your Email" className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-blue" />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea id="message" placeholder="Your Message" rows={5} className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-blue"></textarea>
            </div>
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
