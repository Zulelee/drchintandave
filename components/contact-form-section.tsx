import React, { useState, useEffect } from "react";
import { Mail, Send, CheckCircle, AlertCircle } from "lucide-react";
import GlowyContainer from "@/components/ui/glowy-container";

export const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isClient, setIsClient] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch(process.env.NEXT_PUBLIC_FORM_URL, {
        method: "POST",
        mode: "no-cors", // Required for Google Apps Script
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      // Since we're using no-cors, we can't check the response status
      // We'll assume success if no error is thrown
      setSubmitStatus("success");

      setTimeout(() => {
        setSubmitStatus("idle");
      }, 3000);

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact-section"
      className="relative w-full flex items-center justify-center overflow-hidden bg-transparent py-20 px-4"
    >
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <GlowyContainer
          enableTilt={true}
          enableMagnetism={true}
          clickEffect={true}
          borderGlow={true}
          particleCount={6}
        >
          <div
            className="backdrop-blur-2xl rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl border h-full"
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
                2px 2px 0px #3182ce,
                4px 4px 0px #38b2ac,
                6px 6px 15px #38b2ac
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
                  style={{
                    textShadow: `0 0 1px var(--dark-blue),
                        0 0 20px #ffffff`,
                  }}
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
          {!isClient ? (
            <div className="space-y-6 animate-pulse">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="h-4 bg-gray-300 rounded mb-2"></div>
                  <div className="h-12 bg-gray-300 rounded"></div>
                </div>
                <div>
                  <div className="h-4 bg-gray-300 rounded mb-2"></div>
                  <div className="h-12 bg-gray-300 rounded"></div>
                </div>
              </div>
              <div>
                <div className="h-4 bg-gray-300 rounded mb-2"></div>
                <div className="h-12 bg-gray-300 rounded"></div>
              </div>
              <div>
                <div className="h-4 bg-gray-300 rounded mb-2"></div>
                <div className="h-24 bg-gray-300 rounded"></div>
              </div>
              <div className="flex justify-center pt-6">
                <div className="h-12 w-32 bg-gray-300 rounded-full"></div>
              </div>
            </div>
          ) : (
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
                    suppressHydrationWarning={true}
                    autoComplete="name"
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
                    suppressHydrationWarning={true}
                    autoComplete="email"
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
                  suppressHydrationWarning={true}
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
                  suppressHydrationWarning={true}
                />
              </div>

              <div className="flex flex-col items-center pt-6 space-y-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`flex items-center px-8 py-4 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl ${
                    isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  style={{
                    backgroundColor: "#38b2ac",
                    boxShadow:
                      "inset 0 2px 4px rgba(49, 130, 206, 0.3), inset 0 4px 8px rgba(49, 130, 206, 0.2), inset 0 8px 16px rgba(49, 130, 206, 0.1)",
                  }}
                  onMouseEnter={(e) => {
                    if (!isSubmitting) {
                      e.currentTarget.style.backgroundColor = "#38b2ac";
                      e.currentTarget.style.boxShadow =
                        "inset 0 4px 8px rgba(49, 130, 206, 0.4), inset 0 8px 16px rgba(49, 130, 206, 0.3), inset 0 16px 32px rgba(49, 130, 206, 0.2)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSubmitting) {
                      e.currentTarget.style.backgroundColor = "#38b2ac";
                      e.currentTarget.style.boxShadow =
                        "inset 0 2px 4px rgba(49, 130, 206, 0.3), inset 0 4px 8px rgba(49, 130, 206, 0.2), inset 0 8px 16px rgba(49, 130, 206, 0.1)";
                    }
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>

                {/* Success Message */}
                {submitStatus === "success" && (
                  <div className="flex items-center text-green-600 bg-green-100 px-4 py-2 rounded-lg">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    <span className="font-medium">
                      Message sent successfully!
                    </span>
                  </div>
                )}

                {/* Error Message */}
                {submitStatus === "error" && (
                  <div className="flex items-center text-red-600 bg-red-100 px-4 py-2 rounded-lg">
                    <AlertCircle className="w-5 h-5 mr-2" />
                    <span className="font-medium">
                      Failed to send message. Please try again.
                    </span>
                  </div>
                )}
              </div>
            </form>
          )}
        </div>
        </GlowyContainer>
      </div>
    </section>
  );
};
