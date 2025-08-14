import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skills = [
    { name: 'React', level: 90, color: 'neon-cyan' },
    { name: 'JavaScript', level: 95, color: 'neon-yellow' },
    { name: 'TypeScript', level: 85, color: 'neon-purple' },
    { name: 'Tailwind CSS', level: 92, color: 'neon-green' },
    { name: 'Three.js', level: 80, color: 'neon-pink' },
    { name: 'Swiper.js', level: 88, color: 'neon-cyan' },
    { name: 'Trading', level: 75, color: 'neon-yellow' },
    { name: 'UI/UX Design', level: 82, color: 'neon-purple' },
  ];

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

  return (
    <section id="about" className="min-h-screen py-20 relative">
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
              About{' '}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Me
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Bio Section */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl lg:text-3xl font-semibold text-primary">
                Crafting Digital Experiences & Trading Success
              </h3>
              
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  I'm a passionate frontend developer from the beautiful hills of Himachal Pradesh, 
                  combining my love for cutting-edge web technologies with strategic trading.
                </p>
                
                <p>
                  As the founder of <span className="text-neon-purple font-semibold">Atlasmedia</span>, 
                  alongside my incredible team - Deepak, Pawan, and Aman - we're building AI-driven 
                  solutions that push the boundaries of what's possible.
                </p>
                
                <p>
                  My journey is fueled by one ambitious goal: 
                  <span className="text-neon-cyan font-semibold"> becoming a self-made millionaire by 2028</span>. 
                  Every line of code I write and every trade I make brings me closer to this vision.
                </p>
              </div>

              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-4 pt-4"
              >
                {['Problem Solver', 'Tech Enthusiast', 'Market Analyst', 'Team Leader'].map((trait, index) => (
                  <motion.span
                    key={trait}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-card border border-primary/30 rounded-lg text-sm font-medium text-primary"
                  >
                    {trait}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>

            {/* Skills Section */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground mb-8">
                Technical Expertise
              </h3>
              
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    className="group"
                  >
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-foreground">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                        className="h-full bg-gradient-primary rounded-full relative group-hover:shadow-glow-primary transition-all duration-300"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 rounded-full" />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20 text-center"
          >
            {[
              { number: '50+', label: 'Projects Completed' },
              { number: '3+', label: 'Years Experience' },
              { number: '100%', label: 'Client Satisfaction' },
              { number: '24/7', label: 'Market Monitoring' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-card border border-primary/20 rounded-lg hover:shadow-glow-primary transition-all duration-300"
              >
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;