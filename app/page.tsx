"use client";

import { HeroSectionMain } from "@/components/hero-section-main";
import { AboutSection } from "@/components/about-section";
import { FloatingNavbar } from "@/components/floating-navbar";
import { motion } from "framer-motion";
import { DemoMasonry } from "@/components/ui/demo-masonry";
import { WavyBackground } from "@/components/ui/wavy-background";
import { StandForSection } from "@/components/stand-for-section";
import { YouTubeSection } from "@/components/youtube-section";
import { ContactFormSection } from "@/components/contact-form-section";
import { Footer } from "@/components/footer";
import { AraHealthSection } from "@/components/ara-health-section";

export default function Home() {
  return (
    <main className="relative">
      <FloatingNavbar />
      <WavyBackground
        className="fixed inset-0 z-0"
        colors={["#3182ce", "#38b2ac", "#3182ce", "#38b2ac"]}
        speed="fast"
        waveOpacity={0.3}
        blur={7}
      />
      {/* Hero Section with Brain Canvas */}
      <HeroSectionMain />

      {/* Spacer to push content over hero */}
      <div className="h-screen"></div>

      {/* About Section */}
      <AboutSection />

      {/* Remaining Sections */}
      <StandForSection />
      <AraHealthSection />
      <YouTubeSection />
      <ContactFormSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
