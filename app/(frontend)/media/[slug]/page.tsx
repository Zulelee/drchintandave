import { getPayload } from "payload";
import config from "../../../../payload.config";
import { WavyBackground } from "@/components/ui/wavy-background";
import { FloatingNavbar } from "@/components/floating-navbar";
import { Footer } from "@/components/footer";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
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

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Helper function to render rich text content
  const renderRichText = (content: any) => {
    if (!content) return "Content not available";

    // If it's already a string, return it as markdown
    if (typeof content === "string") {
      return content;
    }

    // If it's a rich text object from Payload
    if (content && typeof content === "object") {
      // If it's an array of rich text nodes, convert to markdown
      if (Array.isArray(content)) {
        return content
          .map((node: any, index: number) => {
            if (node.type === "paragraph") {
              const text =
                node.children
                  ?.map((child: any) => {
                    let childText = child.text || "";
                    if (child.format & 1) childText = `**${childText}**`; // bold
                    if (child.format & 2) childText = `*${childText}*`; // italic
                    return childText;
                  })
                  .join("") || "";
              return text + "\n\n";
            }
            if (node.type === "heading") {
              const level = node.tag || "h2";
              const hashes = "#".repeat(parseInt(level.replace("h", "")));
              const text =
                node.children?.map((child: any) => child.text || "").join("") ||
                "";
              return `${hashes} ${text}\n\n`;
            }
            if (node.type === "list") {
              const listType = node.listType === "number" ? "ol" : "ul";
              const items =
                node.children
                  ?.map((listItem: any) => {
                    const itemText =
                      listItem.children
                        ?.map((child: any) => {
                          let childText = child.text || "";
                          if (child.format & 1) childText = `**${childText}**`; // bold
                          if (child.format & 2) childText = `*${childText}*`; // italic
                          return childText;
                        })
                        .join("") || "";
                    return listType === "ol"
                      ? `1. ${itemText}`
                      : `- ${itemText}`;
                  })
                  .join("\n") || "";
              return items + "\n\n";
            }
            return "";
          })
          .join("");
      }

      // If it's a Lexical editor object, try to extract content
      if (content.root) {
        return extractLexicalContent(content.root);
      }

      // If it has a children property (common in rich text editors)
      if (content.children) {
        return extractLexicalContent(content);
      }
    }

    return "Content not available";
  };

  // Helper function to extract content from Lexical editor structure
  const extractLexicalContent = (node: any): string => {
    if (!node) return "";

    let markdown = "";

    if (node.children && Array.isArray(node.children)) {
      for (const child of node.children) {
        if (child.type === "paragraph") {
          if (child.children) {
            for (const textChild of child.children) {
              if (textChild.text) {
                let text = textChild.text;
                if (textChild.format & 1) text = `**${text}**`; // bold
                if (textChild.format & 2) text = `*${text}*`; // italic
                markdown += text;
              }
            }
          }
          markdown += "\n\n";
        } else if (child.type === "heading") {
          const level = child.tag || "h2";
          const hashes = "#".repeat(parseInt(level.replace("h", "")));
          markdown += `${hashes} `;
          if (child.children) {
            for (const textChild of child.children) {
              if (textChild.text) {
                markdown += textChild.text;
              }
            }
          }
          markdown += "\n\n";
        } else if (child.type === "list") {
          const listType = child.listType === "number" ? "ol" : "ul";
          if (child.children) {
            for (const listItem of child.children) {
              const itemText =
                listItem.children
                  ?.map((textChild: any) => textChild.text || "")
                  .join("") || "";
              markdown +=
                listType === "ol" ? `1. ${itemText}\n` : `- ${itemText}\n`;
            }
          }
          markdown += "\n";
        }
      }
    }

    return markdown;
  };

  // Get the markdown content
  const markdownContent = renderRichText(post.content);

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
          <BlogPostContent post={post} markdownContent={markdownContent} />
        </div>
      </section>

      <Footer />
    </main>
  );
}
