'use client';

import { motion } from 'framer-motion';
import { Globe, Wrench, Users, Star, ExternalLink } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Website Development & Management',
    description: 'Custom websites, maintenance, and optimization for businesses of all sizes.'
  },
  {
    icon: Wrench,
    title: 'IT Support',
    description: 'Comprehensive IT support covering hardware, software, and network solutions.'
  },
  {
    icon: Users,
    title: 'Technical Consulting',
    description: 'Strategic guidance on technology implementations and digital transformation.'
  }
];

const projectPortfolio = [
  {
    id: 1,
    title: 'NIBM Tower Cranes',
    description: 'Elevating construction excellence through digital innovation - a sophisticated Next.js platform showcasing tower crane solutions with modern design and seamless user experience.',
    techStack: ['Next.js', 'Tailwind CSS', 'Resend', 'Vercel'],
    image: '/nibm-project.png',
    link: 'https://nibm.eu'
  },
  {
    id: 2,
    title: 'STOX Clothing Platform',
    description: 'Refined fashion meets modern technology - a sleek Next.js e-commerce platform delivering personalized style experiences for the contemporary fashion enthusiast.',
    techStack: ['Next.js', 'Tailwind CSS', 'Web Hosting'],
    image: '/stox-project.png',
    link: 'https://new-stox-jw34nktpb-pimstes-projects.vercel.app/'
  },
  {
    id: 3,
    title: 'Project Portfolio #3',
    description: 'Exciting business solution coming soon. This space is reserved for an innovative project currently in development.',
    techStack: ['TBD'],
    image: '/project-placeholder-3.jpg',
    link: '#'
  },
  {
    id: 4,
    title: 'Project Portfolio #4',
    description: 'Another comprehensive business solution in the pipeline. Details will be revealed as development progresses.',
    techStack: ['TBD'],
    image: '/project-placeholder-4.jpg',
    link: '#'
  }
];

export default function CompanySection() {
  return (
    <section id="company" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">My Company</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-teal-500 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 mt-6 max-w-3xl mx-auto">
            <strong>Pim Steijns – Freelance IT</strong> has been providing comprehensive IT solutions since 2019. 
            From website development to technical consulting, I help businesses leverage technology effectively.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center p-8 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-teal-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">5+</div>
              <div className="text-gray-600">Years in Business</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">6</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">100%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </motion.div>

        {/* Project Portfolio */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Project Portfolio</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projectPortfolio.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 group"
              >
                {/* Project Image */}
                <div className="h-48 bg-gradient-to-br from-primary-100 to-teal-100 flex items-center justify-center overflow-hidden relative">
                  {project.image && project.image !== '/project-placeholder-3.jpg' && project.image !== '/project-placeholder-4.jpg' ? (
                    // For actual projects with images - using Next.js Image or background image
                    <div 
                      className="w-full h-full bg-cover bg-center bg-no-repeat"
                      style={{ backgroundImage: `url('${project.image}')` }}
                    >
                      {/* Optional overlay for better text readability */}
                      <div className="w-full h-full bg-black bg-opacity-20 flex items-end justify-start p-4">
                        <div className="bg-white bg-opacity-90 backdrop-blur-sm px-3 py-1 rounded-full">
                          <p className="text-sm text-gray-800 font-medium">{project.title}</p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    // For placeholder projects
                    <div className="text-6xl text-primary-300">📊</div>
                  )}
                </div>
                
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h4>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {project.link !== '#' ? (
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium transition-colors"
                    >
                      <span>View Project</span>
                      <ExternalLink size={16} />
                    </a>
                  ) : (
                    <div className="flex items-center space-x-2 text-gray-400 font-medium">
                      <span>Coming Soon</span>
                      <ExternalLink size={16} />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-500 to-teal-500 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-lg mb-6 opacity-90">
              Let's discuss how I can help bring your ideas to life with reliable IT solutions.
            </p>
            <button className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              Get a Free Consultation
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 