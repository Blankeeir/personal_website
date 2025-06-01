import React from 'react';
import { motion } from 'framer-motion';
import { Users, Star, Calendar } from 'lucide-react';
import leadershipData from '../../data/leadership.json';

const LeadershipSection: React.FC = () => {
  return (
    <section id="leadership" className="py-20 bg-background-primary">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Leadership & Community
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {leadershipData.map((role, index) => (
            <motion.div
              key={role.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              className="bg-white rounded-2xl shadow-lg border border-primary-100 overflow-hidden group"
            >
              <div className="bg-gradient-to-r from-primary-500 to-secondary-500 p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white/20 p-3 rounded-full"
                  >
                    <Users size={24} />
                  </motion.div>
                  <div className="flex items-center text-white/80">
                    <Calendar size={16} className="mr-1" />
                    <span className="text-sm">{role.period}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{role.title}</h3>
                <p className="text-white/80 text-sm">{role.organization}</p>
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    <Star className="text-primary-500 mr-2" size={16} />
                    <span className="font-semibold text-text-primary text-sm">{role.type}</span>
                  </div>
                </div>

                <p className="text-text-secondary text-sm leading-relaxed">
                  {role.description}
                </p>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="mt-4 p-3 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-lg border border-primary-200"
                >
                  <div className="flex items-center justify-center">
                    <Users className="text-primary-500 mr-2" size={16} />
                    <span className="text-text-primary font-medium text-sm">Active Leadership Role</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl shadow-lg border border-primary-100 p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-text-primary mb-4">Leadership Philosophy</h3>
            <p className="text-text-secondary leading-relaxed">
              As a leader in multiple organizations, I believe in fostering innovation, building strong communities, 
              and empowering others to achieve their potential. My experience spans across blockchain technology, 
              entrepreneurship, and student development, always with a focus on creating meaningful impact and 
              driving positive change in the tech ecosystem.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LeadershipSection;
