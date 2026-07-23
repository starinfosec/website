import { MetadataRoute } from 'next';
import { blogPosts } from '@/lib/blog';

const servicesList = [
  { slug: 'cybersecurity-consultation' },
  { slug: 'employee-security-training' },
  { slug: 'website-security-hardening' },
  { slug: 'cybersecurity-workshops' },
  { slug: 'internship-courses' },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.starinfosec.com';

  const staticPages = [
    '',
    '/about',
    '/blog',
    '/case-studies',
    '/contact',
    '/documentation',
    '/guides',
    '/industries',
    '/partners',
    '/portfolio',
    '/services',
    '/testimonials',
    '/sitemap',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const servicePages = servicesList.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const blogPages = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...servicePages, ...blogPages];
}
