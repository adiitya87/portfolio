// src/components/Skills.jsx
import { motion } from 'framer-motion';
import { skillsData } from '../data/data';

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-800/50 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Technical Skills
        </motion.h2>
        
        <div className="space-y-8 md:space-y-6">
          {skillsData.map((skill, index) => {
            // We assign the icon to a capital letter variable so React knows it's a component
            const IconComponent = skill.icon;

            return (
              <div key={skill.name}>
                <div className="flex justify-between items-center mb-2">
                  {/* Icon and Name combined */}
                  <div className="flex items-center gap-3">
                    <IconComponent className={`text-2xl ${skill.color}`} />
                    <span className="font-medium text-lg">{skill.name}</span>
                  </div>
                  <span className="text-gray-500 dark:text-gray-400 font-semibold">{skill.level}%</span>
                </div>
                
                {/* Progress Bar */}
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden shadow-inner">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: index * 0.1, ease: "easeOut" }}
                    className="bg-primary h-full rounded-full relative"
                  >
                    {/* Add a subtle shine effect to the progress bar */}
                    <div className="absolute top-0 left-0 w-full h-full bg-white/20"></div>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;