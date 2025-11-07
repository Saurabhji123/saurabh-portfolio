import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Github, Linkedin, MapPin, Send, ExternalLink, MessageCircle, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [showToast, setShowToast] = useState(false);

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "saurabhshukla1966@gmail.com",
      href: "mailto:saurabhshukla1966@gmail.com",
      description: "Drop me a line anytime"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location", 
      value: "Prayagraj, India",
      href: null,
      description: "Available for remote work"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Portfolio",
      value: "saurabhshukla.dev",
      href: "https://saurabh-appdev-portfolio.vercel.app/",
      description: "Explore my work"
    }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="w-6 h-6" />,
      href: "https://github.com/Saurabhji123",
      color: "hover:text-gray-300",
      bgColor: "hover:bg-gray-800"
    },
    {
      name: "LinkedIn", 
      icon: <Linkedin className="w-6 h-6" />,
      href: "https://www.linkedin.com/in/saurabh-shukla-0a6914226",
      color: "hover:text-red-400",
      bgColor: "hover:bg-red-500/10"
    },
    {
      name: "Email",
      icon: <Mail className="w-6 h-6" />,
      href: "mailto:saurabhshukla1966@gmail.com", 
      color: "hover:text-red-400",
      bgColor: "hover:bg-red-500/20"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all required fields (Name, Email, and Message)');
      return;
    }
    
    // Create detailed mailto link with all form data
    const subject = encodeURIComponent(formData.subject || 'New Message from Portfolio Website');
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\n---\nSent from Portfolio Contact Form`
    );
    
    // Open email client with pre-filled information
    const mailtoLink = `mailto:saurabhshukla1966@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;

    // Non-blocking toast confirmation
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 2500);
  };

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
    <section id="contact" className="py-20 bg-[#0b0f1a] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
  <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-red-500/5 rounded-full blur-3xl animate-pulse"></div>
  <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-red-700/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-red-500">Let's Connect</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-red-500 mb-6">Send Me a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                      whileFocus={{ scale: 1.02 }}
                      className="space-y-2"
                    >
                      <label htmlFor="name" className="text-gray-300 text-sm font-medium">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-400 focus:ring-1 focus:ring-red-400 transition-all duration-300"
                        placeholder="Enter your name"
                      />
                    </motion.div>

                    <motion.div
                      whileFocus={{ scale: 1.02 }}
                      className="space-y-2"
                    >
                      <label htmlFor="email" className="text-gray-300 text-sm font-medium">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-400 focus:ring-1 focus:ring-red-400 transition-all duration-300"
                        placeholder="Enter your email"
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    className="space-y-2"
                  >
                    <label htmlFor="subject" className="text-gray-300 text-sm font-medium">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-400 focus:ring-1 focus:ring-red-400 transition-all duration-300"
                      placeholder="What's this about?"
                    />
                  </motion.div>

                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    className="space-y-2"
                  >
                    <label htmlFor="message" className="text-gray-300 text-sm font-medium">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-400 focus:ring-1 focus:ring-red-400 transition-all duration-300 resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </motion.div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors group"
                  >
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </motion.button>

                  <p className="text-gray-400 text-sm text-center">
                    Your email client will open with the message pre-filled to <strong className="text-red-400">saurabhshukla1966@gmail.com</strong>
                  </p>
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Contact Cards */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, x: 50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-slate-700 rounded-lg text-white group-hover:scale-110 transition-transform duration-300">
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-white mb-1">{info.title}</h4>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-red-400 hover:text-red-300 transition-colors font-medium flex items-center gap-2"
                          >
                            {info.value}
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        ) : (
                          <p className="text-gray-300 font-medium">{info.value}</p>
                        )}
                        <p className="text-gray-400 text-sm mt-1">{info.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h4 className="text-xl font-semibold text-white mb-6">Follow Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className={`p-4 bg-white/5 rounded-full border border-white/20 ${social.bgColor} ${social.color} transition-all duration-300 group`}
                    >
                      <span className="sr-only">{social.name}</span>
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Quick Contact Button */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <motion.a
                  href="mailto:saurabhshukla1966@gmail.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="block w-full text-center bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
                >
                  Quick Email Me
                </motion.a>
              </motion.div>

              {/* Availability Status */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="bg-green-500/10 border border-green-500/20 rounded-xl p-6"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 font-semibold">Available for Work</span>
                </div>
                <p className="text-gray-300 text-sm">
                  I'm currently open to new opportunities and exciting projects. 
                  Let's discuss how we can work together!
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {showToast && (
        <div className="fixed bottom-6 right-6 z-50">
          <div className="flex items-center gap-3 bg-white/10 border border-white/20 rounded-lg px-4 py-3 backdrop-blur-sm shadow-lg">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span className="text-gray-200 text-sm">Email client opened. Please send the email from your app.</span>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;