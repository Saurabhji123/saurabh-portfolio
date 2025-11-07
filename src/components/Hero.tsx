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
        className="absolute w-1 h-1 bg-red-400 rounded-full opacity-70"
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
  <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#0b0f10] pt-24">
      <Particles />
      
  {/* Background overlay removed for flat red theme */}
  <div className="absolute inset-0"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Profile Image Placeholder - Rectangle */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="mb-8 flex justify-center"
          >
            <div className="inline-block rounded-2xl overflow-hidden bg-slate-800 hover-glow p-0.5 border border-white/10">
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
              <div className="w-40 h-48 rounded-xl bg-slate-700 hidden items-center justify-center">
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
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              Saurabh Shukla
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
            className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Full-Stack & Android Developer. Built a news platform with <span className="text-red-400 font-semibold">7.5M+ visits</span>. Now building <span className="text-red-400 font-semibold">Omegoo</span> (strangers chat app) and <span className="text-red-400 font-semibold">Vaaniweb</span> (voice-to-website generator). Clean code, fast delivery, real impact.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/documents/resume.pdf"
              download="Saurabh_Shukla_Resume.pdf"
              className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-semibold transition-colors"
            >
              <Download size={20} />
              Download Resume
            </motion.a>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-8 py-4 rounded-full font-semibold transition-colors"
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