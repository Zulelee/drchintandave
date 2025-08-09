"use client";

import { motion } from "framer-motion";
import { Calendar, User, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { config } from "@/lib/config";
import PayloadRichText from "@/components/payload-rich-text";

interface BlogPostContentProps {
  post: any;
}

export default function BlogPostContent({ post }: BlogPostContentProps) {
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
      {post.featuredImage && (
        <div className="rounded-3xl overflow-hidden shadow-2xl">
          <img
            src={
              // post.featuredImage.url ||
              post.featuredImage.sizes?.feature?.url ||
              `${config.serverURL}${post.featuredImage.url}`
            }
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

        {post.link && post.link.url && post.link.text && (
          <div className="flex items-center gap-2 mt-4">
            <a
              href={post.link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--accent-blue)]/10 text-[var(--accent-blue)] text-sm rounded-full hover:bg-[var(--accent-blue)]/20 transition-colors"
            >
              <span>{post.link.text}</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
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
        <PayloadRichText content={post.content} />
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
