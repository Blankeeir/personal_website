import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Users, Code } from 'lucide-react';
import educationData from '../../data/education.json';

const EducationSection: React.FC = () => {
  const education = educationData[0];

  return (
    <section id="education" className="py-20 bg-background-primary">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Education
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-8"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-2xl shadow-xl border border-primary-100 overflow-hidden">
            <div className="bg-gradient-to-r from-primary-500 to-secondary-500 p-8 text-white">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white/20 p-3 rounded-full mr-4"
                  >
                    <GraduationCap size={32} />
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-bold">{education.institution}</h3>
                    <p className="text-primary-100">{education.period}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold">{education.gpa}</div>
                  <div className="text-primary-100">GPA</div>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-xl font-semibold text-text-primary mb-4 flex items-center">
                    <Code className="mr-2 text-primary-500" size={20} />
                    Degree Information
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-text-secondary">Degree:</span>
                      <span className="font-medium text-text-primary">{education.degree}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-secondary">Major:</span>
                      <span className="font-medium text-text-primary">{education.major}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-secondary">Double Major:</span>
                      <span className="font-medium text-text-primary">{education.doubleMajor}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-secondary">Year:</span>
                      <span className="font-medium text-text-primary">{education.year}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-text-primary mb-4 flex items-center">
                    <Award className="mr-2 text-primary-500" size={20} />
                    Key Achievements
                  </h4>
                  <div className="space-y-3">
                    {education.achievements.slice(0, 3).map((achievement, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start"
                      >
                        <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-text-secondary text-sm">{achievement}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-text-primary mb-4 flex items-center">
                  <Users className="mr-2 text-primary-500" size={20} />
                  Leadership & Activities
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {education.achievements.slice(3).map((achievement, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.02, boxShadow: "0 4px 12px rgba(255, 107, 53, 0.15)" }}
                      className="bg-gradient-to-r from-primary-50 to-secondary-50 p-4 rounded-lg border border-primary-100"
                    >
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-primary-500 rounded-full mr-3"></div>
                        <span className="text-text-primary font-medium text-sm">{achievement}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
