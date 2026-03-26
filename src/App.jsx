// src/App.jsx
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Bento from './components/Bento';
import Terminal from './components/Terminal';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen font-sans selection:bg-primary selection:text-white">
        <Navbar />
        <main>
          <Hero />
          <Skills />
          <Bento />
          <Terminal/>
          <Projects />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;