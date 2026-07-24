
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const caseStudies = [
  {
    id: "case-study-1",
    title: "Preventing a Ransomware Attack at a Financial Firm",
    excerpt: "How our proactive approach and employee training stopped a potentially devastating ransomware attack in its tracks.",
    slug: "preventing-ransomware-financial-firm"
  },
  {
    id: "case-study-2",
    title: "Securing a Healthcare Provider's Patient Data",
    excerpt: "A deep dive into how we hardened a healthcare provider's infrastructure to protect sensitive patient information and ensure HIPAA compliance.",
    slug: "securing-healthcare-data"
  },
  {
    id: "case-study-3",
    title: "E-commerce Breach Recovery and Fortification",
    excerpt: "After a breach, a growing e-commerce brand partnered with us to recover, rebuild trust, and implement a robust security strategy.",
    slug: "ecommerce-breach-recovery"
  },
  {
    id: "case-study-4",
    title: "Empowering Development Teams with Hands-On Workshops",
    excerpt: "Discover how our interactive cybersecurity workshops transformed a SaaS company's engineering team, drastically reducing vulnerabilities in their code.",
    slug: "empowering-dev-teams-workshops"
  },
  {
    id: "case-study-5",
    title: "Cultivating Next-Gen Talent via Internship Programs",
    excerpt: "An inside look at our robust Internship + Courses program and how it successfully bridged the cybersecurity skills gap for a regional enterprise.",
    slug: "cultivating-next-gen-talent"
  }
];

export default function CaseStudiesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <section className="py-20 md:py-28 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center animate-in fade-in slide-in-from-top-16 duration-700">
              <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Case Studies
              </h1>
              <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-muted-foreground">
                Real-world examples of how we've helped businesses overcome their toughest security challenges.
              </p>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {caseStudies.map((study, index) => {
                const image = PlaceHolderImages.find(img => img.id === study.id);
                return (
                  <Card key={study.id} className="group flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-8 duration-700" style={{ animationDelay: `${index * 200}ms`}}>
                    <Link href={`/case-studies/${study.slug}`} className="block">
                      <div className="relative w-full overflow-hidden">
                        {image && <Image
                          src={image.imageUrl}
                          alt={study.title}
                          width={0}
                          height={0}
                          sizes="100vw"
                          style={{ width: '100%', height: 'auto' }}
                          className="transition-transform duration-300 group-hover:scale-105"
                        />}
                      </div>
                    </Link>
                    <CardContent className="flex flex-1 flex-col p-6">
                      <h3 className="font-headline text-xl font-semibold">
                        <Link href={`/case-studies/${study.slug}`}>{study.title}</Link>
                      </h3>
                      <p className="mt-3 text-muted-foreground flex-1">{study.excerpt}</p>
                      <Link href={`/case-studies/${study.slug}`} className="mt-4 inline-flex items-center font-medium text-primary group-hover:underline">
                        Read Case Study
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
