'use client';

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
  CardContent,
} from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import React from 'react';
import { services } from '@/lib/services';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function ServiceShowcase() {
  return (
    <section id="features" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-in fade-in slide-in-from-top-16 duration-700">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Our Security Services
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground">
            A comprehensive suite of services to protect your business.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const image = PlaceHolderImages.find(img => img.id === service.imageId);
            return (
              <Card
                key={service.title}
                className="group flex h-full flex-col text-center overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-8 duration-700"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {image && (
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={image.imageUrl}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                )}
                <CardHeader className="items-center">
                   <div className="rounded-full bg-primary/10 p-4 mt-4">
                     {React.cloneElement(service.icon, { className: 'h-8 w-8 text-primary' })}
                   </div>
                  <CardTitle className="mt-4 font-headline text-xl">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
                <CardFooter className="mt-auto justify-center pt-0 pb-6">
                  <Button asChild variant="link">
                    <Link href={`/services/${service.slug}`}>
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
