"use client";

import React, { Suspense } from "react";
import Image from "next/image";

export const AboutSection: React.FC = () => {
  return (
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
                  className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 leading-tight"
                  style={{
                    color: "var(--dark-blue)",
                    textShadow: `
                      2px 2px 0px var(--dark-blue-light),
                      4px 4px 0px rgba(26, 54, 93, 0.3),
                      6px 6px 15px rgba(26, 54, 93, 0.2)
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
                    dual-certified Internal Medicine and Critical Care Physician
                  </strong>{" "}
                  with expertise in medical research, AI, and teaching. I went
                  into Medicine wanting to serve others, and help people through
                  the darkest and toughest times of their lives.
                </p>

                <p>
                  While it has remained a privilege to serve others as a doctor,
                  over the years, I had a deeper feeling that I was meant to do
                  more and help more people. This is when I started sharing my
                  stories and lessons through social media.
                </p>

                <p>
                  I am now on the journey to{" "}
                  <strong>
                    help people think more critically, make better decisions,
                    and contribute towards improving humanity.
                  </strong>
                </p>
              </div>
            </div>

            {/* Dr. Dave's Photo */}
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
                  <Image
                    src="/image.png" // Using the existing Dr. Dave image
                    alt="Dr. Chintan Dave"
                    fill
                    className="object-cover"
                    priority
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
        </div>
      </div>
    </section>
  );
};
