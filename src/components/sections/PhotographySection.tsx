'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Camera, Filter, X, Heart } from 'lucide-react';

const categories = ['All', 'Nature', 'Urban', 'Portrait'];

const photos = [
  {
    id: 1,
    src: '/photography/nature-1.jpg', // TODO: Replace with actual photos
    alt: 'Mountain landscape at sunset',
    category: 'Nature',
    title: 'Mountain Sunset',
    description: 'Captured during a hiking trip in the Alps'
  },
  {
    id: 2,
    src: '/photography/urban-1.jpg',
    alt: 'City street photography',
    category: 'Urban',
    title: 'City Lights',
    description: 'Night photography in downtown Amsterdam'
  },
  {
    id: 3,
    src: '/photography/portrait-1.jpg',
    alt: 'Portrait photography',
    category: 'Portrait',
    title: 'Creative Portrait',
    description: 'Studio portrait with creative lighting'
  },
  {
    id: 4,
    src: '/photography/nature-2.jpg',
    alt: 'Forest pathway',
    category: 'Nature',
    title: 'Forest Path',
    description: 'Early morning mist in a Dutch forest'
  },
  {
    id: 5,
    src: '/photography/urban-2.jpg',
    alt: 'Architecture photography',
    category: 'Urban',
    title: 'Modern Architecture',
    description: 'Geometric patterns in contemporary buildings'
  },
  {
    id: 6,
    src: '/photography/portrait-2.jpg',
    alt: 'Environmental portrait',
    category: 'Portrait',
    title: 'Environmental Portrait',
    description: 'Natural light portrait in urban setting'
  },
  {
    id: 7,
    src: '/photography/nature-3.jpg',
    alt: 'Seascape photography',
    category: 'Nature',
    title: 'Coastal Waves',
    description: 'Long exposure of waves on the Dutch coast'
  },
  {
    id: 8,
    src: '/photography/urban-3.jpg',
    alt: 'Street photography',
    category: 'Urban',
    title: 'Street Life',
    description: 'Candid moments in busy city streets'
  }
];

export default function PhotographySection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedPhoto, setSelectedPhoto] = useState<typeof photos[0] | null>(null);

  const filteredPhotos = activeCategory === 'All' 
    ? photos 
    : photos.filter(photo => photo.category === activeCategory);

  return (
    <section id="photography" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Photography</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-teal-500 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
            Beyond data and technology, I find inspiration through the lens. Photography helps me 
            maintain a creative perspective and attention to detail that enriches my professional work.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="flex items-center space-x-2 bg-gray-100 rounded-lg p-1">
            <Filter size={20} className="text-gray-600 ml-2" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-primary-500 to-teal-500 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPhotos.map((photo, index) => (
            <motion.div
              key={photo.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelectedPhoto(photo)}
            >
              <div className="relative overflow-hidden rounded-xl bg-gray-200 aspect-square">
                {/* Photo Placeholder */}
                <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <Camera size={48} className="text-gray-400" />
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                  <div className="transform scale-0 group-hover:scale-100 transition-transform duration-300">
                    <div className="bg-white rounded-lg p-3">
                      <Camera size={24} className="text-gray-900" />
                    </div>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 bg-white bg-opacity-90 backdrop-blur-sm rounded-full text-sm font-medium text-gray-900">
                    {photo.category}
                  </span>
                </div>

                {/* Like Button */}
                <button className="absolute top-3 right-3 w-8 h-8 bg-white bg-opacity-90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Heart size={16} className="text-gray-700" />
                </button>
              </div>

              <div className="mt-3">
                <h3 className="font-semibold text-gray-900">{photo.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{photo.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedPhoto(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              onClick={() => setSelectedPhoto(null)}
            >
              <X size={32} />
            </button>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-gray-200 rounded-lg aspect-square max-h-[80vh] flex items-center justify-center">
                <Camera size={96} className="text-gray-400" />
              </div>
              
              <div className="bg-white p-6 rounded-b-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{selectedPhoto.title}</h3>
                <p className="text-gray-600 mb-3">{selectedPhoto.description}</p>
                <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                  {selectedPhoto.category}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Photography Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-gray-50 rounded-xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">500+</div>
                <div className="text-gray-600">Photos Captured</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">50+</div>
                <div className="text-gray-600">Locations Visited</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">5+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">3</div>
                <div className="text-gray-600">Favorite Styles</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 