
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, Target, Users, Shield, HeartHandshake, Handshake, Lock, Lightbulb, CheckCircle } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from '@/lib/placeholder-images';
import React from 'react';

const whyChooseUsItems = [
  {
    id: "why-choose-us-1",
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Expert Team",
    description: "Our team consists of certified cybersecurity experts with years of experience in protecting businesses of all sizes from evolving threats.",
    imageHint: "team collaboration"
  },
  {
    id: "why-choose-us-2",
    icon: <Shield className="h-8 w-8 text-primary" />,
    title: "Proactive Approach",
    description: "We don't just react to threats; we proactively identify and neutralize them before they can impact your business, ensuring maximum uptime and security.",
    imageHint: "security shield"
  },
  {
    id: "why-choose-us-3",
    icon: <HeartHandshake className="h-8 w-8 text-primary" />,
    title: "Client-Centric Solutions",
    description: "We understand that every business is unique. We provide tailored security solutions that align with your specific needs, budget, and goals.",
    imageHint: "customer handshake"
  }
];

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1 py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-in fade-in slide-in-from-top-16 duration-700">
            <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Our Vision & Mission
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-muted-foreground">
              We are driven by a clear purpose: to secure the digital world and empower businesses to innovate with confidence.
            </p>
          </div>
          <div className="mt-20 grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-16">
            <Card className="flex flex-col items-center text-center p-8 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <CardHeader className="items-center">
                <div className="rounded-full bg-primary/10 p-5">
                  <Eye className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="mt-6 font-headline text-2xl sm:text-3xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent className="mt-4 w-full">
                <ul className="space-y-4 text-left text-base sm:text-lg text-muted-foreground">
                  <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <span>Our goal is to keep every family, person, and business safe from online scams and cyberattacks.</span>
                  </li>
                  <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <span>Cybersecurity solutions accessible to all businesses.</span>
                  </li>
                  <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <span>Embedding cybersecurity into everyday business practices.</span>
                  </li>
                  <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <span>Staying ahead with continuous security innovation.</span>
                  </li>
                  <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <span>Creating global impact with stronger cybersecurity.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="flex flex-col items-center text-center p-8 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-400 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <CardHeader className="items-center">
                <div className="rounded-full bg-accent/10 p-5">
                  <Target className="h-10 w-10 text-accent" />
                </div>
                <CardTitle className="mt-6 font-headline text-2xl sm:text-3xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="mt-4 w-full">
                 <ul className="space-y-4 text-left text-base sm:text-lg text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <span>Protecting business data, reputation, and customer trust.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <span>Educating businesses to spot and prevent security threats.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <span>Innovating to keep clients safe from cyber risks.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <span>Collaborating with clients as trusted cybersecurity partners.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-20 pt-20 border-t">
            <div className="text-center animate-in fade-in slide-in-from-top-16 duration-700">
              <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Why Choose Us?
              </h2>
              <p className="mt-6 max-w-3xl mx-auto text-base sm:text-lg text-muted-foreground">
                Our commitment to excellence and our client-first approach sets us apart.
              </p>
            </div>
            <div className="mt-24 space-y-24">
              {whyChooseUsItems.map((item, index) => {
                const image = PlaceHolderImages.find(img => img.id === item.id);
                const isEven = index % 2 === 0;
                return (
                  <div key={item.id} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className={`md:order-${isEven ? 1 : 2} animate-in fade-in ${isEven ? 'slide-in-from-left-16' : 'slide-in-from-right-16'} duration-1000`}>
                      {image && (
                        <Image
                          src={image.imageUrl}
                          alt={item.title}
                          width={800}
                          height={600}
                          className="rounded-lg shadow-xl"
                          data-ai-hint={item.imageHint}
                        />
                      )}
                    </div>
                    <div className={`md:order-${isEven ? 2 : 1} animate-in fade-in ${isEven ? 'slide-in-from-right-16' : 'slide-in-from-left-16'} duration-1000`}>
                      <div className="w-fit rounded-full bg-primary/10 p-4">
                        {React.cloneElement(item.icon, { className: 'h-8 w-8 text-primary' })}
                      </div>
                      <h3 className="mt-4 font-headline text-3xl font-bold">{item.title}</h3>
                      <p className="mt-4 text-lg text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-20 pt-20 border-t">
            <div className="text-center animate-in fade-in slide-in-from-top-16 duration-700">
              <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Our Core Values
              </h2>
              <p className="mt-6 max-w-3xl mx-auto text-base sm:text-lg text-muted-foreground">
                The principles that guide our work and our relationships.
              </p>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <Card className="text-center p-8 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <CardHeader className="items-center">
                  <div className="rounded-full bg-primary/10 p-4">
                    <Handshake className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="mt-4 font-headline text-2xl">Trust</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We build trust with transparent processes and proven cybersecurity practices.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center p-8 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-400 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <CardHeader className="items-center">
                  <div className="rounded-full bg-primary/10 p-4">
                    <Lock className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="mt-4 font-headline text-2xl">Security First</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We make security the foundation of every project and service we deliver.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center p-8 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-600 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <CardHeader className="items-center">
                  <div className="rounded-full bg-primary/10 p-4">
                    <Lightbulb className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="mt-4 font-headline text-2xl">Innovation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We constantly update our cybersecurity practices to protect businesses from new and evolving threats.
                  </p>
                </CardContent>
              </Card>
               <Card className="text-center p-8 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-800 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <CardHeader className="items-center">
                  <div className="rounded-full bg-primary/10 p-4">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="mt-4 font-headline text-2xl">Collaboration</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We partner with our clients to solve their cybersecurity challenges and keep their systems safe.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
