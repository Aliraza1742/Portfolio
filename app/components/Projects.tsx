'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Farknow',
    description:
      'An innovative Mobile Application bukilt for the farming Community to help them in their daily tasks and to make their life easier. and to help them in their daily tasks and to make their life easier.',
    technologies: ['React Native', 'Firebase', 'Groq API','Google Maps API','Figma'],
    image: '/project1.jpg',
    githubUrl: 'https://github.com/msajid103/FarKnow-mobile-app',
  },
  {
    id: 2,
    title: 'Fitness Tracker ',
    description:
      'A fitness tracker app that helps you track your fitness goals and progress. It allows you to set your fitness goals, track your daily activities, and see your progress over time.',
    technologies: ['React Native', 'Typescript', 'REST API'],
    image: '/project2.jpg',
    githubUrl: 'https://github.com/Aliraza1742/fitnesstracker'
  },
  {
    id: 3,
    title: 'E-commerce App',
    description:
      'Mobile App that allows the user to easily purchase the items online varying in categories like the clothing ',
    technologies: ['React', 'Chart.js', 'OpenWeather API', 'CSS3'],
    image: '/project3.jpg',
    githubUrl: 'https://github.com',
  },
  {
    id: 4,
    title: 'Social Media Analytics',
    description:
      'Analytics platform for social media metrics with data visualization, reporting, and insights. Built with modern web technologies.',
    technologies: ['Vue.js', 'Python', 'Django', 'D3.js', 'PostgreSQL'],
    image: '/project4.jpg',
    githubUrl: 'https://github.com',
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-background-dark"
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
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent work and projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gray-100 dark:border-gray-700 hover:border-primary/30"
            >
              {/* Project Image Placeholder */}
              <div className="relative h-56 bg-gradient-to-br from-primary via-primary-dark to-primary overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-2xl md:text-3xl font-bold text-center px-4">
                    {project.title}
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                </div>
              </div>

              <div className="p-6 lg:p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-5 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300 rounded-lg text-xs font-medium border border-gray-200 dark:border-gray-600 hover:border-primary/50 hover:bg-primary/5 dark:hover:bg-primary/10 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary transition-colors font-medium group/link"
                  >
                    <Github className="w-5 h-5 group-hover/link:scale-110 transition-transform" />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-white rounded-xl font-medium hover:bg-primary-dark transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 group"
          >
            View More Projects
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

