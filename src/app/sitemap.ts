import type { MetadataRoute } from "next";

const SITE_URL = "https://atl-tech-meetup.vercel.app";

// Single-page site, so we list the root plus the in-page section anchors
// that behave like virtual pages for users and crawlers.
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/#about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/#events`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/#community`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
