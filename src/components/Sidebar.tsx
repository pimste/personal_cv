'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Home, 
  User, 
  Briefcase, 
  Building2, 
  Camera, 
  Code, 
  GraduationCap, 
  Award, 
  FolderOpen, 
  MessageSquare, 
  Mail, 
  Download,
  Menu,
  X
} from 'lucide-react';
import { cn, scrollToSection } from '@/lib/utils';

const navigationItems = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'about', label: 'About Me', icon: User },
  { id: 'experience', label: 'Work Experience', icon: Briefcase },
  { id: 'company', label: 'My Company', icon: Building2 },
  { id: 'photography', label: 'Photography', icon: Camera },
  { id: 'skills', label: 'Skills', icon: Code },
  { id: 'education', label: 'Education', icon: GraduationCap },
  { id: 'certifications', label: 'Certifications', icon: Award },
  { id: 'projects', label: 'Projects', icon: FolderOpen },
  { id: 'testimonials', label: 'Testimonials', icon: MessageSquare },
  { id: 'contact', label: 'Contact', icon: Mail },
];

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    scrollToSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  const handleDownloadCV = () => {
    // TODO: Replace with actual CV PDF download
    window.open('/cv-pim-steijns.pdf', '_blank');
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-lg"
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <motion.div
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        className={cn(
          "fixed left-0 top-0 h-full w-80 bg-white shadow-xl z-50 transform transition-transform duration-300",
          "lg:transform-none lg:shadow-lg",
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-teal-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">PS</span>
            </div>
            <div>
              <h1 className="font-semibold text-lg text-gray-900">Pim Steijns</h1>
              <p className="text-sm text-gray-600">Data Engineer</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 py-6">
          <ul className="space-y-1 px-3">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              
              return (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={cn(
                      "w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors duration-200",
                      isActive 
                        ? "bg-primary-50 text-primary-700 border-r-2 border-primary-500" 
                        : "text-gray-700 hover:bg-gray-100"
                    )}
                  >
                    <Icon size={20} />
                    <span className="font-medium">{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="p-6 border-t border-gray-200">
          <button
            onClick={handleDownloadCV}
            className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-primary-500 to-teal-500 text-white px-4 py-3 rounded-lg font-medium hover:from-primary-600 hover:to-teal-600 transition-all duration-200 shadow-md hover:shadow-lg"
          >
            <Download size={20} />
            <span>Download CV</span>
          </button>
        </div>
      </motion.div>
    </>
  );
} 