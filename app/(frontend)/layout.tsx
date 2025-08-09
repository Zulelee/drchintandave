import "./globals.css";
import "./fonts.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dr. Chintan Dave - Medicine | AI | Educator",
  description:
    "Bridging traditional medicine and cutting-edge AI to shape the future of healthcare education and practice.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-helvetica">{children}</body>
    </html>
  );
}
