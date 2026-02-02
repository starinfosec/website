
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { partners } from "@/lib/partners";

export function TrustedPartners() {
  const extendedPartners = [...partners, ...partners];

  return (
    <section className="py-20 md:py-28 bg-primary/10 dark:bg-primary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-in fade-in slide-in-from-top-16 duration-700">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Trusted By Industry Leaders
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground">
            We partner with innovative companies to push the boundaries of what's possible.
          </p>
        </div>
        <div
          className="group mt-16 relative w-full overflow-hidden"
          style={{
            maskImage: "linear-gradient(to right, transparent, white 10%, white 90%, transparent)",
          }}
        >
          <div className="flex w-max animate-scroll group-hover:[animation-play-state:paused]">
            {extendedPartners.map((partner, index) => {
              const image = PlaceHolderImages.find(img => img.id === partner.id);
              return (
                <div key={index} className="flex-shrink-0 w-48 sm:w-64 h-28 sm:h-32 flex flex-col items-center justify-center p-4 mx-4">
                    <div className="relative h-10 sm:h-12 w-32 sm:w-40">
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
                    <p className="mt-4 text-center font-semibold text-muted-foreground text-sm">{partner.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
