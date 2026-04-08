import { UPCOMING_EVENT } from "@/lib/constants";

const SITE_URL = "https://atl-tech-meetup.vercel.app";
const MEETUP_URL = "https://www.meetup.com/atl-technology-meetup-group/";
const EVENT_URL =
  "https://www.meetup.com/atl-technology-meetup-group/events/313986477/";

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

const eventSchema = {
  "@context": "https://schema.org",
  "@type": "Event",
  "@id": `${EVENT_URL}#event`,
  name: UPCOMING_EVENT.title,
  description: UPCOMING_EVENT.description,
  startDate: "2026-04-08T18:00:00-04:00",
  endDate: "2026-04-08T20:00:00-04:00",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  url: EVENT_URL,
  image: [`${SITE_URL}/atmcard.png`],
  inLanguage: "en-US",
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
  organizer: {
    "@id": `${SITE_URL}/#organization`,
    "@type": "Organization",
    name: "Atlanta Tech Meetup",
    url: SITE_URL,
    sameAs: [MEETUP_URL],
  },
  performer: {
    "@type": "Organization",
    name: "Atlanta Tech Meetup",
  },
  offers: {
    "@type": "Offer",
    name: "Free RSVP",
    price: "0",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    url: EVENT_URL,
    validFrom: "2026-01-01T00:00:00-05:00",
  },
  isAccessibleForFree: true,
  maximumAttendeeCapacity: 500,
  keywords:
    "AI build cohort, AI hackathon Atlanta, Claude, Atlanta tech meetup, free tech event, Peachtree Corners",
};

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
      />
    </>
  );
}
