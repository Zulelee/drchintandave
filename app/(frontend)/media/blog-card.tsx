"use client";

import { motion } from "framer-motion";
import { Calendar, User, Tag, ArrowRight } from "lucide-react";
import Link from "next/link";

interface BlogCardProps {
  post: any;
  index: number;
}

export default function BlogCard({ post, index }: BlogCardProps) {
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
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <Link href={`/media/${post.slug}`}>
        <div
          className="backdrop-blur-2xl rounded-3xl p-6 shadow-2xl border cursor-pointer hover:scale-105 transition-all duration-300 h-full"
          style={{
            background: "rgba(255, 255, 255, 0.15)",
            borderColor: "rgba(255, 255, 255, 0.2)",
            boxShadow: `
              0 8px 32px rgba(0, 0, 0, 0.1),
              inset 0 1px 0 rgba(255, 255, 255, 0.1)
            `,
          }}
        >
          {post.featuredImage &&
            typeof post.featuredImage === "object" &&
            "url" in post.featuredImage && (
              <div className="mb-6 rounded-2xl overflow-hidden">
                <img
                  src={post.featuredImage.url as string}
                  alt={(post.featuredImage as any).alt || post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            )}

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[var(--dark-blue)] line-clamp-2 group-hover:text-[var(--accent-blue)] transition-colors">
              {post.title}
            </h3>

            <p className="text-[var(--dark-blue)]/70 line-clamp-3 text-sm">
              {post.excerpt}
            </p>

            <div className="flex items-center justify-between text-sm text-[var(--dark-blue)]/60">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>
                  {post.publishedDate
                    ? formatDate(post.publishedDate)
                    : "No date"}
                </span>
              </div>
            </div>

            {post.tags && post.tags.length > 0 && (
              <div className="flex items-center gap-2">
                <Tag className="w-4 h-4 text-[var(--accent-blue)]" />
                <div className="flex flex-wrap gap-1">
                  {post.tags
                    .slice(0, 2)
                    .map((tag: string, tagIndex: number) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-[var(--accent-blue)]/10 text-[var(--accent-blue)] text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  {post.tags.length > 2 && (
                    <span className="text-xs text-[var(--dark-blue)]/50">
                      +{post.tags.length - 2} more
                    </span>
                  )}
                </div>
              </div>
            )}

            <div className="flex items-center justify-between pt-4">
              <span className="text-[var(--accent-blue)] font-medium text-sm group-hover:underline">
                Read More
              </span>
              <ArrowRight className="w-4 h-4 text-[var(--accent-blue)] group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
