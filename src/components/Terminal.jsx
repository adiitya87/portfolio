import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { projectsData, skillsData } from '../data/data';

const Terminal = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    {
      command: '',
      output: (
        <div className="text-gray-300">
          <p>Welcome to AdityaOS (v1.0.0)</p>
          <p className="mb-2">Type <span className="text-green-400 font-bold">'help'</span> to see a list of available commands.</p>
        </div>
      ),
    },
  ]);
  
  const inputRef = useRef(null);
  const bottomRef = useRef(null);

  // Auto-scroll to the bottom ONLY when a new command is entered
  useEffect(() => {
    if (history.length > 1) {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [history]);

  // Keep input focused when clicking anywhere inside the terminal
  const handleTerminalClick = () => {
    inputRef.current?.focus();
  };

  const processCommand = (cmd) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    let output;

    switch (trimmedCmd) {
      case 'help':
        output = (
          <div className="text-gray-300">
            <p><span className="text-blue-400 w-20 inline-block">about</span> - Who am I?</p>
            <p><span className="text-blue-400 w-20 inline-block">skills</span> - View my tech stack</p>
            <p><span className="text-blue-400 w-20 inline-block">projects</span> - View my featured work</p>
            <p><span className="text-blue-400 w-20 inline-block">clear</span> - Clear the terminal screen</p>
            <p><span className="text-blue-400 w-20 inline-block">sudo</span> - ???</p>
          </div>
        );
        break;
      case 'about':
        output = (
          <p className="text-gray-300">
            Hi, I'm Aditya Pratap Singh Parihar. I'm a final-year Computer Science Engineering student at Medicaps University. I specialize in the MERN stack and love building scalable backends and highly interactive frontends.
          </p>
        );
        break;
      case 'skills':
        output = (
          <div className="text-gray-300">
            <p className="mb-1 text-green-400">Loading modules...</p>
            <div className="grid grid-cols-2 gap-2 mt-2">
              {skillsData.map((skill) => (
                <span key={skill.name}>► {skill.name}</span>
              ))}
            </div>
          </div>
        );
        break;
      case 'projects':
        output = (
          <div className="text-gray-300">
            {projectsData.map((project) => (
              <div key={project.id} className="mb-3">
                <span className="text-blue-400 font-bold">{project.title}</span>
                <span className="text-gray-500 mx-2">-</span>
                <span>{project.techStack.join(', ')}</span>
                <br />
                <a href={project.githubLink} target="_blank" rel="noreferrer" className="text-green-400 hover:underline text-sm mt-1 inline-block">
                  [View Source Code]
                </a>
              </div>
            ))}
          </div>
        );
        break;
      case 'sudo':
        output = <p className="text-red-400">Nice try! This incident will be reported. 🚨</p>;
        break;
      case 'clear':
        setHistory([]);
        return; // Exit early so we don't add the 'clear' command to history
      case '':
        output = '';
        break;
      default:
        output = <p className="text-red-400">Command not found: {trimmedCmd}. Type 'help' for a list of commands.</p>;
    }

    setHistory((prev) => [...prev, { command: cmd, output }]);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      processCommand(input);
      setInput('');
    }
  };

  return (
    <section id="terminal" className="py-20 max-w-4xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white">
          Developer Identity
        </h2>
        
        {/* Terminal Window */}
        <div 
          onClick={handleTerminalClick}
          className="w-full h-[400px] bg-[#0d1117] rounded-xl overflow-hidden shadow-2xl border border-gray-700 font-mono text-sm cursor-text flex flex-col"
        >
          {/* Mac-style Header Bar */}
          <div className="bg-[#161b22] px-4 py-3 border-b border-gray-700 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="ml-4 text-gray-400 text-xs tracking-wider">aditya@portfolio ~ zsh</span>
          </div>

          {/* Terminal Body */}
          <div className="p-4 flex-grow overflow-y-auto custom-scrollbar">
            {history.map((entry, index) => (
              <div key={index} className="mb-4">
                {entry.command && (
                  <div className="flex gap-2 text-gray-300 mb-1">
                    <span className="text-green-400 font-bold">aditya@portfolio</span>
                    <span className="text-blue-400">~</span>
                    <span className="text-gray-400">$</span>
                    <span>{entry.command}</span>
                  </div>
                )}
                {entry.output}
              </div>
            ))}

            {/* Active Input Line */}
            <div className="flex gap-2 text-gray-300">
              <span className="text-green-400 font-bold">aditya@portfolio</span>
              <span className="text-blue-400">~</span>
              <span className="text-gray-400">$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-grow bg-transparent outline-none border-none text-gray-300 placeholder-gray-600 caret-green-400"
                autoComplete="off"
                spellCheck="false"
              />
            </div>
            
            {/* Invisible div to anchor the scroll to bottom */}
            <div ref={bottomRef} />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Terminal;