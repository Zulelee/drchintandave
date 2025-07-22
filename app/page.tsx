import { HeroSection } from '@/components/hero-section';
import { AboutSection } from '@/components/about-section';
import { ContactSection } from '@/components/contact-section';
import { FloatingNavbar } from '@/components/floating-navbar';

export default function Home() {
  return (
    <main className="relative">
      <FloatingNavbar />

      {/* Fixed Neural Network Background */}
      <div className="fixed inset-0 z-0 bg-gray-900">
        {/* This will be the persistent background */}
      </div>

      {/* Hero Section */}
      <HeroSection />

      {/* About Section - Slides in from bottom */}
      <div className="relative z-10 min-h-screen bg-gray-900/95 backdrop-blur-sm">
        <AboutSection />
      </div>

      {/* Contact Section */}
      <div className="relative z-10 min-h-screen bg-gray-900/95 backdrop-blur-sm">
        <ContactSection />
      </div>
    </main>
  );
}