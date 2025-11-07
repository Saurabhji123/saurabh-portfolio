import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Components
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import FeaturedProject from './components/FeaturedProject';
import Education from './components/Education';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide default cursor and add custom cursor class
    document.body.classList.add('cursor-hidden');
    
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
      document.body.classList.remove('cursor-hidden');
    };
  }, []);

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  // Loading Screen Component
  const LoadingScreen: React.FC = () => (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 bg-black z-50 flex items-center justify-center"
    >
      <div className="text-center">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-20 h-20 mx-auto mb-8"
        >
          <div className="w-full h-full bg-red-600 rounded-full flex items-center justify-center">
            <span className="text-2xl font-bold text-white">SS</span>
          </div>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-4xl font-bold text-white mb-4"
        >
          Saurabh Shukla
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-gray-400 text-lg"
        >
          Code. Create. Innovate.
        </motion.p>
        
        {/* Loading Animation */}
        <motion.div
          className="mt-8 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="flex space-x-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-3 h-3 bg-red-500 rounded-full"
                animate={{ 
                  y: [0, -10, 0],
                  opacity: [0.3, 1, 0.3]
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );

  return (
  <div className={`min-h-screen dark`}>
      <CustomCursor />
      
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Navigation */}
            <Navigation />
            
            {/* Main Content */}
            <main className="relative">
              {/* Hero Section */}
              <Hero />
              
              {/* About Section */}
              <About />
              
              {/* Skills Section */}
              <Skills />
              
              {/* Featured Project Section */}
              <FeaturedProject />
              
              {/* Projects Section */}
              <Projects />
              
              {/* Education Section */}
              <Education />
              
              {/* Contact Section */}
              <Contact />
            </main>

            {/* Footer */}
            <footer className="bg-black/80 border-t border-white/10 py-8">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                  <div className="mb-4 md:mb-0">
                    <h3 className="text-xl font-bold text-red-500">Saurabh Shukla</h3>
                    <p className="text-gray-400 text-sm">
                      Web & Android Developer
                    </p>
                  </div>
                  
                  <div className="text-center md:text-right">
                    <p className="text-gray-400 text-sm">
                      © {new Date().getFullYear()} Saurabh Shukla. All rights reserved.
                    </p>
                    <p className="text-gray-500 text-xs mt-1">
                      Built with React, TypeScript & ❤️
                    </p>
                  </div>
                </div>
              </div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
