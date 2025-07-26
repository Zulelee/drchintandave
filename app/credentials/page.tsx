"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Download,
  GraduationCap,
  Briefcase,
  Award,
  FileText,
  ExternalLink,
  Calendar,
  MapPin,
} from "lucide-react";
import { WavyBackground } from "@/components/ui/wavy-background";
import { FloatingNavbar } from "@/components/floating-navbar";

export default function CredentialsPage() {
  const [activeSection, setActiveSection] = useState("education");

  const education = [
    {
      period: "2020-2022",
      institution: "Western University",
      location: "Canada",
      degree: "Critical Care Medicine Fellowship",
      icon: "🏥",
    },
    {
      period: "2017-2020",
      institution: "University of Ottawa",
      location: "Canada",
      degree: "Internal Medicine Residency",
      icon: "⚕️",
    },
    {
      period: "2013-2017",
      institution: "Queen's University",
      location: "Canada",
      degree: "Doctor of Medicine",
      icon: "🎓",
    },
    {
      period: "2009-2013",
      institution: "University of Ottawa",
      location: "Canada",
      degree:
        "Honours Bachelor Degree in Biochemistry with specialization in Biotechnology",
      icon: "🧬",
    },
  ];

  const workExperience = [
    {
      period: "2021-Present",
      organization: "DeepBreathe",
      role: "Clinical Lead",
      location: "Research and Strategic Development",
      description:
        "Medical AI development and testing, Clinical application and research, Strategic and research collaboration",
      icon: "🤖",
    },
    {
      period: "2023-Present",
      organization: "BrainX AI",
      role: "Consultant and Researcher",
      location: "AI Solutions",
      description:
        "Consulting on medical AI solutions, Creation of educational materials, Podcast Host",
      icon: "🧠",
    },
    {
      period: "2021-Present",
      organization: "Community of Biotechnology",
      role: "Board of Advisors and Speaker",
      location: "Global Health",
      description:
        "Mentorship of upcoming biotech students/companies, Education and speaking on crucial epidemiology and medical issues in developing countries",
      icon: "🌍",
    },
    {
      period: "2023-Present",
      organization: "Abrazo Arizona Heart Hospital",
      role: "Intensivist",
      location: "Cardiovascular Intensive Care Unit",
      description:
        "Managing cardiac surgery patients and critically-ill cardiac and med/surg patients, Initiating and managing ECMO and Mechanical Circulatory Support, Teaching rotating residents",
      icon: "❤️",
    },
  ];

  const awards = [
    {
      year: "2023",
      organization: "Society of Critical Care Medicine",
      award: "STAR Research Achievement Award",
      description:
        "SCCM Critical Care Congress 2023. This award recognizes excellence in critical care research and is given to top abstracts from the Congress.",
    },
    {
      year: "2022",
      organization: "Professional Association of Residents of Ontario",
      award: "Trust Fund Resident Teaching Award",
      description:
        "One recipient chosen by Associate or Assistant Deans of Postgraduate Medical Education per university.",
    },
    {
      year: "2021",
      organization: "Canadian Critical Care Forum",
      award: "Outstanding Abstract Award",
      description:
        "Chosen to give oral presentation (top 3% of all submitted abstracts) titled, 'Automation of Lung Ultrasound Interpretation via Deep Learning for the Classification of Normal versus Abnormal Lung Parenchyma: A Multicenter Study'.",
    },
    {
      year: "2019",
      organization: "Ontario Medical Association",
      award: "OMA Resident Physician Achievement Award",
      description:
        "Awarded to one resident from each of the six provincial medical schools, who has made an outstanding contribution to the advancement of post-graduate training at their institution.",
    },
  ];

  const publications = [
    {
      title:
        "Automated real-time detection of lung sliding using artificial intelligence",
      authors: "Clausdorff H, Prager R, Smith D, Wu D, Dave C, et al.",
      journal: "CHEST",
      year: "2024",
      doi: "https://doi.org/10.1016/j.chest.2024.02.011",
    },
    {
      title:
        "Efficacy and safety of umbilical cord-derived mesenchymal stromal cell therapy in preclinical models of sepsis: A systematic review and meta-analysis",
      authors: "Hum C,...Dave C, et al.",
      journal: "Stem Cells Translational Medicine",
      year: "2024",
      doi: "https://doi.org/10.1093/stcltm/szae003",
    },
    {
      title:
        "Prospective Real-Time Validation of a Lung Ultrasound Deep Learning Model in the Intensive Care Unit",
      authors: "Dave C, Wu D, et al.",
      journal: "Critical Care Medicine",
      year: "2023",
      doi: "10.1097/CCM.0000000000005759",
    },
  ];

  const sections = [
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "experience", label: "Work Experience", icon: Briefcase },
    { id: "awards", label: "Awards", icon: Award },
    { id: "publications", label: "Publications", icon: FileText },
  ];

  return (
    <main className="relative min-h-screen">
      <FloatingNavbar />

      <WavyBackground
        className="fixed inset-0 z-0"
        colors={["#1A365D", "#2C4F7C", "#1A2A4A", "#1D3A6C"]}
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
              Credentials
            </h1>

            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-semibold text-[var(--accent-blue)] mb-4">
                Chintan Dave, BSc., MD
              </h2>
              <p className="text-lg text-[var(--text-dark)] max-w-4xl mx-auto leading-relaxed">
                Internal Medicine and Critical Care Medicine physician with a
                passion for continual self-development and all things medicine.
                Dedicated to medical innovation and leveraging biotechnology
                (with focus on AI) to advance medical and public health
                outcomes.
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[var(--dark-blue)] to-[var(--dark-blue-light)] hover:from-[var(--dark-blue-light)] hover:to-[var(--dark-blue)] text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Download className="w-5 h-5 mr-2" />
              Download CV
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="relative z-10 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <motion.button
                  key={section.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveSection(section.id)}
                  className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeSection === section.id
                      ? "bg-[var(--accent-blue)] text-white shadow-lg"
                      : "bg-white/10 backdrop-blur-sm text-[var(--text-dark)] hover:bg-white/20 border border-white/20"
                  }`}
                >
                  <Icon className="w-5 h-5 mr-2" />
                  {section.label}
                </motion.button>
              );
            })}
          </div>

          {/* Content Sections */}
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
            {/* Education Section */}
            {activeSection === "education" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                <h3 className="text-3xl font-bold text-[var(--accent-blue)] mb-8 text-center">
                  Educational Journey
                </h3>
                <div className="space-y-6">
                  {education.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start space-x-6 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300"
                    >
                      <div className="text-4xl">{item.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-4 mb-2">
                          <span className="text-sm font-medium text-[var(--accent-blue)] bg-[var(--accent-blue)]/10 px-3 py-1 rounded-full">
                            {item.period}
                          </span>
                          <span className="text-sm text-gray-400 flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {item.location}
                          </span>
                        </div>
                        <h4 className="text-xl font-semibold text-[var(--text-dark)] mb-1">
                          {item.institution}
                        </h4>
                        <p className="text-[var(--text-dark)]">{item.degree}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Work Experience Section */}
            {activeSection === "experience" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                <h3 className="text-3xl font-bold text-[var(--accent-blue)] mb-8 text-center">
                  Professional Experience
                </h3>
                <div className="space-y-6">
                  {workExperience.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300"
                    >
                      <div className="flex items-start space-x-4 mb-4">
                        <div className="text-3xl">{item.icon}</div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-4 mb-2">
                            <span className="text-sm font-medium text-[var(--accent-blue)] bg-[var(--accent-blue)]/10 px-3 py-1 rounded-full">
                              {item.period}
                            </span>
                            <span className="text-sm text-gray-400">
                              {item.location}
                            </span>
                          </div>
                          <h4 className="text-xl font-semibold text-[var(--text-dark)] mb-1">
                            {item.organization}
                          </h4>
                          <p className="text-lg font-medium text-[var(--accent-blue)] mb-2">
                            {item.role}
                          </p>
                          <p className="text-[var(--text-dark)] leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Awards Section */}
            {activeSection === "awards" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                <h3 className="text-3xl font-bold text-[var(--accent-blue)] mb-8 text-center">
                  Recognition & Awards
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {awards.map((award, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300"
                    >
                      <div className="flex items-center space-x-3 mb-3">
                        <Award className="w-6 h-6 text-yellow-400" />
                        <span className="text-sm font-medium text-[var(--accent-blue)] bg-[var(--accent-blue)]/10 px-3 py-1 rounded-full">
                          {award.year}
                        </span>
                      </div>
                      <h4 className="text-lg font-semibold text-[var(--text-dark)] mb-2">
                        {award.award}
                      </h4>
                      <p className="text-sm text-[var(--accent-blue)] mb-3">
                        {award.organization}
                      </p>
                      <p className="text-sm text-[var(--text-dark)] leading-relaxed">
                        {award.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Publications Section */}
            {activeSection === "publications" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                <h3 className="text-3xl font-bold text-[var(--accent-blue)] mb-8 text-center">
                  Select Publications
                </h3>
                <div className="space-y-6">
                  {publications.map((pub, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300"
                    >
                      <div className="flex items-start space-x-4">
                        <FileText className="w-6 h-6 text-[var(--accent-blue)] mt-1" />
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-[var(--text-dark)] mb-2 leading-relaxed">
                            {pub.title}
                          </h4>
                          <p className="text-sm text-[var(--text-dark)] mb-2">
                            {pub.authors}
                          </p>
                          <div className="flex items-center space-x-4 text-sm">
                            <span className="text-[var(--accent-blue)] font-medium">
                              {pub.journal}
                            </span>
                            <span className="text-gray-400">{pub.year}</span>
                            <a
                              href={pub.doi}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center text-[var(--accent-blue)] hover:text-[var(--dark-blue)] transition-colors duration-300"
                            >
                              <ExternalLink className="w-4 h-4 mr-1" />
                              DOI
                            </a>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
