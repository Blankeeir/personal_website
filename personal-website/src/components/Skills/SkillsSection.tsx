import React from 'react';
import { motion } from 'framer-motion';
import { Code, Briefcase, Globe, Award } from 'lucide-react';
import skillsData from '../../data/skills.json';

const SkillsSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.12,
        duration: 1.0,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const itemVariants = {
    hidden: { y: 80, opacity: 0, scale: 0.8, rotateX: -15 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 18,
        stiffness: 120,
        duration: 1.2
      }
    }
  };

  const cardVariants = {
    hidden: { y: 80, opacity: 0, rotateX: -20, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 16,
        stiffness: 140,
        duration: 1.0
      }
    }
  };

  return (
    <section id="skills" className="py-20 bg-background-secondary relative overflow-hidden">
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-primary-100/25 to-secondary-100/20"
            style={{
              width: Math.random() * 300 + 120,
              height: Math.random() * 300 + 120,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 80 - 40, 0],
              y: [0, Math.random() * 80 - 40, 0],
              scale: [1, 1.3, 0.9, 1],
              rotate: [0, 180, 360],
              opacity: [0.15, 0.5, 0.25, 0.15]
            }}
            transition={{
              duration: Math.random() * 22 + 18,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1.5
            }}
          />
        ))}
        
        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1.5 h-1.5 bg-primary-400/50 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-30, -150, -30],
              x: [0, Math.random() * 60 - 30, 0],
              opacity: [0, 1, 0],
              scale: [0, 1.2, 0]
            }}
            transition={{
              duration: Math.random() * 10 + 6,
              repeat: Infinity,
              delay: Math.random() * 8,
              ease: "easeOut"
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-text-primary mb-6"
            whileHover={{ 
              scale: 1.08,
              color: "#FF6B35",
              textShadow: "0 0 30px rgba(255, 107, 53, 0.5)",
              y: -5,
              transition: { type: "spring", stiffness: 300, damping: 20 }
            }}
          >
            Skills & Expertise
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-8"
            whileInView={{ 
              width: [0, 96],
              opacity: [0, 1]
            }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          ></motion.div>
        </motion.div>

        <motion.div 
          className="grid lg:grid-cols-2 gap-12 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={itemVariants}>
            <motion.h3 
              className="text-2xl font-bold text-text-primary mb-8 flex items-center"
              whileHover={{ scale: 1.02, color: "#FF6B35" }}
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.6 }}
              >
                <Code className="mr-3 text-primary-500" size={28} />
              </motion.div>
              Technical Skills
            </motion.h3>
            <motion.div 
              className="space-y-6"
              variants={containerVariants}
            >
              {skillsData.technical.map((category, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ 
                    scale: 1.08,
                    y: -15,
                    boxShadow: "0 35px 70px rgba(0,0,0,0.2)",
                    rotateY: 5,
                    rotateX: 3
                  }}
                  className="bg-white rounded-xl p-6 shadow-lg border border-primary-100 relative overflow-hidden"
                  transition={{ type: "spring", stiffness: 250, damping: 15 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5"
                    whileHover={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="relative z-10">
                    <motion.h4 
                      className="font-semibold text-text-primary mb-4"
                      whileHover={{ color: "#FF6B35" }}
                    >
                      {category.category}
                    </motion.h4>
                    <motion.div 
                      className="flex flex-wrap gap-2"
                      variants={containerVariants}
                    >
                      {category.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skillIndex}
                          initial={{ opacity: 0, scale: 0.6, y: 20 }}
                          whileInView={{ opacity: 1, scale: 1, y: 0 }}
                          transition={{ 
                            delay: skillIndex * 0.08,
                            type: "spring",
                            stiffness: 250,
                            damping: 20
                          }}
                          whileHover={{ 
                            scale: 1.2,
                            backgroundColor: '#FF6B35',
                            color: '#FFFFFF',
                            y: -8,
                            rotate: 3,
                            boxShadow: "0 12px 30px rgba(255, 107, 53, 0.5)",
                            transition: { type: "spring", stiffness: 300, damping: 15 }
                          }}
                          className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium cursor-pointer"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <motion.h3 
              className="text-2xl font-bold text-text-primary mb-8 flex items-center"
              whileHover={{ scale: 1.02, color: "#C73E1D" }}
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.6 }}
              >
                <Briefcase className="mr-3 text-primary-500" size={28} />
              </motion.div>
              Professional Skills
            </motion.h3>
            <motion.div 
              className="space-y-6"
              variants={containerVariants}
            >
              {skillsData.nonTechnical.map((category, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ 
                    scale: 1.08,
                    y: -15,
                    boxShadow: "0 35px 70px rgba(0,0,0,0.2)",
                    rotateY: -5,
                    rotateX: 3
                  }}
                  className="bg-white rounded-xl p-6 shadow-lg border border-primary-100 relative overflow-hidden"
                  transition={{ type: "spring", stiffness: 250, damping: 15 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-secondary-500/5 to-accent-500/5"
                    whileHover={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="relative z-10">
                    <motion.h4 
                      className="font-semibold text-text-primary mb-4"
                      whileHover={{ color: "#C73E1D" }}
                    >
                      {category.category}
                    </motion.h4>
                    <motion.div 
                      className="flex flex-wrap gap-2"
                      variants={containerVariants}
                    >
                      {category.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skillIndex}
                          initial={{ opacity: 0, scale: 0.6, y: 20 }}
                          whileInView={{ opacity: 1, scale: 1, y: 0 }}
                          transition={{ 
                            delay: skillIndex * 0.08,
                            type: "spring",
                            stiffness: 250,
                            damping: 20
                          }}
                          whileHover={{ 
                            scale: 1.2,
                            backgroundColor: '#C73E1D',
                            color: '#FFFFFF',
                            y: -8,
                            rotate: -3,
                            boxShadow: "0 12px 30px rgba(199, 62, 29, 0.5)",
                            transition: { type: "spring", stiffness: 300, damping: 15 }
                          }}
                          className="px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-sm font-medium cursor-pointer"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            variants={cardVariants}
            whileHover={{ 
              scale: 1.05,
              y: -8,
              boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
              rotateY: 3
            }}
            className="bg-white rounded-xl p-6 shadow-lg border border-primary-100 relative overflow-hidden"
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-accent-500/5 to-primary-500/5"
              whileHover={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
            <div className="relative z-10">
              <motion.h3 
                className="text-xl font-bold text-text-primary mb-4 flex items-center"
                whileHover={{ color: "#8B4513" }}
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                >
                  <Globe className="mr-3 text-primary-500" size={24} />
                </motion.div>
                Languages
              </motion.h3>
              <motion.div 
                className="flex flex-wrap gap-3"
                variants={containerVariants}
              >
                {skillsData.languages.map((language, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 200
                    }}
                    whileHover={{ 
                      scale: 1.15,
                      y: -5,
                      backgroundColor: "#8B4513",
                      color: "#FFFFFF",
                      boxShadow: "0 10px 25px rgba(139, 69, 19, 0.3)"
                    }}
                    className="px-4 py-2 bg-gradient-to-r from-accent-100 to-primary-100 text-accent-700 rounded-full font-medium cursor-pointer"
                  >
                    {language}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            variants={cardVariants}
            whileHover={{ 
              scale: 1.05,
              y: -8,
              boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
              rotateY: -3
            }}
            className="bg-white rounded-xl p-6 shadow-lg border border-primary-100 relative overflow-hidden"
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5"
              whileHover={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
            <div className="relative z-10">
              <motion.h3 
                className="text-xl font-bold text-text-primary mb-4 flex items-center"
                whileHover={{ color: "#FF6B35" }}
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                >
                  <Award className="mr-3 text-primary-500" size={24} />
                </motion.div>
                Certifications
              </motion.h3>
              <div className="space-y-3">
                {skillsData.certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 120
                    }}
                    viewport={{ once: true }}
                    className="flex items-center"
                    whileHover={{ x: 8 }}
                  >
                    <motion.div 
                      className="w-2 h-2 bg-primary-500 rounded-full mr-3"
                      whileHover={{ scale: 1.8, backgroundColor: "#C73E1D" }}
                      transition={{ duration: 0.2 }}
                    />
                    <motion.span 
                      className="text-text-secondary"
                      whileHover={{ color: "#FF6B35" }}
                    >
                      {cert}
                    </motion.span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
