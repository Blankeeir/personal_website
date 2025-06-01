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

  return (
    <section id="experience" className="py-20 bg-background-secondary">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Experience
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-8"></div>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-primary-200 h-full hidden md:block"></div>
          
          <div className="space-y-12">
            {experienceData.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
                    className="bg-white rounded-2xl shadow-lg border border-primary-100 overflow-hidden"
                  >
                    <div className={`bg-gradient-to-r ${getTypeColor(experience.type)} p-6 text-white`}>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                            className="bg-white/20 p-2 rounded-full mr-3"
                          >
                            {getIcon(experience.type)}
                          </motion.div>
                          <div>
                            <h3 className="text-xl font-bold">{experience.company}</h3>
                            <p className="text-white/80 text-sm">{experience.period}</p>
                          </div>
                        </div>
                      </div>
                      <h4 className="text-lg font-semibold mb-2">{experience.position}</h4>
                      <p className="text-white/90 text-sm">{experience.description}</p>
                    </div>

                    <div className="p-6">
                      <h5 className="font-semibold text-text-primary mb-4">Key Achievements:</h5>
                      <div className="space-y-3">
                        {experience.achievements.map((achievement, achIndex) => (
                          <motion.div
                            key={achIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: achIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-start"
                          >
                            <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-text-secondary text-sm leading-relaxed">{achievement}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>

                <div className="hidden md:flex w-2/12 justify-center">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="w-4 h-4 bg-primary-500 rounded-full border-4 border-white shadow-lg z-10"
                  ></motion.div>
                </div>

                <div className="w-full md:w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
