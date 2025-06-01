import React from 'react';
import { motion } from 'framer-motion';
import { Code, Trophy, Lightbulb } from 'lucide-react';
import projectsData from '../../data/projects.json';

const ProjectsSection: React.FC = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'mobile': return <Code size={24} />;
      case 'competition': return <Trophy size={24} />;
      case 'business': return <Lightbulb size={24} />;
      default: return <Code size={24} />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'mobile': return 'from-primary-500 to-accent-500';
      case 'competition': return 'from-secondary-500 to-primary-500';
      case 'business': return 'from-accent-500 to-secondary-500';
      default: return 'from-primary-500 to-secondary-500';
    }
  };

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

  const cardVariants = {
    hidden: { 
      y: 100, 
      opacity: 0, 
      scale: 0.7,
      rotateX: -20,
      rotateY: -10
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      rotateX: 0,
      rotateY: 0,
      transition: {
        type: "spring",
        damping: 18,
        stiffness: 120,
        duration: 1.2
      }
    }
  };

  return (
    <section id="projects" className="py-20 bg-background-primary relative overflow-hidden">
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-primary-100/25 to-secondary-100/20"
            style={{
              width: Math.random() * 350 + 150,
              height: Math.random() * 350 + 150,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
              scale: [1, 1.3, 0.9, 1],
              rotate: [0, 180, 360],
              opacity: [0.15, 0.5, 0.25, 0.15]
            }}
            transition={{
              duration: Math.random() * 25 + 20,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1.2
            }}
          />
        ))}
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-2 h-2 bg-primary-400/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-40, -200, -40],
              x: [0, Math.random() * 80 - 40, 0],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0]
            }}
            transition={{
              duration: Math.random() * 12 + 8,
              repeat: Infinity,
              delay: Math.random() * 10,
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
            variants={{
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
            }}
            className="text-4xl md:text-5xl font-bold text-text-primary mb-6"
            whileHover={{ 
              scale: 1.08,
              color: "#FF6B35",
              textShadow: "0 0 30px rgba(255, 107, 53, 0.5)"
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            Projects
          </motion.h2>
          <motion.div
            variants={{
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
            }}
            className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-8"
            whileInView={{ 
              width: [0, 96],
              opacity: [0, 1]
            }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          ></motion.div>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projectsData.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ 
                y: -25, 
                scale: 1.05,
                boxShadow: "0 35px 70px rgba(0,0,0,0.2)",
                rotateY: 8,
                rotateX: 5
              }}
              className="bg-white rounded-2xl shadow-lg border border-primary-100 overflow-hidden group relative"
              transition={{ type: "spring", stiffness: 250, damping: 15 }}
            >
              <div className={`bg-gradient-to-r ${getTypeColor(project.type)} p-6 text-white relative overflow-hidden`}>
                {/* Animated background pattern */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-white/15 to-transparent"
                  animate={{ 
                    x: [-150, 150, -150],
                    y: [-50, 50, -50],
                    opacity: [0.2, 0.7, 0.2],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3,
                    ease: "easeInOut"
                  }}
                />
                
                <div className="flex items-center justify-between mb-4 relative z-10">
                  <motion.div
                    whileHover={{ 
                      rotate: 360,
                      scale: 1.3,
                      backgroundColor: "rgba(255, 255, 255, 0.4)",
                      y: -5,
                      boxShadow: "0 15px 30px rgba(255, 255, 255, 0.3)"
                    }}
                    transition={{ 
                      type: "spring",
                      stiffness: 300,
                      damping: 15,
                      duration: 0.8
                    }}
                    className="bg-white/20 p-3 rounded-full backdrop-blur-sm"
                  >
                    {getIcon(project.type)}
                  </motion.div>
                  {project.achievement && (
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      whileHover={{ 
                        scale: 1.1,
                        backgroundColor: "rgba(255, 255, 255, 0.3)"
                      }}
                      className="bg-white/20 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm"
                      transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                    >
                      {project.achievement}
                    </motion.div>
                  )}
                </div>
                
                <motion.h3 
                  className="text-xl font-bold mb-2 relative z-10"
                  whileHover={{ 
                    scale: 1.08,
                    y: -3
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  {project.title}
                </motion.h3>
                <motion.p 
                  className="text-white/80 text-sm mb-2 relative z-10"
                  whileHover={{ 
                    x: 8,
                    scale: 1.02
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {project.category}
                </motion.p>
                <motion.p 
                  className="text-white/70 text-xs relative z-10"
                  whileHover={{ 
                    x: 8,
                    scale: 1.02
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {project.period}
                </motion.p>
              </div>

              <div className="p-6">
                <motion.p 
                  className="text-text-secondary mb-4 text-sm leading-relaxed"
                  whileHover={{ 
                    scale: 1.02,
                    color: "#3E2723"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {project.description}
                </motion.p>

                <div className="space-y-3 mb-6">
                  {project.details.map((detail, detailIndex) => (
                    <motion.div
                      key={detailIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.6, 
                        delay: detailIndex * 0.1,
                        type: "spring",
                        stiffness: 100
                      }}
                      viewport={{ once: true }}
                      className="flex items-start"
                      whileHover={{ 
                        x: 12,
                        scale: 1.02
                      }}
                    >
                      <motion.div 
                        className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"
                        whileHover={{ 
                          scale: 2.2, 
                          backgroundColor: "#C73E1D",
                          boxShadow: "0 0 15px rgba(199, 62, 29, 0.6)"
                        }}
                        transition={{ 
                          type: "spring",
                          stiffness: 400,
                          damping: 15
                        }}
                      />
                      <span className="text-text-secondary text-xs leading-relaxed">{detail}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-text-primary mb-2 text-sm">Technologies:</h4>
                  <motion.div 
                    className="flex flex-wrap gap-2"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0.6, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ 
                          delay: techIndex * 0.08,
                          type: "spring",
                          stiffness: 250,
                          damping: 20
                        }}
                        whileHover={{ 
                          scale: 1.2,
                          backgroundColor: "#FF6B35",
                          color: "#FFFFFF",
                          y: -8,
                          rotate: 5,
                          boxShadow: "0 12px 25px rgba(255, 107, 53, 0.5)"
                        }}
                        className="px-2 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium cursor-pointer"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>

                {project.level && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 10px 20px rgba(255, 107, 53, 0.2)"
                    }}
                    className="mt-4 p-3 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-lg border border-primary-200 relative overflow-hidden"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-secondary-500/10"
                      animate={{ 
                        x: [-50, 50, -50],
                        opacity: [0.3, 0.5, 0.3]
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    <div className="flex items-center relative z-10">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Trophy className="text-primary-500 mr-2" size={16} />
                      </motion.div>
                      <span className="text-text-primary font-medium text-sm">{project.level}</span>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
