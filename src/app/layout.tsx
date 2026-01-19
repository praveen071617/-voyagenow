import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VoyageNow - Explore the World from Your City",
  description: "VoyageNow helps you discover travel destinations worldwide. See complete trip cost breakdowns including flights, hotels, food, and activities.",
  keywords: ["travel", "budget travel", "trip planner", "flight search", "destination finder", "voyage", "explore"],
  authors: [{ name: "VoyageNow" }],
  openGraph: {
    title: "VoyageNow - Explore the World from Your City",
    description: "Discover destinations worldwide with complete trip cost breakdowns",
    url: "https://voyagenow.xyz",
    siteName: "VoyageNow",
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
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,600,700,800,900&display=swap"
          rel="stylesheet"
        />
        {/* Travelpayouts verification script */}
        <script
          async
          src="https://emrldco.com/NDkwNTU3.js?t=490557"
        />
      </head>
      <body className="antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
