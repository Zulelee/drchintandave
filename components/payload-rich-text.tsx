"use client";

import React from "react";
import { config } from "@/lib/config";

interface PayloadRichTextProps {
  content: any;
  className?: string;
}

// Helper function to render rich text nodes
const renderRichTextNode = (node: any): React.ReactNode => {
  if (!node) return null;

  // Handle text nodes
  if (node.text) {
    let text = node.text;

    // Apply formatting
    if (node.bold) {
      text = <strong key={Math.random()}>{text}</strong>;
    }
    if (node.italic) {
      text = <em key={Math.random()}>{text}</em>;
    }
    if (node.underline) {
      text = <u key={Math.random()}>{text}</u>;
    }
    if (node.strikethrough) {
      text = <del key={Math.random()}>{text}</del>;
    }
    if (node.code) {
      text = (
        <code
          key={Math.random()}
          className="bg-[var(--accent-blue)]/10 text-[var(--accent-blue)] px-1 py-0.5 rounded text-sm"
        >
          {text}
        </code>
      );
    }

    return text;
  }

  // Handle different element types
  switch (node.type) {
    case "h1":
      return (
        <h1
          key={Math.random()}
          className="text-3xl font-bold text-[var(--dark-blue)] mb-6 mt-8 first:mt-0"
        >
          {node.children?.map((child: any, index: number) => (
            <React.Fragment key={index}>
              {renderRichTextNode(child)}
            </React.Fragment>
          ))}
        </h1>
      );

    case "h2":
      return (
        <h2
          key={Math.random()}
          className="text-2xl font-bold text-[var(--dark-blue)] mb-4 mt-6"
        >
          {node.children?.map((child: any, index: number) => (
            <React.Fragment key={index}>
              {renderRichTextNode(child)}
            </React.Fragment>
          ))}
        </h2>
      );

    case "h3":
      return (
        <h3
          key={Math.random()}
          className="text-xl font-bold text-[var(--dark-blue)] mb-3 mt-5"
        >
          {node.children?.map((child: any, index: number) => (
            <React.Fragment key={index}>
              {renderRichTextNode(child)}
            </React.Fragment>
          ))}
        </h3>
      );

    case "paragraph":
      return (
        <p
          key={Math.random()}
          className="text-[var(--dark-blue)]/80 mb-4 leading-relaxed"
        >
          {node.children?.map((child: any, index: number) => (
            <React.Fragment key={index}>
              {renderRichTextNode(child)}
            </React.Fragment>
          ))}
        </p>
      );

    case "ul":
      return (
        <ul
          key={Math.random()}
          className="list-disc list-inside text-[var(--dark-blue)]/80 mb-4 space-y-2"
        >
          {node.children?.map((child: any, index: number) => (
            <React.Fragment key={index}>
              {renderRichTextNode(child)}
            </React.Fragment>
          ))}
        </ul>
      );

    case "ol":
      return (
        <ol
          key={Math.random()}
          className="list-decimal list-inside text-[var(--dark-blue)]/80 mb-4 space-y-2"
        >
          {node.children?.map((child: any, index: number) => (
            <React.Fragment key={index}>
              {renderRichTextNode(child)}
            </React.Fragment>
          ))}
        </ol>
      );

    case "li":
      return (
        <li key={Math.random()} className="text-[var(--dark-blue)]/80">
          {node.children?.map((child: any, index: number) => (
            <React.Fragment key={index}>
              {renderRichTextNode(child)}
            </React.Fragment>
          ))}
        </li>
      );

    case "blockquote":
      return (
        <blockquote
          key={Math.random()}
          className="border-l-4 border-[var(--accent-blue)] pl-4 italic text-[var(--dark-blue)]/70 mb-4"
        >
          {node.children?.map((child: any, index: number) => (
            <React.Fragment key={index}>
              {renderRichTextNode(child)}
            </React.Fragment>
          ))}
        </blockquote>
      );

    case "link":
      return (
        <a
          key={Math.random()}
          href={node.url}
          className="text-[var(--accent-blue)] hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {node.children?.map((child: any, index: number) => (
            <React.Fragment key={index}>
              {renderRichTextNode(child)}
            </React.Fragment>
          ))}
        </a>
      );

    case "code":
      return (
        <pre
          key={Math.random()}
          className="bg-[var(--dark-blue)]/5 p-4 rounded-lg overflow-x-auto mb-4"
        >
          <code className="text-[var(--dark-blue)]/80">
            {node.children?.map((child: any, index: number) => (
              <React.Fragment key={index}>
                {renderRichTextNode(child)}
              </React.Fragment>
            ))}
          </code>
        </pre>
      );

    default:
      // Handle unknown types by rendering children
      if (node.children) {
        return (
          <div key={Math.random()}>
            {node.children.map((child: any, index: number) => (
              <React.Fragment key={index}>
                {renderRichTextNode(child)}
              </React.Fragment>
            ))}
          </div>
        );
      }
      return null;
  }
};

export default function PayloadRichText({
  content,
  className = "",
}: PayloadRichTextProps) {
  if (!content) {
    return null;
  }

  // Handle Payload's Lexical editor structure
  let nodes = content;
  if (content.root && content.root.children) {
    nodes = content.root.children;
  } else if (Array.isArray(content)) {
    nodes = content;
  } else {
    return null;
  }

  return (
    <div className={`payload-rich-text ${className}`}>
      {nodes.map((node: any, index: number) => (
        <React.Fragment key={index}>{renderRichTextNode(node)}</React.Fragment>
      ))}
    </div>
  );
}
