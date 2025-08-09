// Configuration for the application
export const config = {
  serverURL:
    process.env.SERVER_URL ||
    (process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3001"),
  // Add other config values here as needed
};
