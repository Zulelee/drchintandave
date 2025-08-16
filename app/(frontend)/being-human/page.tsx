"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
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
import { GlowingEffect } from "@/components/ui/glowing-effect";
import ShinyText from "@/components/ui/shiny-text";

export default function BeingHumanPage() {
  const [quantity, setQuantity] = useState(1);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    country: string;
    timestamp: string;
  }>({
    name: "",
    email: "",
    country: "",
    timestamp: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handlePreOrder = () => {
    setShowForm(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      const response = await fetch("/api/preorder", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          country: formData.country,
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", country: "", timestamp: "" });
        setTimeout(() => setShowForm(false), 2000);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              <ShinyText
                text="Being Human in the Age of AI"
                speed={5}
                className="block"
              />
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
            <GlowingEffect
              spread={60}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
              borderWidth={2}
              variant="default"
            />
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
            <GlowingEffect
              spread={40}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
              borderWidth={2}
              variant="default"
            />
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Book Cover Placeholder */}
              <div className="text-center">
                <div className="w-52 h-72 mx-auto p-3 bg-transparent rounded-lg shadow-2xl transition-all duration-500 ease-out hover:scale-105 hover:shadow-3xl">
                  <div className="w-full h-full overflow-hidden rounded-lg transition-transform duration-500">
                    <Image
                      src="/book_cover.png"
                      alt="Being Human in the Age of AI - Book Cover"
                      width={256}
                      height={288}
                      className="w-full h-full"
                    />
                  </div>
                </div>
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
                      Expected release by September 2025
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

                  {/* <div className="flex items-center space-x-2 text-[var(--dark-blue)]/70">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">
                      Expected release by end of 2024
                    </span>
                  </div> */}
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

      {/* Pre-order Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-[var(--dark-blue)]">
                Pre-Order Your Copy
              </h3>
              <button
                onClick={() => setShowForm(false)}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-[var(--dark-blue)] mb-2"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--accent-blue)] focus:border-transparent transition-all"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[var(--dark-blue)] mb-2"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--accent-blue)] focus:border-transparent transition-all"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label
                  htmlFor="country"
                  className="block text-sm font-medium text-[var(--dark-blue)] mb-2"
                >
                  Country *
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--accent-blue)] focus:border-transparent transition-all"
                  placeholder="Enter your country"
                />
              </div>

              {submitStatus === "success" && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800 text-sm">
                    Thank you! Your pre-order request has been submitted
                    successfully.
                  </p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800 text-sm">
                    There was an error submitting your request. Please try
                    again.
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-gradient-to-r from-[var(--dark-blue)] to-[var(--dark-blue-light)] hover:from-[var(--dark-blue-light)] hover:to-[var(--dark-blue)] text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Submitting...
                  </>
                ) : (
                  "Submit Pre-Order Request"
                )}
              </button>
            </form>
          </motion.div>
        </div>
      )}

      <Footer />
    </main>
  );
}
