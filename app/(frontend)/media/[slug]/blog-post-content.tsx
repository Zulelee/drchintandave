"use client";

import { motion } from "framer-motion";
import { Calendar, User, Tag, ArrowLeft } from "lucide-react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface BlogPostContentProps {
  post: any;
  markdownContent: string;
}

export default function BlogPostContent({
  post,
  markdownContent,
}: BlogPostContentProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      {/* Back to Media */}
      <div className="mb-8">
        <Link
          href="/media"
          className="inline-flex items-center gap-2 text-[var(--accent-blue)] hover:text-[var(--accent-blue)]/80 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Media</span>
        </Link>
      </div>

      {/* Featured Image */}
      {post.featuredImage &&
        typeof post.featuredImage === "object" &&
        "url" in post.featuredImage && (
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={post.featuredImage.url as string}
              alt={(post.featuredImage as any).alt || post.title}
              className="w-full h-64 md:h-96 object-cover"
            />
          </div>
        )}

      {/* Post Header */}
      <div
        className="backdrop-blur-2xl rounded-3xl p-8 shadow-2xl border"
        style={{
          background: "rgba(255, 255, 255, 0.15)",
          borderColor: "rgba(255, 255, 255, 0.2)",
          boxShadow: `
            0 8px 32px rgba(0, 0, 0, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.1)
          `,
        }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-[var(--dark-blue)] mb-6">
          {post.title}
        </h1>

        {post.excerpt && (
          <p className="text-xl text-[var(--dark-blue)]/70 mb-6">
            {post.excerpt}
          </p>
        )}

        <div className="flex flex-wrap items-center gap-6 text-sm text-[var(--dark-blue)]/60">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4" />
            <span>{post.author || "Dr. Chintan Dave"}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>
              {post.publishedDate ? formatDate(post.publishedDate) : "No date"}
            </span>
          </div>
        </div>

        {post.tags && post.tags.length > 0 && (
          <div className="flex items-center gap-2 mt-4">
            <Tag className="w-4 h-4 text-[var(--accent-blue)]" />
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag: string, tagIndex: number) => (
                <span
                  key={tagIndex}
                  className="px-3 py-1 bg-[var(--accent-blue)]/10 text-[var(--accent-blue)] text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Post Content */}
      <div
        className="backdrop-blur-2xl rounded-3xl p-8 shadow-2xl border prose prose-lg max-w-none"
        style={{
          background: "rgba(255, 255, 255, 0.15)",
          borderColor: "rgba(255, 255, 255, 0.2)",
          boxShadow: `
            0 8px 32px rgba(0, 0, 0, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.1)
          `,
        }}
      >
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            h1: ({ children }) => (
              <h1 className="text-3xl font-bold text-[var(--dark-blue)] mb-6 mt-8 first:mt-0">
                {children}
              </h1>
            ),
            h2: ({ children }) => (
              <h2 className="text-2xl font-bold text-[var(--dark-blue)] mb-4 mt-6">
                {children}
              </h2>
            ),
            h3: ({ children }) => (
              <h3 className="text-xl font-bold text-[var(--dark-blue)] mb-3 mt-5">
                {children}
              </h3>
            ),
            p: ({ children }) => (
              <p className="text-[var(--dark-blue)]/80 mb-4 leading-relaxed">
                {children}
              </p>
            ),
            ul: ({ children }) => (
              <ul className="list-disc list-inside text-[var(--dark-blue)]/80 mb-4 space-y-2">
                {children}
              </ul>
            ),
            ol: ({ children }) => (
              <ol className="list-decimal list-inside text-[var(--dark-blue)]/80 mb-4 space-y-2">
                {children}
              </ol>
            ),
            li: ({ children }) => (
              <li className="text-[var(--dark-blue)]/80">{children}</li>
            ),
            blockquote: ({ children }) => (
              <blockquote className="border-l-4 border-[var(--accent-blue)] pl-4 italic text-[var(--dark-blue)]/70 mb-4">
                {children}
              </blockquote>
            ),
            code: ({ children, className }) => {
              const isInline = !className;
              if (isInline) {
                return (
                  <code className="bg-[var(--accent-blue)]/10 text-[var(--accent-blue)] px-1 py-0.5 rounded text-sm">
                    {children}
                  </code>
                );
              }
              return (
                <pre className="bg-[var(--dark-blue)]/5 p-4 rounded-lg overflow-x-auto mb-4">
                  <code className="text-[var(--dark-blue)]/80">{children}</code>
                </pre>
              );
            },
            a: ({ children, href }) => (
              <a
                href={href}
                className="text-[var(--accent-blue)] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {children}
              </a>
            ),
            strong: ({ children }) => (
              <strong className="font-bold text-[var(--dark-blue)]">
                {children}
              </strong>
            ),
            em: ({ children }) => (
              <em className="italic text-[var(--dark-blue)]/90">{children}</em>
            ),
          }}
        >
          {markdownContent}
        </ReactMarkdown>
      </div>

      {/* Back to Media Footer */}
      <div className="text-center pt-8">
        <Link
          href="/media"
          className="inline-flex items-center gap-2 text-[var(--accent-blue)] hover:text-[var(--accent-blue)]/80 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Media</span>
        </Link>
      </div>
    </motion.article>
  );
}
