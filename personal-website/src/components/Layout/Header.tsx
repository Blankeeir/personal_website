import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';
import personalInfo from '../../data/personal-info.json';

const Header: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background-primary/90 backdrop-blur-md border-b border-accent-200"
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold text-primary-500 cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            {personalInfo.name}
          </motion.div>
          
          <nav className="hidden md:flex space-x-8">
            {['About', 'Education', 'Experience', 'Projects', 'Skills', 'Leadership'].map((item) => (
              <motion.button
                key={item}
                whileHover={{ scale: 1.1, color: '#FF6B35' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-text-secondary hover:text-primary-500 transition-colors duration-300 font-medium"
              >
                {item}
              </motion.button>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <motion.a
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              href={`mailto:${personalInfo.contact.email}`}
              className="p-2 rounded-full bg-primary-100 text-primary-600 hover:bg-primary-200 transition-colors"
            >
              <Mail size={20} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
              href={personalInfo.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-primary-100 text-primary-600 hover:bg-primary-200 transition-colors"
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              href={personalInfo.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-primary-100 text-primary-600 hover:bg-primary-200 transition-colors"
            >
              <Github size={20} />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
