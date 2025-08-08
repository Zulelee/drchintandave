import sharp from "sharp";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
// import { postgresAdapter } from "@payloadcms/db-postgres";
import { vercelPostgresAdapter } from "@payloadcms/db-vercel-postgres";

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

  // If you want to resize images, crop, set focal point, etc.
  // make sure to install it and pass it to the config.
  // This is optional - if you don't need to do these things,
  // you don't need it!
  sharp,
});
