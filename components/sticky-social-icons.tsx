"use client";

import React from "react";
import { motion } from "framer-motion";
import { Youtube, Linkedin, Instagram } from "lucide-react";

interface SocialIcon {
  name: string;
  url: string;
  icon: React.ReactNode;
  color: string;
  hoverColor: string;
}

export const StickySocialIcons: React.FC = () => {
  const socialIcons: SocialIcon[] = [
    {
      name: "YouTube",
      url: "https://www.youtube.com/channel/UCOr_i3qB_jevK88DbSSRuKA",
      icon: <Youtube size={24} />,
      color: "#FF0000",
      hoverColor: "#CC0000",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/drchintandave/",
      icon: <Linkedin size={24} />,
      color: "#0077B5",
      hoverColor: "#005885",
    },
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@drchintandave",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.5V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
        </svg>
      ),
      color: "#000000",
      hoverColor: "#333333",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/drchintandave/",
      icon: <Instagram size={24} />,
      color: "#E4405F",
      hoverColor: "#C13584",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="fixed left-6 top-24 z-50 hidden lg:flex flex-col space-y-4"
    >
      {socialIcons.map((social, index) => (
        <motion.a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
          whileHover={{
            scale: 1.1,
            y: -2,
            transition: { duration: 0.2 },
          }}
          whileTap={{ scale: 0.95 }}
          className="group relative"
        >
          {/* Glassmorphic background */}
          <div
            className="w-12 h-12 rounded-2xl backdrop-blur-md border shadow-lg flex items-center justify-center transition-all duration-300 group-hover:shadow-xl"
            style={{
              background: "rgba(255, 255, 255, 0.1)",
              borderColor: "rgba(255, 255, 255, 0.2)",
            }}
          >
            <div
              className="text-white transition-all duration-300 group-hover:scale-110"
              style={{ color: social.color }}
            >
              {social.icon}
            </div>
          </div>

          {/* Tooltip */}
          <div className="absolute left-16 top-1/2 transform -translate-y-1/2 bg-black/80 text-white px-3 py-1 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            {social.name}
          </div>
        </motion.a>
      ))}
    </motion.div>
  );
};
