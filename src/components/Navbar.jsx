// src/components/Navbar.jsx
import { useContext } from 'react';
import { Link } from 'react-scroll';
import { ThemeContext } from '../context/ThemeContext';
import { FiSun, FiMoon } from 'react-icons/fi';
import { motion, useScroll } from 'framer-motion'; // Added useScroll here

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  
  // This hook tracks the scroll position from 0 (top) to 1 (bottom)
  const { scrollYProgress } = useScroll();

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full z-50 top-0 bg-white/70 dark:bg-darkBg/70 backdrop-blur-md border-b border-gray-200 dark:border-gray-800"
    >
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tighter text-primary">Portfolio.</h1>
        
        <div className="flex items-center gap-6 hidden md:flex">
          {['home', 'skills', 'projects', 'contact'].map((item) => (
            <Link 
              key={item}
              to={item} 
              smooth={true} 
              duration={500} 
              className="cursor-pointer capitalize font-medium hover:text-primary transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>

        <button 
          onClick={toggleTheme} 
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
        >
          {theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
        </button>
      </div>

      {/* --- SCROLL PROGRESS BAR --- */}
      <motion.div
        className="absolute bottom-0 left-0 h-1 bg-primary w-full origin-left"
        style={{ scaleX: scrollYProgress }}
      />
      {/* --------------------------- */}
    </motion.nav>
  );
};

export default Navbar;