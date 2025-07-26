import { Component } from "@/components/ui/masonry";

const data = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    height: 400,
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca",
    height: 300,
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
    height: 300,
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
    height: 300,
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99",
    height: 300,
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca",
    height: 300,
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
    height: 200,
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    height: 300,
  },
  {
    id: 9,
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
    height: 200,
  },
  {
    id: 10,
    image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99",
    height: 400,
  },
  {
    id: 11,
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca",
    height: 250,
  },
  {
    id: 12,
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
    height: 350,
  },
  {
    id: 13,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    height: 420,
  },
  {
    id: 14,
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
    height: 280,
  },
  {
    id: 15,
    image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99",
    height: 310,
  },
];

const DemoMasonry = () => {
  return (
    <section className="relative w-full flex items-center justify-center overflow-hidden bg-transparent py-12 sm:py-20 px-4">
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="backdrop-blur-2xl rounded-3xl p-6 sm:p-8 lg:p-12 xl:p-16 shadow-2xl border"
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
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-8 sm:mb-12 leading-tight text-center"
            style={{
              color: "var(--dark-blue)",
              textShadow: `
                2px 2px 0px var(--dark-blue-light),
                4px 4px 0px rgba(26, 54, 93, 0.3),
                6px 6px 15px rgba(26, 54, 93, 0.2)
              `,
            }}
          >
            Evolve To your Full Potential
          </h2>
          <div className="w-full rounded-lg">
            <Component data={data} />
          </div>
        </div>
      </div>
    </section>
  );
};

export { DemoMasonry };
