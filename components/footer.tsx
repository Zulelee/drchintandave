import React from "react";
import { Youtube, Mail, ExternalLink } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-[var(--dark-blue)] text-white py-16 px-4">
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white mb-4">
              Dr. Chintan Dave
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Doctor, AI Founder, Educator, and Advocate for Human-Centered
              Technology in Medicine.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="https://www.youtube.com/@drchintandave"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-red-500 transition-colors duration-300"
              >
                <Youtube className="w-5 h-5 mr-2" />
                <span className="text-sm">YouTube</span>
              </a>
              <a
                href="mailto:drchintandave@gmail.com"
                className="flex items-center text-gray-300 hover:text-[var(--accent-blue)] transition-colors duration-300"
              >
                <Mail className="w-5 h-5 mr-2" />
                <span className="text-sm">Email</span>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4">
              Navigation
            </h4>
            <div className="space-y-2">
              <a
                href="/credentials"
                className="block text-gray-300 hover:text-white transition-colors duration-300 text-sm"
              >
                Credentials
              </a>
              {/* <a
                href="/consulting"
                className="block text-gray-300 hover:text-white transition-colors duration-300 text-sm"
              >
                Consulting
              </a> */}
              <a
                href="/being-human"
                className="block text-gray-300 hover:text-white transition-colors duration-300 text-sm"
              >
                Being Human
              </a>
              <a
                href="/media"
                className="block text-gray-300 hover:text-white transition-colors duration-300 text-sm"
              >
                Media
              </a>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4">
              Get In Touch
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:drchintandave@gmail.com"
                className="flex items-center text-gray-300 hover:text-[var(--accent-blue)] transition-colors duration-300 text-sm"
              >
                <Mail className="w-4 h-4 mr-2" />
                drchintandave@gmail.com
              </a>
              <a
                href="https://www.youtube.com/@drchintandave"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-red-500 transition-colors duration-300 text-sm"
              >
                <Youtube className="w-4 h-4 mr-2" />
                Subscribe on YouTube
                <ExternalLink className="w-3 h-3 ml-1" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Dr. Chintan Dave. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
