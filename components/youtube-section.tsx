import React from "react";
import { ExternalLink, Play, Youtube } from "lucide-react";

export const YouTubeSection = () => {
  // Sample video data - replace with actual videos
  const videos = [
    {
      id: "pXnjnqLsS6E",
      title: "How I went from Academic Probation to Med School",
      thumbnail: "https://i.ytimg.com/vi/pXnjnqLsS6E/mqdefault.jpg",
      duration: "15:30",
      url: "https://www.youtube.com/watch?v=pXnjnqLsS6E",
    },
    {
      id: "1xiaJORy_JM",
      title:
        "Machines have Purpose Not Humans- Why the Pursuit of Purpose is a Trap",
      thumbnail: "https://i.ytimg.com/vi/1xiaJORy_JM/mqdefault.jpg",
      duration: "18:45",
      url: "https://www.youtube.com/watch?v=1xiaJORy_JM",
    },
    {
      id: "G7l1zI2ZkbA",
      title: "Doctor Explains HOW to Pursue Your Dreams",
      thumbnail:
        "https://i.ytimg.com/an_webp/G7l1zI2ZkbA/mqdefault_6s.webp?du=3000&sqp=CMDJisQG&rs=AOn4CLAm0anjfCIdwLTG7HQniLn6kEXOzg",
      duration: "22:15",
      url: "https://www.youtube.com/watch?v=G7l1zI2ZkbA",
    },
  ];

  const youtubeChannelUrl = "https://youtube.com/@drchintandave"; // Replace with actual channel URL

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
            YouTube
          </h2>

          {/* Channel Info and Subscribe Button */}
          <div className="text-center mb-16">
            <a href="https://www.youtube.com/@drchintandave" target="_blank">
              <div className="flex items-center justify-center mb-6">
                <Youtube className="w-12 h-12 text-red-600 mr-4" />

                <h3
                  className="text-3xl font-bold text-[var(--accent-blue)]"
                  style={{
                    textShadow:
                      "0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.4), 2px 2px 4px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  Dr. Chintan Dave
                </h3>
              </div>
            </a>
            {/* <p className="text-lg text-[var(--text-dark)] mb-8 max-w-2xl mx-auto">
              Exploring the intersection of healthcare and AI through
              educational content, clinical insights, and thought leadership
              discussions.
            </p> */}
          </div>

          {/* Featured Videos */}
          <div className="mb-12">
            {/* <h3
              className="text-2xl font-semibold text-center mb-8 text-[var(--accent-blue)]"
              style={{
                textShadow:
                  "0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.4), 2px 2px 4px rgba(0, 0, 0, 0.5)",
              }}
            >
              Featured Videos
            </h3> */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map((video) => (
                <div
                  key={video.id}
                  className="group relative bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105"
                >
                  <div className="relative">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                        <Play className="w-8 h-8 text-white ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                      {video.duration}
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-[var(--text-dark)] mb-2 line-clamp-2 group-hover:text-[var(--accent-blue)] transition-colors duration-300">
                      {video.title}
                    </h4>
                    <div className="flex items-center justify-end text-sm text-gray-600">
                      <a
                        href={video.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-red-600 hover:text-red-700 transition-colors duration-300"
                      >
                        Watch Now
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <p className="text-lg text-[var(--text-dark)] mb-6">
              Stay updated with the latest insights in healthcare AI and
              clinical innovation
            </p>
            <a
              href={youtubeChannelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Youtube className="w-5 h-5 mr-2" />
              Subscribe & Stay Connected
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
