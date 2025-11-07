import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code, Smartphone, Globe, Award } from 'lucide-react';

const About: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const highlights = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Development",
      description: "2.5+ years of experience building scalable web applications with modern technologies"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Development", 
      description: "Native Android development with Kotlin & Java, published apps on Google Play Store"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Full Stack Solutions",
      description: "End-to-end development from concept to deployment with API integrations"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Proven Results",
      description: "7.5M+ web traffic generated and multiple successful project deployments"
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
    <section id="about" className="py-20 bg-black/30">
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
              About Me
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Passionate developer dedicated to creating innovative digital solutions
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Description */}
            <motion.div variants={itemVariants} className="space-y-6">
              <motion.p 
                className="text-lg text-gray-300 leading-relaxed"
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                I'm a <span className="text-red-400 font-semibold">full-stack developer</span> from Prayagraj, India building fast, reliable <span className="text-red-400 font-semibold">web</span> & <span className="text-red-400 font-semibold">Android</span> products.
              </motion.p>

              <motion.p 
                className="text-lg text-gray-300 leading-relaxed"
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                2.5+ yrs with <span className="text-red-400 font-semibold">MERN</span> & <span className="text-red-400 font-semibold">Kotlin/Java</span>; performance, clean UI & problem solving. MCA student (<span className="text-red-400 font-semibold">LPU</span>).
              </motion.p>

              <motion.p 
                className="text-lg text-gray-300 leading-relaxed"
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Built a news platform with <span className="text-red-400 font-semibold">7.5M+ visits</span> and shipped multiple <span className="text-red-400 font-semibold">Android apps</span>.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="pt-4"
              >
                <h3 className="text-xl font-semibold text-red-500 mb-4">Focus Areas:</h3>
                <ul className="space-y-2">
                  {[
                    "User-centric solutions",
                    "Performance across web & mobile",
                    "Collaboration & continuous learning"
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                      className="flex items-start gap-3 text-gray-300"
                    >
                      <span className="text-red-400 mt-1">•</span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>

            {/* Right Side - Highlights Grid */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 50, rotateY: -15 }}
                  animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : { opacity: 0, y: 50, rotateY: -15 }}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div className={`inline-flex p-3 rounded-lg bg-red-700/30 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-white">
                      {highlight.icon}
                    </span>
                  </div>
                  
                  <h4 className="text-lg font-semibold text-white mb-3 group-hover:text-red-400 transition-colors">
                    {highlight.title}
                  </h4>
                  
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {highlight.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Bottom CTA */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-16"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-slate-900/60 rounded-2xl p-8 border border-white/10"
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to work together?
              </h3>
              <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                Open to new projects—let's build something impactful.
              </p>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-semibold transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Get In Touch
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;