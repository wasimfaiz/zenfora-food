import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zenfora Food | FMG Company — Uncle Makhana & Pure Makhana",
  description:
    "Zenfora Food is a premium FMCG company bringing makhana to every table. Explore our two ventures: Uncle Makhana for everyday snacking and Pure Makhana for luxury wellness.",
  keywords: "Zenfora Food, Uncle Makhana, Pure Makhana, FMCG, makhana, lotus seeds, healthy snacks, luxury food",
  openGraph: {
    title: "Zenfora Food | FMG Company",
    description: "Premium makhana brand with two powerful ventures — Uncle Makhana & Pure Makhana.",
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
      <body>
        {children}
      </body>
    </html>
  );
}
