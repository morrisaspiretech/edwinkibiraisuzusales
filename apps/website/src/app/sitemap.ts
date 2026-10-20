import { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/data/posts";
import { VEHICLES_DATA } from "@/data/vehicles";

const BASE_URL = "https://edwinkibiraisuzusales.onrender.com";
const TODAY = new Date();

// Static high-value routes (with trailing slashes matching next.config.ts trailingSlash: true)
const staticRoutes: MetadataRoute.Sitemap = [
  {
    url: `${BASE_URL}/`,
    lastModified: TODAY,
    changeFrequency: "daily",
    priority: 1.0,
  },
  {
    url: `${BASE_URL}/vehicles/`,
    lastModified: TODAY,
    changeFrequency: "daily",
    priority: 0.95,
  },
  {
    url: `${BASE_URL}/vehicles/d-max/`,
    lastModified: TODAY,
    changeFrequency: "daily",
    priority: 0.95,
  },
  {
    url: `${BASE_URL}/vehicles/mu-x/`,
    lastModified: TODAY,
    changeFrequency: "daily",
    priority: 0.95,
  },
  {
    url: `${BASE_URL}/trucks/`,
    lastModified: TODAY,
    changeFrequency: "daily",
    priority: 0.95,
  },
  {
    url: `${BASE_URL}/buses/`,
    lastModified: TODAY,
    changeFrequency: "daily",
    priority: 0.95,
  },
  {
    url: `${BASE_URL}/blog/`,
    lastModified: TODAY,
    changeFrequency: "daily",
    priority: 0.9,
  },
  {
    url: `${BASE_URL}/fleet-sales/`,
    lastModified: TODAY,
    changeFrequency: "weekly",
    priority: 0.85,
  },
  {
    url: `${BASE_URL}/get-quote/`,
    lastModified: TODAY,
    changeFrequency: "monthly",
    priority: 0.85,
  },
  {
    url: `${BASE_URL}/book-test-drive/`,
    lastModified: TODAY,
    changeFrequency: "monthly",
    priority: 0.85,
  },
  {
    url: `${BASE_URL}/loan-calculator/`,
    lastModified: TODAY,
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: `${BASE_URL}/ultimate-isuzu-guide/`,
    lastModified: TODAY,
    changeFrequency: "weekly",
    priority: 0.85,
  },
  {
    url: `${BASE_URL}/about/`,
    lastModified: TODAY,
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    url: `${BASE_URL}/contact/`,
    lastModified: TODAY,
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: `${BASE_URL}/faq/`,
    lastModified: TODAY,
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    url: `${BASE_URL}/compare/`,
    lastModified: TODAY,
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: `${BASE_URL}/privacy/`,
    lastModified: TODAY,
    changeFrequency: "yearly",
    priority: 0.3,
  },
  {
    url: `${BASE_URL}/terms/`,
    lastModified: TODAY,
    changeFrequency: "yearly",
    priority: 0.3,
  },
];

// Dynamically generate all 29 verified Isuzu vehicle model pages
const vehicleModelRoutes: MetadataRoute.Sitemap = Object.keys(VEHICLES_DATA).map((model) => ({
  url: `${BASE_URL}/vehicles/${model}/`,
  lastModified: TODAY,
  changeFrequency: "weekly" as const,
  priority: 0.9,
}));

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Directly map all statically defined blog posts with valid trailing slashes
  const blogRoutes: MetadataRoute.Sitemap = (BLOG_POSTS || []).map((post) => {
    let modDate = TODAY;
    if (post.date) {
      const parsed = new Date(post.date);
      if (!isNaN(parsed.getTime())) modDate = parsed;
    }
    return {
      url: `${BASE_URL}/blog/${post.slug}/`,
      lastModified: modDate,
      changeFrequency: "weekly" as const,
      priority: 0.85,
    };
  });

  return [...staticRoutes, ...vehicleModelRoutes, ...blogRoutes];
}
