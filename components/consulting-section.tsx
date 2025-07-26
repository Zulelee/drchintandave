import React from "react";

export const ConsultingSection = () => {
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
            Consulting
          </h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 text-lg text-[var(--text-dark)] text-center leading-relaxed">
            <div className="space-y-4">
              <h3
                className="text-2xl font-semibold text-[var(--accent-blue)]"
                style={{
                  textShadow:
                    "0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.4), 2px 2px 4px rgba(0, 0, 0, 0.5)",
                }}
              >
                Personal Consulting
              </h3>
              <p>
                Open to healthcare workers looking to expand their social media
                presence and thought leadership.
              </p>
            </div>
            <div className="space-y-4">
              <h3
                className="text-2xl font-semibold text-[var(--accent-blue)]"
                style={{
                  textShadow:
                    "0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.4), 2px 2px 4px rgba(0, 0, 0, 0.5)",
                }}
              >
                Business Consulting
              </h3>
              <p>
                Open to businesses solving healthcare problems with AI, from
                clinical insights into model development/validation, optimizing
                clinical workflow integration pathways, and ensuring patient and
                ethical alignment.
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-16">
            <button
              className="px-12 py-4 text-xl font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              style={{
                backgroundColor: "var(--dark-blue)",
                color: "white",
                border: "2px solid var(--dark-blue-light)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor =
                  "var(--dark-blue-light)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "var(--dark-blue)";
              }}
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
