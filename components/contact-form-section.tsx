import React, { useState } from "react";
import { Mail, Send } from "lucide-react";

export const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // You can add email sending logic here or integrate with a service like EmailJS
  };

  return (
    <section className="relative w-full flex items-center justify-center overflow-hidden bg-transparent py-20 px-4">
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-12 leading-tight text-center"
            style={{
              color: "var(--dark-blue)",
              textShadow: `
                2px 2px 0px var(--dark-blue-light),
                4px 4px 0px rgba(26, 54, 93, 0.3),
                6px 6px 15px rgba(26, 54, 93, 0.2)
              `,
            }}
          >
            How To Reach Me
          </h2>

          {/* Email Contact */}
          <div className="text-center mb-12">
            <div
              className="flex items-center justify-center mb-6"
              style={{
                textShadow:
                  "0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.4), 2px 2px 4px rgba(0, 0, 0, 0.5)",
              }}
            >
              <Mail
                className="w-8 h-8 text-[var(--accent-blue)] mr-3"
                style={{
                  filter:
                    "drop-shadow(0 0 10px rgba(255, 255, 255, 0.8)) drop-shadow(0 0 20px rgba(255, 255, 255, 0.4))",
                }}
              />
              <span className="text-xl text-[var(--text-dark)] font-bold">
                Email:{" "}
                <a
                  href="mailto:drchintandave@gmail.com"
                  className="text-[var(--accent-blue)] hover:text-[var(--dark-blue)] transition-colors duration-300"
                >
                  drchintandave@gmail.com
                </a>
              </span>
            </div>
            <p className="text-lg text-[var(--text-dark)]">
              Ideas/suggestions? Reach out below!
            </p>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-bold text-[var(--text-dark)] mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border-2 border-[var(--dark-blue)] rounded-lg text-[var(--text-dark)] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--accent-blue)] focus:border-[var(--accent-blue)] transition-all duration-300 font-medium"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-bold text-[var(--text-dark)] mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border-2 border-[var(--dark-blue)] rounded-lg text-[var(--text-dark)] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--accent-blue)] focus:border-[var(--accent-blue)] transition-all duration-300 font-medium"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-bold text-[var(--text-dark)] mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border-2 border-[var(--dark-blue)] rounded-lg text-[var(--text-dark)] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--accent-blue)] focus:border-[var(--accent-blue)] transition-all duration-300 font-medium"
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-bold text-[var(--text-dark)] mb-2"
              >
                Leave me a message, your ideas, thoughts, or criticisms...
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border-2 border-[var(--dark-blue)] rounded-lg text-[var(--text-dark)] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--accent-blue)] focus:border-[var(--accent-blue)] transition-all duration-300 resize-vertical font-medium"
                placeholder="Share your thoughts, ideas, or feedback..."
              />
            </div>

            <div className="flex justify-center pt-6">
              <button
                type="submit"
                className="flex items-center px-8 py-4 bg-gradient-to-r from-[var(--dark-blue)] to-[var(--dark-blue-light)] hover:from-[var(--dark-blue-light)] hover:to-[var(--dark-blue)] text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
