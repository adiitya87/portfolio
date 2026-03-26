// src/components/Projects.jsx
import { motion } from 'framer-motion';
import { projectsData } from '../data/data';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const Projects = () => {
  return (
    <section id="projects" className="py-20 max-w-6xl mx-auto px-4">
      <motion.h2 
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        className="text-4xl font-bold mb-12 text-center"
      >
        Featured Projects
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projectsData.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ y: -5 }}
            className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl border border-gray-100 dark:border-gray-700"
          >
           
            <div className="h-48 bg-gray-300 dark:bg-gray-700 w-full overflow-hidden relative">
            <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" 
                onError={(e) => {
                e.target.src = 'https://via.placeholder.com/600x400?text=Project+Image'; 
                }}
            />
            </div>
            
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map(tech => (
                  <span key={tech} className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a href={project.liveLink} className="flex items-center gap-2 text-sm font-semibold hover:text-primary transition-colors">
                  <FiExternalLink /> Live Demo
                </a>
                <a href={project.githubLink} className="flex items-center gap-2 text-sm font-semibold hover:text-primary transition-colors">
                  <FiGithub /> Source Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;