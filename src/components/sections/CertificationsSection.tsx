'use client';

import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink, CheckCircle } from 'lucide-react';

const certifications = [
  {
    id: 1,
    name: 'Java Bootcamp',
    issuer: 'Udemy',
    year: '2024',
    description: 'Comprehensive Java programming course covering fundamentals to advanced concepts.',
    skills: ['Java Programming', 'Object-Oriented Design', 'Spring Framework', 'Maven'],
    credentialId: 'UC-1234567890',
    verified: true,
    link: '#'
  },
  {
    id: 2,
    name: 'K2View CDC Integration',
    issuer: 'K2View',
    year: '2024',
    description: 'Specialized certification in Change Data Capture integration using K2View platform.',
    skills: ['Data Integration', 'CDC', 'Real-time Processing', 'K2View Platform'],
    credentialId: 'K2V-2024-001',
    verified: true,
    link: '#'
  },
  {
    id: 3,
    name: 'Azure Fundamentals (AZ-900)',
    issuer: 'Microsoft',
    year: '2023',
    description: 'Foundational understanding of cloud concepts and Microsoft Azure services.',
    skills: ['Cloud Computing', 'Azure Services', 'Security', 'Compliance'],
    credentialId: 'AZ900-2023-456',
    verified: true,
    link: '#'
  },
  {
    id: 4,
    name: 'Power BI: Dashboard in a Day',
    issuer: 'Microsoft',
    year: '2021',
    description: 'Intensive workshop on creating effective dashboards and reports with Power BI.',
    skills: ['Power BI', 'Data Visualization', 'DAX', 'Business Intelligence'],
    credentialId: 'PBI-2021-789',
    verified: true,
    link: '#'
  }
];

export default function CertificationsSection() {
  return (
    <section id="certifications" className="section-padding bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Certifications</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-teal-500 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
            Continuous professional development through industry-recognized certifications and specialized training
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Award size={32} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{cert.name}</h3>
                    <p className="text-lg font-semibold text-primary-600">{cert.issuer}</p>
                  </div>
                </div>
                
                {cert.verified && (
                  <div className="flex items-center space-x-1 text-green-600">
                    <CheckCircle size={20} />
                    <span className="text-sm font-medium">Verified</span>
                  </div>
                )}
              </div>

              {/* Year and Credential */}
              <div className="flex items-center space-x-4 mb-4 text-gray-600">
                <div className="flex items-center space-x-1">
                  <Calendar size={16} />
                  <span>{cert.year}</span>
                </div>
                <span>•</span>
                <span className="text-sm">ID: {cert.credentialId}</span>
              </div>

              {/* Description */}
              <p className="text-gray-700 mb-6 leading-relaxed">{cert.description}</p>

              {/* Skills */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Skills Covered</h4>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* View Credential Button */}
              <button className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium transition-colors group-hover:translate-x-1 duration-200">
                <span>View Credential</span>
                <ExternalLink size={16} />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Certification Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">{certifications.length}</div>
                <div className="text-gray-600">Active Certifications</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">100%</div>
                <div className="text-gray-600">Verification Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">3</div>
                <div className="text-gray-600">Years Span</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">15+</div>
                <div className="text-gray-600">Skills Validated</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Continuous Learning */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-500 to-teal-500 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Commitment to Continuous Learning</h3>
            <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
              I believe in staying current with industry trends and technologies. These certifications 
              represent my dedication to professional growth and technical excellence.
            </p>
            
            {/* Upcoming Certifications */}
            <div className="bg-white bg-opacity-20 rounded-lg p-6 max-w-md mx-auto">
              <h4 className="font-semibold mb-3">Currently Pursuing</h4>
              <div className="space-y-2 text-sm">
                <div>• AWS Solutions Architect Associate</div>
                <div>• Kubernetes Certified Application Developer</div>
                <div>• Databricks Certified Data Engineer</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 