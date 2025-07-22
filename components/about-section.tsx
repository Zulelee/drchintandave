"use client";

import React from 'react';
import { Stethoscope, Brain, GraduationCap, Award } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const expertise = [
    {
      icon: Stethoscope,
      title: "Medicine",
      description: "Extensive clinical experience with a focus on patient-centered care and evidence-based practice.",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: Brain,
      title: "Artificial Intelligence",
      description: "Pioneering the integration of AI technologies in healthcare for improved diagnostics and treatment.",
      color: "from-cyan-400 to-cyan-600"
    },
    {
      icon: GraduationCap,
      title: "Education",
      description: "Dedicated to training the next generation of healthcare professionals in modern medical practices.",
      color: "from-purple-400 to-purple-600"
    }
  ];

  const achievements = [
    { number: "15+", label: "Years Experience" },
    { number: "500+", label: "Students Mentored" },
    { number: "50+", label: "Research Papers" },
    { number: "10+", label: "AI Projects" }
  ];
  
  // Scroll animation state
  const [scrollY, setScrollY] = React.useState(0);
  
  React.useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      className="py-20 px-4 sm:px-6 lg:px-8 bg-transparent text-white"
      style={{
        transform: `translateY(${Math.max(0, 100 - scrollY / 5)}vh)`,
        opacity: Math.min(1, (scrollY - 300) / 500),
        transition: 'transform 0.5s ease-out'
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Bridging Traditional Medicine with
            <span className="bg-gradient-to-r from-[#00D4FF] to-[#A855F7] bg-clip-text text-transparent"> Modern Innovation</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            With over 15 years of experience in medicine and a passion for artificial intelligence, 
            Dr. Chintan Dave is at the forefront of healthcare innovation, combining clinical expertise 
            with cutting-edge technology to improve patient outcomes and medical education.
          </p>
        </div>

        {/* Expertise Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {expertise.map((item, index) => (
            <div 
              key={index}
              className="group relative bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-700 hover:border-[#00D4FF]/50"
            >
              {/* Icon with gradient background */}
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${item.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className="w-full h-full text-white" />
              </div>
              
              <h3 className="text-2xl font-semibold text-white mb-4">{item.title}</h3>
              <p className="text-gray-300 leading-relaxed">{item.description}</p>
              
              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#00D4FF]/10 to-[#A855F7]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-8 sm:p-12">
          <div className="text-center mb-12">
            <Award className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Professional Achievements</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              A track record of excellence in medicine, research, and education
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-2">
                  {achievement.number}
                </div>
                <div className="text-gray-300 text-sm sm:text-base">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};