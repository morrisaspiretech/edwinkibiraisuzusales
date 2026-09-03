import { MetadataRoute } from "next";

const BASE_URL = "https://edwinkibiraisuzusales.onrender.com";

// Static routes with their priorities and change frequencies
const staticRoutes: MetadataRoute.Sitemap = [
  {
    url: BASE_URL,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 1.0,
  },
  {
    url: `${BASE_URL}/vehicles`,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 0.9,
  },
  {
    url: `${BASE_URL}/inventory`,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 0.9,
  },
  {
    url: `${BASE_URL}/bikes`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  },
  {
    url: `${BASE_URL}/blog`,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 0.8,
  },
  {
    url: `${BASE_URL}/fleet-sales`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  },
  {
    url: `${BASE_URL}/get-quote`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: `${BASE_URL}/book-test-drive`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: `${BASE_URL}/loan-calculator`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    url: `${BASE_URL}/about`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    url: `${BASE_URL}/contact`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    url: `${BASE_URL}/faq`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    url: `${BASE_URL}/compare`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.6,
  },
  {
    url: `${BASE_URL}/privacy`,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.3,
  },
  {
    url: `${BASE_URL}/terms`,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.3,
  },
];

// Key vehicle model pages
const vehicleModelRoutes: MetadataRoute.Sitemap = [
  "d-max-double-cab",
  "d-max-single-cab",
  "mu-x",
  "nqr81k",
  "nqr-xtra",
  "nmr85h",
  "nlr77e",
  "frr90",
  "fvr90l",
  "fvr90p",
  "fvz34n-tipper-chassis",
  "fvz34t-cargo-truck-chassis",
  "fts34k",
  "fts34l",
  "fvr34p",
  "fvr34s-bus",
  "frr90-bus",
  "nmr85-bus",
  "nqr81-bus",
  "nps81h",
  "gxz",
  "maxit",
  "kipchoge-limited-edition",
].map((model) => ({
  url: `${BASE_URL}/vehicles/${model}`,
  lastModified: new Date(),
  changeFrequency: "weekly" as const,
  priority: 0.85,
}));

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Fetch dynamic blog posts from your API
  let blogRoutes: MetadataRoute.Sitemap = [];
  try {
    const res = await fetch(`${BASE_URL}/api/blog?limit=200`, {
      next: { revalidate: 3600 }, // revalidate every hour
    });
    if (res.ok) {
      const data = await res.json();
      const posts = data.posts || data || [];
      blogRoutes = posts.map((post: { slug: string; updatedAt?: string; createdAt?: string }) => ({
        url: `${BASE_URL}/blog/${post.slug}`,
        lastModified: new Date(post.updatedAt || post.createdAt || new Date()),
        changeFrequency: "monthly" as const,
        priority: 0.7,
      }));
    }
  } catch {
    // Blog fetch failed silently — static routes still included
  }

  // Fetch dynamic inventory listings
  let inventoryRoutes: MetadataRoute.Sitemap = [];
  try {
    const res = await fetch(`${BASE_URL}/api/inventory?limit=500`, {
      next: { revalidate: 3600 },
    });
    if (res.ok) {
      const data = await res.json();
      const items = data.vehicles || data.items || data || [];
      inventoryRoutes = items.map((item: { id: string; updatedAt?: string }) => ({
        url: `${BASE_URL}/inventory/${item.id}`,
        lastModified: new Date(item.updatedAt || new Date()),
        changeFrequency: "weekly" as const,
        priority: 0.75,
      }));
    }
  } catch {
    // Inventory fetch failed silently — static routes still included
  }

  return [...staticRoutes, ...vehicleModelRoutes, ...blogRoutes, ...inventoryRoutes];
}
