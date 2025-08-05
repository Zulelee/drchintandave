"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export const AraHealthSection = () => {
  return (
    <section className="relative w-full flex items-center justify-center overflow-hidden bg-transparent py-20 px-4">
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="backdrop-blur-2xl rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl border"
          style={{
            background: "rgba(255, 255, 255, 0.1)",
            borderColor: "rgba(255, 255, 255, 0.2)",
            boxShadow: `
              0 8px 32px rgba(0, 0, 0, 0.1),
              inset 0 1px 0 rgba(255, 255, 255, 0.1)
            `,
          }}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                  style={{
                    color: "var(--dark-blue)",
                    textShadow: `
                     2px 2px 0px #3182ce,
                4px 4px 0px #38b2ac,
                6px 6px 15px #38b2ac
                    `,
                  }}
                >
                  Ara Health
                </h2>
                <h3
                  className="text-2xl sm:text-3xl font-semibold  text-[var(--accent-blue)] mb-6"
                  style={{
                    textShadow: `0 0 1px var(--dark-blue),
                        0 0 20px #ffffff`,
                  }}
                >
                  Solving Values Misalignment in Healthcare
                </h3>
              </div>

              <div className="space-y-6 text-lg text-[var(--text-dark)] leading-relaxed">
                <p>
                  We&apos;re building the only patient-first AI platform
                  dedicated towards improving patient experience and outcomes by
                  ensuring alignment with patient values across the healthcare
                  ecosystem.
                </p>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
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
                Learn More
              </motion.button>
            </motion.div>

            {/* Animated Logo */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                <a href="https://arahealth.ai" target="_blank">
                  <div
                    className="w-80 h-80 rounded-3xl overflow-hidden backdrop-blur-md border shadow-2xl flex items-center justify-center"
                    style={{
                      background: "rgba(255, 255, 255, 0.1)",
                      borderColor: "rgba(255, 255, 255, 0.2)",
                    }}
                  >
                    <Image
                      src="/animated_logo.gif"
                      alt="Ara Health - Patient-First AI Platform"
                      width={500}
                      height={500}
                      className="object-contain"
                    />
                  </div>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
