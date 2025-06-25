'use client';

import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

const education = [
  {
    id: 1,
    degree: 'BSc ICT & Open Innovation',
    institution: 'Fontys University of Applied Sciences',
    location: 'Netherlands',
    period: '2019 – 2023',
    description: 'Comprehensive program covering software development, data management, and innovation methodologies. Focused on practical applications and real-world problem solving.',
    highlights: [
      'Data Management & Analytics',
      'Software Engineering',
      'Agile Development',
      'Innovation Management',
      'Thesis: Data Pipeline Optimization'
    ]
  },
  {
    id: 2,
    degree: 'Exchange Program - Databases & Machine Learning',
    institution: 'Halmstad University',
    location: 'Sweden',
    period: '2022 – 2023',
    description: 'Specialized exchange program focusing on advanced database technologies and machine learning applications. International experience with cross-cultural collaboration.',
    highlights: [
      'Advanced Database Systems',
      'Machine Learning Algorithms',
      'Data Mining Techniques',
      'International Collaboration',
      'Research Methodologies'
    ]
  }
];

export default function EducationSection() {
  return (
    <section id="education" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Education</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-teal-500 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
            Building a strong foundation in technology and innovation through comprehensive academic programs
          </p>
        </motion.div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300"
            >
              <div className="grid md:grid-cols-3 gap-8">
                {/* Left Column - Institution Info */}
                <div className="md:col-span-1">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <GraduationCap size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{edu.degree}</h3>
                      <p className="text-lg font-semibold text-primary-600 mb-4">{edu.institution}</p>
                      
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2 text-gray-600">
                          <Calendar size={16} />
                          <span>{edu.period}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-600">
                          <MapPin size={16} />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Description & Highlights */}
                <div className="md:col-span-2">
                  <p className="text-gray-700 mb-6 leading-relaxed">{edu.description}</p>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Areas of Study</h4>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {edu.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-primary-500 to-teal-500 rounded-xl p-8 text-white">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">4</div>
                <div className="opacity-90">Years of Study</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">2</div>
                <div className="opacity-90">Universities</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">1</div>
                <div className="opacity-90">International Exchange</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">BSc</div>
                <div className="opacity-90">Degree Achieved</div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
} 