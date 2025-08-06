"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { TypewriterText } from "./typewriter-text";
import Image from "next/image";

// Dynamically import the 3D component to avoid SSR issues
const NeuralBrainCanvas = dynamic(() => import("./ui/neural-brain"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[var(--dark-blue)]"></div>
    </div>
  ),
});

export function HeroSectionMain() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-transparent select-none">
      {/* 3D Neural Brain Background */}
      <div className="absolute inset-0 z-0 hidden lg:block">
        <Suspense
          fallback={
            <div
              className="w-full h-full flex items-center justify-center"
              style={{ background: "transparent" }}
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

      {/* Hero Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen pt-28 lg:pt-0">
          {/* Left Side - Text Content */}
          <div className="text-center lg:text-left pl-0 lg:pl-10">
            {/* Main Name - Huge with Depth */}
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.4, 0.8, 0.2, 1] }}
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 leading-tight"
            >
              <span
                className="block"
                style={{
                  color: "var(--dark-blue)",
                  textShadow: `
                    2px 2px 0px #3182ce,
                4px 4px 0px #38b2ac,
                6px 6px 15px #38b2ac
                  `,
                  letterSpacing: "-0.02em",
                }}
              >
                Dr. Chintan Dave
              </span>
            </motion.h1>

            {/* Typewriter Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.4, 0.8, 0.2, 1] }}
              className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-12"
              style={{
                color: "var(--accent-blue)",
                textShadow: `
              2px 2px 0px var(--dark-blue),
              4px 4px 0px #38b2ac,
              6px 6px 0px #ffffff,
              8px 8px 15px #ffffff
              `,
              }}
            >
              <TypewriterText
                words={["Medicine", "AI", "Educator"]}
                typingSpeed={100}
                deletingSpeed={50}
                pauseDuration={2000}
              />
            </motion.div>

            {/* Contact Button */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.4, 0.8, 0.2, 1] }}
              className="flex flex-col items-center lg:items-start gap-6"
            >
              <button
                onClick={() => {
                  const contactSection =
                    document.getElementById("contact-section");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="px-12 py-4 text-xl font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer"
                style={{
                  backgroundColor: "#38b2ac",
                  color: "white",
                  boxShadow:
                    "inset 0 2px 4px rgba(49, 130, 206, 0.3), inset 0 4px 8px rgba(49, 130, 206, 0.2), inset 0 8px 16px rgba(49, 130, 206, 0.1)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#38b2ac";
                  e.currentTarget.style.boxShadow =
                    "inset 0 4px 8px rgba(49, 130, 206, 0.4), inset 0 8px 16px rgba(49, 130, 206, 0.3), inset 0 16px 32px rgba(49, 130, 206, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#38b2ac";
                  e.currentTarget.style.boxShadow =
                    "inset 0 2px 4px rgba(49, 130, 206, 0.3), inset 0 4px 8px rgba(49, 130, 206, 0.2), inset 0 8px 16px rgba(49, 130, 206, 0.1)";
                }}
              >
                Contact Dr. Dave
              </button>

              {/* Scroll Indicator */}
              {/* <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1, ease: [0.4, 0.8, 0.2, 1] }}
                className="flex flex-col items-center lg:items-start gap-4"
              >
                <div className="flex flex-col items-center lg:items-start gap-2 text-[var(--text-medium)] transition-all duration-300">
                  <span className="text-sm font-medium">
                    Scroll to explore more
                  </span>
                  <div className="w-6 h-6 border-2 border-current rounded-full flex items-center justify-center animate-bounce">
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
                </div>
              </motion.div> */}
            </motion.div>
          </div>

          {/* Right Side - Dr. Dave's Photo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.4, 0.8, 0.2, 1] }}
            className="flex justify-center lg:justify-end relative min-h-screen"
          >
            <div className="absolute bottom-0 right-0 flex justify-items-end items-end h-full ">
              <Image
                src="/image.png"
                alt="Dr. Chintan Dave - Professional Headshot"
                width={800} // increased from 600
                height={1000} // increased from 800
                className="object-cover h-[90vh] "
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
