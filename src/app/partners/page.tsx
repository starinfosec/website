
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { partners } from "@/lib/partners";

export default function PartnersPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center animate-in fade-in slide-in-from-top-16 duration-700">
              <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Our Trusted Partners
              </h1>
              <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-muted-foreground">
                We collaborate with industry leaders to deliver exceptional value and innovation.
              </p>
            </div>
            <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4">
              {partners.map((partner, index) => {
                const image = PlaceHolderImages.find(img => img.id === partner.id);
                return (
                  <div key={partner.id} className="group flex flex-col items-center justify-center p-6 bg-muted/30 rounded-lg transition-all duration-300 hover:bg-muted/60 hover:shadow-lg hover:-translate-y-2 animate-in fade-in zoom-in-95 duration-500" style={{ animationDelay: `${index * 100}ms` }}>
                    <div className="relative h-12 w-32 sm:h-16 sm:w-40">
                         {image ? (
                            <Image
                                src={image.imageUrl}
                                alt={partner.name}
                                fill
                                className="object-contain grayscale transition-all duration-300 group-hover:grayscale-0"
                            />
                         ) : (
                            <div className="h-full w-full bg-muted rounded-md" />
                         )}
                    </div>
                    <p className="mt-4 text-center font-semibold text-foreground">{partner.name}</p>
                  </div>
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
