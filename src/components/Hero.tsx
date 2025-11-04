import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const [typewriterText, setTypewriterText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = 'Code. Create. Innovate.';

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setTypewriterText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  // Particle animation component
  const Particles: React.FC = () => {
    const particles = Array.from({ length: 50 }, (_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-70"
        initial={{
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
        }}
        animate={{
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
        }}
        transition={{
          duration: Math.random() * 20 + 10,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    ));

    return <div className="particles">{particles}</div>;
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden gradient-bg pt-24">
      <Particles />
      
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Profile Image Placeholder - Rectangle */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="mb-8 flex justify-center"
          >
            <div className="inline-block rounded-2xl overflow-hidden bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 hover-glow p-0.5">
              {/* Profile picture - Replace /images/profile.jpg with your actual image */}
              <img 
                src="/images/profile.jpg" 
                alt="Saurabh Shukla" 
                className="max-w-[14rem] max-h-[16rem] object-contain rounded-xl bg-gray-900"
                onError={(e) => {
                  // Fallback to initials if image not found
                  e.currentTarget.style.display = 'none';
                  const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              <div className="w-40 h-48 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 hidden items-center justify-center">
                <span className="text-3xl font-bold text-white">SS</span>
              </div>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent glow-text">
                Saurabh Shukla
              </span>
            </h1>
          </motion.div>

          {/* Typewriter Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-medium text-gray-300 min-h-[3rem]">
              <span className="typewriter">{typewriterText}</span>
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Full-Stack Developer specializing in <span className="text-blue-400 font-semibold">React.js</span>, <span className="text-green-400 font-semibold">Node.js</span>, and <span className="text-purple-400 font-semibold">Android Development</span>. 
            Built high-traffic platforms like <span className="text-cyan-400 font-semibold">Omegoo</span> (7.5M+ visitors) and innovative AI-powered solutions. 
            Passionate about creating scalable, user-centric applications that solve real-world problems and drive business growth.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(59, 130, 246, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              href="/documents/resume.pdf"
              download="Saurabh_Shukla_Resume.pdf"
              className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
            >
              <Download size={20} />
              Download Resume
            </motion.a>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              className="flex items-center gap-2 border-2 border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:border-white/40 hover:bg-white/10 transition-all duration-300"
            >
              Let's Connect
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex items-center justify-center gap-6 mb-16"
          >
            <motion.a
              whileHover={{ scale: 1.2, y: -5 }}
              href="https://github.com/Saurabhji123"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-300"
            >
              <Github size={24} className="text-white" />
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.2, y: -5 }}
              href="https://www.linkedin.com/in/saurabh-shukla-0a6914226"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-300"
            >
              <Linkedin size={24} className="text-white" />
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.2, y: -5 }}
              href="mailto:saurabhshukla1966@gmail.com"
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-300"
            >
              <Mail size={24} className="text-white" />
            </motion.a>
          </motion.div>

          {/* Scroll Down Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.button
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              onClick={() => scrollToSection('about')}
              className="p-2 text-white/60 hover:text-white transition-colors duration-300"
            >
              <ChevronDown size={32} />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;