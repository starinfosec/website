import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { HeartPulse, ShoppingCart, GraduationCap, Cpu, Factory, Landmark, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { CountingNumber } from "@/components/ui/counting-number";

const industries = [
  {
    id: "healthcare",
    imageId: "industry-healthcare",
    icon: <HeartPulse className="h-8 w-8 text-primary" />,
    title: "Healthcare",
    description: "Protecting patient data and medical systems from cyber threats with HIPAA-compliant security solutions.",
    fullDescription: "The healthcare industry faces unique cybersecurity challenges, from protecting sensitive patient data to ensuring uninterrupted operation of critical medical systems. We provide comprehensive security solutions that comply with HIPAA regulations and safeguard patient information.",
    imageHint: "healthcare medical"
  },
  {
    id: "finance",
    imageId: "industry-finance",
    icon: <Landmark className="h-8 w-8 text-primary" />,
    title: "Finance & Banking",
    description: "Securing financial transactions and customer data with advanced threat protection and compliance solutions.",
    fullDescription: "Financial institutions are prime targets for cybercriminals. Our security services help banks and financial organizations protect customer assets, prevent fraud, and maintain regulatory compliance with PCI-DSS, GDPR, and other financial security standards.",
    imageHint: "finance banking"
  },
  {
    id: "ecommerce",
    imageId: "industry-ecommerce",
    icon: <ShoppingCart className="h-8 w-8 text-primary" />,
    title: "E-Commerce",
    description: "Protecting online stores and customer payment information from breaches and fraud.",
    fullDescription: "E-commerce platforms handle sensitive customer data and payment information daily. We provide robust security measures including PCI-DSS compliance, secure payment gateways, and protection against common web vulnerabilities.",
    imageHint: "ecommerce shopping"
  },
  {
    id: "education",
    imageId: "industry-education",
    icon: <GraduationCap className="h-8 w-8 text-primary" />,
    title: "Education",
    description: "Securing educational institutions and student data from online threats and breaches.",
    fullDescription: "Educational institutions store vast amounts of sensitive data, from student records to research intellectual property. We help schools, universities, and online learning platforms implement robust security frameworks.",
    imageHint: "education university"
  },
  {
    id: "technology",
    imageId: "industry-technology",
    icon: <Cpu className="h-8 w-8 text-primary" />,
    title: "Technology",
    description: "Safeguarding software, applications, and digital infrastructure for tech companies.",
    fullDescription: "Technology companies face evolving cyber threats as they develop innovative solutions. Our security services include penetration testing, code review, DevSecOps integration, and comprehensive protection for your digital products.",
    imageHint: "technology software"
  },
  {
    id: "manufacturing",
    imageId: "industry-manufacturing",
    icon: <Factory className="h-8 w-8 text-primary" />,
    title: "Manufacturing",
    description: "Protecting industrial control systems and intellectual property from cyber attacks.",
    fullDescription: "Modern manufacturing relies on connected systems and IoT devices. We help manufacturers secure their operational technology (OT) infrastructure, protect intellectual property, and ensure business continuity.",
    imageHint: "manufacturing factory"
  }
];

const stats = [
  { value: 50, suffix: "+", label: "Businesses Protected" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 20, suffix: "+", label: "Projects Secured" },
  { value: 10, suffix: "+", label: "Industries Served" }
];

export default function IndustriesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <section className="relative py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-position))] from-primary/10 via-transparent to-transparent opacity-50" />
          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center animate-in fade-in slide-in-from-top-16 duration-700">
              <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Industries We Serve
              </h1>
              <p className="mt-6 max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-muted-foreground">
                Delivering comprehensive cybersecurity solutions tailored to the unique needs of diverse industries.
              </p>
            </div>
            
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
              {stats.map((stat, index) => (
                <div key={stat.label} className="text-center" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="text-3xl sm:text-4xl font-bold font-headline text-primary">
                    <CountingNumber value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm sm:text-base text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-in fade-in slide-in-from-top-16 duration-700">
              <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Our Industry Expertise
              </h2>
              <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                We understand that each industry has unique security challenges. Our team delivers tailored solutions.
              </p>
            </div>
            
            <div className="space-y-24">
              {industries.map((industry, index) => {
                const isEven = index % 2 === 0;
                const image = PlaceHolderImages.find(img => img.id === industry.imageId);
                return (
                  <div key={industry.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center`}>
                    <div className={`animate-in fade-in ${isEven ? 'slide-in-from-left-16' : 'slide-in-from-right-16'} duration-1000`}>
                      <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl group">
                        {image && (
                          <Image
                            src={image.imageUrl}
                            alt={industry.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            data-ai-hint={industry.imageHint}
                          />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </div>
                    <div className={`animate-in fade-in ${isEven ? 'slide-in-from-right-16' : 'slide-in-from-left-16'} duration-1000`}>
                      <div className="w-fit rounded-full bg-primary/10 p-4">
                        {industry.icon}
                      </div>
                      <h3 className="mt-6 font-headline text-3xl font-bold">{industry.title}</h3>
                      <p className="mt-4 text-lg text-muted-foreground">
                        {industry.fullDescription}
                      </p>
                      <div className="mt-8">
                        <Button asChild>
                          <Link href="/contact">
                            Get Industry-Specific Solutions <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center animate-in fade-in slide-in-from-top-16 duration-700">
              <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Need a Custom Solution?
              </h2>
              <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                We work with businesses across all industries. Contact us to discuss your specific security needs.
              </p>
            </div>
            <div className="mt-12 flex justify-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
              <Button asChild size="lg">
                <Link href="/contact">Contact Us Today</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
