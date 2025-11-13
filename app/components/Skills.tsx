'use client';

import { motion } from 'framer-motion';
import {
  Code2,
  Database,
  Globe,
  Smartphone,
  Cloud,
  GitBranch,
  Settings,
} from 'lucide-react';

const skillCategories = [
  {
    name: 'Frontend',
    icon: Globe,
    skills: ['HTML5', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Tailwind CSS'],
  },
  {
    name: 'Backend',
    icon: Code2,
    skills: ['Node.js', 'Python', 'REST APIs'],
  },
  {
    name: 'Database',
    icon: Database,
    skills: [ 'MongoDB', 'MySQL', 'Firebase'],
  },
  {
    name: 'Mobile',
    icon: Smartphone,
    skills: ['React Native'],
  },
  {
    name: 'Cloud & DevOps',
    icon: Cloud,
    skills: ['AZURE', 'CI/CD', 'GitHub Actions'],
  },
  {
    name: 'Tools',
    icon: Settings,
    skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Figma','Jupyter Notebook'],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900"
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
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of the technologies and tools I work with
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg dark:hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-primary/20 dark:hover:border-primary/30"
            >
              <div className="flex items-center gap-3 mb-4">
                <category.icon className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {category.name}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-600 hover:border-primary/50 hover:bg-primary/5 dark:hover:bg-primary/10 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
}

