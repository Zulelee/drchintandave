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
      name: "link",
      type: "group",
      fields: [
        {
          name: "url",
          type: "text",
          admin: {
            description: "The URL to link to (e.g., https://example.com)",
          },
        },
        {
          name: "text",
          type: "text",
          admin: {
            description:
              "The text to display for the link (e.g., 'Read More', 'View Article')",
          },
        },
      ],
      admin: {
        description: "Optional external link for this blog post",
      },
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
