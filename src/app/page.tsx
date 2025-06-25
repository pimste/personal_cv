'use client';

import Sidebar from '@/components/Sidebar';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import CompanySection from '@/components/sections/CompanySection';
import PhotographySection from '@/components/sections/PhotographySection';
import SkillsSection from '@/components/sections/SkillsSection';
import EducationSection from '@/components/sections/EducationSection';
import CertificationsSection from '@/components/sections/CertificationsSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <main className="lg:ml-80">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <CompanySection />
        <PhotographySection />
        <SkillsSection />
        <EducationSection />
        <CertificationsSection />
        <ProjectsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
    </div>
  );
}
