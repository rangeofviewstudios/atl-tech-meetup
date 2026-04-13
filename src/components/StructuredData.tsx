const SITE_URL = "https://atl-tech-meetup.vercel.app";
const MEETUP_URL = "https://www.meetup.com/atl-technology-meetup-group/";

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "Atlanta Tech Meetup",
  alternateName: "ATM",
  description:
    "Atlanta's largest free monthly tech meetup. 500+ engineers, founders, and builders meeting every first Tuesday in Peachtree Corners, GA.",
  inLanguage: "en-US",
  publisher: { "@id": `${SITE_URL}/#organization` },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "Atlanta Tech Meetup",
  alternateName: ["ATM", "Atlanta Technology Meetup Group", "ATMG"],
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/atmcard.png`,
    width: 1200,
    height: 630,
  },
  image: `${SITE_URL}/atmcard.png`,
  description:
    "Atlanta's largest free monthly tech meetup. A community of 500+ engineers, founders, and builders meeting every first Tuesday at Atlanta Tech Park in Peachtree Corners, GA to talk AI, software engineering, and cloud architecture.",
  slogan: "Connect. Learn. Build.",
  foundingDate: "2024",
  founders: [
    {
      "@type": "Person",
      name: "Andrew Schillinger",
      jobTitle: "Founder",
      sameAs: "https://www.linkedin.com/in/andrew-schillinger/",
    },
    {
      "@type": "Person",
      name: "A.D. Slaton",
      jobTitle: "Co-Founder",
      sameAs: "https://www.linkedin.com/in/adslaton/",
    },
  ],
  founder: [
    {
      "@type": "Person",
      name: "Andrew Schillinger",
      jobTitle: "Founder",
      sameAs: "https://www.linkedin.com/in/andrew-schillinger/",
    },
    {
      "@type": "Person",
      name: "A.D. Slaton",
      jobTitle: "Co-Founder",
      sameAs: "https://www.linkedin.com/in/adslaton/",
    },
  ],
  sameAs: [
    MEETUP_URL,
    // TODO: add the real ATM LinkedIn page URL when available
    // "https://www.linkedin.com/company/atlanta-tech-meetup/",
    // TODO: add the real ATM X / Twitter URL when available
    // "https://x.com/atltechmeetup",
  ],
  location: {
    "@type": "Place",
    name: "Atlanta Tech Park",
    address: {
      "@type": "PostalAddress",
      streetAddress: "107 Technology Parkway NW",
      addressLocality: "Peachtree Corners",
      addressRegion: "GA",
      // TODO: confirm the exact venue postal code
      postalCode: "30092",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      // TODO: confirm the exact Atlanta Tech Park coordinates
      latitude: 33.9701,
      longitude: -84.2214,
    },
  },
  areaServed: {
    "@type": "City",
    name: "Atlanta",
  },
  keywords:
    "Atlanta tech meetup, Atlanta engineers, Atlanta founders, AI meetup, software engineering, cloud architecture, Peachtree Corners, free tech events",
  knowsAbout: [
    "Artificial Intelligence",
    "Software Engineering",
    "Cloud Architecture",
    "DevOps",
    "Open Source",
    "Startups",
  ],
};

// Event schema omitted until next event is announced

export default function StructuredData() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
    </>
  );
}
