import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Sans } from "next/font/google";
import "./globals.css";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Atlanta Tech Meetup | Where Atlanta's Tech Leaders Connect",
  description:
    "A monthly networking event for technology professionals, developers, and enthusiasts in Atlanta. Featuring guest speakers, networking, and discussions on AI, software engineering, and cloud platforms.",
  keywords: [
    "Atlanta Tech Meetup",
    "tech networking Atlanta",
    "Atlanta Tech Park",
    "tech community Atlanta",
    "software engineering meetup",
    "AI meetup Atlanta",
  ],
  openGraph: {
    title: "Atlanta Tech Meetup",
    description:
      "Where Atlanta's tech leaders connect. First Tuesday, every month.",
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
      <body
        suppressHydrationWarning
        className={`${jakartaSans.variable} ${dmSans.variable} antialiased`}
      >
        <div className="grain-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
