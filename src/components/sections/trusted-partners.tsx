import { Logos3 } from "@/components/ui/logos3";
import { partners } from "@/lib/partners";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function TrustedPartners() {
  const logosData = partners.map(partner => {
    const image = PlaceHolderImages.find(img => img.id === partner.id);
    return {
      id: partner.id,
      description: partner.name,
      image: image?.imageUrl || "https://svgl.app/library/github_wordmark_light.svg",
      className: "h-16 md:h-24 lg:h-32 w-auto object-contain dark:brightness-0 dark:invert",
    };
  });

  return (
    <section className="py-20 md:py-28 bg-primary/10 dark:bg-primary/20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="relative mx-auto max-w-4xl text-center animate-in fade-in slide-in-from-top-16 duration-700">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Companies we{" "}
            <span className="text-primary">collaborate</span> with.
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground">
            We partner with innovative industry leaders to push the boundaries of what's possible.
          </p>
        </div>
      </div>
          
      <div className="w-full animate-in fade-in slide-in-from-bottom-16 duration-700 delay-200">
        <Logos3 logos={logosData} />
      </div>
    </section>
  );
}
