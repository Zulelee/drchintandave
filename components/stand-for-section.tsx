import React from "react";

export const StandForSection = () => {
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
                2px 2px 0px #3182ce,
                4px 4px 0px #38b2ac,
                6px 6px 15px #38b2ac
              `,
            }}
          >
            What I Stand For
          </h2>
          <div className="max-w-4xl mx-auto text-lg text-[var(--text-dark)] space-y-6 text-center leading-relaxed">
            <p>
              I believe we are at the cusp of human evolution, which if directed
              consciously will lead to lasting prosperity, health, love, and joy
              amongst humanity. We are moving beyond natural selection to a
              chapter in our history marked by conscious selection: we choose
              how we evolve.
            </p>
            <p>
              Humans are not the final stage of evolution, and we must choose to
              grow with our technologies. With my extensive medical and research
              background, AI experience, as well as my lifelong pursuit of
              spirituality, my mission is to apply knowledge and technology with
              wisdom to help humanity through the next stage of evolution and
              become an interstellar species.
            </p>
            <p className="font-semibold mt-8">
              My book &quot;Being Human In the Age of AI: Consciously Creating a
              Better World&quot; dives deeper into this theme.
            </p>
          </div>
          <div className="flex justify-center mt-12">
            <button
              className="px-12 py-4 text-xl font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              style={{
                backgroundColor: "#38b2ac",
                color: "white",
                boxShadow:
                  "inset 0 2px 4px rgba(49, 130, 206, 0.3), inset 0 4px 8px rgba(49, 130, 206, 0.2), inset 0 8px 16px rgba(49, 130, 206, 0.1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#38b2ac";
                e.currentTarget.style.boxShadow =
                  "inset 0 4px 8px rgba(49, 130, 206, 0.4), inset 0 8px 16px rgba(49, 130, 206, 0.3), inset 0 16px 32px rgba(49, 130, 206, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#38b2ac";
                e.currentTarget.style.boxShadow =
                  "inset 0 2px 4px rgba(49, 130, 206, 0.3), inset 0 4px 8px rgba(49, 130, 206, 0.2), inset 0 8px 16px rgba(49, 130, 206, 0.1)";
              }}
              onClick={() => {
                window.location.href = "/being-human";
              }}
            >
              Being Human
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
