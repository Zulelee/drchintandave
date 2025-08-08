# Dr. Chintan Dave - Personal Website

## Environment Variables

To use Vercel Blob for image storage, you need to set up the following environment variables:

### Required Environment Variables

1. **PAYLOAD_SECRET** - Your Payload CMS secret key
2. **BLOB_READ_WRITE_TOKEN** - Your Vercel Blob read-write token

### Optional Database Variables (if using Vercel Postgres)

- POSTGRES_URL
- POSTGRES_PRISMA_URL
- POSTGRES_URL_NON_POOLING
- POSTGRES_USER
- POSTGRES_HOST
- POSTGRES_PASSWORD
- POSTGRES_DATABASE

## Setup Instructions

1. Create a Vercel Blob store in your Vercel dashboard
2. Get your `BLOB_READ_WRITE_TOKEN` from the Vercel dashboard
3. Add the environment variables to your `.env.local` file
4. Restart your development server

## Features

- Payload CMS with Vercel Blob integration for image storage
- Next.js with App Router
- TypeScript
- Tailwind CSS
- shadcn/ui components
