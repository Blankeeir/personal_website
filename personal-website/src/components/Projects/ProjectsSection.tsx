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

  return (
    <section id="projects" className="py-20 bg-background-primary">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Projects
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              className="bg-white rounded-2xl shadow-lg border border-primary-100 overflow-hidden group"
            >
              <div className={`bg-gradient-to-r ${getTypeColor(project.type)} p-6 text-white`}>
                <div className="flex items-center justify-between mb-4">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white/20 p-3 rounded-full"
                  >
                    {getIcon(project.type)}
                  </motion.div>
                  {project.achievement && (
                    <div className="bg-white/20 px-3 py-1 rounded-full text-xs font-semibold">
                      {project.achievement}
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-white/80 text-sm mb-2">{project.category}</p>
                <p className="text-white/70 text-xs">{project.period}</p>
              </div>

              <div className="p-6">
                <p className="text-text-secondary mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-3 mb-6">
                  {project.details.map((detail, detailIndex) => (
                    <motion.div
                      key={detailIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: detailIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start"
                    >
                      <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-text-secondary text-xs leading-relaxed">{detail}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-text-primary mb-2 text-sm">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        whileHover={{ scale: 1.05 }}
                        className="px-2 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {project.level && (
                  <div className="mt-4 p-3 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-lg border border-primary-200">
                    <div className="flex items-center">
                      <Trophy className="text-primary-500 mr-2" size={16} />
                      <span className="text-text-primary font-medium text-sm">{project.level}</span>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
