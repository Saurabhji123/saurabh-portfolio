import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award, Building, BookOpen } from 'lucide-react';

const Education: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const educationData = [
    {
      id: 1,
      degree: "Master of Computer Application (MCA)",
      institution: "Lovely Professional University",
      location: "Phagwara, Punjab",
      duration: "2025 - 2027",
      status: "Current",
      description: "Pursuing advanced studies in computer science with focus on software development, AI, and system design.",
      highlights: ["Advanced Programming", "Software Engineering", "Database Systems", "AI & Machine Learning"],
      icon: "🎓"
    },
    {
      id: 2,
      degree: "Bachelor of Computer Application (BCA)",
      institution: "United Institute of Management (FUGS)",
      location: "Naini, Prayagraj",
      duration: "2022 - 2025",
      status: "Completed",
      description: "Comprehensive undergraduate program covering programming fundamentals, web development, and database management.",
      highlights: ["Web Development", "Programming Languages", "Database Management", "Software Testing"],
      icon: "🎓"
    }
  ];

  const internshipData = {
    title: "Software Development Intern",
    company: "MNNIT Prayagraj",
    duration: "March 2024 - March 2025",
    project: "Caregiver Service Platform",
    description: "Working on a comprehensive Caregiver Service Platform encompassing both web and Android applications.",
    technologies: ["React.js", "Node.js", "Android Studio", "Kotlin", "MongoDB", "Express.js"],
    achievements: [
      "Developed full-stack web application with modern UI/UX",
      "Built native Android app with intuitive user experience",
      "Implemented real-time notifications and messaging system",
      "Integrated secure payment gateway and user authentication"
    ]
  };

  const achievements = [
    {
      icon: "🌐",
      title: "7.5M+ Web Traffic",
      description: "Generated massive web traffic across projects (2021-2023)"
    },
    {
      icon: "📱",
      title: "Live Android Apps",
      description: "Successfully launched 2 game apps on Google Play Store"
    },
    {
      icon: "🔧",
      title: "API Integrations",
      description: "Implemented Twilio, Razorpay, and other service integrations"
    },
    {
      icon: "⚡",
      title: "Scalable Solutions",
      description: "Built platforms supporting thousands of concurrent users"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="education" className="py-20 bg-gradient-to-b from-black/80 to-black/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                Education & Experience
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              My academic journey and professional experience in technology
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education Timeline */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-3 mb-8">
                <GraduationCap className="w-8 h-8 text-blue-400" />
                <h3 className="text-2xl font-bold text-white">Education</h3>
              </div>

              <div className="space-y-8">
                {educationData.map((edu, index) => (
                  <motion.div
                    key={edu.id}
                    initial={{ opacity: 0, x: -50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="relative"
                  >
                    {/* Timeline Line */}
                    {index < educationData.length - 1 && (
                      <div className="absolute left-6 top-16 w-0.5 h-24 bg-gradient-to-b from-blue-400 to-purple-500"></div>
                    )}
                    
                    <div className="flex gap-6">
                      {/* Timeline Dot */}
                      <div className="relative">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-2xl">
                          {edu.icon}
                        </div>
                        {edu.status === 'Current' && (
                          <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full"
                          ></motion.div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="flex-1 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
                        <div className="flex flex-wrap items-center gap-2 mb-3">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            edu.status === 'Current' 
                              ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                              : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                          }`}>
                            {edu.status}
                          </span>
                          <div className="flex items-center gap-1 text-gray-400 text-sm">
                            <Calendar className="w-4 h-4" />
                            {edu.duration}
                          </div>
                        </div>

                        <h4 className="text-xl font-bold text-white mb-2">{edu.degree}</h4>
                        
                        <div className="flex items-center gap-2 text-gray-300 mb-2">
                          <Building className="w-4 h-4" />
                          {edu.institution}
                        </div>
                        
                        <div className="flex items-center gap-2 text-gray-400 mb-4">
                          <MapPin className="w-4 h-4" />
                          {edu.location}
                        </div>

                        <p className="text-gray-400 mb-4">{edu.description}</p>

                        <div className="flex flex-wrap gap-2">
                          {edu.highlights.map((highlight, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-white/10 text-gray-300 rounded-md text-sm"
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Internship & Achievements */}
            <motion.div variants={itemVariants} className="space-y-12">
              {/* Internship Section */}
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <BookOpen className="w-8 h-8 text-purple-400" />
                  <h3 className="text-2xl font-bold text-white">Internship</h3>
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h4 className="text-2xl font-bold text-white mb-2">{internshipData.title}</h4>
                      <div className="flex items-center gap-2 text-purple-400 mb-2">
                        <Building className="w-5 h-5" />
                        <span className="text-lg font-semibold">{internshipData.company}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <Calendar className="w-4 h-4" />
                        {internshipData.duration}
                      </div>
                    </div>
                    <div className="text-4xl">💼</div>
                  </div>

                  <div className="mb-6">
                    <h5 className="text-lg font-semibold text-white mb-2">Project: {internshipData.project}</h5>
                    <p className="text-gray-400 mb-4">{internshipData.description}</p>
                  </div>

                  <div className="mb-6">
                    <h6 className="text-white font-semibold mb-3">Technologies Used:</h6>
                    <div className="flex flex-wrap gap-2">
                      {internshipData.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-md text-sm border border-purple-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h6 className="text-white font-semibold mb-3">Key Achievements:</h6>
                    <ul className="space-y-2">
                      {internshipData.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-300">
                          <span className="text-green-400 mt-1">✓</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>

              {/* Achievements Section */}
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <Award className="w-8 h-8 text-yellow-400" />
                  <h3 className="text-2xl font-bold text-white">Achievements</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={achievement.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group"
                    >
                      <div className="text-3xl mb-3">{achievement.icon}</div>
                      <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                        {achievement.title}
                      </h4>
                      <p className="text-gray-400 text-sm">{achievement.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;