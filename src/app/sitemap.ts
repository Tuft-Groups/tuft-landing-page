import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://tuft.in";

  const staticPages = ["", "/features", "/pricing", "/blog", "/ig", "/whatsapp", "/youtube", "/privacy_policy", "/terms_and_conditions"];

  const blogPosts = [
    "levelup_your_coaching_academy_with_tuft",
    "importance_of_tech_enabled_clubs",
    "how_to_effectively_manage_your_community",
    "tuft_vs_whatsapp",
    "manage_tuition_centre_like_never_before",
    "introducing_feed",
    "introducing_chat",
    "introducing_files",
    "introducing_meetings",
    "upsc-study-group",
  ];

  const groups = ["43", "1027"];

  const routes = [
    ...staticPages.map((page) => ({
      url: `${baseUrl}${page}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: page === "" ? 1 : 0.8,
    })),
    ...blogPosts.map((post) => ({
      url: `${baseUrl}/blog/${post}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...groups.map((group) => ({
      url: `${baseUrl}/group/${group}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.4,
    })),
  ];

  return routes;
}
