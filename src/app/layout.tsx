import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://atl-tech-meetup.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },
  title: {
    default:
      "Atlanta Tech Meetup | Atlanta's Largest Free Monthly Tech Meetup",
    template: "%s | Atlanta Tech Meetup",
  },
  description:
    "Atlanta's largest free monthly tech meetup. 500+ engineers, founders, and builders gather every first Tuesday at Atlanta Tech Park in Peachtree Corners, GA to talk AI, software engineering, and cloud architecture. Free to attend, open to everyone, RSVP on Meetup.",
  applicationName: "Atlanta Tech Meetup",
  authors: [
    { name: "Andrew Schillinger" },
    { name: "A.D. Slaton" },
  ],
  creator: "Atlanta Tech Meetup",
  publisher: "Atlanta Tech Meetup",
  category: "technology",
  keywords: [
    "Atlanta Tech Meetup",
    "ATM Atlanta",
    "Atlanta technology meetup group",
    "tech meetup Atlanta",
    "tech networking Atlanta",
    "Atlanta Tech Park",
    "Peachtree Corners tech events",
    "tech community Atlanta",
    "Atlanta engineers",
    "Atlanta founders",
    "Atlanta startup community",
    "software engineering meetup Atlanta",
    "AI meetup Atlanta",
    "AI build cohort Atlanta",
    "free tech events Atlanta",
    "Atlanta developer meetup",
    "cloud architecture Atlanta",
    "Andrew Schillinger",
    "A.D. Slaton",
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
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title:
      "Atlanta Tech Meetup | Atlanta's Largest Free Monthly Tech Meetup",
    description:
      "500+ engineers, founders, and builders meet every first Tuesday at Atlanta Tech Park in Peachtree Corners, GA. Real conversations about AI, software engineering, and cloud architecture. Free and open to everyone.",
    url: SITE_URL,
    siteName: "Atlanta Tech Meetup",
    images: [
      {
        url: "/atmcard.png",
        width: 1200,
        height: 630,
        alt: "Atlanta Tech Meetup. Atlanta's largest free monthly tech meetup.",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Atlanta Tech Meetup | Atlanta's Largest Free Monthly Tech Meetup",
    description:
      "500+ engineers, founders, and builders meet monthly in Peachtree Corners, GA. AI, engineering, cloud. Free and open to everyone.",
    images: ["/atmcard.png"],
    // TODO: add real Twitter / X handles when available
    // site: "@atltechmeetup",
    // creator: "@atltechmeetup",
  },
  verification: {
    // TODO: paste the real Google Search Console verification token here
    // google: "paste-google-site-verification-token-here",
    // other: { "msvalidate.01": "paste-bing-verification-token-here" },
  },
  other: {
    "geo.region": "US-GA",
    "geo.placename": "Peachtree Corners, Georgia",
    // TODO: replace with the confirmed Atlanta Tech Park latitude,longitude
    "geo.position": "33.9701;-84.2214",
    ICBM: "33.9701, -84.2214",
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
