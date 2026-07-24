import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Globe, HeartPulse, Clock, PartyPopper } from 'lucide-react';
import Link from 'next/link';

const perks = [
  {
    title: "Remote Work",
    description: "Our team is located around the world, working together collaboratively to build and support best-in-class products",
    icon: Globe,
  },
  {
    title: "Medical, Dental, Vision, 401k (with match)",
    description: "Covering the fundamentals we all need to stay happy and healthy",
    icon: HeartPulse,
  },
  {
    title: "Flexible PTO",
    description: "Take time off when you need it, without worry",
    icon: Clock,
  },
  {
    title: "Company and Team Events",
    description: "We support and bring out the best in each other. We enjoy solving tough challenges and celebrating wins together",
    icon: PartyPopper,
  },
];

export default function CareersPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1 py-20 md:py-28 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center animate-in fade-in slide-in-from-top-16 duration-700">
            <p className="text-primary font-medium tracking-wider uppercase mb-4">Careers</p>
            <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl mb-6">
              Work with Us
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-4">
              At StarInfoSec, we’re committed to our work, customers, having fun, and most importantly, to each other’s success.
            </p>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8">
              Our people are some of the brightest in the industry and we thrive on being the first to solve problems.
            </p>
            <Button size="lg" asChild className="animate-in fade-in zoom-in-95 duration-700 delay-200">
              <Link href="#positions">See Positions</Link>
            </Button>
          </div>

          {/* Perks & Benefits Section */}
          <div className="mt-32 max-w-5xl mx-auto">
            <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
              <h2 className="font-headline text-3xl font-bold sm:text-4xl mb-4">Perks and Benefits</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Being part of a high-impact team comes with high expectations - and even higher rewards. Here’s how we take care of our people.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {perks.map((perk, index) => (
                <div 
                  key={perk.title} 
                  className="flex flex-col sm:flex-row gap-6 p-6 rounded-2xl bg-muted/30 border border-border/50 hover:bg-muted/50 transition-colors animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both"
                  style={{ animationDelay: `${400 + (index * 150)}ms` }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <perk.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{perk.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {perk.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Open Positions Placeholder */}
          <div id="positions" className="mt-32 max-w-4xl mx-auto text-center animate-in fade-in slide-in-from-bottom-8 duration-700 delay-700 fill-mode-both">
             <div className="p-12 rounded-3xl bg-primary/5 border border-primary/10">
                <h2 className="font-headline text-3xl font-bold mb-4">Open Positions</h2>
                <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                  We are always looking for talented individuals to join our team. 
                  Currently, we don't have any open roles listed, but feel free to drop us your resume!
                </p>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
             </div>
          </div>
          
        </div>
      </main>
      <Footer />
    </div>
  );
}
