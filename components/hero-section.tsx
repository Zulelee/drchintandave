"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { NeuralNetworkNodes } from '@/components/ui/neural-network-nodes';
import { TypewriterText } from '@/components/typewriter-text';

export const HeroSection: React.FC = () => {
  const roles = ['Medicine', 'AI', 'Educator'];
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gray-900">
      {/* Neural Network Background */}
      <div className="absolute inset-0 z-0">
        {/* Neural Network Nodes */}
        <NeuralNetworkNodes
          nodeCount={16}
          connectionDensity={0.4}
          pulseSpeed={1.0}
          interactionRadius={120}
          colors={['#00D4FF', '#A855F7', '#4A90E2']}
          className="h-full w-full"
        />
      </div>

      {/* Hero Content */}
      <div 
        className="relative z-10 container mx-auto h-screen flex items-center transition-opacity duration-300"
        style={{
          opacity: Math.max(0, 1 - scrollY / 500),
          transform: `translateY(${scrollY * 0.5}px)`
        }}
      >
        <div className="grid grid-cols-2  items-center w-full">
          {/* Left Side - Text Content */}
          <div className="text-white space-y-6 flex-col justify-items-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
              Dr. Chintan Dave
            </h1>

            <div className="flex items-center text-2xl md:text-3xl lg:text-4xl font-light text-gray-200">
              <TypewriterText
                words={roles}
                className="text-[#00D4FF]"
                typingSpeed={80}
                deletingSpeed={50}
                pauseDuration={3000}
              />
            </div>

            <div className="pt-4">
              <button className="bg-[#0EA5E9] hover:bg-[#0284C7] text-white font-medium transition-all duration-200 shadow-md rounded-full px-8 py-3 text-lg">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Side - Doctor's Image */}
          <div className="flex justify-end">
            <div className="relative w-full h-[100vh] top-20">
              <Image
                src="/image.png"
                alt="Dr. Chintan Dave"
                fill
                className="object-contain object-right"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};