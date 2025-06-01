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
      }, 80);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
        duration: 1.2,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 120,
        duration: 1.2
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-20, 20, -20],
      x: [-10, 10, -10],
      rotate: [0, 5, -5, 0],
      scale: [1, 1.05, 1],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background-primary via-background-secondary to-background-tertiary">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-primary-200/30 to-secondary-200/20"
            style={{
              width: Math.random() * 400 + 150,
              height: Math.random() * 400 + 150,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 150 - 75, 0],
              y: [0, Math.random() * 150 - 75, 0],
              scale: [1, 1.2, 0.8, 1],
              rotate: [0, 180, 360],
              opacity: [0.3, 0.6, 0.2, 0.3]
            }}
            transition={{
              duration: Math.random() * 20 + 15,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
          />
        ))}
        
        {/* Floating particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-2 h-2 bg-primary-400/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -100, -20],
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 8 + 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeOut"
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-8"
        >
          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-8xl font-bold text-text-primary mb-4"
            whileHover={{ 
              scale: 1.02,
              textShadow: "0 0 20px rgba(255, 107, 53, 0.3)"
            }}
          >
            {personalInfo.name.split('').map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.05,
                  type: "spring",
                  damping: 12,
                  stiffness: 200
                }}
                whileHover={{
                  y: -10,
                  color: "#FF6B35",
                  transition: { duration: 0.2 }
                }}
                className="inline-block"
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </motion.h1>
          
          <motion.div
            variants={itemVariants}
            className="text-2xl md:text-3xl text-primary-500 font-semibold mb-6 h-12"
            whileHover={{ scale: 1.05 }}
          >
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: "auto" }}
              transition={{ duration: 2, ease: "easeOut" }}
            >
              {displayText}
            </motion.span>
            <motion.span
              animate={{ 
                opacity: [1, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 1,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: "easeInOut"
              }}
              className="ml-1 text-secondary-500"
            >
              |
            </motion.span>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-xl text-text-secondary mb-8 max-w-3xl mx-auto leading-relaxed"
            whileHover={{ 
              scale: 1.02,
              color: "#3E2723"
            }}
          >
            {personalInfo.subtitle}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center items-center gap-6 mb-12"
          >
            {[
              { icon: MapPin, text: personalInfo.location },
              { icon: GraduationCap, text: `GPA: ${personalInfo.gpa}` }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center text-text-secondary"
                whileHover={{ 
                  scale: 1.1,
                  y: -5,
                  color: "#FF6B35"
                }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <item.icon className="mr-2 text-primary-500" size={20} />
                </motion.div>
                <span>{item.text}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4"
          >
            <motion.a
              whileHover={{ 
                scale: 1.08,
                boxShadow: "0 15px 35px rgba(255, 107, 53, 0.4)",
                y: -5
              }}
              whileTap={{ scale: 0.95 }}
              href={`mailto:${personalInfo.contact.email}`}
              className="px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <motion.span
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                Get In Touch
              </motion.span>
            </motion.a>
            <motion.a
              whileHover={{ 
                scale: 1.08,
                boxShadow: "0 15px 35px rgba(139, 69, 19, 0.4)",
                y: -5,
                backgroundColor: "#8B4513",
                color: "#FFFFFF"
              }}
              whileTap={{ scale: 0.95 }}
              href={personalInfo.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-transparent border-2 border-accent-500 text-accent-500 rounded-full font-semibold transition-all duration-300"
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <motion.span
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                View Projects
              </motion.span>
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          variants={floatingVariants}
          animate="animate"
        >
          <motion.button
            whileHover={{ 
              scale: 1.2,
              backgroundColor: "rgba(255, 255, 255, 0.4)",
              boxShadow: "0 10px 25px rgba(255, 107, 53, 0.3)"
            }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToAbout}
            className="p-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-primary-500 hover:bg-white/30 transition-all duration-300"
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronDown size={24} />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
