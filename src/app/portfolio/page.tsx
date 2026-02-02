
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const portfolioItems = [
  {
    id: "portfolio-1",
    title: "Strategic Security Roadmap for FinTech Startup",
    description: "Developed a comprehensive security strategy and consultation for a fast-growing financial technology company, ensuring compliance and building customer trust.",
    category: "Cybersecurity Consultation"
  },
  {
    id: "portfolio-2",
    title: "Corporate Phishing Defense Program",
    description: "Implemented a company-wide security awareness training program, reducing phishing susceptibility by 90% through engaging modules and realistic simulations.",
    category: "Employee Security Training"
  },
  {
    id: "portfolio-3",
    title: "E-commerce Platform Hardening",
    description: "Conducted a full-scale security audit and hardening for a major online retailer, protecting customer data and preventing potential breaches.",
    category: "Website Security & Hardening"
  },
  {
    id: "portfolio-4",
    title: "Secure Development Workshop for Tech Firm",
    description: "Delivered hands-on secure coding and infrastructure workshops for a software development company, embedding security into their product lifecycle.",
    category: "Cybersecurity Workshops"
  },
  {
    id: "portfolio-5",
    title: "Next-Gen Cybersecurity Talent Program",
    description: "Launched a successful cybersecurity internship program, cultivating new talent and providing students with real-world experience in the security field.",
    category: "Internship + Courses"
  },
  {
    id: "portfolio-6",
    title: "Comprehensive Security for Healthcare App",
    description: "Performed end-to-end security testing and hardening for a mobile health application, ensuring HIPAA compliance and protecting sensitive patient data.",
    category: "Website Security & Hardening"
  }
];

export default function PortfolioPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center animate-in fade-in slide-in-from-top-16 duration-700">
              <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Our Work
              </h1>
              <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-muted-foreground">
                Check out some of the amazing projects we've delivered for our clients.
              </p>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {portfolioItems.map((item, index) => {
                const image = PlaceHolderImages.find(img => img.id === item.id);
                return (
                  <Card key={item.id} className="group flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-8 duration-700" style={{ animationDelay: `${index * 150}ms` }}>
                    {image && (
                      <div className="relative h-56 w-full overflow-hidden">
                        <Image
                          src={image.imageUrl}
                          alt={item.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    )}
                    <CardContent className="flex flex-1 flex-col p-6">
                      <p className="text-sm text-primary font-medium">{item.category}</p>
                      <h3 className="mt-2 font-headline text-xl font-semibold">{item.title}</h3>
                      <p className="mt-3 text-muted-foreground flex-1">{item.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
