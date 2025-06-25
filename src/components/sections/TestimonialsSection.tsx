'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote, Linkedin, Building } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CTO',
    company: 'TechFlow Solutions',
    image: '/testimonials/sarah-johnson.jpg',
    rating: 5,
    text: 'Pim delivered an exceptional data pipeline optimization solution that transformed our processing capabilities. His technical expertise and attention to detail are outstanding. The 60% performance improvement exceeded our expectations.',
    project: 'Data Pipeline Optimization',
    linkedinUrl: '#'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Head of Engineering',
    company: 'DataCorp International',
    image: '/testimonials/michael-chen.jpg',
    rating: 5,
    text: 'Working with Pim on our K2View integration was a game-changer. His deep understanding of CDC technologies and ability to solve complex integration challenges made the project a huge success.',
    project: 'K2View CDC Integration',
    linkedinUrl: '#'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'VP of Operations',
    company: 'Analytics Plus',
    image: '/testimonials/emily-rodriguez.jpg',
    rating: 5,
    text: 'The Power BI dashboards Pim created have revolutionized how we make business decisions. The insights are crystal clear, and the automated reporting saves us hours each week. Highly recommended!',
    project: 'Business Intelligence Dashboard',
    linkedinUrl: '#'
  },
  {
    id: 4,
    name: 'David Wilson',
    role: 'Senior Data Scientist',
    company: 'CloudTech Innovations',
    image: '/testimonials/david-wilson.jpg',
    rating: 5,
    text: 'Pim\'s expertise in cloud migration and DevOps is remarkable. Our transition to Azure was seamless with zero downtime. His automation tools continue to serve us well months after deployment.',
    project: 'Cloud Migration Tool',
    linkedinUrl: '#'
  },
  {
    id: 5,
    name: 'Lisa Thompson',
    role: 'Product Manager',
    company: 'InnovateNow',
    image: '/testimonials/lisa-thompson.jpg',
    rating: 5,
    text: 'The real-time analytics engine Pim built for us processes millions of events daily with incredible performance. His problem-solving skills and communication throughout the project were exceptional.',
    project: 'Analytics Engine',
    linkedinUrl: '#'
  },
  {
    id: 6,
    name: 'Robert Kumar',
    role: 'IT Director',
    company: 'Global Systems Ltd',
    image: '/testimonials/robert-kumar.jpg',
    rating: 5,
    text: 'Pim is a rare talent who combines deep technical knowledge with excellent project management skills. Our inventory management system has reduced costs by 30% and improved efficiency dramatically.',
    project: 'Inventory Management System',
    linkedinUrl: '#'
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance testimonials
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section id="testimonials" className="section-padding bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Client Testimonials</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-teal-500 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
            What clients and colleagues say about working with me on their most challenging projects
          </p>
        </motion.div>

        {/* Main Testimonial Carousel */}
        <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
          <div className="absolute top-6 left-6 text-primary-500 opacity-20">
            <Quote size={64} />
          </div>
          
          <div className="p-8 md:p-12 relative">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Rating Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} size={24} className="text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-xl md:text-2xl text-gray-700 text-center mb-8 leading-relaxed font-medium">
                "{testimonials[currentIndex].text}"
              </blockquote>

              {/* Client Info */}
              <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-teal-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {testimonials[currentIndex].name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                
                <div className="text-center md:text-left">
                  <h4 className="text-lg font-bold text-gray-900">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-primary-600 font-medium">
                    {testimonials[currentIndex].role}
                  </p>
                  <div className="flex items-center justify-center md:justify-start space-x-2 mt-1">
                    <Building size={14} className="text-gray-500" />
                    <span className="text-gray-600 text-sm">
                      {testimonials[currentIndex].company}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    Project: {testimonials[currentIndex].project}
                  </p>
                </div>

                <button className="text-primary-600 hover:text-primary-700 transition-colors">
                  <Linkedin size={24} />
                </button>
              </div>
            </motion.div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-gray-600 hover:text-primary-600 transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-gray-600 hover:text-primary-600 transition-colors"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Testimonial Dots */}
        <div className="flex justify-center space-x-3 mb-16">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-primary-500 w-8' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* All Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer ${
                index === currentIndex ? 'ring-2 ring-primary-500' : ''
              }`}
              onClick={() => goToTestimonial(index)}
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-semibold">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-gray-900 truncate">{testimonial.name}</h4>
                  <p className="text-sm text-primary-600 truncate">{testimonial.role}</p>
                  <p className="text-xs text-gray-500 truncate">{testimonial.company}</p>
                </div>
              </div>

              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 text-sm leading-relaxed line-clamp-4">
                "{testimonial.text}"
              </p>

              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-xs text-gray-500">Project: {testimonial.project}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonial Stats */}
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
                <div className="text-3xl font-bold text-primary-600 mb-2">100%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">5.0</div>
                <div className="text-gray-600">Average Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">25+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">95%</div>
                <div className="text-gray-600">Repeat Business</div>
              </div>
            </div>
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
            <h3 className="text-2xl font-bold mb-4">Ready to Work Together?</h3>
            <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
              Join the growing list of satisfied clients who have transformed their business 
              with innovative data solutions and technical expertise.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Start Your Project
              </button>
              <button className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors">
                Schedule a Call
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 