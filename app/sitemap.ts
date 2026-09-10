import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://akshay-portfolio-red-one.vercel.app";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/resume`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/projects/costen`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/projects/paygen`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/projects/hr-services`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/projects/lead-forge`,
      lastModified: new Date(),
    },
  ];
}