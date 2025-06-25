'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Building, Calendar, ChevronDown, ChevronUp } from 'lucide-react';
import { scrollToSection } from '@/lib/utils';

const experiences = [
  {
    id: 1,
    company: 'Precedence',
    position: 'Data Engineer',
    period: '2024 – Present',
    location: 'Netherlands',
    description: 'Leading data engineering initiatives for enterprise clients, focusing on scalable data architectures and integration solutions.',
    achievements: [
      'KPN – Customer 360: Building unified customer microdatabases to provide comprehensive customer insights',
      'Salesforce Data Cloud use case: Implementing JDBC integration for seamless data connectivity',
      'Data Migration project: Preparation and analytics pipeline setup for large-scale data transitions'
    ],
    technologies: ['Python', 'SQL', 'Snowflake', 'BigQuery', 'K2View', 'Salesforce Data Cloud']
  },
  {
    id: 2,
    company: 'Freshheads',
    position: 'Data Engineer / Analyst',
    period: '2023 – 2024',
    location: 'Netherlands',
    description: 'Developed comprehensive data solutions for educational and healthcare platforms, creating scalable architectures and insightful analytics.',
    achievements: [
      'Online learning platform (OFED): Designed and implemented scalable data architecture with comprehensive analytics dashboard',
      'Zorgplatform: Built interactive dashboard and analytics pipeline for healthcare insights',
      'Established data governance practices and automated reporting systems'
    ],
    technologies: ['Python', 'SQL', 'Power BI', 'Azure', 'Data Modeling', 'ETL/ELT']
  },
  {
    id: 3,
    company: 'Sligro',
    position: 'Data Analyst',
    period: '2021 – 2022',
    location: 'Netherlands',
    description: 'Focused on e-commerce analytics and business intelligence, creating actionable insights for webshop optimization.',
    achievements: [
      'Developed comprehensive Power BI dashboards for webshop performance analysis',
      'Implemented data tracking and KPI monitoring systems',
      'Provided strategic insights for e-commerce optimization and customer behavior analysis'
    ],
    technologies: ['Power BI', 'SQL', 'Excel', 'Data Visualization', 'Business Intelligence']
  }
];

export default function ExperienceSection() {
  const [expandedCard, setExpandedCard] = useState<number | null>(1);

  const toggleCard = (id: number) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <section id="experience" className="section-padding bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Work Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-teal-500 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
            Building scalable data solutions and driving insights across various industries
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-teal-500 hidden md:block"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-primary-500 to-teal-500 rounded-full border-4 border-white shadow-lg hidden md:block"></div>

                {/* Experience Card */}
                <div className="md:ml-20 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div 
                    className="p-6 cursor-pointer"
                    onClick={() => toggleCard(exp.id)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Building size={24} className="text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{exp.position}</h3>
                          <p className="text-lg font-semibold text-primary-600">{exp.company}</p>
                          <div className="flex items-center space-x-4 text-gray-600 mt-2">
                            <div className="flex items-center space-x-1">
                              <Calendar size={16} />
                              <span>{exp.period}</span>
                            </div>
                            <span>•</span>
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                      
                      <button className="text-gray-400 hover:text-gray-600 transition-colors">
                        {expandedCard === exp.id ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                      </button>
                    </div>

                    <p className="text-gray-700 mt-4">{exp.description}</p>
                  </div>

                  {/* Expanded Content */}
                  <motion.div
                    initial={false}
                    animate={{ height: expandedCard === exp.id ? 'auto' : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <div className="border-t border-gray-200 pt-4">
                        <h4 className="font-semibold text-gray-900 mb-3">Key Achievements</h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start space-x-2">
                              <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-700">{achievement}</span>
                            </li>
                          ))}
                        </ul>

                        <h4 className="font-semibold text-gray-900 mb-3 mt-6">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Interested in working together?
            </h3>
            <p className="text-gray-600 mb-6">
              I'm always open to discussing new opportunities and challenging projects.
            </p>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-primary-500 to-teal-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-primary-600 hover:to-teal-600 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Get In Touch
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 