import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Github, Smartphone, Globe, Play, Filter, Star } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  category: 'Web' | 'Android';
  image: string;
  liveLink?: string;
  githubLink?: string;
  playStoreLink?: string;
  featured?: boolean;
}

const Projects: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Web' | 'Android'>('All');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects: Project[] = [
    // Web Projects
    {
      id: 1,
      title: 'Omegoo - Strangers Talk Website',
      description: 'A platform where all the strangers getting connected randomly and chilling and doing something new and exploring the people',
      tags: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'WebRTC'],
      category: 'Web',
      image: '/api/placeholder/600/400',
      liveLink: 'https://omegoo.chat',
      githubLink: 'https://github.com/Saurabhji123/omegoo',
      featured: true
    },
    {
      id: 2,
      title: 'Vaaniweb - Voice Website Creator',
      description: 'Create Website by your voice in just 5 seconds. Revolutionary platform that converts speech to functional websites',
      tags: ['React', 'Voice Recognition', 'AI', 'TailwindCSS'],
      category: 'Web',
      image: '/api/placeholder/600/400',
      liveLink: 'https://vaaniweb.com',
      githubLink: 'https://github.com/Saurabhji123/vaaniweb'
    },
    
    // Android Projects
    {
      id: 3,
      title: 'BMI Calculator',
      description: 'Health-based calculator app with personalized recommendations and health tracking features',
      tags: ['Kotlin', 'Android Studio', 'Material Design', 'SQLite'],
      category: 'Android',
      image: '/api/placeholder/600/400',
      playStoreLink: '#',
      githubLink: '#'
    },
    {
      id: 4,
      title: 'Multipurpose Application',
      description: 'Combines tools like calculator, notes, and converter in one place. All-in-one productivity app',
      tags: ['Java', 'Android Studio', 'Room DB', 'Material Components'],
      category: 'Android',
      image: '/api/placeholder/600/400',
      playStoreLink: '#',
      githubLink: '#'
    },
    {
      id: 5,
      title: 'Mood-Based Music Player',
      description: 'AI-based app that detects mood from face and plays matching songs using computer vision',
      tags: ['Kotlin', 'OpenCV', 'Machine Learning', 'Spotify API'],
      category: 'Android',
      image: '/api/placeholder/600/400',
      githubLink: '#'
    }
  ];

  const categories: ('All' | 'Web' | 'Android')[] = ['All', 'Web', 'Android'];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="projects" className="py-20 bg-[#0b0f1a]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={cardVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              <span className="text-red-500">Featured Projects</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Showcasing my latest work in web and mobile development
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div variants={cardVariants} className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center gap-2 bg-white/5 rounded-full p-2">
              <Filter className="w-5 h-5 text-gray-400 ml-2" />
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-red-600 hover:bg-red-700 text-white shadow-lg'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                whileHover={{ y: -10 }}
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
                className="group relative bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <div className="w-full h-full bg-slate-800/40 flex items-center justify-center">
                    {project.category === 'Web' ? (
                      <Globe className="w-12 h-12 opacity-50 text-red-500" />
                    ) : (
                      <Smartphone className="w-12 h-12 opacity-50 text-red-500" />
                    )}
                  </div>
                  
                  {/* Overlay on hover */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                    className="absolute inset-0 bg-black/60 flex items-center justify-center gap-4"
                  >
                    {project.liveLink && (
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5 text-white" />
                      </motion.a>
                    )}
                    
                    {project.githubLink && (
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                      >
                        <Github className="w-5 h-5 text-white" />
                      </motion.a>
                    )}
                    
                    {project.playStoreLink && (
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.playStoreLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                      >
                        <Play className="w-5 h-5 text-white" />
                      </motion.a>
                    )}
                  </motion.div>

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-yellow-400/90 text-black text-xs font-bold rounded-full flex items-center gap-1">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-600" /> FEATURED
                      </span>
                    </div>
                  )}

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-black/60 text-white text-xs font-medium rounded-full flex items-center gap-1">
                      {project.category === 'Web' ? <Globe className="w-3 h-3" /> : <Smartphone className="w-3 h-3" />}
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-3">
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-red-400 hover:text-red-300 transition-colors text-sm font-medium"
                      >
                        Live Demo →
                      </a>
                    )}
                    
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors text-sm"
                      >
                        GitHub
                      </a>
                    )}
                    
                    {project.playStoreLink && (
                      <a
                        href={project.playStoreLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-400 hover:text-green-300 transition-colors text-sm"
                      >
                        Play Store
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* View More Button */}
          <motion.div 
            variants={cardVariants}
            className="text-center mt-12"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/Saurabhji123"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-full font-semibold transition-colors"
            >
              <Github className="w-5 h-5" />
              View More on GitHub
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;