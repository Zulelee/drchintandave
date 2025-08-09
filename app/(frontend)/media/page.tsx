import { getPayload } from "payload";
import config from "../../../payload.config";
import { WavyBackground } from "@/components/ui/wavy-background";
import { FloatingNavbar } from "@/components/floating-navbar";
import { Footer } from "@/components/footer";
import { Calendar, User, Tag, ArrowRight } from "lucide-react";
import Link from "next/link";
import BlogCard from "./blog-card";

export default async function MediaPage() {
  let posts: any[] = [];

  try {
    const payload = await getPayload({
      config,
    });

    const postsResponse = await payload.find({
      collection: "blogs",
      where: {
        status: {
          equals: "published",
        },
      },
      sort: "-publishedDate",
    });

    posts = postsResponse.docs;
  } catch (error) {
    console.error("Error fetching posts:", error);
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <main className="relative min-h-screen">
      <FloatingNavbar />

      <WavyBackground
        className="fixed inset-0 z-0"
        colors={["#3182ce", "#38b2ac", "#3182ce", "#38b2ac"]}
        speed="slow"
        waveOpacity={0.3}
        blur={7}
      />

      {/* Breadcrumb */}
      <section className="relative z-10 pt-32 pb-8 px-4">
        <div className="max-w-6xl mx-auto">
          <nav className="text-sm text-[var(--dark-blue)]/70 mb-4">
            <span>Home</span>
            <span className="mx-2">/</span>
            <span className="text-[var(--accent-blue)]">Media</span>
          </nav>
        </div>
      </section>

      {/* Header */}
      <section className="relative z-10 pb-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 leading-tight"
              style={{
                color: "var(--dark-blue)",
                textShadow: `
                  2px 2px 0px #3182ce,
                  4px 4px 0px #38b2ac,
                  6px 6px 15px #38b2ac
                `,
              }}
            >
              Media & Blog
            </h1>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="relative z-10 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <BlogCard key={post.id} post={post} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div
                className="backdrop-blur-2xl rounded-3xl p-12 shadow-2xl border max-w-2xl mx-auto"
                style={{
                  background: "rgba(255, 255, 255, 0.15)",
                  borderColor: "rgba(255, 255, 255, 0.2)",
                  boxShadow: `
                    0 8px 32px rgba(0, 0, 0, 0.1),
                    inset 0 1px 0 rgba(255, 255, 255, 0.1)
                  `,
                }}
              >
                <h3 className="text-2xl font-bold text-[var(--dark-blue)] mb-4">
                  No posts yet
                </h3>
                <p className="text-[var(--dark-blue)]/70 mb-6">
                  Check back soon for new content! You can create posts in the
                  admin panel.
                </p>
                <div className="text-left">
                  <h4 className="font-semibold mb-3 text-[var(--dark-blue)]">
                    Features Available:
                  </h4>
                  <ul className="text-sm text-[var(--dark-blue)]/70 space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[var(--accent-blue)] rounded-full"></div>
                      Rich text editor for content
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[var(--accent-blue)] rounded-full"></div>
                      Image uploads and management
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[var(--accent-blue)] rounded-full"></div>
                      Tags and categories
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[var(--accent-blue)] rounded-full"></div>
                      Draft and published status
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
