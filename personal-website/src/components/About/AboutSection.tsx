import React from 'react';
import { motion } from 'framer-motion';
import { User, Award, Target } from 'lucide-react';
import personalInfo from '../../data/personal-info.json';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-background-secondary">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-primary-400 to-secondary-500 rounded-full flex items-center justify-center">
                <User size={120} className="text-white" />
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center"
              >
                <Award className="text-white" size={24} />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-text-primary mb-4">
              Passionate About Innovation
            </h3>
            
            <p className="text-lg text-text-secondary leading-relaxed">
              {personalInfo.bio}
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-lg p-6 shadow-lg border border-primary-100"
              >
                <div className="flex items-center mb-3">
                  <Target className="text-primary-500 mr-3" size={24} />
                  <h4 className="font-semibold text-text-primary">Focus Areas</h4>
                </div>
                <ul className="text-sm text-text-secondary space-y-1">
                  <li>• Quantitative Trading</li>
                  <li>• Blockchain Technology</li>
                  <li>• Fintech Innovation</li>
                </ul>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-lg p-6 shadow-lg border border-primary-100"
              >
                <div className="flex items-center mb-3">
                  <Award className="text-primary-500 mr-3" size={24} />
                  <h4 className="font-semibold text-text-primary">Achievements</h4>
                </div>
                <ul className="text-sm text-text-secondary space-y-1">
                  <li>• GPA: {personalInfo.gpa}</li>
                  <li>• Multiple Leadership Roles</li>
                  <li>• Successful Startups</li>
                </ul>
              </motion.div>
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="mt-8 p-6 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-lg border border-primary-200"
            >
              <h4 className="font-semibold text-text-primary mb-2">Current Role</h4>
              <p className="text-text-secondary">{personalInfo.subtitle}</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
