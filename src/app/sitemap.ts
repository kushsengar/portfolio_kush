import { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { siteConfig } from "@/data/siteConfig";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = siteConfig.url;

    const staticPages = [
        { url: baseUrl, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 1 },
        { url: `${baseUrl}/work`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.9 },
        { url: `${baseUrl}/services`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
        { url: `${baseUrl}/resume`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
        { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
        { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.6 },
    ];

    const projectPages = projects.map((project) => ({
        url: `${baseUrl}/work/${project.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.7,
    }));

    return [...staticPages, ...projectPages];
}
