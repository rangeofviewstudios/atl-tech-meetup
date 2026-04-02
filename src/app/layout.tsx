import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://atl-tech-meetup.vercel.app"),
  alternates: { canonical: "/" },
  title: "Atlanta Tech Meetup | Free Monthly Tech Networking in Atlanta, GA",
  description:
    "Join 500+ tech leaders every first Tuesday at Atlanta Tech Park in Peachtree Corners, GA. Free monthly meetup covering AI, software engineering, cloud architecture, and more. RSVP on Meetup.",
  keywords: [
    "Atlanta Tech Meetup",
    "tech meetup Atlanta",
    "tech networking Atlanta",
    "Atlanta Tech Park",
    "tech community Atlanta",
    "software engineering meetup Atlanta",
    "AI meetup Atlanta",
    "Peachtree Corners tech events",
    "free tech events Atlanta",
    "Atlanta developer meetup",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Atlanta Tech Meetup — Free Monthly Tech Networking",
    description:
      "500+ tech leaders meet every first Tuesday at Atlanta Tech Park. AI, software engineering, cloud architecture. No fluff. Free & open.",
    url: "https://atl-tech-meetup.vercel.app",
    siteName: "Atlanta Tech Meetup",
    images: [
      {
        url: "/atmcard.png",
        width: 1200,
        height: 630,
        alt: "Atlanta Tech Meetup — Connect. Learn. Build.",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Atlanta Tech Meetup — Free Monthly Tech Networking",
    description:
      "500+ tech leaders meet monthly in Peachtree Corners, GA. AI, engineering, cloud. Free & open.",
    images: ["/atmcard.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className="antialiased">
        <div className="grain-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
