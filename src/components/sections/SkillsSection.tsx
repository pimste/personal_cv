'use client';

import { motion } from 'framer-motion';
import { Code, Brain, Database, Cloud, Palette, Users2 } from 'lucide-react';

const technicalSkills = [
  {
    category: 'Languages',
    icon: Code,
    skills: [
      { name: 'Python', level: 90 },
      { name: 'SQL', level: 95 },
      { name: 'Java', level: 75 },
      { name: 'JavaScript', level: 80 },
      { name: 'HTML/CSS', level: 85 }
    ]
  },
  {
    category: 'Data Platforms',
    icon: Database,
    skills: [
      { name: 'Snowflake', level: 90 },
      { name: 'BigQuery', level: 85 },
      { name: 'PostgreSQL', level: 85 },
      { name: 'SQL Server', level: 80 },
      { name: 'K2View', level: 75 }
    ]
  },
  {
    category: 'Analytics & BI',
    icon: Brain,
    skills: [
      { name: 'Power BI', level: 90 },
      { name: 'Tableau', level: 80 },
      { name: 'Looker Studio', level: 85 },
      { name: 'Data Modeling', level: 90 },
      { name: 'ETL/ELT', level: 85 }
    ]
  },
  {
    category: 'Cloud & DevOps',
    icon: Cloud,
    skills: [
      { name: 'Azure', level: 80 },
      { name: 'AWS', level: 75 },
      { name: 'Docker', level: 70 },
      { name: 'Git', level: 85 },
      { name: 'CI/CD', level: 75 }
    ]
  }
];

const softSkills = [
  {
    name: 'Analytical Thinking',
    icon: Brain,
    description: 'Breaking down complex problems into manageable components and finding efficient solutions.'
  },
  {
    name: 'Communication',
    icon: Users2,
    description: 'Translating technical concepts into clear, actionable insights for stakeholders.'
  },
  {
    name: 'Creative Problem Solving',
    icon: Palette,
    description: 'Approaching challenges with innovative thinking and alternative perspectives.'
  },
  {
    name: 'Team Collaboration',
    icon: Users2,
    description: 'Working effectively in cross-functional teams to achieve common goals.'
  },
  {
    name: 'Client-Focused',
    icon: Users2,
    description: 'Understanding client needs and delivering solutions that provide real business value.'
  },
  {
    name: 'Agile Mindset',
    icon: Brain,
    description: 'Embracing iterative development and continuous improvement in all projects.'
  }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="section-padding bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-teal-500 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
            A comprehensive toolkit of technical expertise and soft skills honed through years of experience
          </p>
        </motion.div>

        {/* Technical Skills */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-4">🧠 Technical Skills</h3>
            <p className="text-gray-600">Technologies and tools I work with daily</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technicalSkills.map((category, categoryIndex) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={categoryIndex}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 shadow-lg"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-teal-500 rounded-lg flex items-center justify-center mr-3">
                      <Icon size={20} className="text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900">{category.category}</h4>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                          <span className="text-sm text-gray-500">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: 0.1 * skillIndex }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-r from-primary-500 to-teal-500 h-2 rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-4">💬 Soft Skills</h3>
            <p className="text-gray-600">Personal qualities that drive professional success</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {softSkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                      <Icon size={24} className="text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">{skill.name}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{skill.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Continuous Learning</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Technology evolves rapidly, and so do I. I'm constantly updating my skills and exploring 
              new technologies to stay at the forefront of data engineering and IT innovation.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Machine Learning', 'Kubernetes', 'Terraform', 'Rust', 'GraphQL'].map((skill, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="px-4 py-2 bg-gradient-to-r from-primary-100 to-teal-100 text-primary-700 rounded-full text-sm font-medium"
                >
                  {skill} (Learning)
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 