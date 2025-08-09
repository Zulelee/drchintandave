import { getPayload } from "payload";
import config from "../../../../payload.config";
import { WavyBackground } from "@/components/ui/wavy-background";
import { FloatingNavbar } from "@/components/floating-navbar";
import { Footer } from "@/components/footer";
import { notFound } from "next/navigation";
import BlogPostContent from "./blog-post-content";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  let post = null;

  try {
    const payload = await getPayload({
      config,
    });

    const postsResponse = await payload.find({
      collection: "blogs",
      where: {
        slug: {
          equals: slug,
        },
        status: {
          equals: "published",
        },
      },
      limit: 1,
    });

    if (postsResponse.docs.length === 0) {
      notFound();
    }

    post = postsResponse.docs[0];
  } catch (error) {
    console.error("Error fetching post:", error);
    notFound();
  }

  if (!post) {
    notFound();
  }

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
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-[var(--dark-blue)]/70 mb-4">
            <a href="/" className="hover:text-[var(--accent-blue)]">
              Home
            </a>
            <span className="mx-2">/</span>
            <a href="/media" className="hover:text-[var(--accent-blue)]">
              Media
            </a>
            <span className="mx-2">/</span>
            <span className="text-[var(--accent-blue)]">{post.title}</span>
          </nav>
        </div>
      </section>

      {/* Blog Post */}
      <section className="relative z-10 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          {post.content[0]}
          <BlogPostContent post={post} />
        </div>
      </section>

      <Footer />
    </main>
  );
}
