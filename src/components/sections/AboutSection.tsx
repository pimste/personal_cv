'use client';

import { motion } from 'framer-motion';
import { Users, Target, Lightbulb, Heart } from 'lucide-react';

const highlights = [
  {
    icon: Target,
    title: 'Solution-Focused',
    description: 'I translate complex data problems into practical, sustainable solutions.'
  },
  {
    icon: Users,
    title: 'Team Collaborator',
    description: 'Strong communication skills with a focus on cross-functional teamwork.'
  },
  {
    icon: Lightbulb,
    title: 'Innovation Driver',
    description: 'Always exploring new technologies and methodologies to improve outcomes.'
  },
  {
    icon: Heart,
    title: 'Quality Oriented',
    description: 'I value the balance between solid technology and practical insights.'
  }
];

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-teal-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
              By day, I’m a data engineer—part architect, part detective, part digital plumber—building 
              scalable data pipelines and making sense of messy information. 
              I turn tangled data problems into sustainable solutions that work in the real world.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
              I believe great tech doesn’t live in a vacuum. 
              It should talk to people, make their lives easier, and actually solve problems. 
              That’s why I focus just as much on clear communication and practical impact as I do on writing solid, scalable code.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
              When I’m not knee-deep in SQL or cloud configs, you’ll probably find me behind a camera lens. 
              Photography sharpens my eye for detail because even in data, a little artistry goes a long way.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-primary-600">5+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-primary-600">20+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-primary-600">3</div>
                <div className="text-sm text-gray-600">Specializations</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-teal-500 rounded-lg flex items-center justify-center">
                      <Icon size={24} className="text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-gray-600">
                      {highlight.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
} 