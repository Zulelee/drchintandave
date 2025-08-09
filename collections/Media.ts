import { CollectionConfig } from "payload";

export const Media: CollectionConfig = {
  slug: "media",
  access: {
    read: () => true, // Allow public read access
    create: () => true, // Allow public create access for uploads
    update: () => true, // Allow public update access
    delete: () => true, // Allow public delete access
  },
  admin: {
    useAsTitle: "filename",
  },
  upload: {
    // The Vercel Blob plugin will automatically handle storage
    // No need for staticDir or custom hooks
    imageSizes: [
      {
        name: "thumbnail",
        width: 400,
        height: 300,
        position: "centre",
      },
      {
        name: "card",
        width: 768,
        height: 1024,
        position: "centre",
      },
      {
        name: "feature",
        width: 1024,
        height: undefined,
        position: "centre",
      },
    ],
    adminThumbnail: "thumbnail",
    mimeTypes: ["image/*"],
  },
  fields: [
    {
      name: "alt",
      type: "text",
      required: true,
    },
  ],
};
