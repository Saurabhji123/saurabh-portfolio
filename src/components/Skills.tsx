import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code, Globe, Palette, Server, Flame, Smartphone, GitBranch, Cloud, Phone, CreditCard, Eye, Wrench } from 'lucide-react';
import { MongoLeafIcon, CoffeeCupIcon, PythonIcon, VercelIcon } from './customIcons';

interface Skill {
  name: string;
  level: number;
  category: string;
  icon: React.ReactNode;
}

const Skills: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Reusable custom inline SVGs for technologies without lucid icons
  // Custom icons centralized in customIcons.tsx for reuse

  const skills: Skill[] = [
    // Frontend
    { name: 'React.js', level: 90, category: 'Frontend', icon: <Code className="w-5 h-5 text-red-500" /> },
    { name: 'HTML', level: 95, category: 'Frontend', icon: <Globe className="w-5 h-5 text-red-500" /> },
    { name: 'CSS', level: 90, category: 'Frontend', icon: <Palette className="w-5 h-5 text-red-500" /> },
    { name: 'JavaScript', level: 85, category: 'Frontend', icon: <Code className="w-5 h-5 text-red-500" /> },
    { name: 'TailwindCSS', level: 88, category: 'Frontend', icon: <Wrench className="w-5 h-5 text-red-500" /> },

    // Backend
    { name: 'Node.js', level: 85, category: 'Backend', icon: <Server className="w-5 h-5 text-red-500" /> },
    { name: 'Express.js', level: 82, category: 'Backend', icon: <Server className="w-5 h-5 text-red-500" /> },
  { name: 'MongoDB', level: 80, category: 'Backend', icon: <MongoLeafIcon /> },
    { name: 'Firebase', level: 78, category: 'Backend', icon: <Flame className="w-5 h-5 text-red-500" /> },

    // App Development
    { name: 'Android Studio', level: 85, category: 'App Development', icon: <Smartphone className="w-5 h-5 text-red-500" /> },
    { name: 'Kotlin', level: 80, category: 'App Development', icon: <Code className="w-5 h-5 text-red-500" /> },
  { name: 'Java', level: 83, category: 'App Development', icon: <CoffeeCupIcon /> },

    // Other Tools
    { name: 'Git', level: 88, category: 'Other Tools', icon: <GitBranch className="w-5 h-5 text-red-500" /> },
    { name: 'Render', level: 75, category: 'Other Tools', icon: <Cloud className="w-5 h-5 text-red-500" /> },
  { name: 'Vercel', level: 82, category: 'Other Tools', icon: <VercelIcon /> },
    { name: 'Twilio API', level: 70, category: 'Other Tools', icon: <Phone className="w-5 h-5 text-red-500" /> },
    { name: 'Razorpay', level: 72, category: 'Other Tools', icon: <CreditCard className="w-5 h-5 text-red-500" /> },
    { name: 'OpenCV', level: 75, category: 'Other Tools', icon: <Eye className="w-5 h-5 text-red-500" /> },
    { name: 'Google Colab', level: 78, category: 'Other Tools', icon: <Cloud className="w-5 h-5 text-red-500" /> },
  { name: 'Python', level: 80, category: 'Other Tools', icon: <PythonIcon /> },
  ];

  const categories = ['All', 'Frontend', 'Backend', 'App Development', 'Other Tools'];

  const filteredSkills = selectedCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="skills" className="py-20 bg-black/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-red-500">
              Skills & Expertise
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-red-600 text-white shadow-lg'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Skills Grid */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-red-600/10 border border-red-600/30">
                    {skill.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-red-400 transition-colors">
                      {skill.name}
                    </h3>
                    <p className="text-sm text-gray-500">{skill.category}</p>
                  </div>
                </div>
                
                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">Proficiency</span>
                    <span className="text-sm font-medium text-white">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1.5, delay: index * 0.1, ease: 'easeOut' }}
                      className="h-full bg-red-600 rounded-full relative"
                    >
                      <div className="absolute inset-0 bg-red-500/70 animate-pulse"></div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats Section */}
          <motion.div
            variants={itemVariants}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-3xl md:text-4xl font-bold text-white mb-2"
              >
                2.5+
              </motion.div>
              <p className="text-gray-400">Years Experience</p>
            </div>
            
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-3xl md:text-4xl font-bold text-white mb-2"
              >
                7.5M+
              </motion.div>
              <p className="text-gray-400">Web Traffic</p>
            </div>
            
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-3xl md:text-4xl font-bold text-white mb-2"
              >
                10+
              </motion.div>
              <p className="text-gray-400">Projects Completed</p>
            </div>
            
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-3xl md:text-4xl font-bold text-white mb-2"
              >
                2
              </motion.div>
              <p className="text-gray-400">Live Apps on Play Store</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;