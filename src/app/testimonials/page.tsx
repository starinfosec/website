
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const testimonials = [
  {
    id: "testimonial-1",
    name: "Sarah Johnson",
    title: "CEO, Innovate Inc.",
    quote: "Working with this team was a game-changer for our business. Their expertise and dedication are unparalleled. The results exceeded all our expectations.",
    avatarId: "avatar-1"
  },
  {
    id: "testimonial-2",
    name: "Michael Chen",
    title: "CTO, Tech Solutions",
    quote: "The quality of their work is outstanding. They delivered a robust and scalable solution on time and on budget. I highly recommend them to anyone.",
    avatarId: "avatar-2"
  },
  {
    id: "testimonial-3",
    name: "Emily Rodriguez",
    title: "Marketing Director, Creative Co.",
    quote: "Their creative vision and technical skills are a rare combination. They understood our brand and translated it into a beautiful, functional product.",
    avatarId: "avatar-3"
  },
   {
    id: "testimonial-4",
    name: "David Lee",
    title: "Founder, Startup XYZ",
    quote: "As a startup, we needed a partner we could trust. They were flexible, responsive, and truly invested in our success. An amazing experience all around.",
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
