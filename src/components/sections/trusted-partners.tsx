import { LogoCloud } from "@/components/ui/logo-cloud-2";

export function TrustedPartners() {
  return (
    <section className="py-20 md:py-28 bg-primary/10 dark:bg-primary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative mx-auto grid max-w-4xl">
          <div className="text-center animate-in fade-in slide-in-from-top-16 duration-700 mb-12">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Companies we{" "}
              <span className="text-primary">collaborate</span> with.
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground">
              We partner with innovative industry leaders to push the boundaries of what's possible.
            </p>
          </div>
          
          <div className="animate-in fade-in slide-in-from-bottom-16 duration-700 delay-200">
            <LogoCloud />
          </div>
        </div>
      </div>
    </section>
  );
}
