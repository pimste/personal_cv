'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Github, ExternalLink, Calendar, Users, TrendingUp } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Data Pipeline Optimization Platform',
    category: 'Data Engineering',
    description: 'Developed a comprehensive data pipeline optimization platform that reduced processing time by 60% and improved data quality monitoring.',
    longDescription: 'This platform automates the entire data pipeline lifecycle, from ingestion to transformation and loading. It features real-time monitoring, automated quality checks, and intelligent optimization suggestions.',
    technologies: ['Python', 'Apache Kafka', 'PostgreSQL', 'Docker', 'Kubernetes', 'Grafana'],
    period: '2023',
    role: 'Lead Developer',
    teamSize: '4 developers',
    impact: '60% faster processing',
    featured: true,
    githubUrl: '#',
    liveUrl: '#',
    imageUrl: '/projects/data-pipeline.jpg'
  },
  {
    id: 2,
    title: 'K2View CDC Integration Suite',
    category: 'Integration',
    description: 'Built a robust Change Data Capture integration suite using K2View platform for real-time data synchronization across multiple systems.',
    longDescription: 'This suite enables seamless real-time data synchronization between various enterprise systems, ensuring data consistency and reducing manual intervention.',
    technologies: ['K2View', 'Java', 'REST APIs', 'PostgreSQL', 'Redis', 'Jenkins'],
    period: '2024',
    role: 'Integration Specialist',
    teamSize: '3 developers',
    impact: '99.9% uptime',
    featured: true,
    githubUrl: '#',
    liveUrl: '#',
    imageUrl: '/projects/k2view-integration.jpg'
  },
  {
    id: 3,
    title: 'Business Intelligence Dashboard',
    category: 'Analytics',
    description: 'Created an interactive Power BI dashboard suite providing executive-level insights and KPI tracking for business operations.',
    longDescription: 'A comprehensive dashboard solution that aggregates data from multiple sources to provide real-time business insights and predictive analytics.',
    technologies: ['Power BI', 'DAX', 'SQL Server', 'Azure', 'Power Automate', 'SharePoint'],
    period: '2022',
    role: 'BI Developer',
    teamSize: '2 developers',
    impact: '40% better decisions',
    featured: false,
    githubUrl: '#',
    liveUrl: '#',
    imageUrl: '/projects/bi-dashboard.jpg'
  },
  {
    id: 4,
    title: 'Smart Inventory Management System',
    category: 'Full-Stack',
    description: 'Developed a smart inventory management system with predictive analytics and automated reordering capabilities.',
    longDescription: 'This system uses machine learning to predict inventory needs, automate reordering processes, and optimize stock levels to reduce costs.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Python', 'TensorFlow', 'AWS'],
    period: '2023',
    role: 'Full-Stack Developer',
    teamSize: '5 developers',
    impact: '30% cost reduction',
    featured: false,
    githubUrl: '#',
    liveUrl: '#',
    imageUrl: '/projects/inventory-system.jpg'
  },
  {
    id: 5,
    title: 'Cloud Migration Automation Tool',
    category: 'DevOps',
    description: 'Built an automation tool for seamless cloud migration with zero-downtime deployment and rollback capabilities.',
    longDescription: 'This tool streamlines the cloud migration process by automating infrastructure provisioning, application deployment, and data migration.',
    technologies: ['Terraform', 'Azure', 'Python', 'PowerShell', 'Azure DevOps', 'Docker'],
    period: '2024',
    role: 'DevOps Engineer',
    teamSize: '3 developers',
    impact: 'Zero downtime',
    featured: false,
    githubUrl: '#',
    liveUrl: '#',
    imageUrl: '/projects/cloud-migration.jpg'
  },
  {
    id: 6,
    title: 'Real-time Analytics Engine',
    category: 'Data Engineering',
    description: 'Engineered a real-time analytics engine capable of processing millions of events per second with sub-second latency.',
    longDescription: 'A high-performance analytics engine that processes streaming data in real-time, providing instant insights and triggering automated responses.',
    technologies: ['Apache Kafka', 'Apache Storm', 'Elasticsearch', 'Redis', 'Java', 'Grafana'],
    period: '2023',
    role: 'Data Engineer',
    teamSize: '4 developers',
    impact: 'Sub-second latency',
    featured: false,
    githubUrl: '#',
    liveUrl: '#',
    imageUrl: '/projects/analytics-engine.jpg'
  }
];

const categories = ['All', 'Data Engineering', 'Integration', 'Analytics', 'Full-Stack', 'DevOps'];

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-teal-500 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
            A showcase of innovative solutions and technical achievements that demonstrate my expertise 
            in data engineering, integration, and full-stack development
          </p>
        </motion.div>

        {/* Featured Projects Highlight */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Highlighted Work</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                {/* Project Image Placeholder */}
                <div className="h-48 bg-gradient-to-r from-primary-500 to-teal-500 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                    <div className="text-white text-center">
                      <TrendingUp size={48} className="mx-auto mb-2" />
                      <p className="font-medium">{project.category}</p>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h4>
                      <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                        {project.category}
                      </span>
                    </div>
                    <div className="flex space-x-2">
                      <button className="p-2 text-gray-600 hover:text-primary-600 transition-colors">
                        <Github size={20} />
                      </button>
                      <button className="p-2 text-gray-600 hover:text-primary-600 transition-colors">
                        <ExternalLink size={20} />
                      </button>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-6">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 4).map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-200 text-gray-700 rounded-md text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-md text-sm">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Calendar size={16} />
                        <span>{project.period}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users size={16} />
                        <span>{project.teamSize}</span>
                      </div>
                    </div>
                    <div className="font-semibold text-green-600">{project.impact}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* All Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-teal-500 rounded-lg flex items-center justify-center">
                  <TrendingUp size={24} className="text-white" />
                </div>
                <span className="text-xs text-gray-500">{project.period}</span>
              </div>

              <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                {project.title}
              </h4>
              
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">{project.description}</p>

              <div className="flex flex-wrap gap-1 mb-4">
                {project.technologies.slice(0, 3).map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">{project.role}</span>
                <span className="text-sm font-semibold text-primary-600">{project.impact}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto"
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedProject.title}</h3>
                    <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                      {selectedProject.category}
                    </span>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    ✕
                  </button>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">{selectedProject.longDescription}</p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Project Details</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Period:</span>
                        <span className="font-medium">{selectedProject.period}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Role:</span>
                        <span className="font-medium">{selectedProject.role}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Team Size:</span>
                        <span className="font-medium">{selectedProject.teamSize}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Impact:</span>
                        <span className="font-medium text-green-600">{selectedProject.impact}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button className="flex items-center space-x-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
                    <Github size={20} />
                    <span>View Code</span>
                  </button>
                  <button className="flex items-center space-x-2 px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors">
                    <ExternalLink size={20} />
                    <span>Live Demo</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {/* Project Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-gray-50 rounded-xl p-8">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">{projects.length}</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">15+</div>
                <div className="text-gray-600">Technologies Mastered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">98%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">24/7</div>
                <div className="text-gray-600">System Uptime</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 