'use client';

import { motion } from 'framer-motion';
import { Download, ArrowDown } from 'lucide-react';
import { scrollToSection } from '@/lib/utils';

export default function HeroSection() {
  const handleDownloadCV = () => {
    // TODO: Replace with actual CV PDF download
    window.open('/cv-pim-steijns.pdf', '_blank');
  };

  const floatingShapes = [
    { id: 1, size: 'w-20 h-20', delay: 0, x: '10%', y: '20%' },
    { id: 2, size: 'w-16 h-16', delay: 1, x: '80%', y: '30%' },
    { id: 3, size: 'w-12 h-12', delay: 2, x: '60%', y: '70%' },
    { id: 4, size: 'w-24 h-24', delay: 1.5, x: '20%', y: '80%' },
    { id: 5, size: 'w-14 h-14', delay: 0.5, x: '90%', y: '60%' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-teal-50">
      {/* Floating Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {floatingShapes.map((shape) => (
          <motion.div
            key={shape.id}
            className={`absolute ${shape.size} rounded-full opacity-20`}
            style={{ left: shape.x, top: shape.y }}
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 6,
              delay: shape.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="w-full h-full bg-gradient-to-r from-primary-400 to-teal-400 rounded-full" />
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="text-center z-10 px-6 max-w-4xl mx-auto">
        {/* Profile Picture Placeholder */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-primary-500 to-teal-500 flex items-center justify-center shadow-2xl">
            {/* TODO: Replace with actual profile picture */}
            <span className="text-white font-bold text-4xl">PS</span>
          </div>
        </motion.div>

        {/* Name and Title */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
            Pim Steijns
          </h1>
          <div className="text-xl md:text-2xl text-gray-600 mb-8 space-y-2">
            <p>Data Engineer • IT Specialist • Photographer</p>
          </div>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Dedicated data engineer with years of experience designing scalable architectures 
          and building efficient pipelines. I translate data problems into sustainable solutions 
          that help organizations maximize their data potential.
        </motion.p>

        {/* Call to Action Buttons */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={handleDownloadCV}
            className="flex items-center space-x-2 bg-gradient-to-r from-primary-500 to-teal-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-primary-600 hover:to-teal-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <Download size={20} />
            <span>Download My CV</span>
          </button>
          
          <button
            onClick={() => scrollToSection('about')}
            className="flex items-center space-x-2 border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-primary-500 hover:text-primary-600 transition-all duration-200"
          >
            <span>Learn More About Me</span>
          </button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-gray-500"
          >
            <span className="text-sm mb-2">Scroll to explore</span>
            <ArrowDown size={20} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 