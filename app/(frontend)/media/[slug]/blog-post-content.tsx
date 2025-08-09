"use client";

import { motion } from "framer-motion";
import { Calendar, User, Tag, ArrowLeft } from "lucide-react";
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
            src={`${config.serverURL}${post.featuredImage.sizes.feature.url}`}
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
