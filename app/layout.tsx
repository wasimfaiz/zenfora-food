import type { Metadata } from "next";
import "./globals.css";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

export const metadata: Metadata = {
  title: "Zenvora Food | FMG Company - Uncle Makhana & Pure Makhana",
  description:
    "Zenvora Food is a premium FMCG company bringing makhana to every table. Explore our two ventures: Uncle Makhana for everyday snacking and Pure Makhana for luxury wellness.",
  keywords: "Zenvora Food, Uncle Makhana, Pure Makhana, FMCG, makhana, lotus seeds, healthy snacks, luxury food",
  icons: {
    icon: [
      { url: "/zenvora_logo.png", sizes: "16x16", type: "image/png" },
      { url: "/zenvora_logo.png", sizes: "32x32", type: "image/png" },
      { url: "/zenvora_logo.png", sizes: "192x192", type: "image/png" },
      { url: "/zenvora_logo.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: [{ url: "/zenvora_logo.png", type: "image/png" }],
    apple: [
      { url: "/zenvora_logo.png", sizes: "180x180", type: "image/png" },
      { url: "/zenvora_logo.png", sizes: "167x167", type: "image/png" },
      { url: "/zenvora_logo.png", sizes: "152x152", type: "image/png" },
    ],
    other: [
      { rel: "mask-icon", url: "/zenvora_logo.png", color: "#1a5c3a" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Zenvora Food | FMG Company",
    description: "Premium makhana brand with two powerful ventures - Uncle Makhana & Pure Makhana.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body suppressHydrationWarning>
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
