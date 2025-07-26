"use client";

import { useState, useEffect, Suspense } from "react";
import type { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Zap, Target } from "lucide-react";
import { TypewriterText } from "./typewriter-text";
import dynamic from "next/dynamic";
import { useRef } from "react";

// Dynamically import the 3D component to avoid SSR issues
const NeuralBrainCanvas = dynamic(() => import("./ui/neural-brain"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[var(--dark-blue)]"></div>
    </div>
  ),
});

type HeroSectionProps = {
  onExit?: () => void;
};

export function HeroSection({ onExit }: HeroSectionProps) {
  const [mounted, setMounted] = useState(false);
  const [showHero, setShowHero] = useState(true);
  const [scale, setScale] = useState(1);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    setMounted(true);
  }, []);

  // Lock/unlock body scroll based on showHero
  useEffect(() => {
    if (showHero) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showHero]);

  // Zoom handler
  useEffect(() => {
    if (!showHero || !heroRef.current) return;
    const handleWheel = (e: WheelEvent) => {
      if (e.ctrlKey || e.metaKey) return; // ignore browser zoom
      e.preventDefault();
      setScale((prev) => {
        let next = prev + e.deltaY * -0.001;
        next = Math.max(0.7, Math.min(1.5, next));
        return next;
      });
    };
    const node = heroRef.current;
    node.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      node.removeEventListener("wheel", handleWheel);
    };
  }, [showHero]);

  // Pinch-to-zoom for touch devices
  useEffect(() => {
    if (!showHero || !heroRef.current) return;
    let lastDist: number | null = null;
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 2) {
        e.preventDefault();
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (lastDist !== null) {
          setScale((prev) => {
            let next = prev + (dist - (lastDist as number)) * 0.003;
            next = Math.max(0.7, Math.min(1.5, next));
            return next;
          });
        }
        lastDist = dist;
      }
    };
    const handleTouchEnd = () => {
      lastDist = null;
    };
    const node = heroRef.current;
    node.addEventListener("touchmove", handleTouchMove, { passive: false });
    node.addEventListener("touchend", handleTouchEnd);
    return () => {
      node.removeEventListener("touchmove", handleTouchMove);
      node.removeEventListener("touchend", handleTouchEnd);
    };
  }, [showHero]);

  if (!mounted) return null;

  // Lock/unlock body scroll based on showHero
  useEffect(() => {
    if (showHero) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showHero]);

  // Zoom handler
  useEffect(() => {
    if (!showHero || !heroRef.current) return;
    const handleWheel = (e: WheelEvent) => {
      if (e.ctrlKey || e.metaKey) return; // ignore browser zoom
      e.preventDefault();
      setScale((prev) => {
        let next = prev + e.deltaY * -0.001;
        next = Math.max(0.7, Math.min(1.5, next));
        return next;
      });
    };
    const node = heroRef.current;
    node.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      node.removeEventListener("wheel", handleWheel);
    };
  }, [showHero]);

  // Pinch-to-zoom for touch devices
  useEffect(() => {
    if (!showHero || !heroRef.current) return;
    let lastDist: number | null = null;
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 2) {
        e.preventDefault();
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (lastDist !== null) {
          setScale((prev) => {
            let next = prev + (dist - (lastDist as number)) * 0.003;
            next = Math.max(0.7, Math.min(1.5, next));
            return next;
          });
        }
        lastDist = dist;
      }
    };
    const handleTouchEnd = () => {
      lastDist = null;
    };
    const node = heroRef.current;
    node.addEventListener("touchmove", handleTouchMove, { passive: false });
    node.addEventListener("touchend", handleTouchEnd);
    return () => {
      node.removeEventListener("touchmove", handleTouchMove);
      node.removeEventListener("touchend", handleTouchEnd);
    };
  }, [showHero]);

  if (!mounted) return null;

  return (
    <AnimatePresence
      onExitComplete={() => {
        // Scroll to about-section after hero is gone
        const aboutSection = document.getElementById("about-section");
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: "smooth" });
        }
        if (onExit) {
          onExit();
        }
      }}
    >
      {showHero && (
        <motion.section
          ref={heroRef}
          initial={{ y: 0, opacity: 1 }}
          animate={{ y: 0, opacity: 1, scale: scale }}
          exit={{ y: "-100vh", opacity: 0, scale: scale }}
          transition={{ duration: 1.8, ease: [0.4, 0.8, 0.2, 1] }}
          className={`fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-[var(--cream)]`}
          style={{ willChange: "transform, opacity" }}
        >
          {/* 3D Neural Brain Background */}
          <div className="absolute inset-0 z-0">
            <Suspense
              fallback={
                <div
                  className="w-full h-full flex items-center justify-center"
                  style={{ background: "var(--cream)" }}
                >
                  <div className="animate-pulse text-blue-600">
                    Loading Neural Network...
                  </div>
                </div>
              }
            >
              <NeuralBrainCanvas />
            </Suspense>
          </div>

          {/* Hero Text Content */}
          <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
            {/* Main Name - Huge with Depth */}
            <h1 className="text-6xl sm:text-8xl lg:text-9xl font-bold mb-8 leading-tight">
              <span
                className="block"
                style={{
                  color: "var(--dark-blue)",
                  textShadow: `
                4px 4px 0px var(--dark-blue-light),
                8px 8px 0px rgba(26, 54, 93, 0.3),
                12px 12px 20px rgba(26, 54, 93, 0.2)
              `,
                  letterSpacing: "-0.02em",
                }}
              >
                Dr. Chintan Dave
              </span>
            </h1>
            {/* Typewriter Text */}
            <div
              className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-12 "
              style={{
                color: "var(--accent-blue)",
                textShadow: `
              2px 2px 0px var(--dark-blue),
              4px 4px 0px rgba(26, 54, 93, 0.4),
              6px 6px 15px rgba(26, 54, 93, 0.3),
              0px 0px 20px rgba(49, 130, 206, 0.5)
            `,
              }}
            >
            {/* Typewriter Text */}
            <div
              className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-12 "
              style={{
                color: "var(--accent-blue)",
                textShadow: `
              2px 2px 0px var(--dark-blue),
              4px 4px 0px rgba(26, 54, 93, 0.4),
              6px 6px 15px rgba(26, 54, 93, 0.3),
              0px 0px 20px rgba(49, 130, 206, 0.5)
            `,
              }}
            >
              <TypewriterText
                words={["Medicine", "AI", "Innovation", "Healthcare"]}
                typingSpeed={100}
                words={["Medicine", "AI", "Innovation", "Healthcare"]}
                typingSpeed={100}
                deletingSpeed={50}
                pauseDuration={2000}
                pauseDuration={2000}
              />
            </div>
            {/* Contact Button */}
            <div className="mt-16 flex flex-col items-center gap-6">
              <button
                className="px-12 py-4 text-xl font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                style={{
                  backgroundColor: "var(--dark-blue)",
                  color: "white",
                  border: "2px solid var(--dark-blue-light)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "var(--dark-blue-light)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--dark-blue)";
                }}
              >
                Contact Dr. Dave
              </button>
              {/* Scroll to About Button */}
              <button
                onClick={() => {
                  setShowHero(false);
                }}
                className="flex flex-col items-center gap-2 text-[var(--text-medium)] hover:text-[var(--dark-blue)] transition-all duration-300 group"
              >
                <span className="text-sm font-medium">
                  Learn More About Dr. Dave
                </span>
                <div className="w-6 h-6 border-2 border-current rounded-full flex items-center justify-center group-hover:animate-bounce">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </div>
            {/* Contact Button */}
            <div className="mt-16 flex flex-col items-center gap-6">
              <button
                className="px-12 py-4 text-xl font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                style={{
                  backgroundColor: "var(--dark-blue)",
                  color: "white",
                  border: "2px solid var(--dark-blue-light)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "var(--dark-blue-light)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--dark-blue)";
                }}
              >
                Contact Dr. Dave
              </button>
              {/* Scroll to About Button */}
              <button
                onClick={() => {
                  setShowHero(false);
                }}
                className="flex flex-col items-center gap-2 text-[var(--text-medium)] hover:text-[var(--dark-blue)] transition-all duration-300 group"
              >
                <span className="text-sm font-medium">
                  Learn More About Dr. Dave
                </span>
                <div className="w-6 h-6 border-2 border-current rounded-full flex items-center justify-center group-hover:animate-bounce">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
        </motion.section>
      )}
    </AnimatePresence>
  );
}

}
