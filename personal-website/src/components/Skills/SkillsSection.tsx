import React from 'react';
import { motion } from 'framer-motion';
import { Code, Briefcase, Globe, Award } from 'lucide-react';
import skillsData from '../../data/skills.json';

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-background-secondary">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-text-primary mb-8 flex items-center">
              <Code className="mr-3 text-primary-500" size={28} />
              Technical Skills
            </h3>
            <div className="space-y-6">
              {skillsData.technical.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 shadow-lg border border-primary-100"
                >
                  <h4 className="font-semibold text-text-primary mb-4">{category.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        whileHover={{ scale: 1.05, backgroundColor: '#FF6B35', color: '#FFFFFF' }}
                        className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium transition-all cursor-pointer"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-text-primary mb-8 flex items-center">
              <Briefcase className="mr-3 text-primary-500" size={28} />
              Professional Skills
            </h3>
            <div className="space-y-6">
              {skillsData.nonTechnical.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 shadow-lg border border-primary-100"
                >
                  <h4 className="font-semibold text-text-primary mb-4">{category.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        whileHover={{ scale: 1.05, backgroundColor: '#C73E1D', color: '#FFFFFF' }}
                        className="px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-sm font-medium transition-all cursor-pointer"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-6 shadow-lg border border-primary-100"
          >
            <h3 className="text-xl font-bold text-text-primary mb-4 flex items-center">
              <Globe className="mr-3 text-primary-500" size={24} />
              Languages
            </h3>
            <div className="flex flex-wrap gap-3">
              {skillsData.languages.map((language, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-gradient-to-r from-accent-100 to-primary-100 text-accent-700 rounded-full font-medium"
                >
                  {language}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-6 shadow-lg border border-primary-100"
          >
            <h3 className="text-xl font-bold text-text-primary mb-4 flex items-center">
              <Award className="mr-3 text-primary-500" size={24} />
              Certifications
            </h3>
            <div className="space-y-3">
              {skillsData.certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center"
                >
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  <span className="text-text-secondary">{cert}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
