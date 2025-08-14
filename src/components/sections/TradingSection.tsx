import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const TradingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const tradingStats = [
    { metric: 'Portfolio Growth', value: '+287%', period: '2023-2024', color: 'neon-green' },
    { metric: 'Win Rate', value: '73%', period: 'Last 6 months', color: 'neon-cyan' },
    { metric: 'Max Drawdown', value: '-12%', period: 'Risk managed', color: 'neon-yellow' },
    { metric: 'Trades Executed', value: '1,240+', period: 'Total trades', color: 'neon-purple' },
  ];

  const milestones = [
    { year: '2022', achievement: 'Started Trading Journey', amount: '$1K', status: 'completed' },
    { year: '2023', achievement: 'First Profitable Year', amount: '$25K', status: 'completed' },
    { year: '2024', achievement: 'Consistent Strategy', amount: '$150K', status: 'current' },
    { year: '2025', achievement: 'Portfolio Scaling', amount: '$400K', status: 'target' },
    { year: '2026', achievement: 'Advanced Strategies', amount: '$700K', status: 'target' },
    { year: '2027', achievement: 'Market Expertise', amount: '$850K', status: 'target' },
    { year: '2028', achievement: 'Millionaire Goal', amount: '$1M+', status: 'goal' },
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
    <section id="trading" className="min-h-screen py-20 relative">
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
              Trading{' '}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Journey
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Building wealth through strategic market analysis and disciplined trading
            </p>
            <div className="w-20 h-1 bg-gradient-primary mx-auto mt-6" />
          </motion.div>

          {/* Trading Stats */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {tradingStats.map((stat, index) => (
              <motion.div
                key={stat.metric}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-card border border-primary/20 rounded-xl p-6 text-center hover:shadow-glow-primary transition-all duration-300"
              >
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-foreground font-semibold mb-1">
                  {stat.metric}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.period}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Millionaire Journey Timeline */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-12">
              Road to{' '}
              <span className="bg-gradient-secondary bg-clip-text text-transparent">
                Millionaire by 2028
              </span>
            </h3>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-primary h-full rounded-full" />

              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={milestone.year}
                    variants={itemVariants}
                    className={`flex items-center ${
                      index % 2 === 0 ? 'justify-start' : 'justify-end'
                    }`}
                  >
                    <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className={`bg-card border rounded-xl p-6 relative ${
                          milestone.status === 'completed' 
                            ? 'border-neon-green bg-neon-green/5' 
                            : milestone.status === 'current'
                            ? 'border-neon-cyan bg-neon-cyan/5'
                            : milestone.status === 'goal'
                            ? 'border-neon-yellow bg-neon-yellow/5'
                            : 'border-primary/20'
                        }`}
                      >
                        <div className="text-2xl font-bold text-primary mb-2">
                          {milestone.year}
                        </div>
                        <div className="text-lg font-semibold text-foreground mb-1">
                          {milestone.achievement}
                        </div>
                        <div className={`text-xl font-bold ${
                          milestone.status === 'completed' ? 'text-neon-green' :
                          milestone.status === 'current' ? 'text-neon-cyan' :
                          milestone.status === 'goal' ? 'text-neon-yellow' :
                          'text-neon-purple'
                        }`}>
                          {milestone.amount}
                        </div>
                        
                        {/* Status Badge */}
                        <div className={`absolute top-4 ${
                          index % 2 === 0 ? 'left-4' : 'right-4'
                        }`}>
                          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                            milestone.status === 'completed' 
                              ? 'bg-neon-green text-background' 
                              : milestone.status === 'current'
                              ? 'bg-neon-cyan text-background'
                              : milestone.status === 'goal'
                              ? 'bg-neon-yellow text-background'
                              : 'bg-neon-purple text-background'
                          }`}>
                            {milestone.status.toUpperCase()}
                          </span>
                        </div>
                      </motion.div>
                    </div>

                    {/* Timeline Node */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 border-background z-10" 
                         style={{
                           backgroundColor: milestone.status === 'completed' ? 'hsl(var(--neon-green))' :
                                          milestone.status === 'current' ? 'hsl(var(--neon-cyan))' :
                                          milestone.status === 'goal' ? 'hsl(var(--neon-yellow))' :
                                          'hsl(var(--neon-purple))'
                         }} />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Trading Philosophy */}
          <motion.div
            variants={itemVariants}
            className="bg-card border border-primary/20 rounded-xl p-8 text-center"
          >
            <h3 className="text-2xl font-bold mb-6">Trading Philosophy</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-3">
                <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto flex items-center justify-center">
                  <svg className="w-8 h-8 text-background" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-primary">Risk Management</h4>
                <p className="text-sm text-muted-foreground">
                  Never risk more than 2% per trade. Capital preservation is key to long-term success.
                </p>
              </div>

              <div className="space-y-3">
                <div className="w-16 h-16 bg-gradient-secondary rounded-full mx-auto flex items-center justify-center">
                  <svg className="w-8 h-8 text-background" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-secondary">Technical Analysis</h4>
                <p className="text-sm text-muted-foreground">
                  Data-driven decisions using advanced charting and market indicators.
                </p>
              </div>

              <div className="space-y-3">
                <div className="w-16 h-16 bg-gradient-accent rounded-full mx-auto flex items-center justify-center">
                  <svg className="w-8 h-8 text-background" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-accent">Patience & Discipline</h4>
                <p className="text-sm text-muted-foreground">
                  Waiting for the right setups and sticking to the trading plan without emotions.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TradingSection;