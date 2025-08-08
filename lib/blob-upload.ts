import { put } from "@vercel/blob";

// Function to upload file to Vercel Blob
export const uploadToBlob = async (
  file: Buffer,
  filename: string,
  mimeType: string
) => {
  try {
    const { url } = await put(filename, file, {
      access: "public",
      contentType: mimeType,
    });

    return url;
  } catch (error) {
    console.error("Error uploading to Vercel Blob:", error);
    throw new Error("Failed to upload file to Vercel Blob");
  }
};
