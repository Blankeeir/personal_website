import React from 'react';
import { motion } from 'framer-motion';
import { User, Award, Target } from 'lucide-react';
import personalInfo from '../../data/personal-info.json';

const AboutSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.3,
        duration: 1
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
        duration: 1
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
    <section id="about" className="py-20 bg-background-secondary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-primary-100/30 to-secondary-100/20"
            style={{
              width: Math.random() * 200 + 100,
              height: Math.random() * 200 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 50 - 25, 0],
              y: [0, Math.random() * 50 - 25, 0],
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: Math.random() * 15 + 10,
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
            About Me
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
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <motion.div 
              className="w-80 h-80 mx-auto bg-gradient-to-br from-primary-400 via-secondary-400 to-accent-500 rounded-full flex items-center justify-center relative overflow-hidden"
              whileHover={{ 
                scale: 1.05,
                rotate: 5,
                boxShadow: "0 25px 50px rgba(255, 107, 53, 0.3)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Animated background pattern */}
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
              <motion.div
                whileHover={{ 
                  scale: 1.1,
                  rotate: 10
                }}
                transition={{ duration: 0.3 }}
              >
                <User size={120} className="text-white relative z-10" />
              </motion.div>
            </motion.div>
            
            {/* Floating achievement badge */}
            <motion.div
              animate={{ 
                rotate: 360,
                y: [0, -10, 0]
              }}
              transition={{ 
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-accent-500 to-secondary-500 rounded-full flex items-center justify-center shadow-lg"
              whileHover={{ 
                scale: 1.2,
                boxShadow: "0 15px 30px rgba(139, 69, 19, 0.4)"
              }}
            >
              <Award className="text-white" size={24} />
            </motion.div>
            
            {/* Orbiting elements */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-4 h-4 bg-primary-300 rounded-full"
                style={{
                  left: "50%",
                  top: "50%",
                  transformOrigin: `${120 + i * 20}px 0px`
                }}
                animate={{ 
                  rotate: 360
                }}
                transition={{
                  duration: 10 + i * 2,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 0.5
                }}
              />
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="space-y-6"
          >
            <motion.h3 
              className="text-3xl font-bold text-text-primary mb-4"
              whileHover={{ 
                scale: 1.02,
                color: "#FF6B35"
              }}
            >
              Passionate About Innovation
            </motion.h3>
            
            <motion.p 
              className="text-lg text-text-secondary leading-relaxed"
              variants={itemVariants}
              whileHover={{ scale: 1.01 }}
            >
              {personalInfo.bio}
            </motion.p>

            <motion.div 
              className="grid grid-cols-2 gap-6 mt-8"
              variants={containerVariants}
            >
              {[
                {
                  icon: Target,
                  title: "Focus Areas",
                  items: ["Quantitative Trading", "Blockchain Technology", "Fintech Innovation"],
                  gradient: "from-primary-500 to-secondary-500"
                },
                {
                  icon: Award,
                  title: "Achievements",
                  items: [`GPA: ${personalInfo.gpa}`, "Multiple Leadership Roles", "Successful Startups"],
                  gradient: "from-secondary-500 to-accent-500"
                }
              ].map((card, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ 
                    scale: 1.08,
                    y: -10,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                    rotateY: 5
                  }}
                  className="bg-white rounded-xl p-6 shadow-lg border border-primary-100 relative overflow-hidden"
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0`}
                    whileHover={{ opacity: 0.05 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="relative z-10">
                    <div className="flex items-center mb-3">
                      <motion.div
                        whileHover={{ 
                          rotate: 360,
                          scale: 1.2
                        }}
                        transition={{ duration: 0.6 }}
                      >
                        <card.icon className="text-primary-500 mr-3" size={24} />
                      </motion.div>
                      <h4 className="font-semibold text-text-primary">{card.title}</h4>
                    </div>
                    <ul className="text-sm text-text-secondary space-y-2">
                      {card.items.map((item, itemIndex) => (
                        <motion.li
                          key={itemIndex}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: itemIndex * 0.1 }}
                          whileHover={{ x: 5, color: "#FF6B35" }}
                          className="flex items-center"
                        >
                          <motion.div
                            className="w-2 h-2 bg-primary-500 rounded-full mr-3"
                            whileHover={{ scale: 1.5 }}
                          />
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={cardVariants}
              whileHover={{ 
                scale: 1.03,
                y: -5,
                boxShadow: "0 15px 30px rgba(255, 107, 53, 0.2)"
              }}
              className="mt-8 p-6 bg-gradient-to-r from-primary-50 via-secondary-50 to-accent-50 rounded-xl border border-primary-200 relative overflow-hidden"
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-secondary-500/10"
                animate={{ 
                  x: [-100, 100, -100],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <div className="relative z-10">
                <h4 className="font-semibold text-text-primary mb-2">Current Role</h4>
                <p className="text-text-secondary">{personalInfo.subtitle}</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
