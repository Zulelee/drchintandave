import { CollectionConfig } from "payload";

export const Blog: CollectionConfig = {
  slug: "blogs",
  admin: {
    useAsTitle: "title",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      admin: {
        description: "URL-friendly version of the title",
      },
    },
    {
      name: "author",
      type: "text",
      required: true,
    },
    {
      name: "publishedDate",
      type: "date",
      admin: {
        description: "When this blog post was published",
      },
    },
    {
      name: "featuredImage",
      type: "upload",
      relationTo: "media",
      admin: {
        description: "Main image for the blog post",
      },
    },
    {
      name: "excerpt",
      type: "textarea",
      admin: {
        description: "Short summary of the blog post",
      },
    },
    {
      name: "content",
      type: "richText",
      required: true,
    },
    {
      name: "tags",
      type: "select",
      hasMany: true,
      options: [
        { label: "Productivity", value: "productivity" },
        { label: "Technology", value: "technology" },
        { label: "Health", value: "health" },
        { label: "Lifestyle", value: "lifestyle" },
        { label: "Development", value: "development" },
      ],
    },
    {
      name: "status",
      type: "select",
      defaultValue: "draft",
      options: [
        { label: "Draft", value: "draft" },
        { label: "Published", value: "published" },
      ],
      admin: {
        description: "Whether this blog post is published or still a draft",
      },
    },
  ],
};
