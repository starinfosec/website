
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const guides = [
  {
    id: "guide-1",
    title: "SMB Cybersecurity Checklist",
    excerpt: "A step-by-step guide to securing your small or medium-sized business from common cyber threats.",
    slug: "smb-cybersecurity-checklist"
  },
  {
    id: "guide-2",
    title: "Incident Response Planning",
    excerpt: "Learn how to create an effective incident response plan to minimize damage during a security breach.",
    slug: "incident-response-planning"
  },
  {
    id: "guide-3",
    title: "Secure Remote Work Guide",
    excerpt: "Best practices for ensuring your remote and hybrid workforce stays secure and productive.",
    slug: "secure-remote-work-guide"
  }
];

export default function GuidesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <section className="py-20 md:py-28 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center animate-in fade-in slide-in-from-top-16 duration-700">
              <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Security Guides
              </h1>
              <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-muted-foreground">
                Practical guides and expert advice to help you navigate the complex world of cybersecurity.
              </p>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {guides.map((guide, index) => {
                const image = PlaceHolderImages.find(img => img.id === guide.id);
                return (
                  <Card key={guide.id} className="group flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-8 duration-700" style={{ animationDelay: `${index * 200}ms`}}>
                    <Link href={`/guides/${guide.slug}`} className="block">
                      <div className="relative h-48 w-full overflow-hidden">
                        {image && <Image
                          src={image.imageUrl}
                          alt={guide.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />}
                      </div>
                    </Link>
                    <CardContent className="flex flex-1 flex-col p-6">
                      <h3 className="font-headline text-xl font-semibold">
                        <Link href={`/guides/${guide.slug}`}>{guide.title}</Link>
                      </h3>
                      <p className="mt-3 text-muted-foreground flex-1">{guide.excerpt}</p>
                      <Link href={`/guides/${guide.slug}`} className="mt-4 inline-flex items-center font-medium text-primary group-hover:underline">
                        Read Guide
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
