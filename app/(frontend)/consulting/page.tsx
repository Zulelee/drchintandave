"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, Users, Brain, ArrowRight } from "lucide-react";
import { WavyBackground } from "@/components/ui/wavy-background";
import { FloatingNavbar } from "@/components/floating-navbar";
import { Footer } from "@/components/footer";

export default function ConsultingPage() {
  return (
    <main className="relative min-h-screen">
      <FloatingNavbar />

      <WavyBackground
        className="fixed inset-0 z-0"
        colors={["#3182ce", "#38b2ac", "#3182ce", "#38b2ac"]}
        speed="slow"
        waveOpacity={0.3}
        blur={7}
      />

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
              style={{
                color: "var(--dark-blue)",
                textShadow: `
                  2px 2px 0px var(--dark-blue-light),
                  4px 4px 0px rgba(26, 54, 93, 0.3),
                  6px 6px 15px rgba(26, 54, 93, 0.2)
                `,
              }}
            >
              Consulting
            </h1>

            <div className="mb-12">
              <p className="text-xl text-[var(--dark-blue)]/90 max-w-4xl mx-auto leading-relaxed drop-shadow-md">
                Leveraging expertise in critical care medicine, AI, and
                healthcare innovation to help healthcare professionals and
                businesses achieve their goals.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Consulting Services */}
      <section className="relative z-10 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Personal Consulting */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="backdrop-blur-2xl rounded-3xl p-8 sm:p-12 shadow-2xl border"
              style={{
                background: "rgba(255, 255, 255, 0.15)",
                borderColor: "rgba(255, 255, 255, 0.2)",
                boxShadow: `
                  0 8px 32px rgba(0, 0, 0, 0.1),
                  inset 0 1px 0 rgba(255, 255, 255, 0.1)
                `,
              }}
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-[var(--accent-blue)]/20 rounded-full">
                  <Users className="w-8 h-8 text-[var(--accent-blue)]" />
                </div>
                <h2 className="text-3xl font-bold text-[var(--dark-blue)]">
                  Personal Consulting
                </h2>
              </div>

              <p className="text-lg text-[var(--dark-blue)]/90 leading-relaxed mb-6">
                Personal Consulting is open to healthcare workers looking to
                expand their social media presence and thought leadership.
              </p>

              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[var(--accent-blue)] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-[var(--dark-blue)]/80">
                    Social media strategy and content development
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[var(--accent-blue)] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-[var(--dark-blue)]/80">
                    Thought leadership positioning
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[var(--accent-blue)] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-[var(--dark-blue)]/80">
                    Personal brand development
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[var(--accent-blue)] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-[var(--dark-blue)]/80">
                    Healthcare communication strategies
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Business Consulting */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="backdrop-blur-2xl rounded-3xl p-8 sm:p-12 shadow-2xl border"
              style={{
                background: "rgba(255, 255, 255, 0.15)",
                borderColor: "rgba(255, 255, 255, 0.2)",
                boxShadow: `
                  0 8px 32px rgba(0, 0, 0, 0.1),
                  inset 0 1px 0 rgba(255, 255, 255, 0.1)
                `,
              }}
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-[var(--accent-blue)]/20 rounded-full">
                  <Brain className="w-8 h-8 text-[var(--accent-blue)]" />
                </div>
                <h2 className="text-3xl font-bold text-[var(--dark-blue)]">
                  Business Consulting
                </h2>
              </div>

              <p className="text-lg text-[var(--dark-blue)]/90 leading-relaxed mb-6">
                Business Consulting is open to businesses solving healthcare
                problems with AI, from clinical insights into model
                development/validation, optimizing clinical workflow integration
                pathways, and ensuring patient and ethical alignment.
              </p>

              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[var(--accent-blue)] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-[var(--dark-blue)]/80">
                    Clinical insights for AI model development
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[var(--accent-blue)] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-[var(--dark-blue)]/80">
                    Model validation and testing strategies
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[var(--accent-blue)] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-[var(--dark-blue)]/80">
                    Clinical workflow integration optimization
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[var(--accent-blue)] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-[var(--dark-blue)]/80">
                    Patient safety and ethical alignment
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <div
              className="backdrop-blur-2xl rounded-3xl p-8 sm:p-12 shadow-2xl border max-w-2xl mx-auto"
              style={{
                background: "rgba(255, 255, 255, 0.15)",
                borderColor: "rgba(255, 255, 255, 0.2)",
                boxShadow: `
                  0 8px 32px rgba(0, 0, 0, 0.1),
                  inset 0 1px 0 rgba(255, 255, 255, 0.1)
                `,
              }}
            >
              <div className="flex items-center justify-center space-x-3 mb-6">
                <MessageCircle className="w-8 h-8 text-[var(--accent-blue)]" />
                <h3 className="text-2xl font-bold text-[var(--dark-blue)]">
                  Ready to Get Started?
                </h3>
              </div>

              <p className="text-lg text-[var(--dark-blue)]/90 mb-8 leading-relaxed">
                Let&apos;s discuss how I can help you achieve your healthcare
                innovation goals. Whether you&apos;re a healthcare professional
                looking to build your presence or a business developing AI
                solutions, I&apos;m here to help.
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[var(--dark-blue)] to-[var(--dark-blue-light)] hover:from-[var(--dark-blue-light)] hover:to-[var(--dark-blue)] text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Contact Me
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
