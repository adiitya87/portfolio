// src/data/data.js
import { FaReact, FaNodeJs, FaHtml5 } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiCplusplus, SiJavascript, SiMysql } from 'react-icons/si';

export const projectsData = [
  {
    id: 1,
    title: "Orato",
    description: "An advanced speech fluency improvement tool that leverages artificial intelligence to analyze and enhance spoken communication. Built with a modern, responsive frontend.",
    techStack: ["React.js", "Tailwind CSS", "Gemini API", "JavaScript"],
    liveLink: "https://orato-five.vercel.app/", 
    githubLink: "https://github.com/adiitya87/orato", 
    image: "/orato-preview.jpg" 
  },
  {
    id: 2,
    title: "StudyNotion",
    description: "A comprehensive e-learning platform designed to deliver seamless educational experiences. It features robust backend architecture to handle course data and user interactions.",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB"],
    liveLink: "#", 
    githubLink: "https://github.com/adiitya87/studynotion", 
    image: "/studynotion.avif"
  }
];

export const skillsData = [
  { name: "React.js", level: 90, icon: FaReact, color: "text-blue-400" },
  { name: "JavaScript (ES6+)", level: 85, icon: SiJavascript, color: "text-yellow-400" },
  { name: "Node.js", level: 80, icon: FaNodeJs, color: "text-green-500" },
  { name: "Express.js", level: 80, icon: SiExpress, color: "text-gray-500 dark:text-gray-300" },
  { name: "MongoDB", level: 75, icon: SiMongodb, color: "text-green-600" },
  { name: "MySQL", level: 75, icon: SiMysql, color: "text-blue-500" },
  { name: "C++", level: 80, icon: SiCplusplus, color: "text-blue-600" },
  { name: "HTML / CSS / Tailwind", level: 95, icon: FaHtml5, color: "text-orange-500" },
];