"use client";

import React, { Suspense } from "react";
import Image from "next/image";
import { ImageCarousel } from "./image-carousel";
import { motion } from "framer-motion";

export const AboutSection: React.FC = () => {
  return (
    <>
      <section
        id="about-section"
        className="relative w-full overflow-hidden bg-transparent py-20 px-4"
        style={{ background: "transparent" }}
      >
        {/* Glassmorphic Container */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="backdrop-blur-2xl rounded-3xl p-6 sm:p-8 lg:p-12 xl:p-16 shadow-2xl border"
            style={{
              background: "rgba(255, 255, 255, 0.1)",
              borderColor: "rgba(255, 255, 255, 0.2)",
              boxShadow: `
              0 8px 32px rgba(0, 0, 0, 0.1),
              inset 0 1px 0 rgba(255, 255, 255, 0.1)
            `,
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Text Content */}
              <div className="space-y-6 lg:space-y-8">
                <div>
                  <h2
                    className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 leading-tight relative"
                    style={{
                      color: "var(--dark-blue)",
                      textShadow: `
                        0 0 2px #3182ce,
                        0 0 4px #38b2ac,
                        0 0 6px #3182ce,
                        0 0 8px #38b2ac
                      `,
                    }}
                  >
                    Hi, I&apos;m Dr. Dave
                  </h2>
                </div>

                <div
                  className="space-y-4 lg:space-y-6 text-base lg:text-lg leading-relaxed"
                  style={{ color: "var(--text-dark)" }}
                >
                  <p>
                    I&apos;m a{" "}
                    <strong>
                      dual-certified Internal Medicine and Critical Care
                      Physician
                    </strong>{" "}
                    with expertise in medical research, AI, and teaching. I went
                    into Medicine wanting to serve others, and help people
                    through the darkest and toughest times of their lives.
                  </p>

                  <p>
                    While it has remained a privilege to serve others as a
                    doctor, over the years, I had a deeper feeling that I was
                    meant to do more and help more people. This is when I
                    started sharing my stories and lessons through social media.
                    I have been grateful to create an engaging community of
                    healthcare professionals spreading curiosity and hope.
                  </p>

                  <p>
                    I am now on the journey to reduce patient suffering as much
                    as possible through solving AI-patient value misalignment in
                    healthcare (
                    <b>
                      <a href="https://arahealth.ai">arahealth.ai</a>
                    </b>
                    ).
                  </p>
                </div>
              </div>

              {/* Dr. Dave's Photo Carousel */}
              <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
                <div className="relative">
                  {/* Glassmorphic Photo Frame */}
                  <div
                    className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden backdrop-blur-md border shadow-2xl"
                    style={{
                      background: "rgba(255, 255, 255, 0.1)",
                      borderColor: "rgba(255, 255, 255, 0.2)",
                    }}
                  >
                    <ImageCarousel
                      images={[
                        {
                          src: "/image.png",
                          alt: "Dr. Chintan Dave - Professional Headshot",
                        },
                        {
                          src: "/drdave2.avif",
                          alt: "Dr. Chintan Dave - Medical Practice",
                        },
                      ]}
                      interval={4000}
                      className="w-full h-full rounded-3xl"
                    />
                  </div>

                  {/* Floating Badge */}
                  <div
                    className="absolute -bottom-4 -right-4 px-4 sm:px-6 py-2 sm:py-3 rounded-full backdrop-blur-md border shadow-lg"
                    style={{
                      background: "rgba(26, 54, 93, 0.9)",
                      borderColor: "rgba(255, 255, 255, 0.2)",
                      color: "white",
                    }}
                  >
                    <div className="text-xs sm:text-sm font-semibold">
                      MD, AI Expert
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* As Seen In Banner */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 pt-8 border-t border-white/20"
            >
              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold text-[var(--dark-blue)] mb-2">
                  As seen in
                </h3>
              </div>

              {/* Scrolling Logos Container */}
              <div className="relative overflow-hidden">
                <div
                  className="flex items-center space-x-16"
                  style={{
                    animation: "scroll 30s linear infinite",
                  }}
                >
                  {/* Duplicate the array to create seamless infinite scroll */}
                  {[
                    { name: "KPMG", logo: "/logos/kpmg.png" },
                    { name: "Al Jazeera", logo: "/logos/al-jazeera.png" },
                    { name: "Global News", logo: "/logos/global-news.png" },
                    { name: "QID", logo: "/logos/qid.png" },
                    { name: "The Rounds", logo: "/logos/the-rounds.png" },
                    { name: "Databutton", logo: "/logos/databutton.png" },
                    { name: "PARO", logo: "/logos/paro.png" },
                    // Duplicate for seamless loop
                    { name: "KPMG", logo: "/logos/kpmg.png" },
                    { name: "Al Jazeera", logo: "/logos/al-jazeera.png" },
                    { name: "Global News", logo: "/logos/global-news.png" },
                    { name: "QID", logo: "/logos/qid.png" },
                    { name: "The Rounds", logo: "/logos/the-rounds.png" },
                    { name: "Databutton", logo: "/logos/databutton.png" },
                    { name: "PARO", logo: "/logos/paro.png" },
                  ].map((company, index) => (
                    <motion.div
                      key={`${company.name}-${index}`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      className="flex-shrink-0"
                    >
                      <div className="hover:scale-110 transition-all duration-300">
                        {company.logo.includes(".svg") ? (
                          <Image
                            src={company.logo}
                            alt={company.name}
                            width={80}
                            height={80}
                            className="object-contain"
                          />
                        ) : (
                          <Image
                            src={company.logo}
                            alt={company.name}
                            width={80}
                            height={80}
                            className="object-contain"
                          />
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};
