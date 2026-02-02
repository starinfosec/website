'use client';

import { useParams } from 'next/navigation';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { services, Service } from '@/lib/services';
import { Button } from '@/components/ui/button';
import { MessageSquare, CheckCircle, ArrowRight, Star } from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
    id: "intern-testimonial-2",
    name: "Jordan Smith",
    title: "Security Analyst Intern, Fall 2023",
    quote: "This program is a must for anyone serious about a career in cybersecurity. The blend of structured courses and practical internship experience is perfect for building a strong foundation. Highly recommend!",
    avatarId: "avatar-2"
  }
];


export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params.slug;
  const service = services.find((s: Service) => s.slug === slug);

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
                    <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                      {service.title}
                    </h1>
                  </div>
                  <p className="mt-8 text-base sm:text-lg text-muted-foreground">
                    {service.details}
                  </p>
                </div>

                <div className="mt-12 animate-in fade-in slide-in-from-bottom-16 duration-700 delay-200">
                    <h2 className="font-headline text-2xl sm:text-3xl font-bold">Key Features</h2>
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
                        />
                    </div>
                 )}
              </div>
            </div>

            {service.slug === 'internship-courses' && (
              <>
                <div className="mt-20 pt-20 border-t">
                  <div className="text-center animate-in fade-in slide-in-from-top-16 duration-700">
                    <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                      What Our Interns Say
                    </h2>
                    <p className="mt-6 max-w-3xl mx-auto text-base sm:text-lg text-muted-foreground">
                      Hear from students who have completed our program.
                    </p>
                  </div>
                  <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
                    {internTestimonials.map((testimonial, index) => {
                      const avatarImage = PlaceHolderImages.find(img => img.id === testimonial.avatarId);
                      return (
                        <Card key={testimonial.id} className="animate-in fade-in slide-in-from-bottom-8 duration-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-2" style={{ animationDelay: `${index * 200}ms` }}>
                          <CardContent className="p-8">
                            <div className="flex items-center gap-1 text-yellow-500 mb-4">
                              {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
                            </div>
                            <blockquote className="text-base sm:text-lg text-foreground italic">
                              "{testimonial.quote}"
                            </blockquote>
                            <div className="mt-6 flex items-center gap-4">
                              {avatarImage && (
                                <Avatar>
                                  <AvatarImage src={avatarImage.imageUrl} alt={testimonial.name} />
                                  <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                                </Avatar>
                              )}
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

                <div className="mt-20 text-center animate-in fade-in slide-in-from-bottom-16 duration-700 delay-500">
                  <h3 className="font-headline text-xl sm:text-2xl font-bold">Ready to Launch Your Career?</h3>
                  <p className="mt-2 text-sm sm:text-base text-muted-foreground">Apply for our internship program today.</p>
                  <Button asChild size="lg" className="mt-6">
                    <Link href="/contact">
                      Apply Now
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </>
            )}

            {service.slug !== 'internship-courses' && (
                <div className="mt-20 text-center animate-in fade-in slide-in-from-bottom-16 duration-700 delay-500">
                    <h3 className="font-headline text-xl sm:text-2xl font-bold">Ready to enhance your security?</h3>
                    <p className="mt-2 text-sm sm:text-base text-muted-foreground">Contact us today to get started.</p>
                    <Button asChild size="lg" className="mt-6">
                        <Link href="https://wa.me/918669361239" target="_blank" rel="noopener noreferrer">
                            <MessageSquare className="mr-2 h-5 w-5" />
                            Contact Now
                        </Link>
                    </Button>
                </div>
            )}

          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
