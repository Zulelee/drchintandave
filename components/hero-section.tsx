"use client";

import { AnimatePresence, motion } from "framer-motion";
import dynamic from "next/dynamic";
import { Suspense, useEffect, useRef, useState } from "react";
import { TypewriterText } from "./typewriter-text";

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
  const [scrollProgress, setScrollProgress] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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

  // Zoom and transition handler
  useEffect(() => {
    if (!showHero || !heroRef.current) return;

    console.log("Setting up wheel event listener...");

    const handleWheel = (e: WheelEvent) => {
      console.log("Wheel event detected!");
      if (e.ctrlKey || e.metaKey) return; // ignore browser zoom
      e.preventDefault();

      // Increase scale on scroll
      console.log(`Scroll delta: ${e.deltaY}`);
      setScale((prevScale) => {
        const newScale = prevScale + e.deltaY * -0.01; // Increased multiplier
        const clampedScale = Math.max(1, Math.min(1.5, newScale));
        console.log(`Previous scale: ${prevScale}, New scale: ${clampedScale}`);

        // Calculate progress for visual indicator (0 to 1)
        const progress = Math.max(0, Math.min(1, (clampedScale - 1) / 0.5));
        setScrollProgress(progress);

        // Auto-transition when scale reaches 1.5 (50% zoom)
        if (clampedScale >= 1.5) {
          console.log("Zoom threshold reached, transitioning to main page...");
          setShowHero(false);
        }

        return clampedScale;
      });
    };

    const node = heroRef.current;
    console.log("Adding wheel event listener to:", node);
    node.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      console.log("Removing wheel event listener");
      node.removeEventListener("wheel", handleWheel);
    };
  }, [showHero]);

  // Touch handler for mobile devices
  useEffect(() => {
    if (!showHero || !heroRef.current) return;

    let lastY = 0;

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        e.preventDefault();
        const currentY = e.touches[0].clientY;
        const deltaY = lastY - currentY; // Positive when scrolling up

        // Increase scale on touch scroll
        setScale((prevScale) => {
          const newScale = prevScale + deltaY * 0.002;
          const clampedScale = Math.max(1, Math.min(3.0, newScale));

          // Calculate progress for visual indicator (0 to 1)
          const progress = Math.max(0, Math.min(1, (clampedScale - 1) / 2.0));
          setScrollProgress(progress);
          console.log(`Scale: ${clampedScale}, Progress: ${progress * 100}%`);

          // Auto-transition when scale reaches 3.0 (200% zoom)
          if (clampedScale >= 3.0) {
            console.log(
              "Zoom threshold reached (mobile), transitioning to main page..."
            );
            setShowHero(false);
          }

          return clampedScale;
        });

        lastY = currentY;
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        lastY = e.touches[0].clientY;
      }
    };

    const node = heroRef.current;
    node.addEventListener("touchstart", handleTouchStart);
    node.addEventListener("touchmove", handleTouchMove, { passive: false });
    return () => {
      node.removeEventListener("touchstart", handleTouchStart);
      node.removeEventListener("touchmove", handleTouchMove);
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
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100vh", opacity: 0 }}
          transition={{ duration: 1.8, ease: [0.4, 0.8, 0.2, 1] }}
          className={`fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-[var(--cream)]`}
          style={{ willChange: "transform, opacity" }}
          onWheel={(e) => {
            console.log("Direct onWheel event detected!");
            e.preventDefault();
            setScale((prevScale) => {
              const newScale = prevScale + e.deltaY * -0.01;
              const clampedScale = Math.max(1, Math.min(3.0, newScale));
              console.log(
                `Direct wheel - Previous: ${prevScale}, New: ${clampedScale}`
              );

              const progress = Math.max(
                0,
                Math.min(1, (clampedScale - 1) / 2.0)
              );
              setScrollProgress(progress);

              if (clampedScale >= 3.0) {
                console.log("Direct wheel - Transitioning to main page...");
                setShowHero(false);
              }

              return clampedScale;
            });
          }}
        >
          {/* 3D Neural Brain Background */}
          <motion.div
            className="absolute inset-0 z-0"
            animate={{ scale: scale }}
            transition={{ duration: 0.1 }}
          >
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
          </motion.div>

          {/* Hero Text Content */}
          <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
            {/* Main Name - Huge with Depth */}
            <h1 className="text-6xl sm:text-8xl lg:text-9xl font-bold mb-8 leading-tight">
              <span
                className="block"
                style={{
                  color: "var(--dark-blue)",
                  textShadow: `
                    0 0 2px #3182ce,
                    0 0 4px #38b2ac,
                    0 0 6px #3182ce,
                    0 0 8px #38b2ac
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
              <TypewriterText
                words={["Medicine", "AI", "Educator"]}
                typingSpeed={100}
                deletingSpeed={50}
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
              {/* Scroll Progress Indicator */}
              <div className="flex flex-col items-center gap-4">
                <button
                  onClick={() => {
                    console.log("Manual transition triggered");
                    setShowHero(false);
                  }}
                  className="flex flex-col items-center gap-2 text-[var(--text-medium)] hover:text-[var(--dark-blue)] transition-all duration-300 group cursor-pointer"
                >
                  <span className="text-sm font-medium">
                    Zoom into the brain or click here to continue
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
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
