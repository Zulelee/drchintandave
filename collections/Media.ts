import { CollectionConfig } from "payload";
import { uploadToBlob } from "../lib/blob-upload";

export const Media: CollectionConfig = {
  slug: "media",
  upload: {
    // We'll still use staticDir for temporary storage, but override the URL with Blob URL
    staticDir: "../public/media",
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
  hooks: {
    beforeChange: [
      async ({ data, req }) => {
        // If this is a new upload (not an update)
        if (req.file) {
          const file = req.file;
          const buffer = file.data;
          const filename = file.name;
          const mimeType = file.mimetype;

          // Upload to Vercel Blob
          const blobUrl = await uploadToBlob(buffer, filename, mimeType);

          // Update the data with the Blob URL
          data.url = blobUrl;
        }

        return data;
      },
    ],
  },
  fields: [
    {
      name: "alt",
      type: "text",
      required: true,
    },
  ],
};
