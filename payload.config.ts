import sharp from "sharp";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
// import { postgresAdapter } from "@payloadcms/db-postgres";
import { vercelPostgresAdapter } from "@payloadcms/db-vercel-postgres";
import { vercelBlobStorage } from "@payloadcms/storage-vercel-blob";

import { buildConfig } from "payload";
import { Blog } from "./collections/Blog";
import { Media } from "./collections/Media";

export default buildConfig({
  // If you'd like to use Rich Text, pass your editor here
  editor: lexicalEditor(),

  // Define and configure your collections in this array
  collections: [Blog, Media],

  // Your Payload secret - should be a complex and secure string, unguessable
  secret: process.env.PAYLOAD_SECRET || "your-secret-key-here",

  // Whichever Database Adapter you're using should go here
  db: vercelPostgresAdapter(),

  // Plugins
  plugins: [
    vercelBlobStorage({
      enabled: true,
      // Specify which collections should use Vercel Blob
      collections: {
        media: true,
      },
      // Token provided by Vercel once Blob storage is added to your Vercel project
      token: process.env.BLOB_READ_WRITE_TOKEN,
      // Enable client uploads to bypass Vercel's 4.5MB limit
      clientUploads: true,
      // Add random suffix to prevent filename conflicts
      addRandomSuffix: true,
    }),
  ],

  // If you want to resize images, crop, set focal point, etc.
  // make sure to install it and pass it to the config.
  // This is optional - if you don't need to do these things,
  // you don't need it!
  sharp,
});
