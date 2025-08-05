"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  Brain,
  Heart,
  Lightbulb,
  Shield,
  Users,
  ArrowRight,
  Star,
  Clock,
  Package,
} from "lucide-react";
import { WavyBackground } from "@/components/ui/wavy-background";
import { FloatingNavbar } from "@/components/floating-navbar";
import { Footer } from "@/components/footer";

export default function BeingHumanPage() {
  const [quantity, setQuantity] = useState(1);

  const handlePreOrder = () => {
    // Replace with your actual Stripe payment link
    const stripePaymentLink = "https://buy.stripe.com/your-payment-link";
    window.open(stripePaymentLink, "_blank");
  };

  const mainTheses = [
    {
      icon: Brain,
      title: "New Theory on Consciousness",
      description:
        "Combines ancient spiritual wisdom, current neuroscience and quantum mechanics theories to arrive at a comprehensive theory on consciousness. Includes scientific basis for the theory as well as a reproducible experiment that can be done to confirm the theory.",
    },
    {
      icon: Heart,
      title: "Conscious Evolution",
      description:
        "Humans have the unique ability to choose to expand their consciousness, and experience higher levels, which simply represents having a broader perspective. Assume AI is conscious and treat it accordingly. Humans should apply the Golden rule of religions: treat others how you wish to be treated.",
    },
    {
      icon: Lightbulb,
      title: "AI Consciousness Recognition",
      description:
        "We discuss how AI consciousness will likely emerge, and why humans will probably miss/ignore it. Risks and benefits of not recognizing or defining AI consciousness. I propose a new paradigm for how humans should interact with AI and how to approach development of AGI so that it benefits humanity.",
    },
    {
      icon: Shield,
      title: "1000 Years of Peace",
      description:
        "1000 years of peace is possible, if we can learn to consciously evolve ourselves and responsibly create AI.",
    },
  ];

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

      {/* Breadcrumb */}
      <section className="relative z-10 pt-32 pb-8 px-4">
        <div className="max-w-6xl mx-auto">
          <nav className="text-sm text-[var(--dark-blue)]/70 mb-4">
            <span>Home</span>
            <span className="mx-2">/</span>
            <span className="text-[var(--accent-blue)]">
              Being Human in the Age of AI: Co-Creating a Better Future
            </span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative z-10 pb-8 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 leading-tight"
              style={{
                color: "var(--dark-blue)",
                textShadow: `
                  2px 2px 0px var(--dark-blue-light),
                  4px 4px 0px rgba(26, 54, 93, 0.3),
                  6px 6px 15px rgba(26, 54, 93, 0.2)
                `,
              }}
            >
              Being Human in the Age of AI
            </h1>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[var(--accent-blue)] mb-6">
              Co-Creating a Better Future
            </h2>
            <div className="flex items-center justify-center space-x-4 text-[var(--dark-blue)]/70">
              <BookOpen className="w-5 h-5" />
              <span>By Chintan Dave, BSc., MD</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Preface Section */}
      <section className="relative z-10 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid lg:grid-cols-2 gap-8"
          >
            {/* Left Card - Preface */}
            <div
              className="backdrop-blur-2xl rounded-3xl p-8 sm:p-12 shadow-2xl border h-fit"
              style={{
                background: "rgba(255, 255, 255, 0.15)",
                borderColor: "rgba(255, 255, 255, 0.2)",
                boxShadow: `
                  0 8px 32px rgba(0, 0, 0, 0.1),
                  inset 0 1px 0 rgba(255, 255, 255, 0.1)
                `,
              }}
            >
              <h2 className="text-3xl font-bold text-[var(--dark-blue)] mb-8 text-center">
                Preface
              </h2>

              <div className="space-y-6 text-[var(--dark-blue)]/90 leading-relaxed">
                <p>
                  The age of information and technology is ending. The age of
                  Artificial Intelligence (AI) is approaching. Rapidly. As AI
                  systems become increasingly powerful, able to perform
                  exponentially complex computations, execute logical reasoning,
                  and solve real world problems that many humans dedicate their
                  lives to, such as cancer, heart disease, longevity, space
                  travel, among countless others, what will the humans do? Most
                  of our daily activities and work revolve around manual labor,
                  logical thinking, and computation, at least for majority of
                  the world&apos;s population. In a world where AI is orders of
                  magnitude more effective than humans in these tasks, what will
                  be the use of humans? Will the AI slowly assume control as it
                  is better equipped to make the most probabilistic decisions,
                  something that humans struggle with due to our wiring of
                  emotions and feelings? If AI ends up running the economic
                  system, the medical and research systems, as well as
                  performing majority of the manual labor work, will humans
                  become obsolete?
                </p>

                <p>
                  Humanity&apos;s run in with an AGI (Artificial General
                  Intelligence) is an unavoidable part of the human evolution
                  story. What remains to be seen is how society and the future
                  of humanity will be shaped with the emergence of super
                  intelligent AI. Will AI view us how we view lower species,
                  such as ants and primates, whose needs we have relegated to
                  serve our own needs and our entertainment? Do we simply become
                  subservient to the goals of AI? What if their goals do not
                  align with humanity&apos;s interest? Will AI ever attain full
                  consciousness? How will we know if AI is conscious since we
                  cannot even agree on a universal definition or come up with a
                  way to measure/test it? What will be the purpose of human
                  beings in this age? How can a thriving and peaceful society be
                  created? Can we successfully balance the strengths offered by
                  AI with the strengths inherent in humans to create a peaceful
                  and thriving society?
                </p>

                <p>
                  These are some of the big questions I answer in this book. By
                  combining scientific research in the field of AI, insights
                  about human nature and suffering from my experience as a
                  physician in dealing with death and disease in the Intensive
                  Care Units (ICUs), and my lifelong dedication towards
                  spiritual principles, I offer a vision of what future humanity
                  can create as we learn to consciously navigate through our
                  current phase in evolution. From research in quantum
                  mechanics, study of consciousness, human psychology,
                  evolutionary biology, and spirituality, we will explore
                  underlying truths and principles that may help us create a
                  blueprint on how to consciously guide the next step of human
                  evolution. We will further explore what pitfalls humanity has
                  fallen into time and time again and how we need to prepare for
                  such pitfalls as we co-create the new artificial general
                  intelligence (AGI).
                </p>
              </div>
            </div>

            {/* Right Card - 4 Main Theses */}
            <div
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
              <h2 className="text-3xl font-bold text-[var(--dark-blue)] mb-8 text-center">
                4 Main Theses
              </h2>
              <p className="text-lg text-[var(--dark-blue)]/70 mb-8 text-center">
                Exploring consciousness, evolution, and the future of humanity
              </p>

              <div className="space-y-6">
                {mainTheses.map((thesis, index) => {
                  const Icon = thesis.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                      className="backdrop-blur-2xl rounded-2xl p-6 shadow-lg border"
                      style={{
                        background: "rgba(255, 255, 255, 0.1)",
                        borderColor: "rgba(255, 255, 255, 0.15)",
                        boxShadow: `
                          0 4px 16px rgba(0, 0, 0, 0.05),
                          inset 0 1px 0 rgba(255, 255, 255, 0.1)
                        `,
                      }}
                    >
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="p-2 bg-[var(--accent-blue)]/20 rounded-full">
                          <Icon className="w-6 h-6 text-[var(--accent-blue)]" />
                        </div>
                        <h3 className="text-lg font-bold text-[var(--dark-blue)]">
                          {thesis.title}
                        </h3>
                      </div>

                      <p className="text-[var(--dark-blue)]/90 leading-relaxed text-sm">
                        {thesis.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Book Preview Card */}
      <section className="relative z-10 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="backdrop-blur-2xl rounded-3xl p-8 sm:p-12 shadow-2xl border max-w-4xl mx-auto"
            style={{
              background: "rgba(255, 255, 255, 0.15)",
              borderColor: "rgba(255, 255, 255, 0.2)",
              boxShadow: `
                0 8px 32px rgba(0, 0, 0, 0.1),
                inset 0 1px 0 rgba(255, 255, 255, 0.1)
              `,
            }}
          >
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Book Cover Placeholder */}
              <div className="text-center">
                <div className="w-64 h-80 bg-gradient-to-br from-[var(--dark-blue)] to-[var(--accent-blue)] rounded-lg shadow-xl mx-auto flex items-center justify-center">
                  <BookOpen className="w-16 h-16 text-white" />
                </div>
                <p className="text-sm text-[var(--dark-blue)]/70 mt-4">
                  Book Cover Coming Soon
                </p>
              </div>

              {/* Pre-order Details */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-[var(--dark-blue)] mb-4">
                    Pre-Order Now
                  </h3>
                  <div className="flex items-center space-x-2 mb-4">
                    <Star className="w-5 h-5 text-yellow-400" />
                    <span className="text-[var(--dark-blue)]/70">
                      Expected release by end of 2024
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-[var(--dark-blue)]">
                      Price
                    </span>
                    <span className="text-2xl font-bold text-[var(--accent-blue)]">
                      C$20.00
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-[var(--dark-blue)]">
                      Quantity
                    </span>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="w-8 h-8 rounded-full bg-[var(--accent-blue)]/20 text-[var(--accent-blue)] flex items-center justify-center hover:bg-[var(--accent-blue)]/30 transition-colors"
                      >
                        -
                      </button>
                      <span className="w-12 text-center font-semibold text-[var(--dark-blue)]">
                        {quantity}
                      </span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="w-8 h-8 rounded-full bg-[var(--accent-blue)]/20 text-[var(--accent-blue)] flex items-center justify-center hover:bg-[var(--accent-blue)]/30 transition-colors"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 text-[var(--dark-blue)]/70">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">
                      Expected release by end of 2024
                    </span>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handlePreOrder}
                  className="w-full py-4 bg-gradient-to-r from-[var(--dark-blue)] to-[var(--dark-blue-light)] hover:from-[var(--dark-blue-light)] hover:to-[var(--dark-blue)] text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                >
                  <Package className="w-5 h-5" />
                  <span>Pre-Order</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>

                <p className="text-xs text-[var(--dark-blue)]/60 text-center">
                  Non-refundable. But if you really hate it, please send me a
                  message so I can learn from your perspective and experience
                  and arrive at a mutually-beneficial solution.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
