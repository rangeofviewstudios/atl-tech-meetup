export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Events", href: "#events" },
  { label: "Community", href: "#community" },
] as const;

export const STATS = [
  { number: "500+", label: "Community Members" },
  { number: "50+", label: "Events Hosted" },
  { number: "1st Tues", label: "Every Month" },
] as const;

export const UPCOMING_EVENT = null;

export const PAST_EVENTS = [
  {
    date: "APR 8, 2026",
    title: "ATMG: AI Build Cohort Kickoff",
    speaker: "Community Cohort",
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
    quote: "Resilience isn't built. It's designed.",
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
    quote: "Culture eats strategy for breakfast, especially in DevOps.",
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
    name: "Andrew Schillinger",
    role: "FOUNDER",
    image: "/images/schiller.jpg",
    fallbackGradient: "linear-gradient(160deg, #2a1008 0%, #1a0c18 50%, #07070d 100%)",
    bio: "Andrew started ATM because he felt Atlanta deserved a tech community built on real conversations, not pitch decks. He's hands-on with every format and agenda, always looking for ways to make each meetup better than the last.",
    quote: "The vibe is the product.",
    quoteColor: "#3d2510",
    roleColor: "#d4821a",
    linkedin: "https://www.linkedin.com/in/andrew-schillinger/",
  },
  {
    name: "A.D. Slaton",
    role: "CO-FOUNDER",
    image: "/images/ad2.jpg",
    fallbackGradient: "linear-gradient(160deg, #071030 0%, #0d1520 50%, #07070d 100%)",
    bio: "A.D. is the infrastructure behind the community. A natural connector and engineer by trade, he makes sure every person who walks through the door feels like they already belong.",
    quote: "Community is infrastructure.",
    quoteColor: "#1a2035",
    roleColor: "#8fa3cc",
    linkedin: "https://www.linkedin.com/in/adslaton/",
  },
];

export const MEETUP_URL = "https://www.meetup.com/atl-technology-meetup-group/";

export const SOCIAL_LINKS = [
  { label: "Meetup", href: "https://www.meetup.com/atl-technology-meetup-group/" },
  // TODO: replace with the real ATM LinkedIn page URL when available
  { label: "LinkedIn", href: "https://www.linkedin.com/" },
  // TODO: replace with the real ATM X / Twitter profile URL when available
  { label: "X / Twitter", href: "https://x.com/" },
] as const;
