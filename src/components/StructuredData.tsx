import { UPCOMING_EVENT } from "@/lib/constants";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Atlanta Tech Meetup",
  alternateName: "ATM",
  url: "https://atl-tech-meetup.vercel.app",
  description:
    "A free monthly networking event for technology professionals in Atlanta, GA. 500+ members discussing AI, software engineering, and cloud architecture.",
  foundingDate: "2024",
  founder: [
    { "@type": "Person", name: "Andrew Schiller" },
    { "@type": "Person", name: "A.D. Slaton" },
  ],
  location: {
    "@type": "Place",
    name: "Atlanta Tech Park",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Peachtree Corners",
      addressRegion: "GA",
      addressCountry: "US",
    },
  },
};

const eventSchema = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: UPCOMING_EVENT.title,
  description: UPCOMING_EVENT.description,
  startDate: "2025-04-01T18:00:00-04:00",
  endDate: "2025-04-01T20:30:00-04:00",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  location: {
    "@type": "Place",
    name: "Atlanta Tech Park",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Peachtree Corners",
      addressRegion: "GA",
      addressCountry: "US",
    },
  },
  organizer: {
    "@type": "Organization",
    name: "Atlanta Tech Meetup",
    url: "https://atl-tech-meetup.vercel.app",
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    url: "https://www.meetup.com/atl-tech-meetup/",
  },
  isAccessibleForFree: true,
};

export default function StructuredData() {
  return (
    <>
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
