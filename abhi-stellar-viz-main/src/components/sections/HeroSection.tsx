import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import FloatingLaptop from "../FloatingLaptop";
import TradingChart from "../TradingChart";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        {/* Left Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-text"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="hero-title"
          >
            Hi, I'm <span className="gradient-text">Abhi</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <h2 className="hero-subtitle">Frontend Developer & Trader</h2>
            <p className="hero-location">Based in Himachal Pradesh</p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="hero-desc"
          >
            Building the future with code and conquering markets with strategy.{" "}
            <span className="highlight">
              Mission: Self-made millionaire by 2028
            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="hero-buttons"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              View My Work
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-outline"
            >
              Get In Touch
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="founder-box"
          >
            <p className="founder-label">Founder of</p>
            <div className="gradient-text founder-name">Atlasmedia</div>
            <p className="founder-info">
              AI-driven agency with Deepak, Pawan & Aman
            </p>
          </motion.div>
        </motion.div>

        {/* Right 3D Canvas */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="hero-3d"
        >
          <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <pointLight position={[-10, -10, -10]} intensity={0.5} />
            <Suspense fallback={null}>
              <FloatingLaptop />
              <TradingChart />
            </Suspense>
          </Canvas>

          {/* Floating Dots */}
          <div className="floating-dot dot1"></div>
          <div className="floating-dot dot2"></div>
          <div className="floating-dot dot3"></div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="scroll-indicator"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="scroll-frame"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="scroll-dot"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
