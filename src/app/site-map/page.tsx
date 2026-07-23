import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import Link from 'next/link';
import { blogPosts } from '@/lib/blog';

export const metadata = {
  title: 'Sitemap | StarInfoSec',
  description: 'Map of all pages on the StarInfoSec website.',
};

const servicesList = [
  { title: 'Cybersecurity Consultation', slug: 'cybersecurity-consultation' },
  { title: 'Employee Security Awareness Training', slug: 'employee-security-training' },
  { title: 'Website Security & Hardening', slug: 'website-security-hardening' },
  { title: 'Cybersecurity Training & Workshops', slug: 'cybersecurity-workshops' },
  { title: 'Cybersecurity Internship + Courses', slug: 'internship-courses' },
];

export default function SitemapPage() {
  const staticLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Industries', path: '/industries' },
    { name: 'Partners', path: '/partners' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Testimonials', path: '/testimonials' },
  ];

  const resourceLinks = [
    { name: 'Blog', path: '/blog' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Documentation', path: '/documentation' },
    { name: 'Guides', path: '/guides' },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-headline text-4xl sm:text-5xl font-bold tracking-tight mb-8">
              Sitemap
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              <div>
                <h2 className="font-headline text-2xl font-bold mb-4 border-b pb-2">Main Pages</h2>
                <ul className="space-y-2">
                  {staticLinks.map((link) => (
                    <li key={link.path}>
                      <Link href={link.path} className="text-muted-foreground hover:text-primary transition-colors">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="font-headline text-2xl font-bold mb-4 border-b pb-2">Services</h2>
                <ul className="space-y-2">
                  <li>
                    <Link href="/services" className="font-semibold text-foreground hover:text-primary transition-colors">
                      All Services
                    </Link>
                  </li>
                  {servicesList.map((service) => (
                    <li key={service.slug} className="ml-4 border-l-2 pl-2 border-muted">
                      <Link href={`/services/${service.slug}`} className="text-muted-foreground hover:text-primary transition-colors">
                        {service.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="font-headline text-2xl font-bold mb-4 border-b pb-2">Resources</h2>
                <ul className="space-y-2">
                  {resourceLinks.map((link) => (
                    <li key={link.path}>
                      <Link href={link.path} className="text-muted-foreground hover:text-primary transition-colors">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="font-headline text-2xl font-bold mb-4 border-b pb-2">Latest Blog Posts</h2>
                <ul className="space-y-2">
                  {blogPosts.slice(0, 10).map((post) => (
                    <li key={post.slug}>
                      <Link href={`/blog/${post.slug}`} className="text-muted-foreground hover:text-primary transition-colors">
                        {post.title}
                      </Link>
                    </li>
                  ))}
                  {blogPosts.length > 10 && (
                    <li>
                      <Link href="/blog" className="text-sm font-semibold text-primary hover:underline transition-colors mt-2 block">
                        View all posts &rarr;
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
