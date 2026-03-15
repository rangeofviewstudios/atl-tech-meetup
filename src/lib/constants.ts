export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "The Human Layer", href: "#human" },
  { label: "Events", href: "#events" },
  { label: "Community", href: "#community" },
] as const;

export const STATS = [
  { number: "500+", label: "Community Members" },
  { number: "50+", label: "Events Hosted" },
  { number: "1st Tues", label: "Every Month" },
] as const;

export const UPCOMING_EVENT = {
  date: "TUE APR 1, 2025",
  title: "AI in Production: From Prototype to Scale",
  description:
    "Join us for an evening exploring real-world AI deployment strategies. Featuring talks on MLOps pipelines, edge inference, and the human side of shipping AI products.",
  location: "Atlanta Tech Park, Peachtree Corners, GA",
  rsvpLink: "https://www.meetup.com/atl-tech-meetup/",
};

export const PAST_EVENTS = [
  {
    date: "MAR 4, 2025",
    title: "Cloud Architecture Patterns",
    speaker: "Marcus Rivera",
  },
  {
    date: "FEB 4, 2025",
    title: "The State of React in 2025",
    speaker: "Priya Patel",
  },
  {
    date: "JAN 7, 2025",
    title: "Building Resilient Microservices",
    speaker: "Jordan Kim",
  },
  {
    date: "DEC 3, 2024",
    title: "Open Source & Community",
    speaker: "Aaliyah Brooks",
  },
  {
    date: "NOV 5, 2024",
    title: "DevOps Culture Shift",
    speaker: "Chen Wei",
  },
  {
    date: "OCT 1, 2024",
    title: "TypeScript Deep Dive",
    speaker: "Sam Okafor",
  },
];

export const SPEAKERS = [
  {
    name: "Marcus Rivera",
    title: "Principal Engineer, CloudScale",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=533&fit=crop&crop=face",
    quote: "The best architecture is the one your team can maintain.",
  },
  {
    name: "Priya Patel",
    title: "Staff Frontend Engineer, Vercel",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=533&fit=crop&crop=face",
    quote: "Performance is a feature, not an afterthought.",
  },
  {
    name: "Jordan Kim",
    title: "CTO, Distributed Systems Co.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=533&fit=crop&crop=face",
    quote: "Resilience isn't built — it's designed.",
  },
  {
    name: "Aaliyah Brooks",
    title: "Developer Advocate, GitHub",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=533&fit=crop&crop=face",
    quote: "Open source is how we build the future together.",
  },
  {
    name: "Chen Wei",
    title: "VP Engineering, FinTech Labs",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=533&fit=crop&crop=face",
    quote: "Culture eats strategy for breakfast — especially in DevOps.",
  },
  {
    name: "Sam Okafor",
    title: "Senior Engineer, Stripe",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=533&fit=crop&crop=face",
    quote: "Types are documentation that never goes stale.",
  },
];

export const FOUNDERS = [
  {
    name: "Andrew Schiller",
    role: "FOUNDER",
    image: "/images/schiller.jpg",
    fallbackGradient: "linear-gradient(160deg, #2a1008 0%, #1a0c18 50%, #07070d 100%)",
    bio: "Started ATM because Atlanta deserved a tech community built on real talk, not pitch decks. Every format, every agenda — his obsession.",
    quote: "The vibe is the product.",
    quoteColor: "#3d2510",
    roleColor: "#d4821a",
    linkedin: "https://linkedin.com",
    x: "https://x.com",
  },
  {
    name: "A.D. Slaton",
    role: "CO-FOUNDER",
    image: "/images/ad2.jpg",
    fallbackGradient: "linear-gradient(160deg, #071030 0%, #0d1520 50%, #07070d 100%)",
    bio: "The infrastructure behind the community. A connector by nature, engineer by trade — she makes sure every person walks in feeling like they already belong.",
    quote: "Community is infrastructure.",
    quoteColor: "#1a2035",
    roleColor: "#8fa3cc",
    linkedin: "https://linkedin.com",
    x: "https://x.com",
  },
];

export const MEETUP_URL = "https://www.meetup.com/atl-tech-meetup/";

export const SOCIAL_LINKS = [
  { label: "Meetup", href: "https://www.meetup.com/atl-tech-meetup/" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "X / Twitter", href: "https://x.com" },
] as const;
