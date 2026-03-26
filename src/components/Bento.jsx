// src/components/Bento.jsx
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaCode, FaGraduationCap, FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiReact, SiNodedotjs } from 'react-icons/si';

const Bento = () => {
  // Animation settings for the stagger effect
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <section id="about" className="py-20 max-w-6xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          Developer Snapshot
        </h2>
        <p className="text-gray-600 dark:text-gray-400">Everything you need to know, at a glance.</p>
      </motion.div>

      {/* The Bento Grid */}
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[200px]"
      >
        
        {/* Card 1: Main Focus (Wide) */}
        <motion.div 
          variants={item}
          whileHover={{ scale: 1.02 }}
          className="md:col-span-2 md:row-span-1 rounded-3xl bg-gradient-to-br from-blue-500 to-primary p-8 text-white shadow-xl shadow-blue-500/20 flex flex-col justify-center relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-500">
            <FaCode size={120} />
          </div>
          <h3 className="text-3xl font-bold mb-2 relative z-10">Full-Stack Architect</h3>
          <p className="text-blue-100 relative z-10 max-w-md">
            Specializing in building robust, scalable applications from database design to seamless frontend user experiences.
          </p>
        </motion.div>

        {/* Card 2: Education & Stats (Square) */}
        <motion.div 
          variants={item}
          whileHover={{ scale: 1.02 }}
          className="md:col-span-1 md:row-span-1 rounded-3xl bg-white dark:bg-gray-800 p-8 shadow-xl border border-gray-100 dark:border-gray-700 flex flex-col justify-center items-center text-center"
        >
          <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center text-primary mb-4">
            <FaGraduationCap size={28} />
          </div>
          <h4 className="font-bold text-gray-900 dark:text-white text-lg">B.Tech CSE</h4>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Medicaps University</p>
          <div className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full text-sm font-bold">
            7.62 CGPA
          </div>
        </motion.div>

        {/* Card 3: Stack / Tooling (Tall) */}
        <motion.div 
          variants={item}
          whileHover={{ scale: 1.02 }}
          className="md:col-span-1 md:row-span-2 rounded-3xl bg-gray-900 dark:bg-black p-8 shadow-xl border border-gray-800 flex flex-col justify-center items-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/10" />
          <h4 className="text-white font-bold text-xl mb-8 relative z-10">Core Stack</h4>
          
          <div className="grid grid-cols-2 gap-8 relative z-10">
            <div className="flex flex-col items-center gap-2 group">
              <SiMongodb size={40} className="text-green-500 group-hover:scale-110 transition-transform" />
              <span className="text-xs text-gray-400">Mongo</span>
            </div>
            <div className="flex flex-col items-center gap-2 group">
              <SiExpress size={40} className="text-gray-300 group-hover:scale-110 transition-transform" />
              <span className="text-xs text-gray-400">Express</span>
            </div>
            <div className="flex flex-col items-center gap-2 group">
              <SiReact size={40} className="text-blue-400 group-hover:scale-110 transition-transform" />
              <span className="text-xs text-gray-400">React</span>
            </div>
            <div className="flex flex-col items-center gap-2 group">
              <SiNodedotjs size={40} className="text-green-600 group-hover:scale-110 transition-transform" />
              <span className="text-xs text-gray-400">Node</span>
            </div>
          </div>
        </motion.div>

        {/* Card 4: GitHub Stats (Square) */}
        <motion.div 
          variants={item}
          whileHover={{ scale: 1.02 }}
          className="md:col-span-1 md:row-span-1 rounded-3xl bg-white dark:bg-gray-800 p-8 shadow-xl border border-gray-100 dark:border-gray-700 flex flex-col justify-between"
        >
          <div className="flex justify-between items-start">
            <FaLinkedin size={30} className="text-gray-900 dark:text-white" />
            <span className="flex h-3 w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white text-2xl">Connect with me and explore my professional journey on LinkedIn.</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400"></p>
          </div>
        </motion.div>

        {/* Card 5: Location / Base (Square) */}
        <motion.div 
          variants={item}
          whileHover={{ scale: 1.02 }}
          className="md:col-span-1 md:row-span-1 rounded-3xl bg-white dark:bg-gray-800 p-0 shadow-xl border border-gray-100 dark:border-gray-700 relative overflow-hidden flex items-end"
        >
          {/* Faux Map Background */}
          <div className="absolute inset-0 opacity-20 dark:opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%233b82f6\' fill-opacity=\'0.4\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'3\'/%3E%3Cg/%3E%3C/svg%3E")' }}></div>
          
          <div className="relative z-10 w-full p-6 bg-gradient-to-t from-white via-white to-transparent dark:from-gray-800 dark:via-gray-800">
            <div className="flex items-center gap-2 mb-1">
              <FaMapMarkerAlt className="text-primary" />
              <h4 className="font-bold text-gray-900 dark:text-white">Base of Operations</h4>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Madhya Pradesh, India</p>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default Bento;