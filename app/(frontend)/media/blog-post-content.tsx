"use client";

import { motion } from "framer-motion";
import { Calendar, User, Tag, ArrowLeft } from "lucide-react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface BlogPostContentProps {
  post: any;
  formatDate: (dateString: string) => string;
  markdownContent: string;
}

export default function BlogPostContent({
  post,
  formatDate,
  markdownContent,
}: BlogPostContentProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
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
      {/* Back Button */}
      <div className="mb-8">
        <Link href="/media">
          <div className="inline-flex items-center gap-2 text-[var(--accent-blue)] hover:underline">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </div>
        </Link>
      </div>

      {/* Featured Image */}
      {post.featuredImage &&
        typeof post.featuredImage === "object" &&
        "url" in post.featuredImage && (
          <div className="mb-8 rounded-2xl overflow-hidden">
            <img
              src={post.featuredImage.url as string}
              alt={(post.featuredImage as any).alt || post.title}
              className="w-full h-64 md:h-96 object-cover"
            />
          </div>
        )}

      {/* Post Header */}
      <header className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-[var(--dark-blue)] mb-4">
          {post.title}
        </h1>

        {post.excerpt && (
          <p className="text-xl text-[var(--dark-blue)]/70 mb-6 leading-relaxed">
            {post.excerpt}
          </p>
        )}

        {/* Post Meta */}
        <div className="flex flex-wrap items-center gap-6 text-sm text-[var(--dark-blue)]/60">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>
              {post.publishedDate ? formatDate(post.publishedDate) : "No date"}
            </span>
          </div>
          {post.tags && post.tags.length > 0 && (
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4 text-[var(--accent-blue)]" />
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag: string, index: number) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-[var(--accent-blue)]/10 text-[var(--accent-blue)] text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Post Content */}
      <div className="prose prose-lg max-w-none">
        <div className="text-[var(--dark-blue)]/80 leading-relaxed">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              h1: ({ children }: any) => (
                <h1 className="text-3xl font-bold mb-6 mt-8 text-[var(--dark-blue)]">
                  {children}
                </h1>
              ),
              h2: ({ children }: any) => (
                <h2 className="text-2xl font-bold mb-4 mt-6 text-[var(--dark-blue)]">
                  {children}
                </h2>
              ),
              h3: ({ children }: any) => (
                <h3 className="text-xl font-bold mb-3 mt-5 text-[var(--dark-blue)]">
                  {children}
                </h3>
              ),
              p: ({ children }: any) => (
                <p className="mb-4 leading-relaxed text-[var(--dark-blue)]/80">
                  {children}
                </p>
              ),
              ul: ({ children }: any) => (
                <ul className="list-disc list-inside mb-4 space-y-1 text-[var(--dark-blue)]/80">
                  {children}
                </ul>
              ),
              ol: ({ children }: any) => (
                <ol className="list-decimal list-inside mb-4 space-y-1 text-[var(--dark-blue)]/80">
                  {children}
                </ol>
              ),
              li: ({ children }: any) => (
                <li className="text-[var(--dark-blue)]/80">{children}</li>
              ),
              blockquote: ({ children }: any) => (
                <blockquote className="border-l-4 border-[var(--accent-blue)] pl-4 italic text-[var(--dark-blue)]/70 mb-4">
                  {children}
                </blockquote>
              ),
              code: ({ children, className }: any) => {
                const isInline = !className;
                return isInline ? (
                  <code className="bg-[var(--accent-blue)]/10 px-1 py-0.5 rounded text-sm text-[var(--accent-blue)]">
                    {children}
                  </code>
                ) : (
                  <pre className="bg-[var(--accent-blue)]/10 p-4 rounded-lg overflow-x-auto">
                    <code className="text-sm text-[var(--dark-blue)]">
                      {children}
                    </code>
                  </pre>
                );
              },
              a: ({ children, href }: any) => (
                <a
                  href={href}
                  className="text-[var(--accent-blue)] hover:text-[var(--accent-blue)]/80 underline"
                >
                  {children}
                </a>
              ),
              strong: ({ children }: any) => (
                <strong className="font-bold text-[var(--dark-blue)]">
                  {children}
                </strong>
              ),
              em: ({ children }: any) => (
                <em className="italic text-[var(--dark-blue)]/80">
                  {children}
                </em>
              ),
            }}
          >
            {markdownContent}
          </ReactMarkdown>
        </div>
      </div>
    </motion.article>
  );
}
