'use client';

import { motion } from 'framer-motion';
import { Code, Heart, Target, Users } from 'lucide-react';

export default function About() {
  const aboutPoints = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable and scalable code is my priority.',
    },
    {
      icon: Target,
      title: 'Problem Solving',
      description: 'I love tackling complex challenges and finding elegant solutions.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working effectively in teams to deliver outstanding results.',
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Continuously learning and staying updated with latest technologies.',
    },
  ];

  return (
    <section
      id="about"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-background-dark"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            I'm a passionate software developer with a love for creating
            innovative solutions and delivering exceptional user experiences.
            With expertise in modern web technologies, I bring ideas to life
            through clean code and thoughtful design.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {aboutPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center hover:shadow-lg dark:hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-primary/20 dark:hover:border-primary/30"
            >
              <div className="inline-flex p-4 bg-primary/10 dark:bg-primary/20 rounded-full mb-4 group-hover:bg-primary/20 dark:group-hover:bg-primary/30 transition-colors">
                <point.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {point.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 max-w-3xl mx-auto"
        >
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 border border-gray-100 dark:border-gray-700 shadow-sm dark:shadow-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing knowledge with
              the developer community. I believe in continuous learning and
              staying curious about the ever-evolving world of technology.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

