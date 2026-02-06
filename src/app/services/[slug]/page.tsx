'use client';

import { useParams } from 'next/navigation';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { services, Service } from '@/lib/services';
import { Button } from '@/components/ui/button';
import { MessageSquare, CheckCircle, ArrowRight, Star, Globe, Smartphone, Shield, Zap, Code, Database, Cloud, Search, Layout, Cpu } from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import React, { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

const internTestimonials = [
  {
    id: "intern-testimonial-1",
    name: "Sanika Shriram",
    title: "Ethical Hacking Intern",
    quote: "My internship at StarInfoSec was a great learning experience. I gained hands-on knowledge of ethical hacking tools such as Nmap, Wireshark, and Metasploit, which helped strengthen my technical skills and understanding of cybersecurity. The guidance and practical tasks made this internship both informative and career-focused. ",
    avatarId: "avatar-1"
  },
  {
    id: "intern-testimonial-2",
    name: "Jordan Smith",
    title: "Security Analyst Intern, Fall 2023",
    quote: "This program is a must for anyone serious about a career in cybersecurity. The blend of structured courses and practical internship experience is perfect for building a strong foundation. Highly recommend!",
    avatarId: "avatar-2"
  },
  {
    id: "intern-testimonial-3",
    name: "Alex Ray",
    title: "Web Development Intern",
    quote: "Working on real-world web applications with a focus on security was eye-opening. The mentors at StarInfoSec pushed me to write cleaner, more secure code. I feel much more confident in my full-stack abilities now.",
    avatarId: "avatar-3"
  }
];

const internshipDomains = [
  {
      id: "ethical-hacking",
      title: "Ethical Hacking Internship",
      icon: <Zap className="h-6 w-6" />,
      image: "/ethical-hacking.png",
      description: "Advanced red teaming techniques and offensive security strategies.",
      details: "Master the art of ethical hacking. Learn custom exploit development, social engineering simulations, and advanced persistence techniques used by top security professionals.",
      whatsappMsg: "Hello StarInfoSec, I'm interested in the Ethical Hacking Internship."
  },
  {
      id: "web-dev",
      title: "Web Development Internship",
      icon: <Globe className="h-6 w-6" />,
      image: "/web-development.png",
      description: "Build secure, scalable, and modern web applications from scratch.",
      details: "Focus on Full-Stack development with a security-first mindset. Learn Next.js, React, and how to protect applications against the OWASP Top 10 vulnerabilities.",
      whatsappMsg: "Hello StarInfoSec, I'm interested in the Web Development Internship."
  },
  {
      id: "python-dev",
      title: "Python Development Internship",
      icon: <Code className="h-6 w-6" />,
      image: "/python.png",
      description: "Master Python for automation, security scripting, and backend systems.",
      details: "Learn Python from basics to advanced. Focus on writing clean code, building automation tools for security, and developing robust backend APIs.",
      whatsappMsg: "Hello StarInfoSec, I'm interested in the Python Development Internship."
  },
  {
      id: "ml-ds",
      title: "ML & DS Internship",
      icon: <Cpu className="h-6 w-6" />,
      image: "/ml-ds.png",
      description: "Explore Machine Learning and Data Science to solve complex problems.",
      details: "Deep dive into data analysis, visualization, and building predictive models. Understand how AI can be used to detect and prevent cyber threats.",
      whatsappMsg: "Hello StarInfoSec, I'm interested in the ML & DS Internship."
  },
  {
      id: "java-dev",
      title: "Java Development Internship",
      icon: <Database className="h-6 w-6" />,
      image: "/java.png",
      description: "Enterprise-level application development using the Java ecosystem.",
      details: "Learn robust software engineering principles using Java. Cover Spring Boot, Microservices, and secure enterprise architecture.",
      whatsappMsg: "Hello StarInfoSec, I'm interested in the Java Development Internship."
  },
  /*{
      id: "cloud-sec",
      title: "Cloud Security",
      icon: <Cloud className="h-6 w-6" />,
      image: "/cloud-security.png",
      description: "Secure cloud infrastructure on AWS, Azure, and Google Cloud.",
      details: "Understand identity management, data encryption, and network security in a cloud-native environment. Learn to defend modern cloud architectures.",
      whatsappMsg: "Hello StarInfoSec, I'm interested in the Cloud Security Internship."
  },
  {
      id: "digital-forensics",
      title: "Digital Forensics",
      icon: <Search className="h-6 w-6" />,
      image: "/forensics.png",
      description: "Learn to investigate cyber crimes and recover critical evidence.",
      details: "Master the tools and techniques for incident response and digital evidence recovery. Learn to analyze file systems, memory, and network logs.",
      whatsappMsg: "Hello StarInfoSec, I'm interested in the Digital Forensics Internship."
  },
  {
      id: "network-sec",
      title: "Network Security",
      icon: <Shield className="h-6 w-6" />,
      image: "/network-security.png",
      description: "Master the art of securing corporate networks and firewalls.",
      details: "Learn to design and maintain secure network architectures. Includes VPNs, IDS/IPS configuration, and deep packet inspection.",
      whatsappMsg: "Hello StarInfoSec, I'm interested in the Network Security Internship."
  },
  {
      id: "app-sec",
      title: "Android/iOS Security",
      icon: <Smartphone className="h-6 w-6" />,
      image: "/mobile-security.png",
      description: "Secure mobile applications against reverse engineering.",
      details: "Deep dive into mobile app vulnerabilities. Learn to secure data storage, handle transit encryption, and prevent unauthorized access on mobile platforms.",
      whatsappMsg: "Hello StarInfoSec, I'm interested in the Mobile App Security Internship."
  },
  {
      id: "ui-ux",
      title: "UI/UX Design",
      icon: <Layout className="h-6 w-6" />,
      image: "/ui-ux.png",
      description: "Create beautiful, user-centric, and secure interfaces.",
      details: "Learn modern design principles using Figma. Focus on creating accessible, high-conversion, and trustworthy user experiences.",
      whatsappMsg: "Hello StarInfoSec, I'm interested in the UI/UX Design Internship."
  }
  // Additional domains can be added here */
];

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params.slug;
  const service = services.find((s: Service) => s.slug === slug);
  const [selectedDomain, setSelectedDomain] = useState<typeof internshipDomains[0] | null>(null);

  if (!service) {
    return (
      <div className="flex min-h-screen flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold">Service not found</h1>
            <p className="mt-4 text-muted-foreground">The service you are looking for does not exist.</p>
            <Button asChild className="mt-8">
              <Link href="/services">
                Back to Services
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const image = PlaceHolderImages.find(img => img.id === service.imageId);

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              <div className="lg:col-span-3">
                <div className="animate-in fade-in slide-in-from-left-16 duration-700">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-primary/10 p-4">
                      {React.cloneElement(service.icon, { className: 'h-10 w-10 text-primary' })}
                    </div>
                    <h1 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                      {service.title}
                    </h1>
                  </div>
                  <p className="mt-8 text-base sm:text-lg text-muted-foreground">
                    {service.details}
                  </p>
                </div>

                <div className="mt-12 animate-in fade-in slide-in-from-bottom-16 duration-700 delay-200">
                    <h2 className="font-headline text-2xl sm:text-3xl font-bold">Key Program Highlights</h2>
                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {service.points.map((point, index) => (
                            <Card key={index} className="bg-muted/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:bg-muted/60">
                                <CardContent className="p-6 flex items-center gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent flex-shrink-0" />
                                    <span className="font-medium text-sm sm:text-base">{point}</span>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
              </div>
              <div className="lg:col-span-2">
                 {image && (
                    <div className="relative h-80 w-full lg:h-full rounded-lg overflow-hidden shadow-lg animate-in fade-in zoom-in-95 duration-700 delay-400">
                        <Image
                        src={image.imageUrl}
                        alt={service.title}
                        fill
                        className="object-cover"
                        priority
                        />
                    </div>
                 )}
              </div>
            </div>

            {service.slug === 'internship-courses' && (
              <div className="mt-20 pt-20 border-t">
                <div className="text-center mb-16 animate-in fade-in slide-in-from-top-12 duration-700">
                    <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                        Select Your Specialized Domain
                    </h2>
                    <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                        Pick a track that aligns with your career goals. We offer hands-on training and real project experience in each of these specialized fields.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {internshipDomains.map((domain, index) => (
                        <Card 
                            key={domain.id} 
                            className={cn(
                                "cursor-pointer group overflow-hidden transition-all duration-300 hover:border-primary flex flex-col",
                                selectedDomain?.id === domain.id ? "ring-2 ring-primary border-primary" : "border-border"
                            )}
                            onClick={() => setSelectedDomain(domain)}
                            style={{ animationDelay: `${index * 50}ms` }}
                        >
                            <div className="relative h-44 w-full overflow-hidden bg-muted">
                                <Image 
                                    src={domain.image} 
                                    alt={domain.title} 
                                    fill 
                                    className="object-cover transition-transform group-hover:scale-110"
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        target.src = `https://picsum.photos/seed/${domain.id}/400/300`;
                                    }}
                                />
                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <p className="text-white font-semibold">View Details</p>
                                </div>
                            </div>
                            <CardHeader className="p-4 flex-1">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                                        {domain.icon}
                                    </div>
                                    <CardTitle className="text-base sm:text-lg leading-tight">{domain.title}</CardTitle>
                                </div>
                                <CardDescription className="mt-2 line-clamp-2">
                                    {domain.description}
                                </CardDescription>
                            </CardHeader>
                            <CardFooter className="p-4 pt-0">
                                <Button 
                                    asChild 
                                    size="sm" 
                                    variant="outline" 
                                    className="w-full bg-green-600/10 hover:bg-green-600 hover:text-white border-green-600/20 text-green-700 dark:text-green-400 font-semibold"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <Link 
                                        href={`https://wa.me/918669361239?text=${encodeURIComponent(domain.whatsappMsg)}`}
                                        target="_blank"
                                    >
                                        <MessageSquare className="mr-2 h-4 w-4" />
                                        WhatsApp Enquiry
                                    </Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>

                {selectedDomain && (
                    <div className="mt-12 animate-in fade-in slide-in-from-bottom-12 duration-500">
                        <Card className="bg-primary/5 border-primary/20 shadow-2xl">
                            <CardContent className="p-8">
                                <div className="flex flex-col md:flex-row gap-8 items-center">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="p-3 rounded-xl bg-primary text-white">
                                                {selectedDomain.icon}
                                            </div>
                                            <h3 className="font-headline text-2xl font-bold">{selectedDomain.title}</h3>
                                        </div>
                                        <p className="text-lg text-muted-foreground mb-6">
                                            {selectedDomain.details}
                                        </p>
                                        <div className="flex flex-wrap gap-4">
                                            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white font-bold shadow-lg">
                                                <Link 
                                                    href={`https://wa.me/918669361239?text=${encodeURIComponent(selectedDomain.whatsappMsg)}`}
                                                    target="_blank"
                                                >
                                                    <MessageSquare className="mr-2 h-5 w-5" />
                                                    Enquire via WhatsApp
                                                </Link>
                                            </Button>
                                            <Button asChild variant="outline" size="lg" className="font-semibold">
                                                <Link href="/contact">Application Form</Link>
                                            </Button>
                                        </div>
                                    </div>
                                    <div className="relative h-64 w-full md:w-80 rounded-xl overflow-hidden shadow-xl border-4 border-white/10 hidden md:block">
                                        <Image 
                                            src={selectedDomain.image} 
                                            alt={selectedDomain.title} 
                                            fill 
                                            className="object-cover"
                                            onError={(e) => {
                                                const target = e.target as HTMLImageElement;
                                                target.src = `https://picsum.photos/seed/${selectedDomain.id}-detail/400/300`;
                                            }}
                                        />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                )}

                <div className="mt-20 pt-20 border-t">
                  <div className="text-center animate-in fade-in slide-in-from-top-16 duration-700">
                    <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                      What Our Interns Say
                    </h2>
                    <p className="mt-6 max-w-3xl mx-auto text-base sm:text-lg text-muted-foreground">
                      Hear from students who have completed our program and transitioned into the tech industry.
                    </p>
                  </div>
                  <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {internTestimonials.map((testimonial, index) => {
                      const avatarImage = PlaceHolderImages.find(img => img.id === testimonial.avatarId);
                      return (
                        <Card key={testimonial.id} className="animate-in fade-in slide-in-from-bottom-8 duration-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 flex flex-col" style={{ animationDelay: `${index * 200}ms` }}>
                          <CardContent className="p-8 flex-1">
                            <div className="flex items-center gap-1 text-yellow-500 mb-4">
                              {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
                            </div>
                            <blockquote className="text-base sm:text-lg text-foreground italic">
                              "{testimonial.quote}"
                            </blockquote>
                            <div className="mt-6 flex items-center gap-4">
                              <Avatar>
                                {avatarImage ? (
                                  <AvatarImage src={avatarImage.imageUrl} alt={testimonial.name} />
                                ) : (
                                  <AvatarImage src={`https://picsum.photos/seed/${testimonial.id}/100/100`} />
                                )}
                                <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                              </Avatar>
                              <div>
                                <p className="font-semibold text-foreground">{testimonial.name}</p>
                                <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {service.slug !== 'internship-courses' && (
                <div className="mt-20 text-center animate-in fade-in slide-in-from-bottom-16 duration-700 delay-500">
                    <h3 className="font-headline text-xl sm:text-2xl font-bold">Ready to enhance your security?</h3>
                    <p className="mt-2 text-sm sm:text-base text-muted-foreground">Contact us today to get started with our expert team.</p>
                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white font-bold shadow-lg">
                            <Link href="https://wa.me/918669361239" target="_blank" rel="noopener noreferrer">
                                <MessageSquare className="mr-2 h-5 w-5" />
                                WhatsApp Us
                            </Link>
                        </Button>
                        <Button asChild size="lg" variant="outline" className="font-semibold">
                            <Link href="/contact">
                                Contact Now
                            </Link>
                        </Button>
                    </div>
                </div>
            )}

          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

