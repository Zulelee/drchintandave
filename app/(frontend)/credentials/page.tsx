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
import { Footer } from "@/components/footer";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import ShinyText from "@/components/ui/shiny-text";

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
      period: "2023-Present",
      organization: "Abrazo Arizona Heart Hospital",
      role: "Intensivist",
      location: "Cardiovascular Intensive Care Unit",
      description: [
        "Managing cardiac surgery patients and critically-ill cardiac and med/surg patients",
        "Initiating and managing ECMO (extracorporeal membrane oxygenation) and Mechanical Circulatory Support (MCS)",
        "Teaching rotating residents",
      ],
      icon: "❤️",
    },
    {
      period: "2023-Present",
      organization: "BrainX AI",
      role: "Consultant and Researcher",
      location: "AI Solutions",
      description: [
        "Consulting on medical AI solutions",
        "Creation of educational materials",
        "Podcast Host",
      ],
      icon: "🧠",
    },
    {
      period: "2021-Present",
      organization: "DeepBreathe",
      role: "Clinical Lead",
      location: "Research and Strategic Development",
      description: [
        "Medical AI development and testing",
        "Clinical application and research",
        "Strategic and research collaboration",
      ],
      icon: "🤖",
    },
    {
      period: "2021-Present",
      organization: "Community of Biotechnology",
      role: "Board of Advisors and Speaker",
      location: "Global Health",
      description: [
        "Mentorship of upcoming biotech students/companies",
        "Education and speaking on crucial epidemiology and medical issues in developing countries",
      ],
      icon: "🌍",
    },
    {
      period: "2018-2022",
      organization: "Professional Association of Residents of Ontario",
      role: "Elected Member",
      location: "Healthcare Advocacy",
      description: [
        "Contract negotiations with PARO-CAHO",
        "Arbitrating contract conflicts",
        "Led local and provincial meetings",
      ],
      icon: "⚖️",
    },
    {
      period: "2019-2020",
      organization: "Ottawa Internal Medicine Postgraduate Program",
      role: "Chief Resident",
      location: "Medical Education",
      description: [
        "Daily teaching sessions",
        "Call scheduling",
        "Organizing social and educational initiatives",
      ],
      icon: "👨‍⚕️",
    },
    {
      period: "2016",
      organization: "Pamoja Tunaweza Women's Centre, Tanzania",
      role: "Field Physician and Educator",
      location: "International Healthcare",
      description: [
        "Medical care in remote Masaai villages",
        "Developed and taught basic health curriculum through lectures to locals and medical students",
      ],
      icon: "🏥",
    },
    {
      period: "2012-2014",
      organization: "Initiative for Global Health",
      role: "Co-Founder and President",
      location: "Non-Profit Leadership",
      description: [
        "Created NGO from university student group",
        "Started several initiatives in developing countries to achieve UN Sustainable Development Goals (SDGs)",
        "Partnerships with WHO and grassroots NGOs",
      ],
      icon: "🌐",
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
    {
      year: "2018",
      organization: "University of Ottawa Heart Institute",
      award: "Heart of Gold Recipient",
      description:
        "Honour provided to a doctor, nurse, an allied health professional, or an entire unit to recognize those who have provided exceptional care to patients. For the honor to be provided, the patient or family must have made a donation to the institution in the name of the recipient.",
    },
    {
      year: "2017",
      organization: "Ontario Medical Association",
      award: "OMA Medical Student Achievement Award",
      description:
        "Awarded to one medical school from each university for significant contributions at the political and/or community level that helps advance the life and/or education of all medical students.",
    },
    {
      year: "2017",
      organization: "Queen's University",
      award: "Brian Yealland Community Leadership Award",
      description:
        "Presented annually to 2 Queen's students, individuals or groups, who make a significant contribution to society by working with and encouraging youth who are experiencing social, behavioral, economic or other challenges by helping them realize their worth as individuals and their potential to achieve.",
    },
    {
      year: "2017",
      organization: "Ontario Medical Students' Association",
      award: "OMSA Student of the Month",
      description:
        "One medical student selected from each of the medical schools due to their leadership, and contribution to the post-graduate school of medicine.",
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
        "Improving the generalizability and performance of an ultrasound deep learning model using limited multicenter data for Lung Sliding Artifact Identification",
      authors: "Wu D,...Dave C, et al.",
      journal: "Diagnostics",
      year: "2024",
      doi: "https://doi.org/10.3390/diagnostics14111081",
    },
    {
      title:
        "Prospective Real-Time Validation of a Lung Ultrasound Deep Learning Model in the Intensive Care Unit",
      authors: "Dave C, Wu D, et al.",
      journal: "Critical Care Medicine",
      year: "2023",
      doi: "10.1097/CCM.0000000000005759",
    },
    {
      title:
        "Enhancing Annotation Efficiency with Machine Learning: Automated Partitioning of a Lung Ultrasound Dataset by View",
      authors:
        "VanBerlo B, Smith D, Tschirhart J, VanBerlo B, Wu D, Ford A, McCauley J, Wu B, Chaudhary R, Dave C, Ho J, Deglint J, Li B, Arntfield R.",
      journal: "Diagnostics",
      year: "2022",
      doi: "https://doi.org/10.3390/diagnostics12102351",
    },
    {
      title:
        "Accurate assessment of the lung sliding artifact on lung ultrasonography using a deep learning approach",
      authors:
        "VanBerlo B, Wu D, Li B, A Rahman M, Hogg G, VanBerlo B, Tschirhart J, Ford A, Ho J, McCauley J, Wu B, Deglint J, Hargunj, Chaudhary R, Dave C, Arntfield R.",
      journal: "Computers in Biology and Medicine",
      year: "2022",
      doi: "https://doi.org/10.1016/j.compbiomed.2022.105456",
    },
    {
      title:
        "Evidence-Based Considerations for the Design of an Open-Source Ventilator: A Systematic Review",
      authors: "Dave C, Sivajohan A, Basmaji J, Slessarev M.",
      journal: "Critical Care Explorations",
      year: "2022",
      doi: "https://doi.org/10.1097/CCE.0000000000000701",
    },
    {
      title:
        "Comparison of Cryopreserved versus Fresh Mesenchymal Stem Cells in Animal Models of Inflammation: A Preclinical Systematic Review",
      authors:
        "Dave C, McRae A, Doxtator E, Mei SHJ, Sullivan K, Champagne J, McIntyre LL.",
      journal: "eLife",
      year: "2022",
      doi: "https://doi.org/10.7554/eLife.74747",
    },
    {
      title:
        "Automation of Lung Ultrasound Interpretation via Deep Learning for the Classification of Normal versus Abnormal Lung Parenchyma: A Multicenter Study",
      authors:
        "Arntfield R, Wu D, Tschirhart J, VanBerlo B, Ford A, Ho J, McCauley J, Wu B, Deglint J, Chaudhary R, Dave C, VanBerlo B, Basmaji J, Millington S.",
      journal: "Diagnostics (Basel)",
      year: "2021",
      doi: "10.3390/diagnostics11112049",
    },
    {
      title:
        "Frugal Innovation: Enabling Mechanical Ventilation During Coronavirus Disease 2019 Pandemic in Resource-Limited Settings",
      authors: "Dave C, Cameron P, Basmaji J, Campbell G, Buga E, Slessarev M.",
      journal: "Critical Care Explorations",
      year: "2021",
      doi: "10.1097/CCE.0000000000000410",
    },
    {
      title:
        "Impact of Delirium on Intensive Care Unit Length of Stay and Costs – A Systematic Review and Meta-Analysis",
      authors:
        "Dziegielewski C, Skead C, Canturk T, Webber C, Fernando SM, Thompson LH, Foster M, Ristovic V, Lawlor PG, Chaudhuri D, Dave C, Herritt B, Bush SH, Kanji S, Tanuseputro P, Thavorn K, Rosenberg E, Kyeremanteng K.",
      journal: "Critical Care Research and Practice",
      year: "2021",
      doi: "https://doi.org/10.1155/2021/6612187",
    },
    {
      title:
        "Comparison of Cryopreserved versus Fresh Mesenchymal Stem Cells: A Preclinical Systematic Review Protocol",
      authors:
        "Dave C, McRae A, Doxtator E, Mei SHJ, Sullivan K, Champagne J, McIntyre LL.",
      journal: "Systematic Reviews",
      year: "2020",
      doi: "https://doi.org/10.1186/s13643-020-01328-3",
    },
    {
      title:
        "Frailty and invasive mechanical ventilation: association with outcomes, extubation failure, and tracheostomy",
      authors:
        "Fernando SM, McIsaac DI, Rochwerg B, Bagshaw SM, Muscedere J, Munshi L, Ferguson ND, Seely AJE, Cook DJ, Dave C, Tanuseputro P, Kyeremanteng K.",
      journal: "Intensive Care Med",
      year: "2019",
      doi: "10.1007/s00134-019-05795-8",
    },
    {
      title:
        "Frailty and Associated Outcomes and Resource Utilization Among Older ICU Patients With Suspected Infection",
      authors:
        "Fernando SM, McIsaac DI, Perry JJ, Rochwerg B, Bagshaw SM, Thavorn, K, Seely AJE, Fiest KM, Dave C, Forster AJ, Tran A, Reardon PM, Tanuseputro P, Kyeremanteng K.",
      journal: "Critical Care Medicine",
      year: "2019",
      doi: "10.1097/CCM.0000000000003831",
    },
    {
      title:
        "Frailty and associated outcomes and resource utilization following in-hospital cardiac arrest",
      authors:
        "Fernando SM, McIsaac D, Rochwerg B, Cook DJ, Bagshaw SM, Muscedere J, Munshi L, Nolan JP, Perry JJ, Downar J, Dave C, Reardon PM, Tanuseputro P, Kyeremanteng K.",
      journal: "Resuscitation",
      year: "2019",
      doi: "https://doi.org/10.1016/j.resuscitation.2019.11.011",
    },
    {
      title:
        "Dynamic Assessment of Fluid Responsiveness in Surgical ICU Patients through Stroke Volume Variation is Associated with Decreased Length of Stay and Costs: A Systematic Review & Meta-analysis",
      authors:
        "Dave C, Shen J, Chaudhuri D, Herritt B, Fernando S, Reardon P, Tanuseputro P, Thavorn K, Neilipovitz D, Rosenberg E, Kubelik D, and Kyeremanteng K.",
      journal: "Journal of Intensive Care Medicine",
      year: "2018",
      doi: "https://doi.org/10.1177/0885066618805408",
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
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              <ShinyText text="Credentials" speed={5} className="block" />
            </h1>

            <div>
              <h2
                className="text-2xl sm:text-3xl font-semibold text-[var(--accent-blue)] drop-shadow-lg"
                style={{
                  textShadow: `0 0 1px var(--dark-blue),
                        0 0 20px #ffffff`,
                }}
              >
                Chintan Dave, BSc., MD
              </h2>
            </div>
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
                      : "bg-white/80 backdrop-blur-sm text-[var(--dark-blue)] hover:bg-white/90 border border-white/50 shadow-md"
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
                <h3 className="text-3xl font-bold text-[var(--dark-blue)] mb-8 text-center drop-shadow-lg">
                  Educational Journey
                </h3>
                <div className="space-y-6">
                  {education.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start space-x-6 p-6 bg-white/15 backdrop-blur-sm rounded-xl border border-white/20 hover:border-white/30 transition-all duration-300 shadow-lg"
                    >
                      <div className="text-4xl">{item.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-4 mb-2">
                          <span className="text-sm font-medium text-[var(--dark-blue)] bg-[var(--accent-blue)]/20 px-3 py-1 rounded-full">
                            {item.period}
                          </span>
                          <span className="text-sm text-[var(--dark-blue)]/70 flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {item.location}
                          </span>
                        </div>
                        <h4 className="text-xl font-semibold text-[var(--dark-blue)] mb-1 drop-shadow-sm">
                          {item.institution}
                        </h4>
                        <p className="text-[var(--dark-blue)]/90 drop-shadow-sm">
                          {item.degree}
                        </p>
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
                <h3 className="text-3xl font-bold text-[var(--dark-blue)] mb-8 text-center drop-shadow-lg">
                  Professional Experience
                </h3>
                <div className="space-y-6">
                  {workExperience.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="p-6 bg-white/15 backdrop-blur-sm rounded-xl border border-white/20 hover:border-white/30 transition-all duration-300 shadow-lg"
                    >
                      <div className="flex items-start space-x-4 mb-4">
                        <div className="text-3xl">{item.icon}</div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-4 mb-2">
                            <span className="text-sm font-medium text-[var(--dark-blue)] bg-[var(--accent-blue)]/20 px-3 py-1 rounded-full">
                              {item.period}
                            </span>
                            <span className="text-sm text-[var(--dark-blue)]/70">
                              {item.location}
                            </span>
                          </div>
                          <h4 className="text-xl font-semibold text-[var(--dark-blue)] mb-1 drop-shadow-sm">
                            {item.organization}
                          </h4>
                          <p className="text-lg font-medium text-[var(--accent-blue)] mb-2 drop-shadow-sm">
                            {item.role}
                          </p>
                          <ul className="text-[var(--dark-blue)]/90 leading-relaxed drop-shadow-sm space-y-1">
                            {item.description.map((bullet, bulletIndex) => (
                              <li
                                key={bulletIndex}
                                className="flex items-start"
                              >
                                <span className="text-[var(--accent-blue)] mr-2 mt-1">
                                  •
                                </span>
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>
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
                <h3 className="text-3xl font-bold text-[var(--dark-blue)] mb-8 text-center drop-shadow-lg">
                  Recognition & Awards
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {awards.map((award, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="p-6 bg-white/15 backdrop-blur-sm rounded-xl border border-white/20 hover:border-white/30 transition-all duration-300 shadow-lg"
                    >
                      <div className="flex items-center space-x-3 mb-3">
                        <Award className="w-6 h-6 text-yellow-400" />
                        <span className="text-sm font-medium text-[var(--dark-blue)] bg-[var(--accent-blue)]/20 px-3 py-1 rounded-full">
                          {award.year}
                        </span>
                      </div>
                      <h4 className="text-lg font-semibold text-[var(--dark-blue)] mb-2 drop-shadow-sm">
                        {award.award}
                      </h4>
                      <p className="text-sm text-[var(--accent-blue)] mb-3 drop-shadow-sm font-bold">
                        {award.organization}
                      </p>
                      <p className="text-sm text-[var(--dark-blue)]/90 leading-relaxed drop-shadow-sm">
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
                <h3 className="text-3xl font-bold text-[var(--dark-blue)] mb-8 text-center drop-shadow-lg">
                  Select Publications
                </h3>
                <div className="space-y-6">
                  {publications.map((pub, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="p-6 bg-white/15 backdrop-blur-sm rounded-xl border border-white/20 hover:border-white/30 transition-all duration-300 shadow-lg"
                    >
                      <div className="flex items-start space-x-4">
                        <FileText className="w-6 h-6 text-[var(--accent-blue)] mt-1" />
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-[var(--dark-blue)] mb-2 leading-relaxed drop-shadow-sm">
                            {pub.title}
                          </h4>
                          <p className="text-sm text-[var(--dark-blue)]/90 mb-2 drop-shadow-sm">
                            {pub.authors}
                          </p>
                          <div className="flex items-center space-x-4 text-sm">
                            <span className="text-[var(--accent-blue)] font-medium drop-shadow-sm">
                              {pub.journal}
                            </span>
                            <span className="text-[var(--dark-blue)]/70">
                              {pub.year}
                            </span>
                            <a
                              href={pub.doi}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center text-[var(--accent-blue)] hover:text-[var(--dark-blue)] transition-colors duration-300 drop-shadow-sm"
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

      <Footer />
    </main>
  );
}
