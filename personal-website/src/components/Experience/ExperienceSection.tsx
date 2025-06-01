import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, TrendingUp, Code2, Users, Building } from 'lucide-react';
import experienceData from '../../data/experience.json';

const ExperienceSection: React.FC = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'leadership': return <Users size={24} />;
      case 'trading': return <TrendingUp size={24} />;
      case 'development': return <Code2 size={24} />;
      case 'research': return <Building size={24} />;
      default: return <Briefcase size={24} />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'leadership': return 'from-primary-500 to-secondary-500';
      case 'trading': return 'from-accent-500 to-primary-500';
      case 'development': return 'from-secondary-500 to-accent-500';
      case 'research': return 'from-primary-400 to-secondary-400';
      default: return 'from-primary-500 to-secondary-500';
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.2,
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { y: 80, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
        duration: 0.8
      }
    }
  };

  const timelineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="experience" className="py-20 bg-background-secondary relative overflow-hidden">
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-primary-100/15 to-secondary-100/10"
            style={{
              width: Math.random() * 300 + 120,
              height: Math.random() * 300 + 120,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 80 - 40, 0],
              y: [0, Math.random() * 80 - 40, 0],
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: Math.random() * 20 + 15,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 2
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
              scale: 1.05,
              color: "#FF6B35"
            }}
          >
            Experience
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
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div 
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-primary-500 to-secondary-500 h-full hidden md:block"
            variants={timelineVariants}
            style={{ transformOrigin: "top" }}
          />
          
          <div className="space-y-12">
            {experienceData.map((experience, index) => (
              <motion.div
                key={experience.id}
                variants={itemVariants}
                whileHover={{ scale: 1.01 }}
                className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <motion.div
                    whileHover={{ 
                      scale: 1.03,
                      y: -8,
                      boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
                      rotateY: index % 2 === 0 ? 2 : -2
                    }}
                    className="bg-white rounded-2xl shadow-lg border border-primary-100 overflow-hidden relative"
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${getTypeColor(experience.type)} opacity-0`}
                      whileHover={{ opacity: 0.05 }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    <div className={`bg-gradient-to-r ${getTypeColor(experience.type)} p-6 text-white relative overflow-hidden`}>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"
                        animate={{ 
                          rotate: [0, 360],
                          scale: [1, 1.2, 1]
                        }}
                        transition={{ 
                          duration: 8,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      />
                      
                      <div className="flex items-center justify-between mb-4 relative z-10">
                        <div className="flex items-center">
                          <motion.div
                            whileHover={{ 
                              rotate: 360,
                              scale: 1.2,
                              boxShadow: "0 10px 20px rgba(255, 255, 255, 0.3)"
                            }}
                            transition={{ duration: 0.6 }}
                            className="bg-white/20 p-2 rounded-full mr-3"
                          >
                            {getIcon(experience.type)}
                          </motion.div>
                          <div>
                            <motion.h3 
                              className="text-xl font-bold"
                              whileHover={{ scale: 1.02 }}
                            >
                              {experience.company}
                            </motion.h3>
                            <motion.p 
                              className="text-white/80 text-sm"
                              whileHover={{ scale: 1.02 }}
                            >
                              {experience.period}
                            </motion.p>
                          </div>
                        </div>
                      </div>
                      <motion.h4 
                        className="text-lg font-semibold mb-2"
                        whileHover={{ scale: 1.01 }}
                      >
                        {experience.position}
                      </motion.h4>
                      <motion.p 
                        className="text-white/90 text-sm"
                        whileHover={{ scale: 1.01 }}
                      >
                        {experience.description}
                      </motion.p>
                    </div>

                    <div className="p-6 relative z-10">
                      <h5 className="font-semibold text-text-primary mb-4">Key Achievements:</h5>
                      <div className="space-y-3">
                        {experience.achievements.map((achievement, achIndex) => (
                          <motion.div
                            key={achIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ 
                              duration: 0.6, 
                              delay: achIndex * 0.1,
                              type: "spring",
                              stiffness: 120
                            }}
                            viewport={{ once: true }}
                            className="flex items-start"
                            whileHover={{ x: 8 }}
                          >
                            <motion.div 
                              className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"
                              whileHover={{ scale: 1.8, backgroundColor: "#C73E1D" }}
                              transition={{ duration: 0.2 }}
                            />
                            <span className="text-text-secondary text-sm leading-relaxed">{achievement}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>

                <div className="hidden md:flex w-2/12 justify-center">
                  <motion.div
                    whileHover={{ 
                      scale: 1.5,
                      boxShadow: "0 10px 25px rgba(255, 107, 53, 0.3)"
                    }}
                    className="w-4 h-4 bg-primary-500 rounded-full border-4 border-white shadow-lg z-10 relative"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      borderColor: ["#FF6B35", "#C73E1D", "#FF6B35"]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </div>

                <div className="w-full md:w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
