import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Users, Code } from 'lucide-react';
import educationData from '../../data/education.json';

const EducationSection: React.FC = () => {
  const education = educationData[0];

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
    hidden: { y: 60, opacity: 0, scale: 0.9 },
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

  const cardVariants = {
    hidden: { y: 50, opacity: 0, rotateX: -15 },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 120,
        duration: 0.8
      }
    }
  };

  return (
    <section id="education" className="py-20 bg-background-primary relative overflow-hidden">
      <div className="absolute inset-0">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-primary-100/25 to-secondary-100/15"
            style={{
              width: Math.random() * 200 + 100,
              height: Math.random() * 200 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 60 - 30, 0],
              y: [0, Math.random() * 60 - 30, 0],
              scale: [1, 1.15, 1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{
              duration: Math.random() * 16 + 12,
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
            Education
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
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div 
            className="bg-white rounded-2xl shadow-xl border border-primary-100 overflow-hidden relative"
            whileHover={{ 
              scale: 1.02,
              y: -8,
              boxShadow: "0 30px 60px rgba(0,0,0,0.15)"
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5"
              whileHover={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
            
            <div className="bg-gradient-to-r from-primary-500 to-secondary-500 p-8 text-white relative overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              
              <div className="flex items-center justify-between flex-wrap gap-4 relative z-10">
                <div className="flex items-center">
                  <motion.div
                    whileHover={{ 
                      rotate: 360,
                      scale: 1.1,
                      boxShadow: "0 10px 20px rgba(255, 255, 255, 0.3)"
                    }}
                    transition={{ duration: 0.6 }}
                    className="bg-white/20 p-3 rounded-full mr-4"
                  >
                    <GraduationCap size={32} />
                  </motion.div>
                  <div>
                    <motion.h3 
                      className="text-2xl font-bold"
                      whileHover={{ scale: 1.02 }}
                    >
                      {education.institution}
                    </motion.h3>
                    <motion.p 
                      className="text-primary-100"
                      whileHover={{ scale: 1.02 }}
                    >
                      {education.period}
                    </motion.p>
                  </div>
                </div>
                <motion.div 
                  className="text-right"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div 
                    className="text-3xl font-bold"
                    animate={{ 
                      scale: [1, 1.05, 1]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    {education.gpa}
                  </motion.div>
                  <div className="text-primary-100">GPA</div>
                </motion.div>
              </div>
            </div>

            <div className="p-8 relative z-10">
              <motion.div 
                className="grid md:grid-cols-2 gap-8 mb-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.div variants={itemVariants}>
                  <motion.h4 
                    className="text-xl font-semibold text-text-primary mb-4 flex items-center"
                    whileHover={{ color: "#FF6B35", scale: 1.02 }}
                  >
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Code className="mr-2 text-primary-500" size={20} />
                    </motion.div>
                    Degree Information
                  </motion.h4>
                  <div className="space-y-3">
                    {[
                      { label: "Degree", value: education.degree },
                      { label: "Major", value: education.major },
                      { label: "Double Major", value: education.doubleMajor },
                      { label: "Year", value: education.year }
                    ].map((item, index) => (
                      <motion.div 
                        key={index}
                        className="flex justify-between"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ 
                          delay: index * 0.1,
                          type: "spring",
                          stiffness: 120
                        }}
                        whileHover={{ x: 5, scale: 1.01 }}
                      >
                        <span className="text-text-secondary">{item.label}:</span>
                        <span className="font-medium text-text-primary">{item.value}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <motion.h4 
                    className="text-xl font-semibold text-text-primary mb-4 flex items-center"
                    whileHover={{ color: "#C73E1D", scale: 1.02 }}
                  >
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Award className="mr-2 text-primary-500" size={20} />
                    </motion.div>
                    Key Achievements
                  </motion.h4>
                  <div className="space-y-3">
                    {education.achievements.slice(0, 3).map((achievement, index) => (
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
                        className="flex items-start"
                        whileHover={{ x: 8 }}
                      >
                        <motion.div 
                          className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"
                          whileHover={{ scale: 1.8, backgroundColor: "#C73E1D" }}
                          transition={{ duration: 0.2 }}
                        />
                        <span className="text-text-secondary text-sm">{achievement}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.h4 
                  className="text-xl font-semibold text-text-primary mb-4 flex items-center"
                  whileHover={{ color: "#8B4513", scale: 1.02 }}
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Users className="mr-2 text-primary-500" size={20} />
                  </motion.div>
                  Leadership & Activities
                </motion.h4>
                <motion.div 
                  className="grid md:grid-cols-2 gap-4"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {education.achievements.slice(3).map((achievement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        delay: index * 0.1,
                        type: "spring",
                        stiffness: 200
                      }}
                      whileHover={{ 
                        scale: 1.05, 
                        y: -3,
                        boxShadow: "0 8px 20px rgba(255, 107, 53, 0.2)"
                      }}
                      className="bg-gradient-to-r from-primary-50 to-secondary-50 p-4 rounded-lg border border-primary-100 relative overflow-hidden"
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-secondary-500/10"
                        whileHover={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                      <div className="flex items-center relative z-10">
                        <motion.div 
                          className="w-3 h-3 bg-primary-500 rounded-full mr-3"
                          whileHover={{ scale: 1.5, backgroundColor: "#C73E1D" }}
                          transition={{ duration: 0.2 }}
                        />
                        <span className="text-text-primary font-medium text-sm">{achievement}</span>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
