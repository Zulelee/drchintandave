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
                  2px 2px 0px #3182ce,
                  4px 4px 0px #38b2ac,
                  6px 6px 15px #38b2ac
                `,
              }}
            >
              Being Human in the Age of AI
            </h1>
            <h2
              className="text-2xl sm:text-3xl font-semibold text-[var(--accent-blue)] mb-6"
              style={{
                textShadow: `0 0 1px var(--dark-blue),
                        0 0 20px #ffffff`,
              }}
            >
              Consciously Creating a Better World
            </h2>
            <div className="flex items-center justify-center space-x-4 text-[var(--dark-blue)]/70">
              <BookOpen className="w-5 h-5" />
              <span>By Chintan Dave, MD</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Book Description Section */}
      <section className="relative z-10 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
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
              What does the future of humanity look like?
            </h2>

            <div className="space-y-6 text-[var(--dark-blue)]/90 leading-relaxed text-lg">
              <p>
                Artificial Intelligence (AI) isn&apos;t coming. It&apos;s
                already here. As AI systems outperform humans at logic,
                prediction, and labor, the question is no longer &quot;What can
                AI do?&quot; but &quot;What are humans for?&quot;
              </p>

              <p>
                This book provides thought-provoking questions and practical
                answers. Dr. Chintan Dave, a dual-board certified ICU physician
                and AI founder, writes from the front lines of life-and-death
                medicine and real-world AI deployment. He tackles the hard
                realities head-on: If AI runs our labs, hospitals, and
                economies, how do people keep purpose, power, and dignity? What
                if AI&apos;s goals drift from humanity&apos;s collective goals?
                Could it become conscious? How would we know when we can&apos;t
                even agree on a definition for consciousness?
              </p>

              <p>This book offers four distinct ideas:</p>

              <ul className="space-y-4 ml-6">
                <li className="flex items-start space-x-3">
                  <span className="text-[var(--accent-blue)] font-bold">•</span>
                  <span>
                    A moral rule for AI development: assume AI could be
                    conscious and apply the Golden Rule of religions to what we
                    build.
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[var(--accent-blue)] font-bold">•</span>
                  <span>
                    A roadmap for the next stage of human evolution: conscious
                    selection; not natural selection.
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[var(--accent-blue)] font-bold">•</span>
                  <span>
                    A unified, testable theory of consciousness that bridges
                    neuroscience, quantum theories, and ancient spiritual
                    wisdom.
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[var(--accent-blue)] font-bold">•</span>
                  <span>
                    A radical approach to building an Artificial
                    Superintelligence (ASI) that prioritizes human values of
                    love, freedom, and dignity over raw speed and performance.
                  </span>
                </li>
              </ul>

              <p>
                You&apos;ll learn how to measure what truly matters, why early
                signs of AI consciousness will likely be missed, how we can
                prevent becoming obsolete, and how to design systems that scale
                compassion alongside computation. Dr. Dave maps a path beyond
                fear and asserts an unapologetically hopeful message: with
                values-based governance and conscious growth, both of ourselves
                and our systems, the next millennia can be radically more
                peaceful and prosperous.
              </p>

              <p>
                Urgent, actionable, and deeply human, the book is a field guide
                for anyone who refuses to be made obsolete- and chooses,
                instead, to evolve.
              </p>
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
                      $25.00
                    </span>
                  </div>

                  {/* <div className="flex items-center justify-between">
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
                  </div> */}

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
