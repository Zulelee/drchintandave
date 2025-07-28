"use client";

import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { FloatingNavbar } from "@/components/floating-navbar";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { DemoMasonry } from "@/components/ui/demo-masonry";
import { WavyBackground } from "@/components/ui/wavy-background";
import { StandForSection } from "@/components/stand-for-section";
import { YouTubeSection } from "@/components/youtube-section";
import { ContactFormSection } from "@/components/contact-form-section";
import { Footer } from "@/components/footer";
import { ConsultingSection } from "@/components/consulting-section";

export default function Home() {
  const [showMain, setShowMain] = useState(false);

  // Listen for hero exit event
  useEffect(() => {
    const handler = () => {
      setTimeout(() => setShowMain(true), 50);
    };
    window.addEventListener("hero-exited", handler);
    return () => window.removeEventListener("hero-exited", handler);
  }, []);

  return (
    <main className="relative">
      <FloatingNavbar />

      {/* Hero Section */}
      <HeroSection
        onExit={() => {
          const event = new Event("hero-exited");
          window.dispatchEvent(event);
        }}
      />

      <WavyBackground
        className="fixed inset-0 z-0"
        colors={["#3182ce", "#38b2ac", "#3182ce", "#38b2ac"]}
        speed="slow"
        waveOpacity={0.3}
        blur={7}
      />

      {/* About Section - Glassmorphic with Particles */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={showMain ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
        transition={{ duration: 1, ease: [0.4, 0.8, 0.2, 1] }}
      >
        <AboutSection />
        <DemoMasonry />
        <StandForSection />
        <ConsultingSection />
        <YouTubeSection />
        <ContactFormSection />
      </motion.div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
