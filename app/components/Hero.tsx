'use client';

import { motion } from 'framer-motion';
import { ChevronRight, Download } from 'lucide-react';
import TypingEffect from './TypingEffect';
import ProfileImage from './ProfileImage';

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const codeParticles = ['{', '}', '<', '/>', ';', '=', '()','<->','<=','>'];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-12 px-6 sm:px-10 lg:px-16 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-background-dark dark:via-background-dark/95 dark:to-background-dark overflow-hidden"
    >
      {/* ==== Background Glows ==== */}
      <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl -z-10"></div>

      {/* ==== Floating Developer Particles ==== */}
      {codeParticles.map((symbol, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={{
            opacity: [0.3, 0.6, 0.25],
            y: [0, -25, 0],
            rotate: [0, 12, -12, 0],
          }}
          transition={{
            duration: 6 + index,
            repeat: Infinity,
            delay: index * 0.6,
          }}
          className="absolute text-3xl md:text-4xl font-mono select-none pointer-events-none"
          style={{
            color: 'var(--tw-prose-code)', // fallback for adaptive color
            left: `${10 + index * 12}%`,
            top: `${12 + (index % 3) * 26}%`,
          }}
        >
          <span className="text-gray-400/40 dark:text-primary/30">{symbol}</span>
        </motion.span>
      ))}

      {/* ==== Main Layout ==== */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
        {/* ===== Left Column ===== */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-10 z-10"
        >
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-3"
          >
            <p className="text-lg md:text-base font-medium text-primary uppercase tracking-[0.25em]">
              Welcome
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">
              Hi, I’m <span className="text-primary">Ali Raza</span>
            </h1>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-800 dark:text-gray-200 leading-tight">
              <TypingEffect
                text="Software Developer"
                speed={100}
                className="text-gray-900 dark:text-white"
              />
            </h2>
            <div className="w-28 h-1.5 bg-gradient-to-r from-primary via-primary-dark to-primary rounded-full shadow-md"></div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-base md:text-lg text-gray-700 dark:text-gray-400 max-w-lg leading-relaxed"
          >
            I build modern, efficient, and scalable digital experiences. My goal is to
            turn ideas into impactful, high-performing applications using clean architecture
            and a strong eye for detail.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap gap-4 pt-2"
          >
            <button
              onClick={() => scrollToSection('projects')}
              className="px-7 py-3.5 bg-primary text-white rounded-xl font-medium shadow-md hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center gap-2 group"
            >
              View Projects
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="/Resume.pdf"
              download="Ali_Raza_Resume.pdf"
              className="px-7 py-3.5 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-300 rounded-xl font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </motion.div>
        </motion.div>

        {/* ===== Right Column ===== */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="relative hidden md:flex items-center justify-center"
        >
          <div className="relative w-full max-w-lg h-[520px] flex items-center justify-center">
            {/* Circular borders */}
            <div className="absolute w-[480px] h-[480px] border-[3px] border-primary/15 dark:border-primary/25 rounded-full animate-pulse"></div>
            <div className="absolute w-[430px] h-[430px] border-[3px] border-primary/25 dark:border-primary/35 rounded-full"></div>

            {/* Clipped ring */}
            <div
              className="absolute w-[380px] h-[380px] border-[6px] border-primary/30 dark:border-primary/40 rounded-full"
              style={{
                clipPath:
                  'polygon(0% 0%, 75% 0%, 75% 25%, 100% 25%, 100% 100%, 25% 100%, 25% 75%, 0% 75%)',
              }}
            ></div>

            {/* Profile Image */}
            <div className="relative z-10 w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl ring-4 ring-primary/15 bg-gray-100 dark:bg-gray-700">
              <ProfileImage />
            </div>

            {/* Coding Brackets */}
            <motion.div
              animate={{ opacity: [0.4, 0.8, 0.4], x: [0, -3, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400/60 dark:text-primary/50 text-7xl font-mono"
            >
              {'<'}
            </motion.div>
            <motion.div
              animate={{ opacity: [0.4, 0.8, 0.4], x: [0, 3, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400/60 dark:text-primary/50 text-7xl font-mono"
            >
              {'>'}
            </motion.div>

            {/* Floating dots */}
            <div className="absolute top-20 left-24 w-2 h-2 bg-primary/60 rounded-full animate-bounce"></div>
            <div
              className="absolute bottom-28 right-20 w-3 h-3 bg-primary/40 rounded-full animate-bounce"
              style={{ animationDelay: '1s' }}
            ></div>
            <div
              className="absolute top-1/3 right-24 w-2 h-2 bg-primary/50 rounded-full animate-bounce"
              style={{ animationDelay: '2s' }}
            ></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
