import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const WorkSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Modern React-based shopping platform with 3D product visualization',
      technologies: ['React', 'Three.js', 'Stripe', 'Node.js'],
      image: '/placeholder.svg',
    
      link: 'https://bluethroatshop.vercel.app/'
    },
    {
      id: 2,
      title: 'Gladhand Website',
      description: 'Real-time cryptocurrency trading interface with advanced analytics',
      technologies: ['React', 'WebSocket', 'Chart.js', 'TailwindCSS'],
      image: '/placeholder.svg',
     
      link: 'https://glad-hand.vercel.app/'
    },
    {
      id: 3,
      title: 'Hotal Website',
      description: 'AI-driven agency portfolio with interactive animations',
      technologies: ['React', 'Framer Motion', 'GSAP', 'TypeScript'],
      image: '/placeholder.svg',
    
      link: 'https://hotal-saras.vercel.app/'
    },
    {
      id: 4,
      title: 'Portfolio App',
      description: 'Interactive 3D portfolio showcasing modern web development',
      technologies: ['React', 'Three.js', 'React Three Fiber', 'Drei'],
      image: '/placeholder.svg',
      
      link: '#'
    },
    {
      id: 5,
      title: 'Atlas Media',
      description: 'Conversion-optimized landing page for B2B software',
      technologies: ['Next.js', 'Tailwind', 'Framer Motion', 'Analytics'],
      image: '/placeholder.svg',
    
      link: 'https://atlas-media.vercel.app/'
    },
    {
      id: 6,
      title: 'Wedmoo App',
      description: 'Cross-platform mobile app for stock market analysis',
      technologies: ['React Native', 'Redux', 'Firebase', 'Charts'],
      image: '/placeholder.svg',
    
      link: 'https://www.wedmoo.com/'
    }
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
    <section id="work" className="min-h-screen py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              My{' '}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Work
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Showcasing innovative projects that blend cutting-edge technology with exceptional user experiences
            </p>
            <div className="w-20 h-1 bg-gradient-primary mx-auto mt-6" />
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
                className="group relative bg-card border border-primary/20 rounded-xl overflow-hidden hover:shadow-glow-primary transition-all duration-500"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br  opacity-80`} />
                  <motion.div
                    animate={{
                      scale: hoveredProject === project.id ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full bg-muted flex items-center justify-center"
                  >
                    <div className="text-6xl font-bold text-white/20">
                      {String(project.id).padStart(2, '0')}
                    </div>
                  </motion.div>
                  
                  {/* Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: hoveredProject === project.id ? 1 : 0,
                    }}
                    className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center"
                  >
                  <motion.a
  href={project.link}
  target="_blank" // new tab me open karne ke liye
  rel="noopener noreferrer"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="px-6 py-3 bg-primary text-background rounded-lg font-semibold"
>
  View Project
</motion.a>

                  </motion.div>
                </div>

                {/* Project Info */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-muted text-xs font-medium text-foreground rounded-full border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex items-center justify-between pt-4">
                    <motion.a
                      href={project.link}
                      whileHover={{ scale: 1.05 }}
                      className="text-primary hover:text-secondary transition-colors font-medium"
                    >
                      View Details →
                    </motion.a>
                    
                    <div className="flex gap-2">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-8 h-8 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-background transition-all"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </motion.button>
                      
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-8 h-8 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-background transition-all"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </motion.button>
                    </div>
                  </div>
                </div>

                {/* Glow Effect */}
                <motion.div
                  animate={{
                    opacity: hoveredProject === project.id ? 1 : 0,
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 pointer-events-none"
                />
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-16 p-8 bg-card border border-primary/20 rounded-xl"
          >
            <h3 className="text-2xl font-bold mb-4">
              Have a project in mind?
            </h3>
            <p className="text-muted-foreground mb-6">
              Let's collaborate and bring your ideas to life with cutting-edge technology
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-primary text-background font-semibold rounded-lg shadow-glow-primary hover:shadow-glow-secondary transition-all duration-300"
            >
              Start a Project
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkSection;