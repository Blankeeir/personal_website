import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, MapPin, GraduationCap } from 'lucide-react';
import personalInfo from '../../data/personal-info.json';

const HeroSection: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = personalInfo.title;

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background-primary via-background-secondary to-background-tertiary">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary-200/20"
            style={{
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <motion.h1
            className="text-6xl md:text-8xl font-bold text-text-primary mb-4"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {personalInfo.name}
          </motion.h1>
          
          <motion.div
            className="text-2xl md:text-3xl text-primary-500 font-semibold mb-6 h-12"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {displayText}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
              className="ml-1"
            >
              |
            </motion.span>
          </motion.div>

          <motion.p
            className="text-xl text-text-secondary mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            {personalInfo.subtitle}
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center items-center gap-6 mb-12"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
          >
            <div className="flex items-center text-text-secondary">
              <MapPin className="mr-2 text-primary-500" size={20} />
              <span>{personalInfo.location}</span>
            </div>
            <div className="flex items-center text-text-secondary">
              <GraduationCap className="mr-2 text-primary-500" size={20} />
              <span>GPA: {personalInfo.gpa}</span>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
          >
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(255, 107, 53, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              href={`mailto:${personalInfo.contact.email}`}
              className="px-8 py-4 bg-primary-500 text-white rounded-full font-semibold shadow-lg hover:bg-primary-600 transition-colors"
            >
              Get In Touch
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(139, 69, 19, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              href={personalInfo.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-transparent border-2 border-accent-500 text-accent-500 rounded-full font-semibold hover:bg-accent-500 hover:text-white transition-all"
            >
              View Projects
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToAbout}
            className="p-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-primary-500 hover:bg-white/30 transition-all"
          >
            <ChevronDown size={24} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
