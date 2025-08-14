import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const waveVariants = {
    animate: {
      x: [0, -100],
      transition: {
        x: {
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        },
      },
    },
  };

  return (
    <section id="contact" className="min-h-screen py-20 relative overflow-hidden">
      {/* Animated Background Waves */}
      <div className="absolute inset-0 -z-10">
        <svg className="absolute bottom-0 w-full h-64" viewBox="0 0 1200 200" preserveAspectRatio="none">
          <motion.path
            variants={waveVariants}
            animate="animate"
            d="M0,100 C300,200 300,0 600,100 C900,200 900,0 1200,100 L1200,200 L0,200 Z"
            fill="url(#waveGradient1)"
            opacity="0.1"
          />
          <motion.path
            variants={waveVariants}
            animate="animate"
            d="M0,150 C300,50 300,250 600,150 C900,50 900,250 1200,150 L1200,200 L0,200 Z"
            fill="url(#waveGradient2)"
            opacity="0.1"
            style={{ animationDelay: '-5s' }}
          />
          <defs>
            <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--neon-cyan))" />
              <stop offset="100%" stopColor="hsl(var(--neon-purple))" />
            </linearGradient>
            <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--neon-purple))" />
              <stop offset="100%" stopColor="hsl(var(--neon-pink))" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              Let's{' '}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Connect
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let's discuss your next project or trading strategies
            </p>
            <div className="w-20 h-1 bg-gradient-primary mx-auto mt-6" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Whether you need a cutting-edge web application, want to discuss trading strategies, 
                  or explore collaboration opportunities with Atlasmedia, I'm here to help.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                {[
                  {
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    ),
                    title: 'Email',
                    value: 'abhigladhandx369@gmail.com',
                    action: 'mailto:abhi@atlasmedia.dev'
                  },
                  {
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    ),
                    title: 'Location',
                    value: 'Himachal Pradesh, India',
                    action: null
                  },
                  {
                    icon: (
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    ),
                    title: 'GitHub',
                    value: 'github.com/abhi',
                    action: 'https://github.com'
                  }
                ].map((contact, index) => (
                  <motion.div
                    key={contact.title}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="flex items-center space-x-4 p-4 bg-card border border-primary/20 rounded-lg hover:shadow-glow-primary transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center text-background">
                      {contact.icon}
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{contact.title}</div>
                      {contact.action ? (
                        <a 
                          href={contact.action}
                          className="text-primary hover:text-secondary transition-colors"
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <div className="text-muted-foreground">{contact.value}</div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <motion.div variants={itemVariants} className="pt-8">
                <h4 className="font-semibold mb-4">Follow My Journey</h4>
                <div className="flex space-x-4">
                  {[
                    { name: 'LinkedIn', icon: '💼' },
                    { name: 'Twitter', icon: '🐦' },
                    { name: 'Instagram', icon: '📸' },
                    { name: 'YouTube', icon: '📹' }
                  ].map((social) => (
                    <motion.a
                      key={social.name}
                      href="#"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-background transition-all duration-300 text-xl"
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-input border border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-input border border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <motion.textarea
                    whileFocus={{ scale: 1.02 }}
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-input border border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-8 py-4 bg-gradient-primary text-background font-semibold rounded-lg shadow-glow-primary hover:shadow-glow-secondary transition-all duration-300"
                >
                  Send Message
                </motion.button>
              </form>

              <motion.div
                variants={itemVariants}
                className="mt-8 p-6 bg-card border border-primary/20 rounded-lg text-center"
              >
                <h4 className="font-semibold mb-2">Quick Response Guarantee</h4>
                <p className="text-sm text-muted-foreground">
                  I typically respond within 24 hours. For urgent projects, feel free to mention it in your message!
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;