// src/components/Hero.jsx
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="text-center">

         <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1, type: 'spring', stiffness: 150 }}
          className="w-32 h-32 md:w-44 md:h-44 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl shadow-primary/10"
        >
          <img 
            src="/profile.png" // Make sure this matches your file name in the public folder!
            alt="Aditya Pratap Singh Parihar" 
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-lg md:text-xl font-medium text-gray-500 dark:text-gray-400 mb-2"
        >
          Hello, I'm
        </motion.h2>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold mb-4"
        >
          Aditya Pratap Singh Parihar
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-2xl md:text-3xl font-semibold text-primary mb-8"
        >
          I build{' '}
          <Typewriter
            words={['Modern Web Apps.', 'Interactive UIs.', 'Scalable Backends.']}
            loop={0}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center gap-4"
        >
         {/* --- NEW ANIMATED DOWNLOAD BUTTON --- */}
          <a 
            href="/resume.pdf" 
            download 
            className="relative overflow-hidden group px-6 py-3 bg-primary text-white rounded-lg font-medium shadow-lg shadow-blue-500/30 flex items-center gap-2"
          >
            {/* The sliding background */}
            <span className="absolute inset-0 bg-blue-600 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
            
            {/* The text and icon (z-10 keeps it above the sliding background) */}
            <span className="relative z-10 flex items-center gap-2">
              <FaDownload /> Download Resume
            </span>
          </a>
          {/* ------------------------------------ */}

          <a href="https://github.com/adiitya87" target="_blank" rel="noreferrer" className="p-3 bg-gray-200 dark:bg-gray-800 rounded-lg hover:scale-105 transition-transform">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/aditya-pratap-singh-parihar-03710a312/" target="_blank" rel="noreferrer" className="p-3 bg-gray-200 dark:bg-gray-800 rounded-lg hover:scale-105 transition-transform">
            <FaLinkedin size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;