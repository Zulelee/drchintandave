"use client";

import React from 'react';
import { Mail, MapPin, Phone, Linkedin, Twitter, Calendar } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "dr.chintan.dave@example.com",
      href: "mailto:dr.chintan.dave@example.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Medical Center, Healthcare District",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "#",
      color: "hover:text-blue-600"
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "#",
      color: "hover:text-blue-400"
    },
    {
      icon: Calendar,
      label: "Schedule",
      href: "#",
      color: "hover:text-cyan-500"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Let's Connect
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Interested in collaboration, consultation, or learning more about the intersection 
            of medicine and AI? I'd love to hear from you.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((contact, index) => (
            <a
              key={index}
              href={contact.href}
              className="group bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 hover:bg-gray-800/70"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-lg p-3 group-hover:scale-110 transition-transform duration-300">
                  <contact.icon className="w-full h-full text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-1">{contact.label}</div>
                  <div className="text-white font-medium">{contact.value}</div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Social Links */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-white mb-6">Follow & Connect</h3>
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className={`w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 transition-all duration-300 hover:bg-gray-700 ${social.color} hover:scale-110`}
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Collaborate?</h3>
            <p className="text-gray-300 mb-6">
              Whether you're interested in AI healthcare solutions, medical education, 
              or research collaboration, let's explore how we can work together.
            </p>
            <a
              href="mailto:dr.chintan.dave@example.com"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
            >
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};