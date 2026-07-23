
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const testimonials = [
  {
    id: "testimonial-1",
    name: "Rahul Sharma",
    title: "IT Director, TechNova Solutions",
    quote: "StarInfoSec transformed our corporate network security. Their Cybersecurity Consultation identified critical vulnerabilities we missed. The strategic roadmap they provided was practical and scalable.",
    avatarId: "avatar-1"
  },
  {
    id: "testimonial-2",
    name: "Priya Patel",
    title: "HR Manager, FinServe India",
    quote: "The Employee Security Awareness Training was exceptional. Our staff is now much more vigilant against phishing attacks, which has drastically reduced our internal security risks.",
    avatarId: "avatar-2"
  },
  {
    id: "testimonial-3",
    name: "Amit Desai",
    title: "Founder, E-ShopKart",
    quote: "After facing multiple DDoS attacks, we hired StarInfoSec for Website Security & Hardening. Since their intervention, our e-commerce platform has been incredibly stable and secure. Highly recommended!",
    avatarId: "avatar-3"
  },
   {
    id: "testimonial-4",
    name: "Neha Gupta",
    title: "Lead Developer, CloudSynergy",
    quote: "The Cybersecurity Workshops conducted by their experts were eye-opening for our dev team. We now integrate secure coding practices directly into our CI/CD pipelines thanks to their hands-on approach.",
    avatarId: "avatar-4"
  }
];

export default function TestimonialsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <section className="py-20 md:py-28 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center animate-in fade-in slide-in-from-top-16 duration-700">
              <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                What Our Clients Say
              </h1>
              <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-muted-foreground">
                We're proud to have partnered with amazing companies and helped them achieve their goals.
              </p>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
              {testimonials.map((testimonial, index) => {
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
        </section>
      </main>
      <Footer />
    </div>
  );
}
