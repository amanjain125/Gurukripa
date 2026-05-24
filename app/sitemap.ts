import type { MetadataRoute } from 'next';
import { PROJECTS } from '@/lib/projects';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://gurukripaconstructions.com';
  const lastModified = new Date();

  const staticRoutes = ['', '/about', '/services', '/projects', '/process', '/journal', '/contact'].map(
    (path) => ({
      url: `${base}${path}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: path === '' ? 1 : 0.8,
    })
  );

  const projectRoutes = PROJECTS.map((p) => ({
    url: `${base}/projects/${p.slug}`,
    lastModified,
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...projectRoutes];
}
