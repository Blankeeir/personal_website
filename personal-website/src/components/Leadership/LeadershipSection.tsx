import React from 'react';
import { motion } from 'framer-motion';
import { Users, Star, Calendar, Heart } from 'lucide-react';
import leadershipData from '../../data/leadership.json';

const LeadershipSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.15,
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
    <section id="leadership" className="py-20 bg-background-primary relative overflow-hidden">
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
            Leadership & Community
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
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {leadershipData.map((role) => (
            <motion.div
              key={role.id}
              variants={cardVariants}
              whileHover={{ 
                y: -15,
                scale: 1.03,
                boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
                rotateY: 3
              }}
              className="bg-white rounded-2xl shadow-lg border border-primary-100 overflow-hidden group relative"
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5"
                whileHover={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
              
              <div className="bg-gradient-to-r from-primary-500 to-secondary-500 p-6 text-white relative overflow-hidden">
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
                  <motion.div
                    whileHover={{ 
                      rotate: 360,
                      scale: 1.2,
                      boxShadow: "0 10px 20px rgba(255, 255, 255, 0.3)"
                    }}
                    transition={{ duration: 0.6 }}
                    className="bg-white/20 p-3 rounded-full"
                  >
                    <Users size={24} />
                  </motion.div>
                  <motion.div 
                    className="flex items-center text-white/80"
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Calendar size={16} className="mr-1" />
                    </motion.div>
                    <span className="text-sm">{role.period}</span>
                  </motion.div>
                </div>
                <motion.h3 
                  className="text-xl font-bold mb-2"
                  whileHover={{ scale: 1.02 }}
                >
                  {role.title}
                </motion.h3>
                <motion.p 
                  className="text-white/80 text-sm"
                  whileHover={{ scale: 1.02 }}
                >
                  {role.organization}
                </motion.p>
              </div>

              <div className="p-6 relative z-10">
                <div className="mb-4">
                  <motion.div 
                    className="flex items-center mb-2"
                    whileHover={{ x: 5 }}
                  >
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Star className="text-primary-500 mr-2" size={16} />
                    </motion.div>
                    <span className="font-semibold text-text-primary text-sm">{role.type}</span>
                  </motion.div>
                </div>

                <motion.p 
                  className="text-text-secondary text-sm leading-relaxed"
                  whileHover={{ scale: 1.01 }}
                >
                  {role.description}
                </motion.p>

                <motion.div
                  whileHover={{ 
                    scale: 1.05,
                    y: -3,
                    boxShadow: "0 8px 20px rgba(255, 107, 53, 0.2)"
                  }}
                  className="mt-4 p-3 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-lg border border-primary-200 relative overflow-hidden"
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-secondary-500/10"
                    whileHover={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="flex items-center justify-center relative z-10">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Users className="text-primary-500 mr-2" size={16} />
                    </motion.div>
                    <span className="text-text-primary font-medium text-sm">Active Leadership Role</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-16 text-center"
        >
          <motion.div
            whileHover={{ 
              scale: 1.02,
              y: -5,
              boxShadow: "0 20px 40px rgba(255, 107, 53, 0.2)"
            }}
            className="bg-white rounded-2xl shadow-lg border border-primary-100 p-8 max-w-4xl mx-auto relative overflow-hidden"
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-secondary-500/5"
              whileHover={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
            
            <div className="relative z-10">
              <motion.div 
                className="flex items-center justify-center mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                >
                  <Heart className="text-primary-500 mr-3" size={32} />
                </motion.div>
                <motion.h3 
                  className="text-2xl font-bold text-text-primary"
                  whileHover={{ color: "#FF6B35" }}
                >
                  Leadership Philosophy
                </motion.h3>
              </motion.div>
              <motion.p 
                className="text-text-secondary leading-relaxed"
                whileHover={{ scale: 1.01 }}
              >
                As a leader in multiple organizations, I believe in fostering innovation, building strong communities, 
                and empowering others to achieve their potential. My experience spans across blockchain technology, 
                entrepreneurship, and student development, always with a focus on creating meaningful impact and 
                driving positive change in the tech ecosystem.
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default LeadershipSection;
