"use client";

import React from 'react';
import Image from 'next/image';
import { Particles } from '@/components/ui/particles';
import { TypewriterText } from '@/components/typewriter-text';

export const HeroSection: React.FC = () => {
  const roles = ['Medicine', 'AI', 'Educator'];

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800">
      {/* Particles Background */}
      <div className="absolute inset-0 z-0">
        <Particles 
          quantity={150} 
          className="h-full w-full" 
          color="#5BE7C4" 
          size={1.2}
          staticity={30}
          ease={40}
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          
          {/* Doctor's Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              {/* Neon Cyan Glow Effect */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-400 opacity-75 blur-sm animate-pulse"></div>
              
              {/* Profile Image Container */}
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden border-2 border-cyan-400/50 shadow-2xl shadow-cyan-400/20">
                <Image
                  src="/image.png"
                  alt="Dr. Chintan Dave - Professional Portrait"
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="(max-width: 640px) 128px, (max-width: 1024px) 160px, 192px"
                />
              </div>
              
              {/* Additional Subtle Outer Glow */}
              <div className="absolute -inset-4 rounded-full bg-cyan-400/10 blur-xl animate-pulse"></div>
            </div>
          </div>

          {/* Doctor's Name */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
              Dr. Chintan Dave
            </span>
          </h1>

          {/* Animated Typewriter Roles */}
          <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-medium mb-8">
            <span className="text-white/90 mr-2">Expertise in</span>
            <TypewriterText
              words={roles}
              className="text-cyan-400 font-semibold bg-gradient-to-r from-cyan-300 to-cyan-500 bg-clip-text text-transparent"
              typingSpeed={120}
              deletingSpeed={60}
              pauseDuration={1800}
            />
          </div>

          {/* Subtle Description */}
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed opacity-90">
            Bridging the gap between traditional medicine and cutting-edge artificial intelligence 
            to shape the future of healthcare education and practice.
          </p>

          {/* Decorative Elements */}
          <div className="mt-12 flex justify-center space-x-8 opacity-60">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse delay-300"></div>
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse delay-700"></div>
          </div>
        </div>
      </div>

      {/* Gradient Overlay for Better Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10 pointer-events-none z-5"></div>
    </section>
  );
};