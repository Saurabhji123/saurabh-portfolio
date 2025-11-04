import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Github, Users, MessageCircle, Globe, Star, Mic, Zap, Sparkles } from 'lucide-react';

const FeaturedProject: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [activeProject, setActiveProject] = useState<'omegoo' | 'vaaniweb'>('omegoo');

  const projects = {
    omegoo: {
      name: "Omegoo",
      tagline: "Talk to strangers across the world",
      description: "A revolutionary platform where strangers get connected randomly, creating meaningful conversations and exploring new cultures while building global friendships.",
      icon: (
        <svg className="w-20 h-20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="35" cy="35" r="30" fill="url(#omegoo-gradient1)" />
          <circle cx="65" cy="65" r="30" fill="url(#omegoo-gradient2)" />
          <defs>
            <linearGradient id="omegoo-gradient1" x1="0" y1="0" x2="70" y2="70">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
            <linearGradient id="omegoo-gradient2" x1="30" y1="30" x2="100" y2="100">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>
        </svg>
      ),
      features: [
        { icon: <Users className="w-6 h-6" />, title: "Random Connections", description: "Connect with strangers from around the world instantly" },
        { icon: <MessageCircle className="w-6 h-6" />, title: "Real-time Chat", description: "Seamless messaging experience with live notifications" },
        { icon: <Globe className="w-6 h-6" />, title: "Global Reach", description: "Users from 50+ countries actively engaging" }
      ],
      stats: [
        { number: "7.5M+", label: "Total Traffic" },
        { number: "50K+", label: "Active Users" },
        { number: "500K+", label: "Connections Made" },
        { number: "99.9%", label: "Uptime" }
      ],
      tech: ['React.js', 'Node.js', 'Socket.io', 'MongoDB', 'Express.js', 'WebRTC'],
      liveLink: 'https://omegoo.chat',
      githubLink: 'https://github.com/Saurabhji123/omegoo'
    },
    vaaniweb: {
      name: "Vaaniweb",
      tagline: "Create Website by Voice in 5 Seconds",
      description: "Revolutionary AI-powered platform that converts your voice commands into fully functional websites in just 5 seconds. Simply speak what you want, and watch as Vaaniweb creates a beautiful, responsive website instantly.",
      icon: (
        <svg className="w-20 h-20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="45" fill="url(#vaaniweb-gradient)" />
          <path d="M50 25 L50 75 M35 40 L50 50 L35 60 M65 40 L50 50 L65 60" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="50" cy="50" r="8" fill="white" />
          <defs>
            <linearGradient id="vaaniweb-gradient" x1="0" y1="0" x2="100" y2="100">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
        </svg>
      ),
      features: [
        { icon: <Mic className="w-6 h-6" />, title: "Voice Recognition", description: "Advanced AI understands your voice commands perfectly" },
        { icon: <Zap className="w-6 h-6" />, title: "5 Second Creation", description: "Get a fully functional website in just 5 seconds" },
        { icon: <Sparkles className="w-6 h-6" />, title: "Smart Design", description: "AI automatically creates beautiful, responsive layouts" }
      ],
      stats: [
        { number: "5 Sec", label: "Average Time" },
        { number: "100K+", label: "Websites Created" },
        { number: "98%", label: "User Satisfaction" },
        { number: "24/7", label: "Availability" }
      ],
      tech: ['React.js', 'Voice Recognition API', 'AI/ML', 'Node.js', 'TailwindCSS', 'OpenAI'],
      liveLink: 'https://vaaniweb.com',
      githubLink: 'https://github.com/Saurabhji123/vaaniweb'
    }
  };

  const currentProject = projects[activeProject];

  return (
    <section id="featured-project" className="py-20 bg-gradient-to-br from-blue-900/10 via-purple-900/10 to-cyan-900/10 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Star className="w-6 h-6 text-yellow-400 fill-current" />
              <span className="text-yellow-400 font-semibold">FEATURED PROJECTS</span>
              <Star className="w-6 h-6 text-yellow-400 fill-current" />
            </div>

            {/* Project Tabs */}
            <div className="flex justify-center gap-4 mb-8">
              <button
                onClick={() => setActiveProject('omegoo')}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeProject === 'omegoo'
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                Omegoo
              </button>
              <button
                onClick={() => setActiveProject('vaaniweb')}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeProject === 'vaaniweb'
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                Vaaniweb
              </button>
            </div>
            
            <div className="flex justify-center mb-6">
              {currentProject.icon}
            </div>

            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                {currentProject.name}
              </span>
            </h2>
            
            <p className="text-2xl md:text-3xl text-gray-300 font-light mb-4">
              "{currentProject.tagline}"
            </p>
            
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              {currentProject.description}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Project Preview */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500"
                >
                  <div className="bg-gray-800 rounded-lg p-4 mb-4">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <div className="bg-gray-700 rounded px-4 py-1 ml-4 flex-1 text-sm text-gray-300">
                        {currentProject.liveLink}
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded p-6 text-center">
                      <div className="text-white text-2xl font-bold mb-4">{currentProject.name}</div>
                      <div className="text-blue-100 mb-6">{currentProject.tagline}</div>
                      <div className="flex justify-center gap-4">
                        {currentProject.features.slice(0, 2).map((feature, idx) => (
                          <div key={idx} className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                            {feature.icon}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute -top-4 -right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold"
                  >
                    🟢 LIVE
                  </motion.div>
                </motion.div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Built With</h3>
                <div className="flex flex-wrap gap-3">
                  {currentProject.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-white/10 text-gray-300 rounded-full text-sm font-medium hover:bg-white/20 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(59, 130, 246, 0.4)' }}
                  whileTap={{ scale: 0.95 }}
                  href={currentProject.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 justify-center"
                >
                  <ExternalLink className="w-5 h-5" />
                  Visit Live Site
                </motion.a>
                
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={currentProject.githubLink}
                  className="flex items-center gap-2 border-2 border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:border-white/40 hover:bg-white/10 transition-all duration-300 justify-center"
                >
                  <Github className="w-5 h-5" />
                  View Code
                </motion.a>
              </div>
            </motion.div>

            {/* Right Side - Features & Stats */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-12"
            >
              <div>
                <h3 className="text-2xl font-bold text-white mb-8">Key Features</h3>
                <div className="space-y-6">
                  {currentProject.features.map((feature, index) => (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                      className="flex items-start gap-4 p-4 bg-white/5 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300"
                    >
                      <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-1">{feature.title}</h4>
                        <p className="text-gray-400">{feature.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-8">Project Impact</h3>
                <div className="grid grid-cols-2 gap-4">
                  {currentProject.stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                      transition={{ duration: 0.5, delay: 1.0 + index * 0.1 }}
                      className="text-center p-6 bg-white/5 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300 group"
                    >
                      <div className="text-2xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                        {stat.number}
                      </div>
                      <div className="text-gray-400 text-sm">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Achievement Badges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-16 flex flex-wrap justify-center gap-6"
          >
            <div className="flex items-center gap-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 px-6 py-3 rounded-full border border-yellow-500/30">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#fbbf24" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-yellow-400 font-semibold">Featured Project</span>
            </div>
            
            <div className="flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 px-6 py-3 rounded-full border border-green-500/30">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L12 6M12 18L12 22M6 12L2 12M22 12L18 12M19.07 4.93L16.24 7.76M7.76 16.24L4.93 19.07M19.07 19.07L16.24 16.24M7.76 7.76L4.93 4.93" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="12" r="3" fill="#10b981"/>
              </svg>
              <span className="text-green-400 font-semibold">High Traffic</span>
            </div>
            
            <div className="flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 px-6 py-3 rounded-full border border-purple-500/30">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L12 22M5 12L19 12" stroke="#a855f7" strokeWidth="2" strokeLinecap="round"/>
                <path d="M12 6L19 12L12 18L5 12L12 6Z" fill="#a855f7"/>
              </svg>
              <span className="text-purple-400 font-semibold">Scalable Platform</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProject;